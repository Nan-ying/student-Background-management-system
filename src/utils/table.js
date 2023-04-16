// 获取表格数据
export function getData(root, url, params) {
  root.service
    .get(url, { params: params || {} })
    .then((res) => {
      if (res.data.status === 200) {
        root.tableData = res.data.data;
        root.tableData.forEach((item) => {
          if (item.sex) {
            item.sex === "1" ? (item.sex_text = "男") : (item.sex_text = "女");
          }
        });
      }
    })
    .catch((err) => {
      throw err;
    });
}

// 新增和修改方法的封装
import qs from "qs";
export function changeInfo(root, method, url, data, callback) {
  data = qs.stringify(data);
  root
    .service({
      method: method,
      url: url,
      data,
    })
    .then((res) => {
      if (res.data.status === 200) {
        callback(root, url);
        root.dialogFormVisible = false;
        root.$message({ message: res.data.message, type: "success" });
        root.$refs["form"].resetFields();
      }
    })
    .catch((err) => {
      throw err;
    });
}

// 删除方法封装
export function delData(root, url, id, callback) {
  root.$alert("确认删除吗", "提示", {
    confirmButtonText: "确定",
    callback: () => {
      root.service
        .delete(`${url}/${id}`)
        .then((res) => {
          if (res.data.status === 200) {
            callback(root, url);
            root.$message({ message: res.data.message, type: "success" });
          }
        })
        .catch((err) => {
          throw err;
        });
    },
  });
}

// 作业列表获取表格数据方法封装
export function getWorkData(root, url, params, arr) {
  root.service
    .get(url, { params: params || {} })
    .then((res) => {
      if (res.data.status === 200) {
        root.tableData = res.data.data;
        root.total = res.data.total;
        // console.log(root.tableData);
        root.tableData.map((item) => {
          arr.map((aItem) => {
            item[aItem]
              ? (item[aItem + "_text"] = "是")
              : (item[aItem + "_text"] = "否");
          });
        });
        root.loading = false;
      }
    })
    .catch((err) => {
      throw err;
    });
}

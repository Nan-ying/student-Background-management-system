<template>
  <div class="student">
    <!-- 查询、重置 -->
    <el-form
      :inline="true"
      :model="formInline"
      class="demo-form-inline"
      size="small"
    >
      <el-form-item label="姓名">
        <el-input
          v-model="formInline.name"
          placeholder="请输入姓名查询"
        ></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="find">查询</el-button>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="reset">重置</el-button>
      </el-form-item>
    </el-form>
    <!-- 表格数据 -->
    <el-table :data="computeData" border style="width: 100%">
      <el-table-column prop="name" label="姓名" align="center">
      </el-table-column>
      <el-table-column prop="age" label="年龄" align="center">
      </el-table-column>
      <el-table-column prop="sex_text" label="性别" align="center">
      </el-table-column>
      <el-table-column prop="number" label="学号" align="center">
      </el-table-column>
      <el-table-column prop="class" label="班级" align="center">
      </el-table-column>
      <el-table-column prop="state_text" label="状态" align="center">
      </el-table-column>
      <el-table-column prop="address" label="地址" align="center">
      </el-table-column>
      <el-table-column prop="phone" label="手机号码" align="center">
      </el-table-column>
      <el-table-column label="操作" align="center">
        <template slot-scope="scope">
          <el-button
            type="danger"
            size="mini"
            icon="el-icon-delete"
            @click="del(scope.row)"
          ></el-button>
        </template>
      </el-table-column>
    </el-table>
    <!-- 分页 -->
    <el-pagination
      @size-change="handleSizeChange"
      @current-change="handleCurrentChange"
      :current-page="currentPage"
      :page-sizes="[5, 10, 20, 50]"
      :page-size="pageSize"
      layout="total, sizes, prev, pager, next, jumper"
      :total="total"
    >
    </el-pagination>
  </div>
</template>

<script>
import { studentsApi, studentDelApi } from "@/api/api";

export default {
  data() {
    return {
      tableData: [],
      currentPage: 1, // 当前页数
      pageSize: 10, // 每页条数
      total: 0, // 总条数
      formInline: {
        name: "",
      },
    };
  },
  computed: {
    computeData() {
      return this.tableData.slice(
        (this.currentPage - 1) * this.pageSize,
        this.currentPage * this.pageSize
      );
    },
  },
  created() {
    this.getData();
  },
  methods: {
    find() {
      // console.log(this.formInline);
      this.getData(this.formInline);
      this.handleCurrentChange(1);
    },
    reset() {
      this.formInline = {};
      this.getData(this.formInline);
    },
    handleSizeChange(val) {
      this.pageSize = val;
    },
    handleCurrentChange(val) {
      this.currentPage = val;
    },
    getData(params) {
      studentsApi(params).then((res) => {
        console.log(res);
        this.tableData = res.data.data;
        this.total = res.data.total;
        this.tableData.forEach((item) => {
          item.sex === 1 ? (item.sex_text = "男") : (item.sex_text = "女");
          if (item.state === "1") {
            item.state_text = "已入学";
          } else if (item.state === "2") {
            item.state_text = "未入学";
          } else {
            item.state_text = "休学中";
          }
        });
      });
    },
    del(row) {
      // console.log(row);
      studentDelApi(row.id).then((res) => {
        if (res.data.status === 200) {
          this.$message({ message: res.data.message, type: "success" });
          this.getData();
        }
      });
    },
  },
};
</script>

<style lang="less" scoped>
.student {
  .el-form,
  .demo-form-inline {
    text-align: left;
  }
  .el-pagination {
    margin-top: 15px;
  }
}
</style>

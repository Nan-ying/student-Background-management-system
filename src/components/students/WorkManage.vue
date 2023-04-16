<template>
  <div class="work-manage">
    <el-table :data="tableData" v-loading="loading" border style="width: 100%">
      <el-table-column prop="id" label="用户ID" align="center">
      </el-table-column>
      <el-table-column prop="userId" label="所属班级" align="center">
      </el-table-column>
      <el-table-column prop="title" label="作业名称" align="center">
      </el-table-column>
      <el-table-column prop="completed_text" label="完成情况" align="center">
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
import { getWorkData } from "@/utils/table";

export default {
  data() {
    return {
      tableData: [],
      loading: true,
      currentPage: 1,
      pageSize: 10,
      total: 0,
    };
  },
  created() {
    getWorkData(
      this,
      "/works",
      { page: this.currentPage, size: this.pageSize },
      ["completed"]
    );
  },
  methods: {
    handleSizeChange(val) {
      this.pageSize = val;
      getWorkData(this, "/works", { page: this.currentPage, size: val }, [
        "completed",
      ]);
    },
    handleCurrentChange(val) {
      this.currentPage = val;
      getWorkData(this, "/works", { page: val, size: this.pageSize }, [
        "completed",
      ]);
    },
  },
};
</script>

<style lang="less" scoped>
.work-manage {
  .el-pagination {
    margin-top: 15px;
  }
}
</style>

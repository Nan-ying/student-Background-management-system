<template>
  <div class="work">
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
    <Pageing :total="total" :url="url" />
  </div>
</template>

<script>
import Pageing from "@/components/common/Pageing.vue";

export default {
  components: {
    Pageing,
  },
  data() {
    return {
      tableData: [],
      loading: true,
      total: 0,
      url: "/works",
    };
  },
};
</script>

<style lang="less" scoped>
.work {
  .el-pagination {
    margin-top: 15px;
  }
}
</style>

<template>
  <div class="pageing">
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
  props: {
    total: Number,
    url: String,
  },
  data() {
    return {
      currentPage: 1,
      pageSize: 10,
    };
  },
  created() {
    getWorkData(
      this.$parent,
      this.url,
      { page: this.currentPage, size: this.pageSize },
      ["completed"]
    );
  },
  methods: {
    handleSizeChange(val) {
      this.pageSize = val;
      this.currentPage = 1;
      getWorkData(
        this.$parent,
        this.url,
        { page: this.currentPage, size: this.pageSize },
        ["completed"]
      );
    },
    handleCurrentChange(val) {
      this.currentPage = val;
      getWorkData(
        this.$parent,
        this.url,
        { page: this.currentPage, size: this.pageSize },
        ["completed"]
      );
    },
  },
};
</script>

<style lang="less" scoped></style>

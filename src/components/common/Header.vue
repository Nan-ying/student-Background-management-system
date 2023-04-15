<template>
  <div class="header">
    <el-header>
      <div class="title">后台管理系统</div>
      <div>{{ name }}</div>
    </el-header>
  </div>
</template>

<script>
import { getToken } from "@/utils/setToken";

export default {
  data() {
    return {
      name: "",
    };
  },
  created() {
    this.name = getToken("username");
  },
};
</script>

<style lang="less" scoped>
.header {
  width: 100%;
  background-color: #409eff;

  .el-header {
    display: flex;
    justify-content: space-between;
    line-height: 60px;
    color: #fff;

    .title {
      width: 200px;
      font-size: 24px;
    }
  }
}
</style>

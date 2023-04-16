<template>
  <div class="user">
    <el-tree
      :data="menus"
      show-checkbox
      node-key="id"
      :default-expand-all="true"
      :props="defaultProps"
      ref="tree"
    >
    </el-tree>
    <el-button @click="getCheckedNodes">设置权限</el-button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      menus: [],
      defaultProps: {
        children: "children",
        label: "name",
      },
    };
  },
  created() {
    const routeArr = this.$router.options.routes;
    this.menus = routeArr.slice(3, routeArr.length);
    // console.log(this.$router.options.routes);
  },
  methods: {
    getCheckedNodes() {
      let arr = this.$refs.tree.getCheckedNodes(true);
      console.log(arr);
    },
  },
};
</script>

<style lang="less" scoped></style>

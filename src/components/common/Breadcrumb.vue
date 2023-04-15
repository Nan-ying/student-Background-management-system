<template>
  <div class="bread">
    <el-card>
      <el-breadcrumb separator-class="el-icon-arrow-right">
        <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
        <el-breadcrumb-item
          v-for="(item, index) in $route.matched"
          :key="index"
        >
          {{ item.name }}
        </el-breadcrumb-item>
      </el-breadcrumb>
    </el-card>
  </div>
</template>

<script></script>

<style lang="less" scoped></style>

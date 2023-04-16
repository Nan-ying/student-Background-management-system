<template>
  <div class="map-view">
    <div id="main"></div>
  </div>
</template>

<script>
import geoJson from "@/assets/data.json";

export default {
  data() {
    return {};
  },
  mounted() {
    let myChart = this.$echarts.init(document.getElementById("main"));
    this.$echarts.registerMap("china", geoJson); //注册地图
    // 需包含geo组件或map图表类型两种方式中的任意一种
    let option = {
      // geo: {
      //   map: "china",
      //   aspectScale: 0.75,
      //   zoom: 1.1,
      //   regions: [
      //     {
      //       name: "南海诸岛",
      //     },
      //   ],
      // },
      series: [
        {
          type: "map",
          map: "china",
          aspectScale: 0.75,
          zoom: 1.1,
        },
      ],
      backgroundColor: "rgb(121, 145, 209)",
    };
    myChart.setOption(option);
  },
};
</script>

<style lang="less" scoped>
.map-view {
  width: 100%;
  #main {
    width: 100%;
    height: 500px;
  }
}
</style>

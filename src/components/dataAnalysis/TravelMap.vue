<template>
  <div class="travel-map">
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
    this.$echarts.registerMap("china", geoJson); //注册地图, 需包含geo组件或map图表类型
    let option = {
      backgroundColor: "rgb(121, 145, 209)",
      // 用于地图的绘制，支持在地理坐标系上绘制散点图，线集
      geo: {
        map: "china",
        aspectScale: 0.75,
        zoom: 1.1,
        regions: [
          {
            name: "南海诸岛",
          },
        ],
        itemStyle: {
          shadowColor: "rgb(58, 115, 192)",
          shadowOffsetX: 10,
          shadowOffsetY: 11,
        },
      },
      series: [
        {
          type: "map",
          map: "china",
          aspectScale: 0.75,
          zoom: 1.1,
          label: {
            normal: {
              show: true,
              textStyle: {
                color: "rgb(154, 225, 255)",
              },
            },
            emphasis: {
              textStyle: {
                color: "rgb(31, 54, 150)",
              },
            },
          },
          itemStyle: {
            normal: {
              backgroundColor: "rgb(147, 235, 248)",
              borderWidth: 1,
              areaColor: {
                type: "radial",
                x: 0.5,
                y: 0.5,
                r: 0.8,
                colorStops: [
                  {
                    offset: 0,
                    color: "rgb(31, 54, 150)", // 0%处颜色
                  },
                  {
                    offset: 1,
                    color: "rgb(89, 128, 142)", // 100%处颜色
                  },
                ],
                globalCoord: true,
              },
            },
            emphasis: {
              areaColor: "rgb(154, 225, 255)",
              borderWidth: 0.1,
            },
          },
        },
      ],
    };
    myChart.setOption(option);
  },
};
</script>

<style lang="less" scoped>
.travel-map {
  width: 100%;
  #main {
    width: 100%;
    height: 500px;
  }
}
</style>

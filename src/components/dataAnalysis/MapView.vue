<template>
  <div class="map-view">
    <div id="main"></div>
  </div>
</template>

<script>
import geoJson from "@/assets/data.json";
import { mapViewApi } from "@/api/api";

export default {
  data() {
    return {};
  },
  created() {
    mapViewApi().then((res) => {
      if (res.data.status === 200) {
        let { points, linesData } = res.data.data;
        this.draw(points, linesData);
      }
    });
  },
  methods: {
    draw(points, linesData) {
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
          // 配置地图底图
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
          // 配置地图中的散点图
          {
            type: "effectScatter",
            zlevel: 1,
            coordinateSystem: "geo", // geo地图坐标系
            showEffectOn: "render", // 绘制完成后显示特效
            symbolSize: 10, // 散点大小
            data: points,
            rippleEffect: {
              period: 15,
              scale: 4,
              brushType: "fill",
            },
          },
          // 配置地图中的线图
          {
            type: "lines",
            zlevel: 2,
            data: linesData,
            effect: {
              show: true,
              period: 4,
              symbol: "arrow",
              symbolSize: 7,
              trailLength: 0.4,
            },
            lineStyle: {
              color: "#1DE9B6",
              width: 1,
              opacity: 0.1,
              curveness: 0.5,
            },
          },
        ],
      };
      myChart.setOption(option);
    },
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

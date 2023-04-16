<template>
  <div class="data-view">
    <el-card>
      <div id="main1"></div>
    </el-card>
    <el-card>
      <div id="main2"></div>
    </el-card>
  </div>
</template>

<script>
import { dataViewApi } from "@/api/api";

export default {
  data() {
    return {};
  },
  created() {
    dataViewApi()
      .then((res) => {
        if (res.data.status === 200) {
          // console.log(res.data);
          this.draw(
            res.data.data.legend,
            res.data.data.xAxis,
            res.data.data.series
          );
        }
      })
      .catch((err) => {
        throw err;
      });
  },
  mounted() {
    let myChart = this.$echarts.init(document.getElementById("main1"));
    myChart.setOption({
      title: {
        text: "各班人数情况",
      },
      itemStyle: { color: "#a2d1ff" },
      tooltip: {
        trigger: "item",
      },
      xAxis: {
        data: ["一班", "二班", "三班", "四班", "五班", "六班"],
      },
      yAxis: {},
      series: [
        {
          name: "人数",
          type: "bar",
          data: [45, 42, 57, 48, 42, 53],
        },
      ],
    });
  },
  methods: {
    draw(legend, xAxis, series) {
      let myChart2 = this.$echarts.init(document.getElementById("main2"));
      let option = {
        title: {
          text: "会话量",
        },
        tooltip: {
          trigger: "axis",
        },
        legend: {
          data: legend,
        },
        xAxis: {
          data: xAxis,
        },
        yAxis: {},
        series: series,
      };
      myChart2.setOption(option);
    },
  },
};
</script>

<style lang="less" scoped>
.data-view {
  width: 100%;
  display: flex;
  justify-content: space-between;
  .el-card {
    width: 50%;
    #main1,
    #main2 {
      height: 450px;
    }
  }
}
</style>

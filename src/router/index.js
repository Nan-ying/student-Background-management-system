import Vue from "vue";
import Router from "vue-router";

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/",
      redirect: "/login",
      hidden: true,
    },
    {
      path: "/login",
      hidden: true,
      component: () => import("@/components/Login"),
    },
    {
      path: "*",
      hidden: true,
      component: () => import("@/components/NotFound"),
    },
    {
      path: "/home",
      name: "学生管理",
      iconClass: "fa fa-users",
      redirect: "/home/student",
      component: () => import("@/components/Home"),
      children: [
        {
          path: "/home/student",
          name: "学生列表",
          iconClass: "fa fa-list",
          component: () => import("@/components/students/StudentList.vue"),
        },
        {
          path: "/home/infos",
          name: "信息管理",
          iconClass: "fa fa-list-alt",
          component: () => import("@/components/students/InfoManage.vue"),
        },
        {
          path: "/home/work",
          name: "作业列表",
          iconClass: "fa fa-list-ul",
          component: () => import("@/components/students/WorkList.vue"),
        },
      ],
    },
    {
      path: "/home",
      name: "数据分析",
      iconClass: "fa fa-users",
      component: () => import("@/components/Home"),
      children: [
        {
          path: "/home/dataview",
          name: "数据概览",
          iconClass: "fa fa-line-chart",
          component: () => import("@/components/dataAnalysis/DataView"),
        },
        {
          path: "/home/mapview",
          name: "地图概览",
          iconClass: "fa fa-line-chart",
          component: () => import("@/components/dataAnalysis/MapView"),
        },
        {
          path: "/home/score",
          name: "分数地图",
          iconClass: "fa fa-line-chart",
          component: () => import("@/components/dataAnalysis/ScoreMap"),
        },
      ],
    },
    {
      path: "/users",
      name: "用户中心",
      iconClass: "fa fa-user",
      component: () => import("@/components/Home"),
      children: [
        {
          path: "/users/user",
          name: "权限管理",
          iconClass: "fa fa-user",
          component: () => import("@/components/users/User"),
        },
      ],
    },
  ],
  mode: "history",
});

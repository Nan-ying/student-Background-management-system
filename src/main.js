import Vue from "vue";
import App from "./App.vue";
import ElementUI from "element-ui";
import "element-ui/lib/theme-chalk/index.css";
import "./assets/css/reset.css";
import "font-awesome/css/font-awesome.min.css";
import router from "./router";
import service from "./service/service";
import echarts from "echarts";

Vue.use(ElementUI);
Vue.prototype.service = service; // 挂载到原型，可以在全局中使用
Vue.prototype.$echarts = echarts;

router.beforeEach((to, from, next) => {
  if (!localStorage.getItem("username")) {
    if (to.path !== "/login") {
      next("/login");
    } else next();
  } else next();
});

Vue.config.productionTip = false;

new Vue({
  router,
  render: (h) => h(App),
}).$mount("#app");

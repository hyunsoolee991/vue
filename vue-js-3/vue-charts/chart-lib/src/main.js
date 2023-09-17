import Vue from "vue";
import App from "./App.vue";
import ChartPlugin from "./plugins/ChartPlugin.js";

Vue.config.productionTip = false;

// install() 이벤트가 실행된다.
Vue.use(ChartPlugin);

new Vue({
  render: (h) => h(App),
}).$mount("#app");

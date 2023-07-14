import Vue from "vue";
import VueRouter from "vue-router";
import NewsView from "../views/NewsView.vue";
import JobsView from "../views/JobsView.vue";
import AskView from "../views/AskView.vue";
import UserView from "../views/UserView.vue";
import ItemView from "../views/ItemView.vue";
// import createListView from "../views/CreateListView.js";
import bus from "../utils/bus.js";
import { store } from "../store/index";

Vue.use(VueRouter);

export const router = new VueRouter({
  mode: "history",
  routes: [
    {
      path: "/",
      redirect: "/news",
    },
    {
      path: "/news",
      name: "news",
      // component: createListView("NewsView"), // 파라미터의 문자열은 컴포넌트를 구분하기 위한 이름으로만 사용
      component: NewsView,
      beforeEnter: (to, from, next) => {
        bus.$emit("start:spinner");
        // #1
        store
          .dispatch("FETCH_LIST", to.name)
          .then(() => {
            // #5
            console.log(5);
            console.log("fetched");
            next();
          })
          .catch((error) => {
            console.log(error);
          });
      },
    },
    {
      path: "/ask",
      name: "ask",
      // component: createListView("AskView"),
      component: AskView,
      beforeEnter: (to, from, next) => {
        bus.$emit("start:spinner");
        store
          .dispatch("FETCH_LIST", to.name)
          .then(() => {
            next();
          })
          .catch((error) => {
            console.log(error);
          });
      },
    },
    {
      path: "/jobs",
      name: "jobs",
      // component: createListView("JobsView"),
      component: JobsView,
      beforeEnter: (to, from, next) => {
        bus.$emit("start:spinner");
        store
          .dispatch("FETCH_LIST", to.name)
          .then(() => {
            next();
          })
          .catch((error) => {
            console.log(error);
          });
      },
    },
    {
      path: "/user/:id",
      component: UserView,
    },
    {
      path: "/item/:id",
      component: ItemView,
    },
  ],
});

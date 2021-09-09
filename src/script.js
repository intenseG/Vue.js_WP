import Vue from "vue";
import VueRouter from "vue-router";

import App from "./components/App.vue";
// import Article from "./components/Article.vue";
// import CreateArticle from "./components/CreateArticle.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    component: App
  },
  // {
  //   path: "/articles/:id",
  //   component: Article,
  // },
  // {
  //   path: "/create",
  //   component: CreateArticle,
  // },
];

const router = new VueRouter({
  routes
});

const app = new Vue({
  el: "#app",
  router,
  template: `
    <div id="app">
      <router-view></router-view>
    </div>
  `
}).$mount("#app");
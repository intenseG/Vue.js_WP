import Vue from "vue";
import VueRouter from "vue-router";

import App from "./components/App.vue";
import Article from "./components/Article.vue";
import CreateArticle from "./components/CreateArticle.vue";
import EditArticle from "./components/EditArticle.vue";

Vue.use(VueRouter);

// console.log(process.env.VUE_APP_USER_ID);

const routes = [
  {
    path: "/",
    component: App
  },
  {
    path: "/articles/:id",
    name: "viewArticle",
    component: Article,
    props: route => ({ query: route.query.article })
  },
  {
    path: "/create",
    component: CreateArticle,
  },
  {
    path: "/articles/:id/edit",
    name: "editArticle",
    component: EditArticle,
    props: route => ({ query: route.query.article })
  }
];

const router = new VueRouter({
  routes
});

const app = new Vue({
  el: "#app",
  router,
  template: `
    <div class="app">
      <router-view></router-view>
    </div>
  `
}).$mount("#app");
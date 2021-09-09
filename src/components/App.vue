<template>
  <div id="app">
    <!-- <router-link to="/create">新規投稿</router-link> -->
    <article-list></article-list>
  </div>
</template>

<script>
import ArticleList from "./ArticleList.vue"
export default {
  components: {
    ArticleList
  }
};
</script>

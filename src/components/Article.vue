<template>
  <div id="app">
    <router-link :to="{
      name: 'editArticle', params: { id: this.$route.query.article.id },
      query: { article: this.$route.query.article }}">編集</router-link>
    <div class="article">
      <div class="articleTitle" v-html="this.$route.query.article.title"></div>
      <div class="articleContent" v-html="this.$route.query.article.content"></div>
    </div>
  </div>
</template>

<script>
export default {
  props: []
};
</script>
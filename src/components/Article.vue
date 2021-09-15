<template>
  <div id="app">
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
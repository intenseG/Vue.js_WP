<template>
  <div class="article">
    <li>
      <button class="viewArticleButton" @click="viewArticle"></button>{{ article.id }}
    </li>
  </div>
</template>

<script>
export default {
  props: ["article"],
  methods: {
    viewArticle(articleId) {
      this.$router.push({ path: `/articles/${articleId}` });
    }
  }
};
</script>
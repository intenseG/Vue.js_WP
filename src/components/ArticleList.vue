<template>
  <div id="articles">
    <h1>記事一覧</h1>
    <ul class="articlesParent">
      <article
      v-for="article in articles"
      v-bind:article="article"
      v-bind:key="article.id">
      </article>
    </ul>
  </div>
</template>

<script>
import Article from './Article.vue';
export default {
  components: {
    Article
  },
  methods: {
    async getArticlesAsync() {
      // const response = await fetch("./resources/articles.json");
      const response = await fetch("http://127.0.0.1:8000/wp-json/wp/v2/posts");
      const data = await response.json();
      console.log(data);

      return data;
    }
  },
  computed: {
    articles: function() {
      return this.getArticlesAsync();
    }
  }
};
</script>
<template>
  <div id="articles">
    <h1>記事一覧</h1>
      <ul class="articleParent">
      <li v-for="article in articles" :key="article.id" class="viewArticleButton">
        <router-link :to="{ name: 'viewArticle', params: { id: article.id }, query: { article: article }}">{{ article.title }}</router-link>
      </li>
    </ul>
  </div>
</template>

<script>
import Article from './Article.vue';
export default {
  components: {
    Article
  },
  data: function() {
    return {
      articleList: [],
    }
  },
  created: function() {
    this.getArticlesAsync();
  },
  methods: {
    async getArticlesAsync() {
      // const response = await fetch("./resources/articles.json");
      const response = await fetch("http://127.0.0.1:8000/wp-json/wp/v2/posts");
      const data = await response.json();
      console.log(data);

      if (this.articleList.length > 0) {
        this.articleList.splice(0);
      }

      // const articleList = [];
      for (let i = 0; i < data.length; i++) {
        this.articleList.push({
          id: data[i].id,
          title: data[i].title.rendered,
          content: data[i].content.rendered
        });
      }

      // return articleList;
    }
  },
  computed: {
    articles: function() {
      // this.getArticlesAsync();
      return this.articleList;
    }
  }
};
</script>
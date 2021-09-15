<template>
  <div id="app">
    <router-link to="/">記事一覧</router-link>
    <div class="postArticleMessage" v-html="message">}</div>
    <h1>記事の作成</h1>
    <span class="subject">タイトル</span>
    <div class="postArticleNewLine"></div>
    <input type="text" v-model="title" class="articleTitleForm">
    <div class="postArticleNewLine"></div>
    <span>本文</span>
    <div class="postArticleNewLine"></div>
    <textarea v-model="content" class="articleContentForm"></textarea>
    <div class="postArticleNewLine"></div>
    <button class="postArticleButton" @click="postArticle">投稿</button>
  </div>
</template>

<script>
export default {
  data: function() {
    return {
      msgList: [],
      message: "",
      title: "",
      content: "",
      userId: process.env.VUE_APP_USER_ID,
      password: process.env.VUE_APP_PASSWORD
    }
  },
  methods: {
    initForm: function() {
      this.title = "";
      this.content = "";
    },
    postArticle: async function() {
      if (this.title === "") {
        this.msgList.push("タイトルが未入力です");
      }
      if (this.content === "") {
        this.msgList.push("本文が未入力です");
      }

      if (this.msgList.length > 0) {
        this.message = this.msgList.join('<br>');
        this.msgList.splice(0);
      }
      else {
        //記事を新規投稿する
        // const user_id = process.env.VUE_APP_USER_ID;
        // const password = process.env.VUE_APP_PASSWORD;
        const auth = window.btoa(this.userId + ':' + this.password);
        const headers = {
          'Authorization': 'Basic ' + auth,
          'Content-Type': 'Application/json'
        };
        const body = JSON.stringify({
          title: this.title,
          content: this.content,
          status: "publish"
        });
        const method = "POST";
        console.log(body);

        fetch("http://127.0.0.1:8000/wp-json/wp/v2/posts", {method, headers, body})
        .then((res) => {
          this.initForm();
          this.message = "記事を公開しました";
        });
      }
    }
  }
};
</script>
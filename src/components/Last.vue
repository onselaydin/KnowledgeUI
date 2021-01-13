<template>
    <div class="container">

            <p><br></p>

            <img alt="Qries" v-bind:src="article.image" width="150" height="70" v-if="article.image!=''">
            <p><br></p>
            <div class="form-group">
                <h1>
                    <label>{{article.title}}</label>
                </h1>

            <!-- <input v-model="article.title" class="form-control" placeholder="title" /> -->
            </div>
            <div class="form-group">
               <div v-html="article.content"></div>
            </div>

            <div class="form-group">
                <a :href="article.url">{{article.url}}</a>
            </div>

            <div class="form-group">
                <div v-for="a in article.arttypeDetail">
                  {{a.title}}
                </div>
            </div>
            <div class="form-group">
                <label>{{article.dates}}</label>
            </div>
    </div>
</template>
<script>
import axios from "axios";
export default {
  created() {
    this.getData();

  },
  data() {
    return {

      article: {
          title: "",
          content: "",
          url: "",
          articleType: "",
          image: "",
          dates:  ""
      }
    };
  },
   methods: {
    async getData() {
      await axios
        .get("articlecustom/LastArticle")
        .then((response) => {
          this.article = response.data;
          console.log(this.article);
        })
        .catch((e) => console.log(e));
    }
   }
}
</script>

<style scoped>

</style>

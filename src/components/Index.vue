<template>
  <div class="container">
    <section class="mb-4">
      <div class="row">
        <nav class="navbar navbar-expand-lg navbar-dark teal lighten-2 mb-4">
          <!-- Navbar brand -->
          <a class="navbar-brand" href="#"></a>

          <!-- Collapsible content -->
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <!-- Search form -->
            <form class="form-inline ml-auto">
              <div class="md-form my-0">
                <input
                  class="form-control mr-sm-2"
                  type="text"
                  placeholder="Ara"
                  aria-label="Ara"
                  v-on:change="findArticle($event)"
                />
              </div>
            </form>
          </div>
          <!-- Collapsible content -->
        </nav>
      </div>

      <div class="row">

          <div v-for="article in articleList" :key="article.Id">
            <div class="card-expansion">
              <md-card>
                <md-card-media>
                  <img
                    :src="article.image"
                    alt="okipu.net"
                    style="width: 310px; height: 140px"
                  />
                </md-card-media>

                <md-card-header>
                  <div class="md-title">{{ article.title }}</div>
                  <div class="md-subhead">
                    <a :href="article.url">Ayrıca...</a>
                  </div>
                </md-card-header>
                <md-card-actions md-alignment="space-between">
                  <div>
                    <md-button @click="detail(article.id)">Detay</md-button>
                  </div>
                </md-card-actions>
              </md-card>
            </div>
          </div>

      </div>
    </section>
  </div>
</template>

<script>
import axios from "axios";
export default {
  created() {
    this.getData();
  },
  name: "CardExpansion",
  data() {
    return {
      articleList: [],
    };
  },
  methods: {
    detail(Id) {
      this.$store.state.articleId = Id;
      this.$router.push({ name: "articledetail" });
    },
    getData() {
      axios
        .get("articlecustom/getall")
        .then((response) => {
          let data = response.data;
          this.articleList = data;
        })
        .catch((e) => console.log(e));
    },
    findArticle(e) {
      //console.log(e.target.value);
      axios
        .get("articlecustom/FindArticle/", {
          params: {
            ArticleName: e.target.value,
          },
        })
        .then((response) => {
          this.articleList = response.data;
        })
        .catch((e) => console.log(e));
    },
  },
};
</script>

<style scoped>
.card-expansion {
  height: 350px;
}

.md-card {
  width: 320px;
  margin: 2px;
  padding-top: 5px;
  display: inline-block;
  vertical-align: top;
}
</style>

<template>
  <div class="container">
     <Header name="Yeni Makale Tipi" to="/newarttype"></Header>
    <form @submit.prevent="onSubmit">
      <div class="well">
        <h4>Makale Güncelleme Ekranı</h4>
		    <img alt="Qries" v-bind:src="article.image" width="150" height="70" v-if="article.image!=''">
        <hr>
        <div class="form-group">
          <input v-model="article.title" class="form-control" placeholder="title" />
        </div>
        <div class="form-group">
            <vue-editor v-model="article.content"></vue-editor>
        </div>
        <div class="form-group">
          <input v-model="article.url" type="text" class="form-control" placeholder="url" />
        </div>
        <div class="form-group">
          <input v-model="article.image" type="text" class="form-control" placeholder="image" />

        </div>

        <div class="row">
          <div class="col-md-6 mb-4">
            <select class="browser-default custom-select" v-model="article.articleType" @change="selectedArttype">
              <option v-for="atype in articleTypes" :value="atype.id" :key="atype.id">{{atype.title}}</option>
            </select>
          </div>
        </div>
      </div>

      <button
        type="submit"
        class="btn btn-large btn-block btn-primary full-width">Güncelle</button>
    </form>
  </div>
</template>

<script>
import axios from "axios";
import { VueEditor } from "vue2-editor";
import Header from "./header"

export default {
  components: {
    VueEditor,Header
  },
	async created() {

    await axios
      .get("/arttype")
      .then((response) => {
        let data = response.data;
        this.articleTypes = data;
      }).catch((e) => console.log(e));

    await axios
      .get("/article/"+this.articlename.toString())
      .then((response) => {
        let data = response.data;
        this.article = data;
      })
		.catch((e) => console.log(e));


  },
  data() {
    return {
      articlename : this.$route.params.aname,
      article: {
          title: "",
          content: "",
          url: "",
          articleType: "",
          image: "",
          dates:  ""
      },
      arttype: {
        Id:"",
        title: "",
        description: "",
        dates: ""
      },
      articleTypes: [],
      arttypedetail:[]
    };

  },

  methods:{
	 async onSubmit() {
          this.article.dates = new Date().toLocaleString();
          await axios
            .put("/article", { ...this.article })
            .then((response) => {
              //this.article = {};
            })
            .catch((e) => console.log(e));
        },
    selectedArttype(e){
          console.log(e)
           this.arttype.Id = this.article.articletype
           this.arttype.title = e.target.selectedOptions[0].innerText;
           this.arttypedetail.push(this.arttype);
           this.article.arttypedetail = this.arttypedetail;
        }
  }
};
</script>

// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import {router} from './router'
import axios from "axios";
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import { ClientTable } from 'vue-tables-2';
import VueConfirmDialog from 'vue-confirm-dialog'
import Vuelidate from 'vuelidate'
import { store } from "./store"
import VueMaterial from 'vue-material'
import 'vue-material/dist/vue-material.min.css'
import 'vue-material/dist/theme/default.css'
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faSpinner } from "@fortawesome/free-solid-svg-icons";

import BootstrapVue from 'bootstrap-vue'


axios.defaults.baseURL = "http://139.59.215.230/api";
//axios.defaults.baseURL = "http://localhost:5000/api";
axios.defaults.headers.common["Authorization"] = 'Bearer '+'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1bmlxdWVfbmFtZSI6IjEiLCJyb2xlIjoiQWRtaW4iLCJodHRwOi8vc2NoZW1hcy5taWNyb3NvZnQuY29tL3dzLzIwMDgvMDYvaWRlbnRpdHkvY2xhaW1zL3ZlcnNpb24iOiJWMy4xIiwibmJmIjoxNjEyMjExNzU3LCJleHAiOjE2MTIzODQ1NTcsImlhdCI6MTYxMjIxMTc1N30.eIgXtbsvn_mEINz5vbhLWebvk7cKnkQPp9mCPNk3Wcw' ;
axios.defaults.headers.get["Accepts"] = "application/json";  //sadece json kabul


Vue.use(ClientTable);
Vue.config.productionTip = false

Vue.use(VueConfirmDialog);
Vue.component('vue-confirm-dialog', VueConfirmDialog.default);
Vue.use(Vuelidate);
Vue.use(BootstrapVue);
Vue.use(VueMaterial);
Vue.component("font-awesome-icon", FontAwesomeIcon);

library.add(faSpinner);

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})

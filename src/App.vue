<template>
  <div class="container-fluid p-0">
    <vue-confirm-dialog></vue-confirm-dialog>
   <app-header></app-header>
   <transition name="fade" mode="out-in">
     <router-view></router-view>
   </transition>
   <app-footer></app-footer>
 </div>
</template>

<script>
import Header from "./AppHeader"
import Footer from "./AppFooter"
import AppFooter from './AppFooter.vue';
export default {
  //name: "App",
  components:{
        appHeader: Header,
        appFooter:AppFooter
    }
};
</script>

<style>
.fade-enter{
    opacity: 0;
  }
  .fade-enter-active{
    transition: opacity .3s ease-in-out;
  }
  .fade-leave{
  }
  .fade-leave-active{
    transition: opacity .3s ease-in-out;
    opacity: 1;
  }
</style>

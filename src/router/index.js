import Vue from 'vue'
import VueRouter from 'vue-router'

import home from '@/components/admin/home'
import details from '@/components/admin/details'
import newarticle from '@/components/admin/newarticle'
import arttypes from '@/components/admin/arttypes'
import newarttype from '@/components/admin/newarttype'
import arttypedetail from '@/components/admin/arttypedetail'
import Index from '@/components/Index.vue'
import Auth from "@/auth/Auth.vue";
//import { store } from "@/store";
import About from '@/components/About'
import Last from '@/components/Last'
import Contact from '@/components/Contact'
import ArticleDetail from '@/components/ArticleDetail'

Vue.use(VueRouter)

export const router =  new VueRouter({
  routes: [
    {
      path: '/',
      name: 'index',
      component: Index,
      meta: {
        title: 'Admin',
        metaTags: [
          {
            name: 'Article',
            content: 'Article management'
          },
          {
            property: 'Article Type',
            content: 'Article Type Management'
          }
        ]
      }
    },
    {
      path: '/home',
      name: 'home',
      component: home

    },
    { path : "/auth", component : Auth },
    { path : "/about", component : About },
    { path : "/last", component : Last },
    { path : "/contact", component : Contact },
    { path : "/articledetail",name: 'articledetail', component : ArticleDetail },

    {
      path: '/details/:aname',beforeEnter:(to,from,next)=>{
        next();
      },
      name: 'details',
      component: details
    },
    {
      path: '/newarticle',
      name: 'newarticle',
      component: newarticle
    },
    {
      path: '/arttypes',
      name: 'arttypes',
      component: arttypes
    },
    {
      path: '/newarttype',
      name: 'newarttype',
      component: newarttype
    },
    {
      path: '/arttypedetail',
      name: 'arttypedetail',
      component: arttypedetail
    }

  ],
  mode:"history"
})


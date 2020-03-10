import Vue from 'vue'
import Router from 'vue-router'

import './router.js'

import HelloWorld from '@/components/HelloWorld'

import Home from '@/pages/home/Home'

import Search from '@/pages/search/Index';

import City  from  '@/pages/city/City';
import Detail  from  '@/pages/detail/Detail';



import Movie from '@/views/douban/Movie'

Vue.use(Router)



export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: "/home",
      name: "home",
      component: Home,
    },{
      path: "/detail/:id",
      name: "detail",
      component: Detail,
    },{
      path: "/search",
      name: "search",
      component: Search,
    },{
      path: "/city",
      name: "city",
      component: City,
    },{
      path: "/movie",
      name: "movie",
      component: Movie
    }
  ]
})

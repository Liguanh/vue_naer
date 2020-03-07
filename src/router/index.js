import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'

import Home from '@/pages/home/Home'

import Search from '@/pages/search/Index';

import City  from  '@/pages/city/City';

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
      path: "/search",
      name: "search",
      component: Search,
    },{
      path: "/city",
      name: "city",
      component: City,
    }
  ]
})

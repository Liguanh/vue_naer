// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import VueAwesomeSwiper from 'vue-awesome-swiper'

import axios from 'axios';

Vue.prototype.$axios = axios;

// 引入解决兼容性的css文件
import "./assets/style/reset.css"
import "./assets/style/border.css"
import "./assets/style/iconfont.css"
//配置vue-awesome-swiper信息
import "swiper/dist/css/swiper.css";




//引入fastclick
import Fastclick from 'fastclick'
Fastclick.attach(document.body)

Vue.use(VueAwesomeSwiper);

Vue.config.productionTip = false




/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})

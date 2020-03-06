# qunaer

> 去哪儿网案例练习

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report
```

For a detailed explanation on how things work, check out the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).

## vue-asesome-swiper 的使用
参考  https://www.cnblogs.com/yuanjili666/p/11510579.html
**安装**
cnpm install vue-awesome-swiper --save

```linux
/*全局引入*/
    import VueAwesomeSwiper from 'vue-awesome-swiper'
    import 'swiper/dist/css/swiper.css'//这里注意具体看使用的版本是否需要引入样式，以及具体位置。
    Vue.use(VueAwesomeSwiper, /* { default global options } */)

```

```
/*组件方式引用*/
    import 'swiper/dist/css/swiper.css'////这里注意具体看使用的版本是否需要引入样式，以及具体位置。
    import { swiper, swiperSlide } from 'vue-awesome-swiper'
    export default {
    components: {
      swiper,
      swiperSlide
    }
```

```
<swiper :options="swiperOption">
      <swiper-slide><img src="static/images/jay.jpg"></swiper-slide>
      <swiper-slide><img src="static/images/jay.jpg"></swiper-slide>
      <swiper-slide><img src="static/images/jay.jpg"></swiper-slide>
      <swiper-slide><img src="static/images/jay.jpg"></swiper-slide>
      <swiper-slide><img src="static/images/jay.jpg"></swiper-slide>
      <swiper-slide><img src="static/images/jay.jpg"></swiper-slide>
    </swiper>
    <!--以下看需要添加-->
    <div class="swiper-scrollbar"></div> //滚动条
    <div class="swiper-button-next"></div> //下一项
    <div class="swiper-button-prev"></div> //上一项
    <div class="swiper-pagination"></div> //标页码

```

```
```
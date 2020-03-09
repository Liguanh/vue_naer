<template>
  <div class="banners">
    <swiper :options="swiperOption">
      <swiper-slide v-for="(item,index) in swiperList" :key="index">
        <img :src="item.imgUrl" class="swiper_img" />
      </swiper-slide>
      <div class="swiper-pagination" slot="pagination"></div>
    </swiper>
  </div>
</template>

<script>
import bus from "@/eventBus";
export default {
  name: "SwiperBanner",
  created() {
    bus.$on("banner", data => {
    
      this.swiperList = data;
    });
  },
  data() {
    return {
      swiperOption: {
        pagination: {
          el: ".swiper-pagination",
          clickable: true
        }, //这样写小圆点就有了
        autoplay: 3000,
        speed: 1000,
        loop: true,
        autoplay: {
          disableOnInteraction: false
        }
      },
      swiperList: []
    };
  },
  methods: {}
};
</script>

<style scoped lang="stylus">
.banners >>> .swiper-pagination-bullet-active {
  background-color: #A00000;
  width: 0.2rem;
  height: 0.2rem;
}

.banners {
  overflow: hidden;
  width: 100%;
  height: 0;
  padding-bottom: 31.25%;
  background-color: #F8F8F8;

  .swiper_img {
    width: 100%;
  }
}
</style>

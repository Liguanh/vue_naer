<template>
  <div>
    <!-- 头部 -->
    <HomeTop></HomeTop>

    <!-- 轮播图／ -->
    <SwiperBanner></SwiperBanner>

    <!-- 图标区 -->
    <Icons :icons="indexData.iconList"></Icons>

    <!-- 热销区 -->
    <Recommend></Recommend>
  </div>
</template>

<script>
import HomeTop from "@/pages/home/common/HomeTop";
import SwiperBanner from "@/pages/home/common/SwiperBanner";
import Icons from "@/pages/home/common/Icons";
import Recommend from '@/pages/home/common/Recommend';

import bus from "@/eventBus";

export default {
  name: "Home",
  created() {
    
    document.title = "去哪儿网"
    this.getIndexData();
  },
  data() {
    return {
      indexData: [],//轮播图效果,
    };
  },
  components: {
    HomeTop,
    SwiperBanner,
    Icons,
    Recommend
  },
  methods: {
    goback(){
      this.$router.go(-1);
    },
    //获取banner图的列表
    getIndexData() {
      this.$axios({
        url: "/static/mock/index.json",
        methods: "get"
      }).then(response => {
        if (response.status == 200) {
          
          let data = response.data.data
          this.indexData = data;
          
          //设置总线程
          bus.$emit("banner",data.swiperList);
          bus.$emit("icons",data.iconList);
          bus.$emit("recommend",data.recommendList);
          bus.$emit("week",data.weekendList);
          bus.$emit("city",data.city);
        }
      });
    }
  }
};
</script>

<style scoped>
</style>

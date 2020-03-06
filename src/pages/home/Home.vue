<template>
  <div>
  <!-- 头部 -->
    <HomeTop></HomeTop>

  <!-- 轮播图／ -->
    <SwiperBanner></SwiperBanner>

  </div>
</template>

<script>
import HomeTop from '@/pages/home/common/HomeTop'
import SwiperBanner from '@/pages/home/common/SwiperBanner'
export default {
  name: 'Home',
  created(){
    document.title="container"
  },
  data() {
    return {
    };
  },
  computed:{
    
  },
  watch:{
  },
  components:{
    HomeTop,
    SwiperBanner
  },
  methods: {},
};
</script>

<style scoped>

</style>

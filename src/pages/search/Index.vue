<template>
  <div class="box">
      <!-- 头部导航信息 -->
      <SearchHead></SearchHead>
  </div>
</template>

<script>
import SearchHead from './components/SearchHead';

export default {
  name: '',
  data() {
    return {
    };
  },
  components:{
      SearchHead
  }
};
</script>

<style lang="stylus" scoped>
    .box{
        background-color: #F0F0F0;
        height :100%;
    }
</style>

<template>
  <div class="head">
      <div class="head-back" @click="goHome">
          <span class="iconfont">&#xe624;</span>
      </div>
      <div class="head-search">
          <input type="text" class="inp" placeholder="输入城市或景点">
      </div>
      <div class="head-right">
          搜索
      </div>
  </div>
</template>

<script>
export default {
  name: 'SearchHead',
  data() {
    return {
    };
  },
  methods:{
      goHome(){
          this.$router.push("/home")
      }
  }
};
</script>

<style lang="stylus" scoped>
    .head{
        display : flex;
        justify-content : space-around;
        height : 0.86rem;
        line-height : 0.86rem;
        background-color :#FFF;
        border-bottom : #d4d4d4 1px solid;
        .head-back{
            width : 0.8rem;
            text-align : center;
        }
        .head-search{
            flex: 1;
            .inp{
                width:100%;
                height : .55rem;
                line-height : .55rem;
                border-radius : .15rem;
                background-color :#F0F0F0;
                text-align : center;
            }
        }
        .head-right{
            min-width: 1rem;
            text-align : center;
        }
    }
</style>

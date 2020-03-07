<template>
  <div class="header">
    <div class="h_left">
      <span class="iconfont back_icon">&#xe624;</span>
    </div>
    <div class="h_search" @click="gotoSearch">
      <span class="iconfont search_icon">&#xe61b;</span>
      输入城市/景点/游玩主题
    </div>
    <div class="h_right" @click="gotoCity">
      <span>{{city}}</span>
      <span class="iconfont down_arrow">&#xe62d;</span>
    </div>
  </div>
</template>

<script>
import bus from '@/eventBus';
export default {
  name: 'HomeTop',
  mounted(){
    console.log(this.$route.params);
    let params = this.$route.params;

    // bus.$on("city",(data)=>{
    //   this.city = data;
    // })

    if("city" in params){
      console.log("test")
      this.city = params.city;
    }
  },
  data() {
    return {
      city:"选择城市"
    };
  },
  computed:{
  },
  watch:{
  },
  methods: {
    gotoSearch(){
      this.$router.push("/search");
    },
    gotoCity(){
      this.$router.push("/city");
    }
  },
};
</script>

<style scoped lang="stylus"> 
  .header{
    display : flex;
    line-height : .86rem;
    background-color : rgb(110,194,193)
    .h_left{
      width :.64rem;
      float :left;
      text-align : center;
      .back_icon{
        color :#F8F8F8;
        font-size : 0.4rem;
        font-weight :bold;
        }
    }

    .h_search{
      flex : 1;
      height : 0.64rem;
      line-height : 0.64rem;
      padding-left : 0.2rem;
      margin-top : 0.11rem;
      color #ccc;
      border-radius : 0.1rem;
      font-size: 0.32rem;
      background-color :#F8F8F8;
      .search_icon{
        margin-right: 0.1rem;
        font-size : 0.4rem;
      }
      .inp{
        flex: 1;
        color :#ccc;
        margin-right : 0.1rem;
      }
      
    }

    .h_right{
      min-width : 1rem;
      height : 0.64rem;
      line-height : 0.64rem;
      padding-left : 0.2rem;
      margin-top : 0.11rem;
      margin-right: 0.15rem;
      color #f8f8f8;
      font-size:0.32rem;
      .down_arrow{
        color: #F8F8F8;
        font-size : 0.4rem;
      }
    }
    
  }

</style>

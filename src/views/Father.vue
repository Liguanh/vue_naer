<template>
  <div class="container">
      ssdsds
      <a @click="goto">跳转到首页</a>
       <button @click="kills">销毁</button>
      <select class="sel" v-model="city_ind">
          <option  v-for="(item,index) in city" :key="index">{{index}}</option>
      </select>

    
      
      <Son :ind="city_ind" :city="city">
          <label>选择城市:</label>
           <div slot="flower" style="color:#FF0000">你好，我已经结婚了，不是路边的野花了</div>
          
           
           <div slot-scope="aa" style="margin-top: 20px;">选择城市:{{aa.d}}</div>
      </Son>


      <ul>
          <li :class="{'active':temp=='news'}" @click="temp='news'">新闻</li>
          <li :class="{'active':temp=='other'}" @click="temp='other'">其它</li>
      </ul>
      <keep-alive>
          <component :is="temp"></component>
      </keep-alive>

     
  </div>
</template>

<script>
import Son from "./Son"

import  '@/assets/js/jquery.min.js'

import news from "./news"
import other from "./other"

export default {
  name: 'Father',
  beforeCreate(){
      console.log(this.city_ind);
  },
  created(){
      $.ajax({
          url:"/static/mock/city.json",
          type: "get",
          success: (res)=>{
              console.log(res);
              if(res.ret== true){
                  console.log(res.data.cities);
                  this.city = res.data.cities;
              }
          }
      })
  },
  data() {
    return {
        city:[
            
        ],
        city_ind:"A",
        temp: "news",
    };
  },
  components:{
      Son,
      news,
      other
  },
  methods:{
      kills(){
          this.$destroy();
      },
      goto(){
          this.$router.replace({
              path: "/home"
          })
      }
  },
  beforeDestroy(){
      console.log((new Date()).toLocaleString()+" "+(new Date()).getMilliseconds());
      console.log("game 即将 over")
  },
  destroyed(){
    console.log((new Date()).toLocaleString()+" "+(new Date()).getMilliseconds());
    console.log("game over")
  }
}
</script>

<style scoped>

  .container{
      width: 800px;
      margin: 50px auto;
  }

  .sel{
      float:left;
      margin-right: 20px;
      width: 200px;
      height: 25px;
      border: #d4d4d4 1px solid;
  }

  ul{
      list-style: none;
      width: 200px;
      height: 25px;
      margin-top: 30px;
      line-height: 25px;
      background-color: #f0f0f0;
      margin-bottom : 20px;
      
      
  }
  li{
          width: 100px;
          float :left;
          text-align :center;
          
      }
      li.active{
          background-color: #A00000;
          color: #FFF;
      }

</style>

<template>
  <div>
    <div class="hot-city-head">热门城市</div>
    <div class="hot-city-list">
      <div
        class="hot-city-item"
        v-for="(item,index) in hotCity"
        :key="index"
        @click="selectCity(item.name)"
      >{{item.name}}</div>
    </div>

    <div class="word-search">
      <ul class="word-list">
        <li v-for="(item,index) in cities" :key="index" @click="goAnchor('go_'+index)" :class="{act:'go_'+index == currentKey}">{{index}}</li>
      </ul>
    </div>

    <div v-for="(cityArr,index) in cities" :key="index">
      <div class="all-city-head" :id="'go_'+index">{{index}}</div>
      <div class="hot-city-list">
        <div
          class="hot-city-item"
          v-for="(item,index) in cityArr"
          :key="index"
          @click="selectCity(item.name)"
        >{{item.name}}</div>
      </div>
    </div>

  </div>
</template>

<script>
export default {
  name: "CityHot",
  created() {
    this.$axios({
      url: "/static/mock/city.json",
      methods: "get"
    }).then(res => {
      console.log(res.data.data);
      let { hotCities, cities } = res.data.data;

      this.hotCity = hotCities;
      this.cities = cities;
    });
  },
  mounted(){
    window.addEventListener("scroll",()=>{
      let cityHead = document.getElementsByClassName("all-city-head");
      for(let i =0;i<cityHead.length; i++){
        if(document.documentElement.scrollTop>=cityHead[i].offsetTop){
          console.log(cityHead[i].id);
          this.currentKey = cityHead[i].id;
        }
      }
    },true)
  },
  data() {
    return {
      hotCity: [],
      cities: [],
      currentKey:""
    };
  },
  methods: {
    selectCity(city) {
      this.$router.push({ name: "home", params: { city: city } });
    },
    //点击字母跳转到对应的区域
    goAnchor(selector){
      console.log(selector);

      this.currentKey = selector;

      var anchor = document.getElementById(selector);
      console.log(anchor);

      document.documentElement.scrollTop = anchor.offsetTop;
    }
  }
};
</script>

<style lang="stylus" scoped>
.hot-city-head,.all-city-head {
  width: 100%;
  height: 0.8rem;
  line-height: 0.8rem;
  text-indent: 0.2rem;
  font-size: 0.25rem;
  background-color: #F0F0F0;
}

.hot-city-list {
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  

  .hot-city-item {
    width: 33%;
    text-align: center;
    float :left;
    height: 0.9rem;
    line-height: 0.9rem;
    background-color: #FFF;
    font-size: 0.25rem;
    border-right: #d4d4d4 0.02rem solid;
    border-bottom: #d4d4d4 0.02rem solid;
  }

  .hot-city-item:nth-child(3n) {
    border-right: none;
  }
}
.word-search{
  position: fixed;
  right: .15rem;
  top:1rem;
  width: .5rem;
  text-emphasis after;
  .word-list{
    list-style :none;
    width:.5rem;
    text-align : center;
    font-size: .3rem;
    li{
      width :.5rem;
      height :.5rem;
      line-height :.5rem;
      text-align :center
      color:#00BFFF;
    }
    li.act{
      background-color:#00BFFF;
      border-radius :.25rem;
      color: #FFF;
    }
  }
}

</style>

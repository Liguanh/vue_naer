<template>
  <div class="city-head">
      <div class="city-head-left">
          <router-link tag="span" class="iconfont back-icon" to="/home">&#xe624;</router-link>
          <!-- <span class="iconfont">&#xe624;</span> -->
     </div>
     <div class="city-head-txt">
         城市选择
     </div>
  </div>
</template>

<script>
export default {
  name: 'CityHead',
  data() {
    return {
    };
  },
};
</script>

<style lang="stylus" scoped>
    .city-head{
        width: 100%;
        line-height : 0.86rem;
        background-color :rgb(110,194,193);
        display : flex;
        justify-content : space-around;

        .city-head-left{
            width: .9rem;
            text-align :center;
            color: #FFF;
            .back-icon{
                font-weight :bold;
            }
        }
        .city-head-txt{
            flex:1;
            text-align : center;
            color :#FFF;
            font-size: .35rem;
            margin-right: .9rem;
        }
    }
</style>

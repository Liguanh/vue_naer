<template>
  <div>
    <div class="icons">
      <swiper :options="swiperOption">
        <swiper-slide v-for="(page,index) in iconCut" :key="index">
          <div class="icon" v-for="item in page" :key="item.id">
            <div class="icon-img">
              <img :src="item.imgUrl" class="icon-img-content" />
            </div>
            <p class="icon-desc">{{item.desc}}</p>
          </div>
        </swiper-slide>
        <div class="swiper-pagination" slot="pagination"></div>
      </swiper>
       
    </div>
  </div>
</template>

<script>
import bus from "@/eventBus";

export default {
  name: "Icons",
  created() {
    bus.$on("icons", data => {
     
      this.icons = data;
    });
  },
  computed:{
      //分页逻辑
      iconCut(){
          let icons = [];
          this.icons.forEach((item,index)=>{
              let ind = Math.floor(index/8);

              if(!icons[ind]){
                  icons[ind] = [];
              }

              icons[ind].push(item)
          });
          return icons;
      }
  },
  data() {
    return {
      icons: [],
      swiperOption: {
        pagination: {
          el: ".swiper-pagination",
          clickable: true
        }, //这样写小圆点就有了
      }
    };
  },
};
</script>

<style scoped lang="stylus">
.icons >>> .swiper-container{
  height : 0;
  padding-bottom : 57%;
}

.icons {
  overflow: hidden;
  height: 0;
  padding-bottom: 57%;

  // background-color: #008000;
  .icon {
    position: relative;
    overflow: hidden;
    float: left;
    width: 25%;
    padding-bottom: 25%;

    // background-color: #A00000;
    .icon-img {
      position: absolute;
      top: 0.1rem;
      left: 0;
      right: 0;
      bottom: 0.44rem;
      padding: 0.05rem;

      .icon-img-content {
        display: block;
        height: 100%;
        margin: 0 auto;
      }
    }

    .icon-desc {
      position: absolute;
      left: 0;
      right: 0;
      bottom: 0;
      text-align: center;
      height: 0.44rem;
      line-height: 0.44rem;
      color: #303030;
    }
  }
}
</style>

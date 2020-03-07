<template>
  <div>
      <div class="hot-header">热销推荐</div>
      <div class="hot">
          <div class="hot-item" v-for="(item,index) in recommendList" :key="index">
            <div class="hot-item-left">
                <img class="hot-item-img" :src="item.imgUrl">
            </div>
            <div class="hot-item-right">
                <div class="hot-item-title">{{item.title}}</div>
                <div class="hot-item-desc">{{item.desc}}</div>
                <div class="hot-item-btn">
                    <button class="more">查看详情</button>
                </div>
            </div>
          </div>
      </div>


       <div class="week-header">周末去哪儿</div>

       <div class="week">
           <div class="week-item" v-for="(item,index) in weekList" :key="index">
               <div class="week-item-top">
                   <img class ="week-item-img" :src="item.imgUrl">
               </div>
               <div class="week-item-bottom">
                   <p class="week_title">{{item.title}}</p>
                    <p class="week_desc">{{item.desc}}</p>
               </div>
           </div>
       </div>
  </div>
</template>

<script>
import bus from '@/eventBus'
export default {
  name: 'Recommend',
  mounted(){
      bus.$on("recommend",(data)=>{
          this.recommendList = data;
      });
      bus.$on("week",(data)=>{
          this.weekList = data;
      })
  },
  data() {
    return {
        recommendList:[],
        weekList:[]
    };
  },
  computed:{
  },
  watch:{
  },
  methods: {},
};
</script>

<style lang="stylus" scoped>
    .hot-header ,.week-header{
        width : 100%;
        height : 0.8rem;
        line-height 0.8rem;
        text-indent : .1rem;
        font-size : 0.32rem;
        background-color :#F0F0F0;
    }
    .hot{
        .hot-item{
            overflow :hidden;
            height : 2.25rem;
            border-bottom: #d4d4d4 1px solid;
            .hot-item-left{
                overflow :hidden;
                float :left;
                width : 30%;
                .hot-item-img{
                    width : 90%;
                    margin: .1rem 5%;
                }
            }

            .hot-item-right{
                float :left;
                display : flex;
                flex-direction : column ;
                width : 70%;
                padding-bottom:30%;
                .hot-item-title{
                    height :0.7rem;
                    font-size: .4rem;
                    line-height : .7rem;
                }
                .hot-item-desc{
                    width : 90%;
                    height : 0.7rem;
                    line-height :.7rem;
                    color: #808080;
                    font-size:.35rem;
                    overflow : hidden;
                    white-space : nowrap;
                    text-overflow : ellipsis;
                }
                .hot-item-btn{
                    height :.8rem;
                    .more{
                        color :#FFF;
                        background-color :#A00000;
                        padding: .1rem .2rem;
                        border-radius : .1rem;
                    }
                }
            }
        }
    }
    .week{
        .week-item{
            height : 4.3rem;
            overflow :hidden;

            .week-item-top{
                height : 3rem;
                overflow :hidden;
                .week-item-img{
                    width : 100%;
                    height :3rem;
                }
            }

            .week-item-bottom{
                text-indent :.15rem;
                margin-top: .1rem;
                margin-bottom :.2rem;
                height :1rem;
                .week_title{
                    height :.6rem;
                    line-height :.6rem;
                    font-size: .35rem;
                }
                .week_desc{
                    color: #a9a9a9;
                    height :.3rem;
                    font-size: .3rem;
                }
            }
        }
    }
</style>

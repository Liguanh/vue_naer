<template>
  <div>
    <div class="top-img">
      <router-link tag="span" to="/home" class="iconfont icon-back">&#xe624;</router-link>
      <img :src="detail.imgUrl" />
      <div class="top-title">{{detail.title}}</div>
    </div>
  </div>
</template>

<script>
export default {
  name: "name",
  created() {
    document.title = "旅游详情";
    let id = this.$route.params.id;
    this.$axios("/static/mock/index.json").then(res => {
      console.log(res);
      if (res.status == 200) {
          let recommand = res.data.data.recommendList;

          let detail = recommand.filter((item)=>{
              return item.id == id;
          })[0]
          console.log(detail);
       this.detail = detail;
      }
    });
  },
  data() {
    return {
      detail: []
    };
  },
  computed: {},
  watch: {},
  methods: {}
};
</script>

<style scoped lang="stylus">
.top-img {
  overflow: hidden;
  position: relative;
  height: 0;
  padding-bottom: 4.5rem;

  .icon-back {
    position: absolute;
    top: 0.5rem;
    left: 0.2rem;
    color: #FFF;
    font-weight: bold;
    font-size: 0.4rem;
  }

  img {
     width: 100%;
     height :4.5rem;
    display: block;
  }

  .top-title {
    position: absolute;
    font-size: 0.35rem;
    color: #FFF;
    font-weight: bolder;
    top: 3.8rem;
    left: 0.2rem;
  }
}
</style>

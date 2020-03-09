<template>
  <div></div>
</template>

<script>
export default {
  name: '',
  created(){
      this.$axios('/api/movie/in_theaters?apikey=0b2bdeda43b5688921839c8ecb20399b')
      .then((res)=>{
          console.log(res);
      }).catch((error)=>{
          console.log(error);
      })
  },
  data() {
    return {
    };
  },
  computed:{
  },
  watch:{
  },
  methods: {},
};
</script>

<style scoped>

</style>

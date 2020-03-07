<template>
  <div>
      <CityHead></CityHead>
      <CityHot></CityHot>
  </div>
</template>

<script>
import CityHead from './CityHead'
import CityHot from './CityHot'

export default {
  name: 'City',
  created(){
      document.title = "选择城市"
  },
  data() {
    return {
    
    };
  },
  methods: {},

  components:{
      CityHead,
      CityHot
  }
};
</script>

<style scoped>

</style>

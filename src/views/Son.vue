<template>
  <div >
      <slot></slot>
      <select class="sel"  v-model="city_son">
          <option v-for="(item,index) in city[ind]" :key="item.id">
              {{item.name}}
          </option>
      </select>

      <hr>
      <slot name="flower" ></slot>

      <slot :d="city_son"></slot>
  </div>
</template>

<script>
export default {
  name: 'Son',
  props:['ind','city'],
  data() {
    return {
        city_son:"阿坝"
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

.sel{
      width: 200px;
      height: 25px;
      border: #d4d4d4 1px solid;
  }

</style>

import Vue from 'vue'

import Router1 from 'vue-router'

import Father from '@/views/Father'


Vue.use(Router1)

const routes = [{
  path: "/father1",
  name: "father",
  component: Father
}
];
export default new Router1({
    routes
})
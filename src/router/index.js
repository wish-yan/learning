import Vue from 'vue'
import Router from 'vue-router'
import Detail from '@/page/detail'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'detail',
      component: Detail
    }
  ]
})

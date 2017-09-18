import Vue from 'vue'
import Router from 'vue-router'

import AdminLogin from '@/components/AdminLogin'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/adminlogin',
      name:'login',
      component: AdminLogin
    },
  ]
})

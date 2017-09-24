import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home.vue';
import AdminLogin from '@/components/AdminLogin';
import ArticleList from '@/components/ArticleList.vue';
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/adminlogin',
      name:'login',
      component: AdminLogin
    },
    {
      path:'/home',
      component:Home,
      children:[
        {
          path:'articlelist',
          component:ArticleList
        },
        // {
        //   path:'articleinfo',
        //   component:ArticleInfo
        // },
        // {
        //   path:'article',
        //   component:Article
        // },
      ]
    }
  ]
})

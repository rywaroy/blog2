import Vue from 'vue'
import Router from 'vue-router'

const asyncComponent = (name) => {
  return resolve => require([`@/components/${name}`], resolve)
}
const Index = asyncComponent('Index')
const ArticelInfo = asyncComponent('Article/ArticleInfo')
const Comment = asyncComponent('Article/Comment')
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'index',
      component: Index
    },
    {
      path:'/article/info',
      name:'articleinfo',
      component:ArticelInfo
    },
    {
      path:'/article/info/comment',
      name:'comment',
      component:Comment
    }
  ]
})

// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router';
import VueRouter from 'vue-router'
import Index from './components/Index.vue'
import Mint from 'mint-ui';
import 'mint-ui/lib/style.css';
import './assets/reset.css';
import plus from './public'
import axiosPlugin from "./server";
Vue.use(axiosPlugin.plugin);
Vue.use(Mint);
Vue.use(VueRouter)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})

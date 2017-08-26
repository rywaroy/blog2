<template>
  <div id="home">
  <mt-tab-container v-model="selected" :swipeable="swiper">
    <mt-tab-container-item id="主页">
      <home></home>
    </mt-tab-container-item>
    <mt-tab-container-item id="文章">
      222
    </mt-tab-container-item>
    <mt-tab-container-item id="相册">
      333
    </mt-tab-container-item>
  </mt-tab-container>
  <mt-tabbar v-model="selected">
    <mt-tab-item id="主页">
      <img slot="icon" src="../assets/icon1.png">
      主页
    </mt-tab-item>
    <mt-tab-item id="文章">
      <img slot="icon" src="../assets/icon2.png">
      文章
    </mt-tab-item>
    <mt-tab-item id="相册">
      <img slot="icon" src="../assets/icon3.png">
      相册
    </mt-tab-item>
  </mt-tabbar>
  </div>
</template>
<script>
  import Home from './Home.vue'
  export default  {
      data(){
          return{
            selected:'主页',
            swiper:true
          }
      },
      components:{
          'home':Home
      }
  }
</script>
<style>
  .mint-tab-item:nth-child(1){
     color: #1296db;
   }
  .mint-tab-item:nth-child(2){
    color: #1afa29;
  }
  .mint-tab-item:nth-child(3){
    color: #d81e06;
  }
  .mint-tabbar .mint-tab-item:nth-child(1).is-selected{
    color: #1296db;
  }
  .mint-tabbar .mint-tab-item:nth-child(2).is-selected{
    color: #1afa29;
  }
  .mint-tabbar .mint-tab-item:nth-child(3).is-selected{
    color: #d81e06 !important;
  }
  .blog-page{
    width: 100%;
    height: 100vh;
    box-sizing: border-box;
    padding-bottom: 55px;
    overflow-x: hidden;
    overflow-y: auto;
    -webkit-overflow-scrolling: touch;
  }
</style>

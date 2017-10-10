<template>
  <div id="home">
  <mt-tab-container v-model="selected" :swipeable="swiper">
    <mt-tab-container-item id="home">
      <home></home>
    </mt-tab-container-item>
    <mt-tab-container-item id="article">
      <articles></articles>
    </mt-tab-container-item>
    <mt-tab-container-item id="album">
      <album></album>
    </mt-tab-container-item>
  </mt-tab-container>
  <mt-tabbar v-model="selected">
    <mt-tab-item id="home">
      <img slot="icon" src="../assets/icon1.png">
      主页
    </mt-tab-item>
    <mt-tab-item id="article">
      <img slot="icon" src="../assets/icon2.png">
      文章
    </mt-tab-item>
    <mt-tab-item id="album">
      <img slot="icon" src="../assets/icon3.png">
      相册
    </mt-tab-item>
  </mt-tabbar>
  </div>
</template>

<script>
  import Home from './Home/Home.vue'
  import Article from './Article/Article.vue'
  import Album from './Album/Album.vue'
  export default  {
      data(){
          return{
            selected:'home',
            swiper:true
          }
      },
      components:{
          'home':Home,
        'articles':Article,
        'album':Album
      }
  }
</script>
<style scoped lang="scss">
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

</style>

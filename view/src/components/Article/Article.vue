<template>
  <div class="blog-page">
    <mt-loadmore :top-method="loadTop" :autoFill="auto" :bottom-all-loaded="allLoaded" :bottom-method="loadBottom"
                 ref="loadmore">
      <article-item v-for="(item,index) in 10" :key="index"></article-item>
    </mt-loadmore>
  </div>
</template>
<script>
  import ArticleItem from './ArticleItem.vue'
  export default{
    data(){
      return {
        auto: false,
        allLoaded: false,
      }
    },
    components: {
      'article-item': ArticleItem
    },
    methods: {
      loadTop(){
        console.log(2)
        setTimeout(() => {
          this.$refs.loadmore.onTopLoaded();
        },1000)
      },
      loadBottom(){
        console.log(1)
        setTimeout(() => {
            this.$refs.loadmore.onBottomLoaded();
          },1000)
      }
    }
  }
</script>


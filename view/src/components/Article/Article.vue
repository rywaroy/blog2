<template>
  <div class="blog-page">
    <mt-loadmore :top-method="loadTop" :autoFill="auto" :bottom-all-loaded="allLoaded" :bottom-method="loadBottom"
                 ref="loadmore">
      <article-item v-for="(item,index) in list" :key="index" :info="item"></article-item>
    </mt-loadmore>
  </div>
</template>
<script>
  import ArticleItem from './ArticleItem.vue'
  import axios from 'axios'
  import plus from '../../public'
  export default{
    data(){
      return {
        auto: false,
        allLoaded: true,
        list:[],
        total:0,
        page:1
      }
    },
    components: {
      'article-item': ArticleItem
    },
    mounted(){
      this.getList();
    },
    computed:{
      canScroll(){
        if(this.page >= Math.ceil(this.total/10)){
          return true;
        }else{
          return false;
        }
      }
    },
    watch:{
      canScroll(){
        this.allLoaded = this.canScroll;
      }
    },
    methods: {
      loadTop(){
        this.page = 1;
        this.getList(1)
      },
      loadBottom(){
        this.page++;
        this.getList(2)
      },
      getList(type){
        var _this = this;
        axios.get(plus.path + '/article/list',{
          params:{
            page:_this.page
          }
        }).then(function(res){
            _this.list = res.data.data.list;
            _this.total = res.data.data.total;
            if(type == 1){
              _this.$refs.loadmore.onTopLoaded();
            }
            if(type == 2){
              _this.$refs.loadmore.onBottomLoaded();
            }
          })
      }
    }
  }
</script>


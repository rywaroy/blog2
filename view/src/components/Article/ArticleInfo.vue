<template>
  <div>
    <mt-header fixed title="这是一个文章的标题">
      <router-link to="/" slot="left">
        <mt-button icon="back">返回</mt-button>
      </router-link>
      <router-link :to="{name:'comment'}" slot="right">
        <mt-button>评论</mt-button>
      </router-link>
    </mt-header>
    <div class="article-info">
      <div class="article-info__title">这是一个文章的标题</div>
      <div class="article-info__time">2017-9-9</div>
      <div class="article-info__content">
        这是文章的内容这是文章的内容这是文章的内容这是文章的内容这是文章的内容这是文章的内容这是文章的内容这是文章的内容这是文章的内容这是文章的内容这是文章的内容这是文章的内容这是文章的内容这是文章的内容这是文章的内容这是文章的内容这是文章的内容这是文章的内容这是文章的内容这是文章的内容这是文章的内容这是文章的内容这是文章的内容这是文章的内容这是文章的内容这是文章的内容这是文章的内容这是文章的内容这是文章的内容这是文章的内容这是文章的内容这是文章的内容这是文章的内容这是文章的内容这是文章的内容这是文章的内容这是文章的内容这是文章的内容这是文章的内容这是文章的内容这是文章的内容这是文章的内容这是文章的内容这是文章的内容这是文章的内容这是文章的内容这是文章的内容这是文章的内容这是文章的内容这是文章的内容这是文章的内容这是文章的内容这是文章的内容这是文章的内容这是文章的内容这是文章的内容这是文章的内容这是文章的内容这是文章的内容这是文章的内容这是文章的内容这是文章的内容这是文章的内容这是文章的内容这是文章的内容这是文章的内容这是文章的内容这是文章的内容这是文章的内容这是文章的内容这是文章的内容这是文章的内容这是文章的内容这是文章的内容这是文章的内容这是文章的内容这是文章的内容这是文章的内容这是文章的内容这是文章的内容这是文章的内容这是文章的内容这是文章的内容这是文章的内容这是文章的内容这是文章的内容这是文章的内容这是文章的内容这是文章的内容这是文章的内容这是文章的内容这是文章的内容这是文章的内容这是文章的内容这是文章的内容这是文章的内容
      </div>
      <div class="article-info__comment">
        <div class="article-info__comment__title">评论</div>
        <comment-item v-for="(item,index) in 8" :key="index"></comment-item>
      </div>
    </div>
  </div>
</template>
<script>
  import CommentItem from './CommentItem.vue'
  export default{
      components:{
          'comment-item':CommentItem
      }
  }
</script>
<style scoped lang="scss" rel="stylesheet/scss">
  .article-info {
    background: #fff;
    padding: 50px .3rem .3rem;
    width: 100%;
    height: 100vh;
    overflow-x: hidden;
    overflow-y: auto;
    -webkit-overflow-scrolling: touch;
    &__title {
      font-size: .4rem;
      line-height: .5rem;
      text-align: center;
    }
    &__time {
      font-size: .3rem;
      line-height: 1;
      color: #999;
      text-align: center;
      margin-top: .3rem;
    }
    &__content {
      font-size: .3rem;
      line-height: .42rem;
      margin-top: .3rem;
      padding-bottom: .3rem;
      border-bottom: 1px solid #e8e8e8;
    }
    &__comment{
      margin-top: .3rem;
      &__title{
        font-size: .35rem;
        line-height: 1;
        margin-bottom: .4rem;
      }
    }
  }

</style>

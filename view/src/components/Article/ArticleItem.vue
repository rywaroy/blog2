<template>
  <router-link tag="div" :to="{name:'articleinfo'}" class="article-item">
    <div class="article-item__tag">日志</div>
    <div class="article-item__title">这是一篇文章的标题</div>
    <div class="article-item__content">这是一篇文章的概括这是一篇文章的概括这是一篇文章的概括这是一篇文章的概括这是一篇文章的概括这是一篇文章的概括这是一篇文章的概括这是一篇文章的概括</div>
    <div class="article-item__time">2017-9-9</div>
  </router-link>
</template>
<style scoped lang="scss" rel="stylesheet/scss">
  .article-item{
    background: #fff;
    padding: .3rem;
    margin-bottom: .2rem;
    position: relative;
    &__tag{
      font-size: .24rem;
      line-height: .4rem;
      height: .4rem;
      padding: 0 .1rem;
      background: blue;
      color: #fff;
      position: absolute;
      right: .3rem;
      top: .2rem;
      border-radius: .08rem;
    }
    &__title{
      font-size: .36rem;
      line-height: .4rem;
    }
    &__content{
      font-size: .28rem;
      line-height: .34rem;
      color: #666;
      margin-top: .2rem;
    }
    &__time{
      font-size: .24rem;
      line-height: .34rem;
      color: #999;
      margin-top: .2em;
    }
  }
</style>

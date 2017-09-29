<template>
  <router-link tag="div" :to="{name:'articleinfo'}" class="article-item">
    <div class="article-item__tag">{{info.tag}}</div>
    <div class="article-item__title">{{info.title}}</div>
    <div class="article-item__content">{{info.intro}}</div>
    <div class="article-item__time">{{info.time.split('T')[0]}}</div>
  </router-link>
</template>
<script>
export default {
  props:['info']
}
</script>

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
      background: #99ccff;
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

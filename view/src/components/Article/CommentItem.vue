<template>
  <div class="comment-item">
    <div class="comment-item__name">{{info.name}}</div>
    <div class="comment-item__content">{{info.content}}</div>
    <div class="comment-item__time">{{info.time?info.time.split('T')[0]:''}}</div>
  </div>
</template>
<script>
export default {
  props:['info']
}
</script>

<style scoped lang="scss" rel="stylesheet/scss">
  .comment-item{
    margin-bottom: .35rem;
    &__name{
      font-size: .32rem;
      line-height: .3rem;
      color: #666;
    }
    &__content{
      font-size: .3rem;
      line-height: .36rem;
      margin-top: .2rem;
    }
    &__time{
      font-size: .28rem;
      line-height: 1;
      margin-top: .3rem;
      color: #999;
    }
  }
</style>

<template>
  <div>
    <mt-header fixed title="这是一个文章的标题">
      <router-link to="/" slot="left">
        <mt-button icon="back">返回</mt-button>
      </router-link>
      <a slot="right" @click="linkComment()">
        <mt-button>评论</mt-button>
      </a>
    </mt-header>
    <div class="article-info">
      <div class="article-info__title">{{info.title}}</div>
      <div class="article-info__time">{{info.time?info.time.split('T')[0]:''}}</div>
      <div class="article-info__content" v-html="info.content"></div>
      <div class="article-info__comment">
        <div class="article-info__comment__title">评论</div>
        <comment-item v-for="(item,index) in comments" :key="index" :info="item"></comment-item>
      </div>
    </div>
  </div>
</template>
<script>
import CommentItem from './CommentItem.vue'
import axios from 'axios'
import plus from '../../public'
export default {
  data() {
    return {
      info: {},
      comments:[]
    }
  },
  components: {
    'comment-item': CommentItem
  },
  activated() {
    this.getInfo();
    this.getComment();
  },
  methods: {
    getInfo() {
      var _this = this;
      axios.get(plus.path + '/article/info?id=' + this.$route.query.id)
        .then(function(res) {
          if (res.data.status == '0000') {
            _this.info = res.data.data;
          }
        })
    },
    getComment(){
      var _this = this;
      axios.get(plus.path + '/article/comment?id=' + this.$route.query.id)
        .then(function(res){
          if (res.data.status == '0000') {
            _this.comments = res.data.data;
          }
        })
    },
    linkComment(){
      this.$router.push({name:'comment',query:{id:this.info.id}})
    }
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
  &__comment {
    margin-top: .3rem;
    &__title {
      font-size: .35rem;
      line-height: 1;
      margin-bottom: .4rem;
    }
  }
}
</style>

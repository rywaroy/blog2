<template>
  <div>
    <mt-header fixed title="评论">
      <div slot="left">
        <mt-button icon="back" @click="back()">返回</mt-button>
      </div>
    </mt-header>
  <div class="comment">
    <mt-field label="昵称" placeholder="请输入昵称(不填则为匿名)" v-model="username"></mt-field>
    <mt-field label="评论内容" placeholder="评论内容(200字)" type="textarea" rows="4" v-model="introduction"></mt-field>
    <mt-button class="comment__btn" type="primary" @click="publish()">提交</mt-button>
  </div>
  </div>
</template>
<script>
  import axios from 'axios'
  import plus from '../../public'
  import {Toast} from 'mint-ui'
  export default{
    data(){
      return {
        username: '',
        introduction:''
      }
    },
    methods:{
        back(){
          this.$router.go(-1)
        },
        publish(){
          var _this = this;
          if(!this.introduction){
            Toast('请输入评论内容');
            return;
          }
          axios.post(plus.path + '/article/comment',{
            name:this.username,
            content:this.introduction,
            id:this.$route.query.id
          }).then(function(res){
            if(res.data.status == '0000'){
              Toast('评论成功');
              setTimeout(function(){
                _this.$router.go(-1)
              },1000)
            }
          })
        }
    }
  }
</script>
<style scoped lang="scss" rel="stylesheet/scss">
  .comment {
    padding-top: 40px;
    height: 100vh;
    width: 100%;
    background: #fff;
    &__btn{
      width: 88%;
      margin: .5rem auto 0;
      display: block;
    }
  }
</style>

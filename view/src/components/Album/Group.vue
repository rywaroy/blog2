<template>
  <div class="group">
    <mt-header fixed :title="title">
      <router-link to="/" slot="left">
        <mt-button icon="back">返回</mt-button>
      </router-link>
    </mt-header>
    <ul class="group-list">
        <li class="group-item" v-for="(item,index) in list" :key="index"><img v-lazy.container="item.url" src="" alt=""></li>
    </ul>
  </div>
</template>
<script>
import axios from "axios";
import plus from "../../public";
export default {
  name:'group',
  data(){
    return{
      list:[],
      title:''
    }
  },
  mounted(){
    this.title = this.$route.query.title
    this.getGroup();
  },
  methods:{
    getGroup() {
      var _this = this;
      axios.get(plus.path + "/album/group?id=" + this.$route.query.id)
        .then(function(res) {
          if (res.data.status == "0000") {
            _this.list = res.data.data;
          }
        });
    },
  }
}
</script>
<style lang="scss" scoped>
.group{
  padding-top: 40px;
  height: 100vh;
  overflow-x: hidden;
  overflow-y: auto;
  -webkit-overflow-scrolling: touch;
  &-list{
    width: 100%;
  }
  &-item{
    width: 100%;
    text-align: center;
    img{
      max-width: 100%;
    }
  }
}
</style>

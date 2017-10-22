<template>
  <div class="blog-page">
     <div class="album f-cb">
       <router-link tag="div" :to="{name:'group',query:{id:item.id,title:item.title}}" class="album-item fl" v-for="(item,index) in list" :key="index">
         <div class="album-item-img bg-cover" :style="{backgroundImage:'url('+item.img+')'}"></div>
         <div class="album-item-title">{{item.title}}</div>
        </router-link>
     </div>
  </div>
</template>
<script>
import axios from "axios";
import plus from "../../public";
export default {
  data() {
    return {
      list: []
    };
  },
  mounted() {
    this.getAlbum();
  },
  methods: {
    getAlbum() {
      var _this = this;
      axios.get(plus.path + "/album/album").then(function(res) {
        if (res.data.status == "0000") {
          _this.list = res.data.data;
        }
      });
    }
  }
};
</script>

<style lang="scss" scoped>
.album {
  padding: 0.3rem;
  &-item {
    width: 3.3rem;
    float: left;
    margin-right: 0.3rem;
    margin-bottom: 0.3rem;
    &:nth-child(2n) {
      margin-right: 0;
    }
    &-img {
      width: 3.3rem;
      height: 3.3rem;
    }
    &-title {
      text-align: center;
      font-size: 0.3rem;
      line-height: 0.6rem;
    }
  }
}
</style>

<template>
  <div id="app">
    <transition :name="transitionName">
      <keep-alive exclude="group">
        <router-view class="child-view"></router-view>
      </keep-alive>
    </transition>
  </div>
</template>

<script>
  export default {
    data(){
      return {
        transitionName: ''
      }
    },
    name: 'app',
    watch: {
      '$route' (to, from) {
        const toDepth = to.path.split('/').length
        const fromDepth = from.path.split('/').length
        this.transitionName = toDepth < fromDepth ? 'slide-right' : 'slide-left'
      }
    }
  }
</script>

<style>
  * {
    margin: 0;
    padding: 0;
  }
</style>

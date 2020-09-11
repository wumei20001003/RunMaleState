<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'App',
  components: {
    // homePage
  },
    created() {
        window.onload = function() {
            document.addEventListener('touchstart', function(event) {
                if (event.touches.length > 1) {
                    event.preventDefault()
                }
            })
            document.addEventListener('gesturestart', function(event) {
                event.preventDefault()
            })
        }
    }
}
</script>

<style lang="less">
  *{
    padding:0;
    margin: 0;
    box-sizing: border-box;
    text-decoration: none;
  }
  .van-nav-bar .van-icon{
    color: #444444!important;
  }
</style>

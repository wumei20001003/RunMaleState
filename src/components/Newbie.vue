<template>
  <div class="onlineItem-wrap">
    <Header :headerTitle="headerTitle"></Header>
    <div class='img_bc'><img src="../../public/imgs/Newbie.png" alt=""></div>
  </div>
</template>

<script>
    import Header from './header'
    export default {
        name: "home.vue",
        components: {Header},
        data() {
            return {
                headerTitle:"跑男培训-新手指南-新手入门",
            }
        },
        mounted() {},
        created() {

        },
        methods: {

        }
    }
</script>

<style scoped lang="less">
  .img_bc{
    width: 100%;
    height: 100%;
    img{
      width: 100%;
      height: 100%;
    }
  }
</style>

<template>
  <div class="home-wrap">
    <div class="homeTitle">{{projectTitle}}</div>
    <div class="homeMain">
      <van-sidebar v-model="activeKey">
        <router-link to="/training"><van-sidebar-item title="跑男培训" /></router-link>
        <van-sidebar-item title="装备" />
        <van-sidebar-item title="奖励活动" />
        <router-link to="/healthCertificate"><van-sidebar-item title="健康认证" /></router-link>
        <router-link to="/vehicleInformation"><van-sidebar-item title="车辆信息" /></router-link>
        <van-sidebar-item title="在线客服" />
      </van-sidebar>
    </div>
  </div>
</template>

<script>

  export default {
    name: "home.vue",
    components: {},
    data() {
      return {
        projectTitle: '跑男邦',
        activeKey:0
      }
    },
    mounted() {},
    methods: {}
  }
</script>

<style scoped lang="less">
  @import "../style/home.less";
</style>

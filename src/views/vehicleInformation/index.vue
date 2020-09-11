<template>
  <div class="vehicleInformation-wrap">
    <Header :headerTitle="headerTitle"></Header>
    <div class="vehicleInformation-con-no">
      <b>暂未报备</b>
      <div class="bottom">
        <van-button class="bottomBtn" type="primary" @click="reportedEvent">直接报备</van-button>
      </div>
    </div>
  </div>
</template>

<script>
    import Header from '../../components/header'
    export default {
        name: "index",
        components: {Header},
        data() {
            return {
                headerTitle:"我的交通工具",
            }
        },
        mounted() {},
        created() {},
        methods: {
            reportedEvent() {
              this.$router.push({name:'Choice'})
            }
        }
    }
</script>

<style scoped lang="less">
.vehicleInformation-wrap{
  .vehicleInformation-con-no{
    width: 100%;
    height: 3rem;
    text-align: center;
    b{
      font-size: 0.16rem;
      font-weight: 400;
      color: #ACACAC;
    }
  }
  .bottom{
    width: 100%;
    height: 0.5rem;
    padding-top: 0.1rem;
    display:flex;
    justify-content:center;
    background: #fff;
    .bottomBtn{
      width: 3.35rem;
      height: 0.4rem;
      border-radius: 0.3rem;
      background: #FF7A00;
      border:0;
    }
  }
}
</style>

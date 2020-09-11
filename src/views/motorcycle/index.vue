<template>
  <div class="motorcycle-wrap">
    <Header :headerTitle="headerTitle"></Header>
      <div class="online-con">
        <h1>摩托车</h1>
        <p>请准备好驾驶证、行驶证、车牌号、车辆照片</p>
      </div>
    <div class="motorcycleList">
      <ul>
        <li @click="informationEvent">
          <p>车辆信息</p>
          <div class="motorcycleList-con">
            <span>未填写</span>
            <van-icon class="rightAllow" name="arrow" />
          </div>
        </li>
        <li @click="DrivingEvent">
          <p>行驶证信息</p>
          <div class="motorcycleList-con">
            <span>未填写</span>
            <van-icon class="rightAllow" name="arrow" />
          </div>
        </li>
        <li>
          <p>驾驶证</p>
          <div class="motorcycleList-con">
            <span>未填写</span>
            <van-icon class="rightAllow" name="arrow" />
          </div>
        </li>
      </ul>
    </div>
    <div class="bottom">
      <van-button class="bottomBtn" type="primary">确认并提交</van-button>
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
                headerTitle:"填写信息"
            }
        },
        mounted() {},
        created() {},
        methods: {
            informationEvent() {
                this.$router.push('/vehicleInformation/information')
            },
            DrivingEvent() {
                this.$router.push('/vehicleInformation/information')
            }
        }
    }
</script>

<style scoped lang="less">
  .motorcycleList{
    width: 100%;
    padding: 0 0.2rem;
    ul{
      width: 100%;
       li{
         width: 100%;
         display: flex;
         justify-content: space-between;
         border-bottom:0.01rem solid #EEEEEE;
         padding: 0.2rem 0;
         p{
           font-size: 0.12rem;
           font-weight: 400;
           color: #3D3C3C;
           flex: 1;
         }
         .motorcycleList-con{
           /*flex: 1;*/
           display: flex;
           span{
             display: block;
             font-size: 0.12rem;
             font-weight: 400;
             color: #FF7A00;
           }
           .rightAllow{
             display: block;
             font-size: 0.14rem;
             color: #999;
             padding-top: 0.03rem;
           }
         }
       }
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
  .online-con{
    margin: 0.2rem 0.2rem 0 0.2rem;
    h1{
      font-size: 0.16rem;
      color: #4E4D4D;
    }
    p{
      font-size: 0.12rem;
      color: #C0C0C0;
      margin-top: 0.08rem;
    }
  }
</style>

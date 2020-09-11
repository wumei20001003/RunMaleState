<template>
  <div class="Choice-wrap">
    <Header :headerTitle="headerTitle"></Header>
    <div class="carList">
      <ul>
        <li @click="electricCarsEvent">
          <div class="carImgs"><img src="../../../public/imgs/camera.png" alt=""></div>
          <div class="carName">电动车</div>
          <p>去报备<van-icon class="rightArrow" name="arrow" /></p>
        </li>
        <li @click="motorcycleEvent">
          <div class="carImgs"><img src="../../../public/imgs/camera.png" alt=""></div>
          <div class="carName">摩托车</div>
          <p>去报备<van-icon class="rightArrow" name="arrow" /></p>
        </li>
        <li>
          <div class="carImgs"><img src="../../../public/imgs/camera.png" alt=""></div>
          <div class="carName">小轿车</div>
          <p>去报备<van-icon class="rightArrow" name="arrow" /></p>
        </li>
      </ul>
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
                headerTitle:"选择交通工具",
            }
        },
        mounted() {},
        created() {},
        methods: {
            electricCarsEvent() {
                this.$router.push('/vehicleInformation/electricCars')
            },
            motorcycleEvent() {
                this.$router.push('/vehicleInformation/motorcycle')
            }
        }
    }
</script>

<style scoped lang="less">
  .Choice-wrap{
    .carList{
      width:100%;
      height: 1.56rem;
      border-top:0.01rem solid #EEEEEE;
      border-bottom:0.01rem solid #EEEEEE;
      ul{
        display: flex;
        justify-content: space-around;
        flex-wrap: nowrap;
        li:nth-child(3){
          border: 0;
        }
        li{
          width: 33%;
          height: 1.56rem;
          display: flex;
          flex-direction: column;
          justify-content: center;
          border-right:0.01rem solid #EEEEEE;
          padding: 0 0.35rem;
          .carImgs{
            width: 100%;
            height: 0.25rem;
            img{
              display: block;
              width: 0.36rem;
              height: 0.25rem;
            }
          }
          .carName{
            font-size: 0.12rem;
            font-weight: 400;
            color: #ACACAC;
            padding: 0.17rem 0;
          }
          p{
            font-size: 0.1rem;
            font-weight: 400;
            color: #FF7A00;
            .rightArrow{
              display: inline-block;
              padding-top: 0.03rem;
            }
          }
        }
      }
    }
  }
</style>

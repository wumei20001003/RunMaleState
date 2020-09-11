<template>
  <div class="electricCars-wrap">
    <Header :headerTitle="headerTitle"></Header>
    <div class="electricCars-header">
      <div class="online-con">
        <h1>普通电动车</h1>
        <p>请准备好车牌号、车辆照片等信息</p>
      </div>
      <van-form>
        <van-field
          v-model="form.carNumber"
          type="input"
          name="车牌号"
          label="车牌号"
          placeholder="若无，则不填写"
        />
      </van-form>
      <p class="upImgs">上传照片</p>
    </div>
    <div class="electricCars-con">
      <ul>
        <li>
          <p>车头照</p>
          <div class="frontCord">
            <b class="camera"><img src="../../../public/imgs/camera.png" alt=""></b>
            <b>点击上传 <br/>请上传完整车头</b>
          </div>
        </li>
        <li>
          <p>车身照</p>
          <div class="frontCord">
            <b class="camera"><img src="../../../public/imgs/camera.png" alt=""></b>
            <b>点击上传 <br/>请确保车辆清晰，车身完整</b>
          </div>
        </li>
        <li>
          <p>车尾照</p>
          <div class="frontCord">
            <b class="camera"><img src="../../../public/imgs/camera.png" alt=""></b>
            <b>点击上传 <br/>请确保车辆清晰，车尾完整</b>
          </div>
        </li>
        <li>
          <p>侧后方45度照</p>
          <div class="frontCord">
            <b class="camera"><img src="../../../public/imgs/camera.png" alt=""></b>
            <b>点击上传 <br/>请确保完整车身，并确保车牌清晰</b>
          </div>
        </li>
      </ul>
    </div>
    <div class="bottom">
      <van-button class="bottomBtn" type="primary">确认并提交认证</van-button>
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
                headerTitle:"填写信息",
                form:{
                    carNumber:'' //车牌号
                }
            }
        },
        mounted() {},
        created() {},
        methods: {
            //选择地区
            onConfirm(values) {
                this.form.value = values.map((item) => item.name).join('/');
                this.showArea = false;
            },
            //日历选择
            onReleaseDate(date) {
                this.form.eleaseDate = `${date.getMonth() + 1}/${date.getDate()}`;
                this.releaseFlag = false;
            }
        }
    }
</script>

<style scoped lang="less">
  .electricCars-wrap{
    width: 100%;
    height: 100%;
    background: #EEEEEE;;
    .electricCars-header{
      width: 100%;
      height: 1.22rem;
      background: #fff;
      margin-top: 0.05rem;
    }
    .electricCars-con{
      width: 100%;
      background: #fff;
      ul{
        width: 100%;
        padding: 0 0.2rem;
        li:nth-child(1){
          padding-top: 0.21rem;
        }
        li:nth-child(4){
          margin-bottom: 0;
        }
        li{
          margin-bottom:0.31rem;
          p{
            font-size: 0.15rem;
            color: #3D3C3C;
            margin-bottom: 0.1rem;
            b{
              font-size: 0.12rem;
              color:#C5C5C5;
              font-weight: normal;
            }
          }
          .frontCord{
            width: 100%;
            height: 1.6rem;
            border: 0.01rem dashed #FF7A00;
            display: flex;
            flex-direction: column;
            background: #FFF3E9;
            border-radius: 0.05rem;
            text-align: center;
            justify-content: center;
            .camera{
              width: 100%;
              height: 0.2rem;
              margin-bottom: 0.12rem;
              img{
                width: 0.25rem;
                height: 0.2rem;
              }
            }
            b{
              font-size: 0.12rem;
              font-weight: normal;
              color: #FF7A00;
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
  }
  .online-con{
    padding-top: 0.1rem;
    margin: 0 0.2rem 0 0.17rem;
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
  .upImgs{
    font-size: 0.15rem;
    font-weight: 500;
    color: #3D3C3C;
    padding:0 0.18rem;
    margin-top: 0.2rem;
  }
</style>

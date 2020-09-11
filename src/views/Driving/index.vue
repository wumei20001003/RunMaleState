<template>
  <div class="Driving-wrap">
    <Header :headerTitle="headerTitle"></Header>
    <div class="Driving-con">
      <ul>
        <li>
          <p>健康证正面照 <b>（请确保证件信息清晰可见）</b></p>
          <div class="frontCord">
            <b class="camera"><img src="../../../public/imgs/camera.png" alt=""></b>
            <b>点击拍摄 <br/>健康证正面照</b>
          </div>
        </li>
        <li>
          <p>健康证反面照 <b>（请确保证件信息清晰可见）</b></p>
          <div class="frontCord">
            <b class="camera"><img src="../../../public/imgs/camera.png" alt=""></b>
            <b>点击拍摄 <br/>健康证反面照</b>
          </div>
        </li>
      </ul>
    </div>
    <div class="Driving-header">
      <van-form>
        <van-field
          readonly
          clickable
          name="area"
          :value="form.city"
          label="发证城市"
          placeholder="发证城市和工作城市需保持一致"
          @click="showArea = true"
        />
        <van-popup v-model="showArea" position="bottom">
          <van-area
            :area-list="areaList"
            @confirm="onConfirm"
            @cancel="showArea = false"
          />
        </van-popup>
        <van-field
          v-model="form.number"
          type="password"
          name="健康证号"
          label="健康证号"
          placeholder="请输入健康证号或证件上其他编号"
        />
        <van-field
          readonly
          clickable
          name="calendar"
          :value="form.releaseDate"
          label="发证日期"
          placeholder="请选择任意一个证件日期"
          @click="releaseFlag = true"
        />
        <van-calendar v-model="releaseFlag" @confirm="onReleaseDate" />
      </van-form>
    </div>
    <div class="bottom">
      <van-button class="bottomBtn" type="primary">{{certification}}</van-button>
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
                headerTitle:"驾驶证信息",
                currentDate: new Date(),
                releaseFlag:false, //日历显示隐藏
                showArea: false, //地区选择
                areaList: {}, // 数据格式见 Area 组件文档
                certification:'确认并提交认证',
                form:{
                    city:'', //城市
                    releaseDate:'', //发证日期
                    number:'' //健康证号
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
  .Driving-wrap{
    width: 100%;
    height: 100%;
    background: #EEEEEE;
    .Driving-header{
      width: 100%;
      height: 1.22rem;
      background: #fff;
      margin: 0.1rem 0;
    }
    .Driving-con{
      width: 100%;
      background: #fff;
      margin-top: 0.2rem;
      ul{
        width: 100%;
        padding: 0 0.2rem;
        li:nth-child(1){
          padding-top: 0.21rem;
        }
        li:nth-child(2){
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
</style>

<template>
  <div class="healthCertificate-wrap">
    <Header :headerTitle="headerTitle"></Header>
    <div class="healthCertificate-header">
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
            :area-list="areaList" ref="myArea" title="选择城市" @change="onChange" @confirm="onConfirm" @cancel="onCancel"
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
    <div class="healthCertificate-con">
      <ul>
        <li>
          <p>健康证正面照 <b>（请确保证件信息清晰可见）</b></p>
          <div class="frontCord">
            <div class="avatar"><input type="file" accept="image/*" multiple ></div>
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
    <div class="bottom">
      <van-button class="bottomBtn" type="primary">{{certification}}</van-button>
    </div>
  </div>
</template>

<script>
    import Header from '../../components/header'
    import areaList from '../../../public/mock/area'
    export default {
        name: "index",
        components: {Header},
        data() {
            return {
                headerTitle:"健康证",
                currentDate: new Date(),
                releaseFlag:false, //日历显示隐藏
                showArea: false, //地区选择
                areaList, // 数据格式见 Area 组件文档
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
            //value=0改变省，1改变市，2改变区
            onChange(picker, index, value){
                let val = picker.getValues();
                let areaName = ''
                for (var i = 0; i < val.length; i++) {
                    areaName = areaName+(i==0?'':'/')+val[i].name
                }
                this.form.city = areaName
            },
            //确定选择城市
            onConfirm(val){
                console.log(val[0].name+","+val[1].name)
                this.showArea = false//关闭弹框
            },
            //取消选中城市
            onCancel(){
                this.showArea = false
                this.$refs.myArea.reset()// 重置城市列表
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
.healthCertificate-wrap{
  width: 100%;
  height: 100%;
  background: #EEEEEE;
  .healthCertificate-header{
    width: 100%;
    height: 1.22rem;
    background: #fff;
    margin: 0.1rem 0;
  }
  .healthCertificate-con{
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
          position: relative;
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
.frontCord input {
  width: 100%;
  height: 1.6rem;
  display: inline-block;
  position: absolute;
  font-size: 12px;
  top: 0;
  left: 0;
  opacity: 0;
  z-index: 1;
  cursor: pointer;
  overflow:hidden;
}

</style>

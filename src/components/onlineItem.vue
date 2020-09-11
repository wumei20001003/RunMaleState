<template>
  <div class="onlineItem-wrap">
    <Header :headerTitle="headerTitle"></Header>
    <div class="online-con">
      <h1>{{onlineTit}}</h1>
      <p>{{onlineCon}}</p>
    </div>
    <div class="online-list">
      <ul>
        <li v-for="item in dataList.itemList" :key="item.id" @click="itemEvent(item)">
          <b>{{item.id}}、{{item.name}}</b>
          <van-button class="onlineBtn" type="primary">{{item.listBtn}}</van-button>
        </li>
      </ul>
    </div>
    <div class="bottom">
      <van-button class="bottomBtn" type="primary">{{onlineBtn}}</van-button>
    </div>
    <div class="agreement">
      <van-checkbox @change="checkEvent" class="cheBtn" checked-color="#FF7A00" v-model="onlineRadio">&nbsp;</van-checkbox>
      <p>我已阅读，并同意<b>《跑男邦在线服务协议》</b></p>
    </div>
  </div>
</template>

<script>
import Header from './header'
    export default {
        name: "home.vue",
        components: {Header},
        data() {
            return {
                headerTitle:"跑男培训-新手指南",
                dataList:[],
                onlineBtn:'开始测评',
                onlineTit:"",
                onlineCon:"",
                onlineRadio:false
            }
        },
        mounted() {},
        created() {
            this.dataList = this.$route.query.itemList;
            this.onlineTit = this.$route.query.itemList.name;
            this.onlineCon = this.$route.query.itemList.con;
        },
        methods: {
            checkEvent() {
                if(this.onlineRadio){
                    $(".bottomBtn").css("background-color","#FF7A00");
                }else{
                    $(".bottomBtn").css("background-color","#E3E3E3");
                }
            },
            itemEvent(item) {
                if(this.onlineRadio){
                    this.$router.push({name:'Newbie',query: {itemList:item}})
                }else{
                    // $(".bottomBtn").css("background-color","#E3E3E3");
                }
            }
        }
    }
</script>

<style scoped lang="less">
  .online-con{
    margin: 0.35rem 0.3rem;
    h1{
      font-size: 0.16rem;
      color: #4E4D4D;
    }
    p{
      font-size: 0.14rem;
      color: #C0C0C0;
      margin-top: 0.08rem;
    }
  }
  .online-list{
    ul{
      li{
        display: flex;
        flex-direction: row;
        height: 0.5rem;
        justify-content: space-between;
        align-items: center;
        margin-top: 0.32rem;
        border-bottom: 1px solid #F5F5F5;
        padding: 0 0.3rem 0.32rem 0.3rem;
        b{
          color: #5D5C5C;
          font-size: 0.14rem;
        }
        .onlineBtn{
          height: 0.18rem;
          border-radius: 0.04rem;
          font-size: 0.14rem;
          color: #fff;
          background:#FF7A00;
          border: 0;
        }
        .van-button{
          line-height: 0!important;
        }
      }
    }

  }
  .bottom{
    width: 100%;
    height: 0.5rem;
    margin-top: 0.1rem;
    display:flex;
    justify-content:center;
    .bottomBtn{
      width: 3.35rem;
      height: 0.4rem;
      border-radius: 0.3rem;
      background: #E3E3E3;
      border:0;
    }
    .OfflineBtn{
      background: #FF7A00;
    }
  }
  .agreement{
    font-size: 0.12rem;
    color: #C0C0C0;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    .cheBtn{
      margin-right: 0.1rem;
      .van-checkbox__icon .van-icon{
        width: 0.15rem!important;
        height: 0.15rem!important;
      }
    }
    p{
      b{
        color: #FF7A00;
      }
    }

  }
</style>

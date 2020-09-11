<template>
  <div class="training-wrap">
      <Header :headerTitle="headerTitle"></Header>
      <div class="training-container">
        <van-tabs
          v-model="active"
          :border="false"
          title-inactive-color="#C0C0C0"
          title-active-color="#FF8D24"
          color="#FF8D24">
          <van-tab title="线上培训">
            <div class="online-container">
              <div class="online-con">
                <h1>基础培训</h1>
                <p>学习内容，通过后获得相应接单资格</p>
              </div>
              <div class="online-list">
                <ul>
                  <li v-for="item in onlineList" :key="item.id" @click="onlineEvent(item)">
                    <b>{{item.id}}、{{item.name}}</b>
                    <van-button class="onlineBtn" type="primary">{{item.listBtn}}</van-button>
                  </li>
                </ul>
              </div>
              <div class="bottom">
                <van-button class="bottomBtn" type="primary">{{onlineBtn}}</van-button>
              </div>
            </div>
          </van-tab>
          <van-tab title="线下培训">
            <div class="Offline">
              <div class="Offline-list">
                <ul>
                  <li v-for="item in OfflineList" :key="item.id">
                    <b>{{item.name}}</b>
                    <van-radio-group v-model="OfflineRadio" @change="OfflineEvent">
                      <van-radio :name="item.id" checked-color="#FF7A00">&nbsp;</van-radio>
                    </van-radio-group>
                  </li>
                </ul>
              </div>
              <div class="bottom">
                <van-button class="bottomBtn OfflineBtn" type="primary">{{OfflineBtn}}</van-button>
              </div>
            </div>
            <div class="Offline" v-if="OfflineFlog">
              <div class="Offline-con">
                <h1>暂未开通</h1>
                <p>由于疫情原因，线下培训暂未开通</p>
              </div>
            </div>
          </van-tab>
        </van-tabs>
      </div>
  </div>
</template>

<script>
import Header from "../../components/header"
  export default {
    components:{ Header },
      data() {
        return {
            headerTitle:'跑男培训', //顶部header文字
            active:0, //线上学习和线下学习的tab标识
            onlineBtn:"开始接单", //线上学习的按钮文字
            OfflineBtn:"确定选择站点", //线下学习的按钮文字
            OfflineRadio:'', //线下学习的选中站点
            OfflineFlog:false, //根据得分判断是否可以进行学习
            //线上培训列表
            onlineList:[
                {
                    id:'1',
                    name:"新手指南",
                    listBtn:'学习',
                    con:"学习内容，通过后获得相应接单资格备份",
                    itemList:[
                        {
                            id:'1',
                            name:'新手入门',
                            listBtn:'学习',
                        },
                        {
                            id:'2',
                            name:'新手完成',
                            listBtn:'学习',
                        }
                    ]
                },
                {
                    id:'2',
                    name:"服务类型",
                    con:"学习内容，通过后获得相应接单资格备份",
                    listBtn:'学习',
                    itemList:[
                        {
                            id:'1',
                            name:'配送流程',
                            listBtn:'学习',
                        },
                        {
                            id:'2',
                            name:'服务流程',
                            listBtn:'学习',
                        }
                    ]
                },
                {
                    id:'3',
                    name:"服务承诺",
                    con:"学习内容，通过后获得相应接单资格备份",
                    listBtn:'学习',
                    itemList:[
                        {
                            id:'1',
                            name:'平台使用承诺',
                            listBtn:'学习',
                        }
                    ]
                },
                {
                    id:'4',
                    name:"安全知识",
                    con:"学习内容，通过后获得相应接单资格备份",
                    listBtn:'学习',
                    itemList:[
                        {
                            id:'1',
                            name:'行车安全',
                            listBtn:'学习',
                        },
                        {
                            id:'2',
                            name:'保险理赔流程',
                            listBtn:'学习',
                        }
                    ]
                },
                {
                    id:'5',
                    name:"异常上报",
                    con:"学习内容，通过后获得相应接单资格备份",
                    listBtn:'学习',
                    itemList:[
                        {
                            id:'1',
                            name:'送达异常上报',
                            listBtn:'学习',
                        }
                    ]
                }
            ],
            //线下培训列表
            OfflineList:[
                {
                    id:'1',
                    name:"XX站点"
                },
                {
                    id:'2',
                    name:"XX站点"
                },
                {
                    id:'3',
                    name:"XX站点"
                },
                {
                    id:'4',
                    name:"XX站点"
                },
                {
                    id:'5',
                    name:"XX站点"
                }
            ]
        }
      },
      methods:{
          //线上培训列表点击事件
          onlineEvent(item) {
              this.$router.push({name:'onlineItem',query: {itemList:item}})
          },
          //线下选择框没值时  按钮置灰
          OfflineEvent() {

          }
      }
  }
</script>

<style scoped lang="less">
  @import "../style/training.less";
</style>

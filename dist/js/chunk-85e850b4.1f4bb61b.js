(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-85e850b4"],{"2cb1":function(t,n,i){"use strict";var e=i("7f41"),a=i.n(e);a.a},"48b3":function(t,n,i){"use strict";i.r(n);var e=function(){var t=this,n=t.$createElement,i=t._self._c||n;return i("div",{staticClass:"training-wrap"},[i("Header",{attrs:{headerTitle:t.headerTitle}}),i("div",{staticClass:"training-container"},[i("van-tabs",{attrs:{border:!1,"title-inactive-color":"#C0C0C0","title-active-color":"#FF8D24",color:"#FF8D24"},model:{value:t.active,callback:function(n){t.active=n},expression:"active"}},[i("van-tab",{attrs:{title:"线上培训"}},[i("div",{staticClass:"online-container"},[i("div",{staticClass:"online-con"},[i("h1",[t._v("基础培训")]),i("p",[t._v("学习内容，通过后获得相应接单资格")])]),i("div",{staticClass:"online-list"},[i("ul",t._l(t.onlineList,(function(n){return i("li",{key:n.id,on:{click:function(i){return t.onlineEvent(n)}}},[i("b",[t._v(t._s(n.id)+"、"+t._s(n.name))]),i("van-button",{staticClass:"onlineBtn",attrs:{type:"primary"}},[t._v(t._s(n.listBtn))])],1)})),0)]),i("div",{staticClass:"bottom"},[i("van-button",{staticClass:"bottomBtn",attrs:{type:"primary"}},[t._v(t._s(t.onlineBtn))])],1)])]),i("van-tab",{attrs:{title:"线下培训"}},[i("div",{staticClass:"Offline"},[i("div",{staticClass:"Offline-list"},[i("ul",t._l(t.OfflineList,(function(n){return i("li",{key:n.id},[i("b",[t._v(t._s(n.name))]),i("van-radio-group",{on:{change:t.OfflineEvent},model:{value:t.OfflineRadio,callback:function(n){t.OfflineRadio=n},expression:"OfflineRadio"}},[i("van-radio",{attrs:{name:n.id,"checked-color":"#FF7A00"}})],1)],1)})),0)]),i("div",{staticClass:"bottom"},[i("van-button",{staticClass:"bottomBtn OfflineBtn",attrs:{type:"primary"}},[t._v(t._s(t.OfflineBtn))])],1)]),t.OfflineFlog?i("div",{staticClass:"Offline"},[i("div",{staticClass:"Offline-con"},[i("h1",[t._v("暂未开通")]),i("p",[t._v("由于疫情原因，线下培训暂未开通")])])]):t._e()])],1)],1)],1)},a=[],s=i("71c2"),l={components:{Header:s["a"]},data:function(){return{headerTitle:"跑男培训",active:0,onlineBtn:"开始接单",OfflineBtn:"确定选择站点",OfflineRadio:"",OfflineFlog:!1,onlineList:[{id:"1",name:"新手指南",listBtn:"学习",con:"学习内容，通过后获得相应接单资格备份",itemList:[{id:"1",name:"新手入门",listBtn:"学习"},{id:"2",name:"新手完成",listBtn:"学习"}]},{id:"2",name:"服务类型",con:"学习内容，通过后获得相应接单资格备份",listBtn:"学习",itemList:[{id:"1",name:"配送流程",listBtn:"学习"},{id:"2",name:"服务流程",listBtn:"学习"}]},{id:"3",name:"服务承诺",con:"学习内容，通过后获得相应接单资格备份",listBtn:"学习",itemList:[{id:"1",name:"平台使用承诺",listBtn:"学习"}]},{id:"4",name:"安全知识",con:"学习内容，通过后获得相应接单资格备份",listBtn:"学习",itemList:[{id:"1",name:"行车安全",listBtn:"学习"},{id:"2",name:"保险理赔流程",listBtn:"学习"}]},{id:"5",name:"异常上报",con:"学习内容，通过后获得相应接单资格备份",listBtn:"学习",itemList:[{id:"1",name:"送达异常上报",listBtn:"学习"}]}],OfflineList:[{id:"1",name:"XX站点"},{id:"2",name:"XX站点"},{id:"3",name:"XX站点"},{id:"4",name:"XX站点"},{id:"5",name:"XX站点"}]}},methods:{onlineEvent:function(t){this.$router.push({name:"onlineItem",query:{itemList:t}})},OfflineEvent:function(){}}},o=l,c=(i("6e21"),i("2877")),r=Object(c["a"])(o,e,a,!1,null,"a0bc65f8",null);n["default"]=r.exports},"6e21":function(t,n,i){"use strict";var e=i("a671"),a=i.n(e);a.a},"71c2":function(t,n,i){"use strict";var e=function(){var t=this,n=t.$createElement,i=t._self._c||n;return i("div",{staticClass:"header"},[i("van-nav-bar",{attrs:{title:t.headerTitle,"left-arrow":"",color:"#444444",border:!1},on:{"click-left":t.fallback}})],1)},a=[],s={props:["headerTitle"],data:function(){return{}},methods:{fallback:function(){this.$router.go(-1)}}},l=s,o=(i("2cb1"),i("2877")),c=Object(o["a"])(l,e,a,!1,null,"62e77202",null);n["a"]=c.exports},"7f41":function(t,n,i){},a671:function(t,n,i){}}]);
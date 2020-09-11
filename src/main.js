import Vue from 'vue'
import App from './App.vue'
import Mint from 'mint-ui';
import 'mint-ui/lib/style.css'
import 'vant/lib/index.css'
import ElementUI from 'element-ui'
import '../src/utils/rem'
import $ from 'jquery'
import 'element-ui/lib/theme-chalk/index.css'
import Vant from 'vant';
import 'vant/lib/index.css'
Vue.config.productionTip = false
import router from './router'
import VueRouter from 'vue-router'
import echarts from 'echarts'
import http from './config/httpServer'
import { baseUrl, backToken, frontToken, refresh_token, serverConfig } from './config/env'
import VueWechatTitle from 'vue-wechat-title'

import { Sidebar, SidebarItem } from 'vant';
Vue.use(Sidebar);
Vue.use(SidebarItem);

Vue.prototype.$https = http
Vue.prototype.$baseUrl = baseUrl
Vue.prototype.$echarts = echarts;
Vue.use(VueWechatTitle)
Vue.use(VueRouter)
Vue.use(ElementUI)
Vue.use(Vant)
Vue.use(Mint);
new Vue({
  render: h => h(App),
  router,
}).$mount('#app')


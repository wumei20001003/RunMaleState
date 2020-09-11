/**
 * Created by supervisor on 2018/2/28.
 */
import $ from 'jquery'
let baseUrl = ''
const routerMode = 'history'
let ProUrl = ''
const backToken = 'back'
const frontToken = 'front'
const refresh_token = 'refresh_token'
// 各个系统的key健配置
let serverConfig = {}

getBaseUrl()
function getBaseUrl() {
  $.ajax({
    url: './json/api.json',
    async: false,
    success: function(data) {
      ProUrl = data.baseUrl || (window.location.protocol + '//' + window.location.host + '/')
      serverConfig = data
    }
  })
}

if (process.env.NODE_ENV === 'development') {
  baseUrl = ProUrl // 开发环境设置代理 - 跨域访问，对应config/index.js
} else if (process.env.NODE_ENV === 'production') {
  baseUrl = ProUrl
}

export {
  serverConfig,
  baseUrl,
  routerMode,
  backToken,
  frontToken,
  refresh_token
}
// process.env 是读取系统环境变量，在node命令窗口启动时设置相关的环境变量，NODE_ENV=development node来启动命令窗口

/**
 * Created by supervisor on 2017/11/3.
 */
// import Vue from 'vue'
import axios from 'axios'
// import qs from  'qs'
// import store from '../store'
import { Message, MessageBox, Loading } from 'element-ui'
import router from '../router'
import { baseUrl } from './env'
// axios 拦截器 请求时的拦截
axios.interceptors.request.use(config => {
  return config
}, error => {
  // 当请求异常时做一些处理
  return new Promise.reject(error)
})
// 响应时拦截
axios.interceptors.response.use(response => {
  // 返回响应时做一些处理
  return response
}, error => {
  // 当响应异常时做一些处理
  return Promise.resolve(error.response)
})

// let isOpen=false;
function errorState(status, data) {

  if (status === 500 && data.message.indexOf('token invalid') !== -1) {
    if (store.state.isOpen) {
      return
    }
    store.commit('setIsOpen', true)
    MessageBox.alert('您的登录过期，请重新登录!', '提示', {
      confirmButtonText: '确定',
      callback: () => {
        if (router.history.current.meta.requireBackLogin) {
          // 清除用户信息
          sessionStorage.removeItem('backToken')
          sessionStorage.removeItem('backUser')
          router.push({ path: '/admin', query: { redirect: router.history.current.fullPath }})
        } else {
          // router.push({path: router.history.current.fullPath, params: {requireLogin: true}})
          // 清除用户信息
          sessionStorage.removeItem('token')
          sessionStorage.removeItem('user')
          localStorage.removeItem('token')
          store.commit('isAdminInfo', false)
        }
      }
    })
  } else if (status === 401) {
    MessageBox.alert('您的用户权限已被禁用，请联系管理员!', '提示', {
      confirmButtonText: '确定',
      callback: () => {
        // 这个时候点击确定后清除用户信息
        sessionStorage.removeItem('token')
        sessionStorage.removeItem('user')
        localStorage.removeItem('token')
        store.commit('isAdminInfo', false)
      }
    })
  }
}

function successState(res) {
  // 隐藏loading

}

const httpServer = (opts, data, file, timeout) => {
  // 如果是不需要登录就可以访问的接口 需要设置opts.open
  // 公共参数
  const Public = {}
  const httpDefaultOpts = {
    method: opts.method,
    url: baseUrl + opts.url,
    timeout: timeout?timeout : 30000,
    params: Object.assign(Public, data),
    data: data,
    headers: opts.headers ? opts.headers : {}
  }
  let authToken = ''
  if (opts.authType && opts.authType !== '') {
    // Authorization
    if (opts.authType === 'back') {
      authToken = sessionStorage.getItem('backToken')
    } else if (opts.authType === 'front') {
      authToken = sessionStorage.getItem('token') || MyLocalStorage.Cache.get('token')
    }
    if (opts.headersParm) {
      authToken = opts.headersParm + authToken
    }
    httpDefaultOpts.headers['Authorization'] = authToken
  }

  if (opts.method === 'get') {
    delete httpDefaultOpts.data
    httpDefaultOpts.params.timestamp_static = new Date().getTime()
  } else {
    delete httpDefaultOpts.params
    if (file === 'file') {
      httpDefaultOpts.data = data
      httpDefaultOpts.headers['X-Requested-With'] = 'multipart/form-data'
    }
  }

  const promise = new Promise(function(resolve, reject) {
    const loadingInstance = Loading.service({
      fullscreen: true,
      lock: true,
      background: 'rgba(0,0,0,.5)',
      text: 'Loading',
      spinner: 'el-icon-loading'
    })
    // let markIndex= setTimeout(function () {
    //   loadingInstance.close();
    // },10000)
    axios(httpDefaultOpts).then((res) => {
      loadingInstance.close()
      if (!navigator.onLine) {
        Message.error('该电脑网络未连接,请联网!!!')
      }
      // clearTimeout(markIndex)
      successState(res)
      if (res) {
        resolve(res)
        errorState(res.status, res.data)
      } else {
        Message.error('网络连接超时，请重试!!!')
      }
    }).catch((response) => {
      loadingInstance.close()
      // clearTimeout(markIndex)
      console.log('catch')
      if (response && response.response && response.response.status && response.response.data) {
        errorState(response.response.status, response.response.data)
      }
      reject(response)
      if (response.response.data) {
        if (response.response.data.message) {
          Message.error(response.response.data.message)
        } else {
          Message.error('操作失败')
        }
      }
    })
  })
  return promise
}

export default httpServer

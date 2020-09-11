import $https from '@/config/httpServer'
import $ from 'jquery'

//主项目地图信息
export const getAllProjectMap= (info) => {
  return new Promise(function(resolve, reject) {
    try {
      $https({
        url: '/projectProfit/getAllProjectMap',
        authType: 'back',
        method: 'get'
      }, info).then(res => {
        const data = res.data
        if (Number(data.code) !== 200) {
        reject(data.message)
      } else {
        resolve(data.data)
      }
    },
      err => {
        reject(err)
      }
    ).catch(err => {
        reject(err)
      })
    } catch (error) {
      reject(error)
    }
  })
}


//主项目下得子项目信息
export const getChildProjectMap= (info) => {
  return new Promise(function(resolve, reject) {
    try {
      $https({
        url: '/projectProfit/getAllSubProjectMap?projectId='+info.id,
        authType: 'back',
        method: 'get'
      }, {}).then(res => {
        const data = res.data
        if (Number(data.code) !== 200) {
        reject(data.message)
      } else {
        resolve(data.data)
      }
    },
      err => {
        reject(err)
      }
    ).catch(err => {
        reject(err)
      })
    } catch (error) {
      reject(error)
    }
  })
}

export function getPolygonByCode(info,callback){
    let url ="https://restapi.amap.com/v3/config/district?keywords="+info.keywords+"&subdistrict=2&key=feb0147cb6f494de1e72a27317b1f56a&output=JSON&extensions=all"
    $.get(url, function(res) {
      if(callback){
        callback(res)
      }
    })
 }

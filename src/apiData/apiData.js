import $https from '@/config/httpServer'

/*
* 	项目总计
* */
// 	项目总计
export const getAllProjectStatisticsTotal = (info) => {
  return new Promise(function(resolve, reject) {
    try {
      $https({
        url: '/projectProfit/getAllProjectStatisticsTotal',
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
//折线图
export const getBrokenData = (info) => {
  return new Promise(function(resolve, reject) {
    try {
      $https({
        url: '/projectProfit/getStatisticsTotalLineChart',
        authType: 'back',
        method: 'post'
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
//子项目总计数据折线图
export const getBrokenChiliden = (info) => {
  return new Promise(function(resolve, reject) {
    try {
      $https({
        url: '/projectProfit/getSubProjectStatisticsTotalLineChart',
        authType: 'back',
        method: 'post'
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
//项目选择下拉框
export const getSelectData = (info) => {
  return new Promise(function(resolve, reject) {
    try {
      $https({
        url: '/projectProfit/getAllProjects',
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
//项目列表
export const getTableTotal = (info) => {
  return new Promise(function(resolve, reject) {
    try {
      $https({
        url: '/projectProfit/getStatisticsTotal',
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
//主项目下子项目总计
export const getTotalChildren= (info) => {
  return new Promise(function(resolve, reject) {
    try {
      $https({
        url: '/projectProfit/getStatisticsTotalByProjectId',
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
  //单个主项目下所有子项目列表
export const getTableTotalChildren= (info) => {
  return new Promise(function(resolve, reject) {
    try {
      $https({
        url: '/projectProfit/getSubProjectStatisticsTotal',
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
//11.单个子项目下类型总计（post）
export const getUnitermTotal = (info) => {
  return new Promise(function(resolve, reject) {
    try {
      $https({
        url: '/projectProfit/getTypeStatisticsTotal',
        authType: 'back',
        method: 'post'
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
//子项目的下拉框
export const getAllSubProjects= (info) => {
  return new Promise(function(resolve, reject) {
    try {
      $https({
        url: '/projectProfit/getAllSubProjects',
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
//获取所有项目费用类型总计数据
export const getAllProjectsCost= (info) => {
  return new Promise(function(resolve, reject) {
    try {
      $https({
        url: '/projectProfit/getCostTypeStatisticsTotal',
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
//获取单个项目费用类型总计数据
export const getProjectsCost= (info) => {
  return new Promise(function(resolve, reject) {
    try {
      $https({
        url: 'projectProfit/getSubProjectCostTypeStatisticsTotal',
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


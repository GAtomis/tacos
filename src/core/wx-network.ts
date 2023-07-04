/*
 * @Description: 微信项目导入
 * @Author: Gavin
 * @Date: 2022-02-09 15:23:07
 * @LastEditTime: 2023-07-04 09:39:39
 * @LastEditors: GAtomis 850680822@qq.com
 */


function getXhr(config) {
  return new Promise((resolve, reject) => {
    const xhr = config.http.request
    config && !config.getTask && (config.getTask = task => task)
    config.getTask(xhr({
      ...config,
      success: (res) => {
        resolve(res)
      },
      fail: (err) => {
        reject(err)
      }
    }))


  })


}

function getUpload(config) {
  return new Promise((resolve, reject) => {
    const xhr = config.http.request
    config && !config.getTask && (config.getTask = task => task)
    config.getTask(xhr({
      ...config,
      success: (res) => {
        resolve(res)
      },
      fail: (err) => {
        reject(err)
      }
    }))
  })

}

function getDownload(config) {
  return new Promise((resolve, reject) => {
    const xhr = config.http.request
    config && !config.getTask && (config.getTask = task => task)
    config.getTask(xhr({
      ...config,
      success: (res) => {
        resolve(res)
      },
      fail: (err) => {
        reject(err)
      }
    }))
  })
}

export default {
  getDownload,
  getUpload,
  getXhr
}
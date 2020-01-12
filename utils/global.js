
import regeneratorRuntime from './runtime.js'
const userLogin = () => {
  return new Promise((resolve, reject) => {
    wx.login({
      success(res) {
        resolve(res)
      },
      fail (err) {
        reject(err)
      }
    })
  })
}

const request = (api, config={}) => {
  const { data, header, method, dataType, responseType } = config
  return new Promise((resolve, reject) => {
    wx.request({
      url: `http://127.0.0.1:3000/${api}`,
      data,
      header,
      method: method || 'POST',
      dataType: dataType || 'json',
      responseType: responseType || 'text',
      success: res => {
        const { data } = res
        resolve(data)
      },
      fail: err => reject(err),
      complete: res => resolve(res),
    })
  })
}

const getSetting = () => {
  return new Promise((resolve, reject) => {
    wx.getSetting({
      success: res => {
        console.log(res)
        resolve(res)
      }
    })
  })
}

const getUserInfo = () => {
  // console.log('getUserInfo')
  return new Promise((resolve, reject) => {
    wx.getUserInfo({
      success: res => {
        resolve(res)
        // console.log(res)
        // this.globalData.userInfo = res.userInfo
        // if (this.userInfoReadyCallback) {
        //   this.userInfoReadyCallback(res)
        // }
      }
    })
  })
}

const getNextData = (() => {
  let _cur = 1
  const _ = this
  return async function(fn) {
    _cur = _cur + 1
    return await fn.call(this, _cur)
  }
})()

module.exports = {
  userLogin,
  request,
  getSetting,
  getUserInfo,
  getNextData
}
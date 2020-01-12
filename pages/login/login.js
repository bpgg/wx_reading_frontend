// pages/login/login.js
import { userLogin, request, getSetting, getUserInfo  } from '../../utils/global.js'
import regeneratorRuntime from '../../utils/runtime.js'

const app = getApp()

Page({

  /**
   * 页面的初始数据
   */
  data: {
    discoverList:[
      {img:'http://5b0988e595225.cdn.sohucs.com/images/20180108/52f75fa1310b493687d16a004998468d.jpeg',slogan:'为中华之崛起而读书',author:'周恩来'},
      {img:'http://5b0988e595225.cdn.sohucs.com/images/20180614/a2bed8e8c76d4eaf8527a15a5b872383.jpeg',slogan:'读书破万卷,下笔如有神',author:'杜甫'},
      {img:'https://dss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=2878398916,3897355716&fm=26&gp=0.jpg',slogan:'夫天地者万物之逆旅,光阴者百代之过客,而浮生若梦,为欢几何?',author:'李白'}
    ]
  },
  bindGetUserInfo (res) {
    const { detail } = res
    if (!detail.hasOwnProperty('iv')) {
      return
    }
    wx.showLoading({
      title: '正在获取用户信息'
    })
    this.handleLogin()
    wx.hideLoading()
    wx.switchTab({
      url: '../index/index',
    })
  },
  async handleLogin () {
    const { code } = await userLogin()
    const { userInfo } = await getUserInfo()
    const data = await request('user/wx_login', {
      data: {
        code,
        userInfo: JSON.stringify(userInfo)
      }
    })

    
    const {openid} = JSON.parse(data.data) 

    wx.setStorageSync('openid', openid)
    app.globalData.userInfo = userInfo
    // console.log(app.globalData.userInfo)
    // wx.switchTab({
    //   url: '../index/index',
    // })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    wx.showLoading({
      title: '加载中',
      mask: true
    })
    if (!wx.getStorageSync('openid')){
      wx.hideLoading()
      wx.showToast({
        title: '请用户先进行授权',
        icon: 'none'
      })
    } else {
      wx.hideLoading()
      this.handleLogin()
      wx.switchTab({
        url: '../index/index',
      })
    }
  },
  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {},

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
    
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})
// pages/user/user.js
const app = getApp()
import Dialog from '../../miniprogram_npm/vant-weapp/dialog/dialog';

Page({

  /**
   * 页面的初始数据
   */
  data: {
   userInfo:{}
  },

  /**
   * 生命周期函数--监听页面加载
   */
  toEditPage(){
    wx.navigateTo({
      url: '../../otherpages/user/edit/edit',
    })
  },
  onLoad: function (options) {
    this.setData({
      userInfo:app.globalData.userInfo
    })
  },
  toBookshelf(){
    wx.switchTab({
      url: '../bookshelf/bookshelf',
    })
  },
  logout(){
    
    Dialog.confirm({
      title: '温馨提示',
      message: '您确定要退出登陆咩',
      selector:"#van-dialog",
      context:this
    }).then(()=>{
      wx.showToast({
        title: '退出成功',
        icon: 'success',
        duration: 1000,
        success:()=>{
          wx.setStorageSync('openid', null)
          wx.navigateTo({
            url: '../login/login',
          })
        }
      })
     
    }).catch(()=>{})
    
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

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
// pages/bookshelf/bookshelf.js
import {request} from '../../utils/request'
Page({

  /**
   * 页面的初始数据
   */
  data: {
    storeList:[]
  },
  // 子组件通过事件向父组件传值，父组件通过属性赋值传值给子组件。
  toBookDetail:function(e){
    const {book_id} = e.target.dataset
    console.log(book_id)
    wx.navigateTo({
      url: `../../otherpages/book/bookDesc/bookDesc?book_id=${book_id}`
    })
  },
  tapfn:function(){
    console.log(1)
  },
  /**
   * 生命周期函数--监听页面加载
   */
  getStoreList(){
    var _ = this
    const openid = wx.getStorageSync('openid')
    console.log(openid)
    request({
      url:`/user/wx_getBookShelf?openid=${openid}`,
      data:{},
      method:'get'
    }).then((res)=>{
      console.log(res)
      _.setData({
        storeList:res.data
      })
    })
  },
  onLoad: function (options) {
    this.getStoreList()
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
    this.onLoad();
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
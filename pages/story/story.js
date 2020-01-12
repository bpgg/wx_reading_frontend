// pages/story/story.js
import regeneratorRuntime from '../../utils/runtime.js'
import{request} from '../../utils/request'

Page({

  /**
   * 页面的初始数据
   */
  data: {
    placeholder:'故事搜索',
    storyList:[]
  },
  toStoryDetail:function(e){
    const data = e.detail
    const story_id = data.story_id
    console.log(e.detail)
    wx.navigateTo({
      url: `../../otherpages/stroy_details/story_details?story_id=${story_id}`
    })
  },
  getStorys(){
    var _ = this
    request({
      url:'/story/getStorys',
      data:{},
      method:'get'
    }).then((res)=>{
      console.log(res.data)
      _.setData({
        storyList:res.data
      })
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.getStorys()
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
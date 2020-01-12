// otherpages/stroy_details/story_details.js
import {request} from '../../utils/request'
import {formatTime2} from '../../utils/util'
Page({

  /**
   * 页面的初始数据
   */
  data: {
    story_id:0,
    story_content:"内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容",
    story_title:"标题标题标题标题标题标题标题标题标题标题标题标题标题标题标题标题标题标题标题标题标题标题标题标题标题标题标题标题标题",
    story_resource:"来源",
    story_date:"2019/12/24",
    story:{}
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    console.log(options)
    const story_id = options.story_id
    this.setData({
      story_id:story_id
    })
    this.getStoryDetail(story_id)
  },
  getStoryDetail(story_id){
    var _ = this
    request({
      url:`/story/getStoryDetail?story_id=${story_id}`,
      data:{},
      method:'get'
    }).then((res)=>{
      var story = res.data
      story.paragraphs = story.story_content.split(/\s+/g)
      story.story_date = formatTime2(new Date(story.story_date))
      _.setData({
        story:story
      })
    })
  },
  toStoryDetail:function(e){
    const data = e.detail
    const story_id = data.story_id
    wx.navigateTo({
      url: `../../otherpages/stroy_details/story_details?story_id=${story_id}`
    })
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
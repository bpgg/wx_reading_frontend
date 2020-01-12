// miniprogram/pages/book_detail/book_detail.js
import Dialog from '../../../miniprogram_npm/vant-weapp/dialog/dialog';
import {request} from '../../../utils/request'
Page({

  /**
   * 页面的初始数据
   */
  data: {
    // 总评分：
    total_grade: '8',
    total_stars: ['★', '★', '★', '★', '☆'],
    total_comments_num: '1578',
    total_readers_num: 8502,
    // 热评
    hot_stars: ['★', '★', '★', '★', '★'],
    book_id: 'wx001',
    book_name: '斗破苍穹',
    author: '天蚕土豆',
    book_chapterID:'',
    book_coverImg: '../../src/images/fmt/wx1.png',
    book_introduction: ``,
    isShow: false
  },
  showIntroDialog:function(){
    let _ = this
    Dialog.alert({
      title: '简介',
      message: _.data.book_introduction
    }).then(() => {
      // on close
    });
  },
  toBookContent:function(){
    const book_chapterID = this.data.book_chapterID
    const book_id = this.data.book_id
    wx.navigateTo({
      url: `../../../otherpages/book/bookContent/bookContent?book_chapterID=${book_chapterID}&book_id=${book_id}`
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    let book_id = options.book_id;
    // console.log(book_id)
    wx.setStorageSync('book_id', book_id)
    var  _ = this
    request({
      url:'/book/getBookDetail'+`?book_id=${book_id}`,
      data:{
        // book_id:book_id
      },
      method:'get'
    }).then((res)=>{
      console.log(res)
      const {book_coverImage,book_introduction,author,book_name,book_chapterID}=res.data
      console.log(book_introduction)
      _.setData({
        book_name:book_name,
        book_coverImg:book_coverImage,
        book_introduction:book_introduction,
        author:author,
        book_chapterID:book_chapterID,
        book_id:book_id
      })
    })

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示,将数据加载部分放在onShow中进行重渲染
   */
  onShow: function () {
    // 重置评分
    this.setData({
      starPics: ['../../src/images/star1.png', '../../src/images/star1.png', '../../src/images/star1.png', '../../src/images/star1.png', '../../src/images/star1.png']
    })
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
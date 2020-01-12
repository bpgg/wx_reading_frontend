// otherpages/book/bookContent/bookContent.js

import {request} from '../../../utils/request'
Page({

  /**
   * 页面的初始数据
   */
  data: {
    book_chapterID:'',
    book_name:"斗破苍穹",
    current_chapter_name:'陨落的天才',
    current_content_id:1,
    current_paragraphs:[],
    flag:false,//判别初次进入
    chapterList:[],
    chapterList_len:0,
    flag_catalog:false,
    book_id:0,
    fontSize:'36rpx',
    font_percent:50
  },

  /**
   * 生命周期函数--监听页面加载
   */
  setFontSize:function(e){
    const {x} = e.detail
    //26-46  0 26 100 46 50 36
    let percent =   parseInt(((x-20) / (350 -20))*100)
    console.log(percent)
    let fontSize = parseInt(percent*20/100)+26+'rpx'
    this.setData({
      font_percent:percent,
      fontSize:fontSize
    })
    console.log(e.detail)
  },
  toPrevChapter:function(){
    let current_content_id = this.data.current_content_id;
    if(current_content_id == 1){
      wx.navigateBack({
        delta: 1
      })
    }else{
      this.setData({
        current_content_id: current_content_id -1
      })
      this.onShow()
    }
  },
  toNextChapter: function () {
    let current_content_id = this.data.current_content_id + 1>this.data.chapterList_len?this.data.chapterList_len:this.data.current_content_id + 1;
    this.setData({
      current_content_id: current_content_id
    })
    this.onShow();
  },
  toChapter(e){
    // console.log(e)
    let current_content_id = e.target.dataset.index
    this.setData({
      current_content_id: current_content_id
    })
    this.onShow();
    // this.setData({
    //   current_content_id: current_content_id -1
    // })
    // this.onShow()
  },
  getChapterContent(chapter_id,chapter_contentID){
    var _ = this
    request({
      url:'/book/getChapterContent?'+`chapter_id=${chapter_id}&chapter_contentID=${chapter_contentID}`,
      data:{},
      method:'get'
    }).then((res)=>{
      // console.log('获取内容的接口')
      // console.log(res)
      const {
        chapter_name,chapter_contentID,chapter_content
      } = res.content
      // console.log(chapter_name)
      _.setData({
        current_chapter_name:chapter_name,
        current_paragraphs:chapter_content.split(/\s+/g),
        current_content_id:chapter_contentID
      })
    }).catch(e=>{
      console.log(e)
    })
  },
  getChapterList(chapter_id){
    var _ = this
    request({
      url:`/book/getChapterList?chapter_id=${chapter_id}`,
      data:{},
      method:'get'
    }).then((res)=>{
      console.log('获取列表')
      console.log(res)
      _.setData({
        chapterList:res.chapterList,
        chapterList_len:res.chapterList.length
      })
    }).catch(e=>{
      console.log(e)
    })
  },
  onLoad: function (options) {
    // book_chapterID 获取数据
    const book_chapterID = options.book_chapterID
    const book_id = options.book_id
    console.log('content',book_chapterID)
    console.log('book_id',book_id)
    // this.getChapterContent(book_chapterID,1)
    this.getChapterContent(book_chapterID,1)
    this.getChapterList(book_chapterID)

    this.setData({
      book_chapterID:book_chapterID,
      book_id:book_id
    })
    wx.setNavigationBarTitle({
      title: this.data.book_name
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
    let current_content_id = this.data.current_content_id;
    let book_chapterID = this.data.book_chapterID;
    if(!this.data.flag) {
      this.setData({
        flag:true
      })
    }else{
      this.getChapterContent(book_chapterID,current_content_id)
      // 回到顶部
      wx.pageScrollTo({
        scrollTop: 0
      })
    }
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
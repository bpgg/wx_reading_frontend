//index.js
//获取应用实例
const app = getApp()
// import {request} from '../../utils/global'
// import {toBookDetail} from '../../utils/book'
// import {request} from '../../utils/request'
import {request} from '../../utils/request'

Page({
  data: {
    swiperConfig:{
      item:
      [ 'https://goss.veer.com/creative/vcg/veer/800water/veer-133504174.jpg',
      'https://goss.veer.com/creative/vcg/veer/800water/veer-144449457.jpg',
      'https://goss.veer.com/creative/vcg/veer/800water/veer-145570108.jpg']
    },
    tj_books:[],
    navItem:[{name:'推荐'},{name:'分类'},{name:'排行'},{name:'玄幻奇幻'},{name:'都市小说'}],
    searchList:[],
    placeholder:"输入你想搜索的书籍..."
  },
  // 获取推荐的书籍
  getBooksByCategory(category){
    var _ = this
    request({
      url:'/book/getBooksByCategory',
      data:{
        category:category,
        a:222
      },
      method:'get'
    }).then((res)=>{
      // console.log(res)
      // _.setData({
      //   tj_books:res.data.data
      // })
    })
  },
  toBookDetail(e){
    console.log(e.detail)
    // const book_name = e.detail.book_name

    const book_id = e.detail.book_id?e.detail.book_id:e.target.dataset.book_id
    wx.navigateTo({
      url: `../../otherpages/book/bookDesc/bookDesc?book_id=${book_id}`
    })
  },
  toSearchPage(){
    wx.navigateTo({
      url: `../../otherpages/search/search_page`
    })
  },
  searchBook(e){
    var _ = this
    const keyword = (e.detail.keyword).trim() 
    console.log('index',keyword)
    if(keyword==='') return
    request({
      url:`/book/getBookByKeyword?keyword=${keyword}`,
      data:{},
      method:'get'
    }).then((res)=>{
      _.setData({
        searchList:res.bookList
      })
      console.log(res.bookList)
    })
  },
  getBooks_tj(){
    var _ = this
    request({
      url:'/book/getBooks',
      data:{},
      method:'get'
    }).then((res)=>{
      _.setData({
        tj_books:res.data
      })
    })
  },
  onLoad: function () {
    this.getBooks_tj()
    // this.getBooksByCategory('军事')
    if (app.globalData.userInfo) {
      this.setData({
        userInfo: app.globalData.userInfo,
        hasUserInfo: true
      })
    } else if (this.data.canIUse){
      // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
      // 所以此处加入 callback 以防止这种情况
      app.userInfoReadyCallback = res => {
        this.setData({
          userInfo: res.userInfo,
          hasUserInfo: true
        })
      }
    } else {
      // 在没有 open-type=getUserInfo 版本的兼容处理
      wx.getUserInfo({
        success: res => {
          app.globalData.userInfo = res.userInfo
          this.setData({
            userInfo: res.userInfo,
            hasUserInfo: true
          })
        }
      })
    }
  },
  getUserInfo: function(e) {
    console.log(e)
    app.globalData.userInfo = e.detail.userInfo
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
    })
  }
})

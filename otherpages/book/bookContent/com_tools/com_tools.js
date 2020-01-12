// otherpages/book/bookContent/com_tools/com_tools.js
// import Dialog from '../../../../miniprogram_npm/vant-weapp/dialog/dialog';
import Dialog from '../../../../miniprogram_npm/vant-weapp/dialog/dialog';
import {request} from '../../../../utils/request'
import regeneratorRuntime from '../../../../utils/runtime'
Component({
  // 启用slot别名的时候，一定需要开启这个选项
  options: {
    multipleSlots: true // 在组件定义时的选项中启用多slot支持
  },
  lifetimes: {
    attached: function() {
      // 在组件实例进入页面节点树时执行
    },
    detached: function() {
      // 在组件实例被从页面节点树移除时执行
    },
    created:function(){
      this.init()
      
    }
  },
  /**
   * 组件的属性列表
   */
  properties: {
    // chapterList:{
    //   type:Array,
    //   value:[]
    // },
    // flag_chapterList:{
    //   type:Boolean,
    //   value:false
    // }
    // hasAdd:{
    //   type:Boolean,
    //   value:false
    // },
    // book_id:{
    //   type:Number,
    //   value:0
    // }
  },

  /**
   * 组件的初始数据
   */
  data: {
    hasAdd:false,
    isShowCatalog:'none',
    isShowSetting:'none',
    font_percent:50
  },

  /**
   * 组件的方法列表
   */
  methods: {
    init(){
      var _ = this
      const openid = wx.getStorageSync('openid')
      // 因为子组件的加载快，所以获取不到父组件的传递过来的book_id，所以我选择使用缓存
      const book_id = wx.getStorageSync('book_id')
      // 获取存取当前book_id
      console.log(book_id)
      request({
        url:`/user/wx_hasStoreBook?book_id=${book_id}&openid=${openid}`,
        data:{},
        method:'get'
      }).then((res)=>{
        // console.log('获取是否存储的状态')
        // console.log(res.hasAdd)
        _.setData({
          hasAdd:res.hasAdd
        })
      }).catch(e=>{
        console.log(e)
      })
    },
    showCatalog(){
      console.log(this.data.isShowCatalog)
      if(this.data.isShowCatalog === 'none'){
        this.setData({
          isShowCatalog:'block',
          isShowSetting:'none'
        })
      }else{
        this.setData({
          isShowCatalog:'none'
        })
      }
     
    },
    showSetting(){
      if(this.data.isShowSetting === 'none'){
        this.setData({
          isShowSetting:'block',
          isShowCatalog:'none'
        })
      }else{
        this.setData({
          isShowSetting:'none'
        })
      }
    },
    addBook(){
      var _ = this
      const openid = wx.getStorageSync('openid')
      const book_id =  wx.getStorageSync('book_id')
      request({
        url:`/user/wx_addBook?book_id=${book_id}&openid=${openid}`,
        data:{},
        method:'get'
      }).then((res)=>{
        wx.showToast({
          title: '添加成功',
          icon: 'success',
          duration: 1000,
          success:()=>{
            _.setData({
              hasAdd:true
            })
          }
        })
      }).catch(e=>{
        console.log(e)
      })
   
    },
    removeBook(){
      var _ = this
      const openid = wx.getStorageSync('openid')
      const book_id =  wx.getStorageSync('book_id')
      Dialog.confirm({
        title: '温馨提示',
        message: '您是否要取消收藏该书籍',
        selector:"#van-dialog",
        context:this
      }).then(() => {
        // on confirm
        // 请求接口。移除
        request({
          url:`/user/wx_removeBook?book_id=${book_id}&openid=${openid}`,
          data:{},
          method:'get'
        }).then((res)=>{      
          wx.showToast({
            title: '移除成功',
            icon: 'success',
            duration: 1000,
            success:()=>{
              _.setData({
                hasAdd:false
              })
            }
          })
      }).catch(() => {
        // on cancel
      });
    })
    }
  }
})
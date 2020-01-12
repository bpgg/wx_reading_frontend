// components/top_search/top_search.js
Component({
  /**
   * 组件的属性列表
   */
  options: {
    multipleSlots: true // 在组件定义时的选项中启用多slot支持
  },
  properties: {
    placeholder:{
      type:String,
      value:''
    }
  },

  /**
   * 组件的初始数据
   */
  data: {

  },

  /**
   * 组件的方法列表
   */
  methods: {
    searchBook(e){
      const keyword = e.detail.value
      console.log(keyword)
      var myEventDetail = {
        keyword:keyword
      } // detail对象，提供给事件监听函数
      var myEventOption = {} // 触发事件的选项
      this.triggerEvent('searchBook', myEventDetail, myEventOption)
    },
    toSearchPage(e){
      // const keyword = e.detail.value
      // console.log(keyword)
      var myEventDetail = {
        keyword:keyword
      } // detail对象，提供给事件监听函数
      var myEventOption = {} // 触发事件的选项
      this.triggerEvent('toSearchPage', myEventDetail, myEventOption)
    }
  }
})

// components/book/book.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    book_width:{
      type:String,
      value:'200rpx'
    },
    book_coverImg:{
      type: String,
      value: '../../assets/coverImg/default-coverImg.png'
    },
    book_name: {
      type: String,
      value: '斗破苍穹'
    },
    book_id:{
      type:Number,
      value:996
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
    bookDetail:function(){
      // debugger
      console.log(this.data.book_name)
      var myEventDetail = {
        book_name:this.data.book_name,
        book_id:this.data.book_id
      } // detail对象，提供给事件监听函数
      var myEventOption = {} // 触发事件的选项
      this.triggerEvent('toBookDetail', myEventDetail, myEventOption)
    }
  }
})

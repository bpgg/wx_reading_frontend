// components/book_tj/book_tj.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    book_tj:{
      type:Object,
      value:{
        book_coverImage:'../../assets/coverImg/default-coverImg.png',
        book_name:'斗破苍穹',
        author:'天山果佬',
        book_tip:'猜你喜欢',
        book_id:0
      }
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
      // console.log(this.data.book_tj.book_name)
      var myEventDetail = {
        book_name:this.data.book_tj.book_name,
        book_id:this.data.book_tj.book_id
      } // detail对象，提供给事件监听函数
      var myEventOption = {} // 触发事件的选项
      this.triggerEvent('toBookDetail', myEventDetail, myEventOption)
    }
  
  }
})

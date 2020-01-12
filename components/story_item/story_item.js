// components/stoy_item/story_item.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    story:{
     type:Object,
     value:{
      story_coverImg:{
        type:String,
        value:"../../assets/coverImg/default-coverImg.png"
      },
      story_id:{
        type:String,
        value:''
      },
      story_name:{
        type:String,
        value:"默认标题默认标题默认标题默认标题默认标题默认标题默认标题默认标题默认标题默认标题默认标题默认标题"
      },
      story_source:{
        type:String,
        value:'爆闻现场'
      }
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
    storyDetail:function(){
      // debugger
      console.log("传递给子组件的id"+this.data.story.story_id)
      var myEventDetail = {
        story_id:this.data.story.story_id
      } // detail对象，提供给事件监听函数
      var myEventOption = {} // 触发事件的选项
      this.triggerEvent('toStoryDetail', myEventDetail, myEventOption)
    }
  }
  
})

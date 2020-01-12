// components/Html5/A/A.js

const jumpMethod = {
  switchTab: 'switchTab',
  reLaunch: 'reLaunch',
  redirectTo: 'redirectTo',
  navigateTo: 'navigateTo',
  navigateBack: 'navigateBack'
}

Component({
  externalClasses: ['a-class'],
  /**
   * 组件的属性列表
   */
  properties: {
    href: String,
    text: Boolean,
    block: Boolean,
    [jumpMethod.switchTab]: {
      type: Boolean,
      value: false
    },
    [jumpMethod.reLaunch]: {
      type: Boolean,
      value: false
    },
    [jumpMethod.redirectTo]: {
      type: Boolean,
      value: false
    },
    [jumpMethod.navigateTo]: {
      type: Boolean,
      value: false
    },
    [jumpMethod.navigateBack]: {
      type: Boolean,
      value: false
    },
  },

  /**
   * 组件的初始数据
   */
  data: {},

  /**
   * 组件的方法列表
   */
  methods: {
    jumpTap (e) {
      const { data: { href, navigateBack, navigateTo, reLaunch, redirectTo, switchTab } } = this
      const url = '/' + href
      // console.log(this)
      try {
        if (!(navigateBack
          || navigateTo
          || reLaunch
          || redirectTo
          || switchTab))  throw new Error('Error: 请指定a标签的用途')
        if (navigateTo)
          wx.navigateTo({ url })
        if (reLaunch)
          wx.reLaunch({ url })
        if (redirectTo)
          wx.redirectTo({ url })
        if (switchTab)
          wx.switchTab({ url: url })
        if (navigateBack)
          wx.navigateBack({ url })
      } catch (e) {
        console.error(e)
      }
    }
  }
})

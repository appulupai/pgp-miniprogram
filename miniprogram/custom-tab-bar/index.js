// custom-tab-bar/index.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {

  },

  /**
   * 组件的初始数据
   */
  data: {
    active: 0,
    "list": [{
      "pagePath": "/pages/index/index",
      "text": "index"
    },
    {
      "pagePath": "/pages/analyse/analyse",
      "text": "analyse"
    },
    {
      "pagePath": "/pages/search/search",
      "text": "search"
    }]
  },

  /**
   * 组件的方法列表
   */
  methods: {
    onChange(event) {
      // event.detail 的值为当前选中项的索引
      this.setData({ active: event.detail });
      
      
      wx.switchTab({
        url: this.data.list[event.detail].pagePath,
      })
    },
  }
})

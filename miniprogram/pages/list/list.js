// pages/list/list.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
         id:' '
  },
  formSubmit: function(e) {
console.log(this.data.id)
var id=this.data.id
wx.request({
  url: 'url',
  data: {id:id},
 
  enableCache: true,
  enableHttp2: true,
  enableQuic: true,

  timeout: 0,
  success: (result) => {},
  fail: (res) => {},
  complete: (res) => {},
})
   
  },
  bindKeyInput:function(e){
    this.setData({
    id:e.detail.value,
    
    },
    
    )

  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage() {

  }
})
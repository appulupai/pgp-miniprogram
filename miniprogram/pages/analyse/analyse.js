// pages/search/search.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
              value:"",
              list:[1],
              count:1,
              shouji:['pingguo','huawei'],
              menu:[],
              index:0

  },

  add:function(e){
    console.log(this.data.list)
    this.data.list.push(this.data.count+1)
    this.setData(
      {
        count:this.data.count+1,
        list:this.data.list
      }
    )

  },
  reset:function(e){
   
    this.setData(
      {count:1,
        list:[1],
      }
    )

  },
  bindKeyInput:function(e){
    console.log(e.detail)
    this.data.menu.splice(e.target.id-1,1,e.detail)
    this.setData({
      menu:this.data.menu
    })
    console.log(this.data.menu)
 
  
  },
  formsubmit:function(e){
    let dish=this.data.menu
    wx.request({
      url: 'url',
      method:'post',
      data:{
        dish_name:dish
      },
      success: (res) => {
      },
     
      fail: (res) => {  wx.showToast({
        title: '请求失败',
        icon:"error"
      })},
      complete: (res) => {},
    })
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
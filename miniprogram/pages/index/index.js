// const { get } = require("./router/user")

// pages/list/list.js

Page({

  /**
   * 页面的初始数据
   */
  data: {
         id:' ',
         list:[],
         count:0,
         shouji:['苹果','华为','小米'],
         detailsContent:'1',
         test:'0',
         name:'',
         t:'0'
  }
 ,

  formSubmit_cha: function(e) {

// var id=this.data.id

wx.request({
  url: 'http://127.0.0.1:5000/api/cha',
  method:'GET',
 // data:{id:id},
 
  success: (res) => {
    
this.setData({ list:res.data.data}
  
)
console.log(this.data.list)
  },
 
  fail: (res) => {},
  complete: (res) => {},
})
   
  },
  formSubmit_zeng:function(){
    
  let name=this.data.name
    wx.request({
      url: 'http://127.0.0.1:5000/api/zeng?name='+name,
      method:'GET',
     
     
      success: (res) => {
        console.log(res)
      },
     
      fail: (res) => {},
      complete: (res) => {},
    })
       
  },
  formSubmit_gai:function(){

  },
  formSubmit:function(){

  },
  formSubmit_shan:function(){
var id=this.data.id
wx.request({
  url: 'http://127.0.0.1:5000/api/shan?id='+id,
  method:'GET',
  success: (res) => {
  },
 
  fail: (res) => {},
  complete: (res) => {},
})
   
  },
  bindKeyInput1:function(e){
   
    this.setData({
    id:e.detail.value,
    
    })},
    bindKeyInput2:function(e){
   
      this.setData({
      name:e.detail.value,
      
      }
     
    )},
    bindKeyInput:function(e){
   
      this.setData({
      t:e.detail.value,
      
      }
     
    )
    console.log(e.detail.value)
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
  onPullDownRefresh:function(){
   
   this.setData({list:[]})
   wx.stopPullDownRefresh()

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
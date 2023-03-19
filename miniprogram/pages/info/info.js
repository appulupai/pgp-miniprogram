// pages/info/info.js
import Toast from '@vant/weapp/toast/toast';
let a=[],year=[],month=[],day=[],height=[],weight=[]
for(let i=1930;i<=2023;i++){
  year.push(i)
}
for(let i=1;i<=12;i++){
  month.push(i)
}
for(let i=1;i<=31;i++){
  day.push(i)
}
for(let i=100;i<=250;i++){
  height.push(i)
}
for(let i=25;i<=150;i++){
  weight.push(i)
}
Page({

  /**
   * 页面的初始数据
   */
  data: {
    columns: ['杭州', '宁波', '温州', '嘉兴', '湖州'],
    sex:"男",
    columnsSex:['男','女'],
    columnsHeight:[{values:height,defaultIndex:50,}],
    showHeight: false,
    h:"170cm",
    weight:weight,
    columnsWeight:[{values:weight,defaultIndex:25,}],
    showWeight: false,
    w:"50kg",
    weight:weight,
    test:a,
    year:year,
    month:month,
    day:day,
    columnsBirth:[{values:year,defaultIndex:50,},{values:month},{values:day}],
     birthday:"2000年1月1日",
    show: false,
    showBirth:false,
  }, showPopupSex() {
    this.setData({ show: true });
  },

  onCloseSex() {
    this.setData({ show: false });
  },
  show:function(e){
   console.log(this.data.test)
  },
  onChangeSex:function(event) {
   let sex=event.detail.value
   this.setData({
     sex:sex
   })
   wx.setStorage({
    key: 'sex',
    data: sex,
    success:function(res){}
  })
  },
  showPopupBirth() {
    this.setData({ showBirth: true });
  },

  onCloseBirth() {
    this.setData({ showBirth: false });
  },
  onChangeBirth:function(event) {
    
    this.setData({
      birthday:event.detail.value[0]+'年'+event.detail.value[1]+'月'+event.detail.value[2]+'日'
    })
    
   },
   showPopupHeight() {
    this.setData({ showHeight: true });
  },

  onCloseHeight() {
    this.setData({ showHeight: false });
  },
  onChangeHeight:function(event) {
    
    this.setData({
        h:event.detail.value+"cm"
    })
    wx.setStorage({
      key: 'height',
      data: event.detail.value+"cm",
      success:function(res){}
    })
   }, 
   showPopupWeight() {
    this.setData({ showWeight: true });
  },

  onCloseWeight() {
    this.setData({ showWeight: false });
  },
  onChangeWeight:function(event) {
    
    this.setData({
        w:event.detail.value+"kg"
    })
    wx.setStorage({
      key: 'weight',
      data: event.detail.value+"kg",
      success:function(res){}
    })
   },
  
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {
    let that=this
    wx.getStorage({
      key: 'sex',
      success: function (res){
       that.setData({
         sex:res.data
       })
       console.log(res.data)
       
      }
    })
    wx.getStorage({
      key: 'height',
      success: function (res){
       that.setData({
         h:res.data
       })
       console.log(res.data)
      }
    })
    wx.getStorage({
      key: 'weight',
      success: function (res){
       that.setData({
         w:res.data
       })
       console.log(res.data)
      }
    })
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
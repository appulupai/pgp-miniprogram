// pages/add/add.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    addlist:[1],
    count:1,
    request:{"dishName":" ","dishUnit":"100","mateProportions":[]},
    dishName:"",
    mateProportions:[],
    mateName:[],
    proportion:[],
  },
  adddish:function(e){
    this.data.count++
    this.data.addlist.push(this.data.count)
    this.setData({
      addlist:this.data.addlist,
      count:this.data.count

    })
  },
  nameinput:function(e){
           this.setData({
             dishName:e.detail
           })
  },
  bindkeyinput:function(e){
   this.data.mateName[e.target.dataset.id-1]=e.detail
   this.setData({
     mateName:this.data.mateName
   })
  },
  bindkeyinput2:function(e){
    this.data.proportion[e.target.dataset.id-1]=e.detail
    this.setData({
      proportion:this.data.proportion
    })
    
  },
  submitNewDish:function(e){
    for(var i=0;i<this.data.count;i++){
      this.data.mateProportions.push({"matename":this.data.mateName[i],"proportion":this.data.proportion[i]})
    }
    
    this.data.request.mateProportions=this.data.mateProportions
    this.data.request.dishName=this.data.dishName
    let dish=JSON.parse(JSON.stringify(this.data.request))
    wx.request({
      url: 'https://nutrition-14585-5-1312889136.sh.run.tcloudbase.com/relation',
      method:'post',
      header: { 'Content-Type': 'application/json'},
      data:dish,
      success: (res) => {
        console.log(res)
      }
    })
  },
  clear:function(e){
    this.setData({
      addlist:[1],
      count:1,
    })
  }
 
  ,
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
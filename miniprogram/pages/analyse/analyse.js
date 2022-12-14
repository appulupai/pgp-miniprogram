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
              meal:[],
              index:0,
              heat:0,
              protein:0,
              fat:0,
              clear:" "

  },
delete:function(e){
  for(var i = 0 ;i<this.data.menu.length;i++)  
  {  
     //这里为过滤的值
      if(this.data.menu[i] == " " )  
      {  
          this.data.menu.splice(i,1);
          i= i-1;
      }  
  }  
this.data.menu.splice(e.target.dataset.id-1,1)
this.data.list.splice(this.data.count-1,1)

this.setData({
menu:this.data.menu,
count:this.data.count-1,
list:this.data.list
})
},
  add:function(e){
    console.log(this.data.list)
    this.data.menu.splice(this.data.count,0,'')
this.data.list.splice(this.data.count,0,this.data.count+1)
    console.log(this.data.menu)
    this.setData(
      {
        count:this.data.count+1,
        list:this.data.list,
        menu:this.data.menu,
        
      }
    )

  },
  
  reset:function(e){
    this.setData(
      {count:1,
        list:[1],
        menu:[],
        clear:this.data.clear
      }
    )

  },
  bindKeyInput:function(e){
    console.log(e.detail)
    this.data.menu[e.target.dataset.id-1]=e.detail
    this.setData({
      menu:this.data.menu
    })
   
  },
  formsubmit:function(e){
    let dish=JSON.parse(JSON.stringify(this.data.menu))
    console.log(dish)

    wx.request({
      url: 'https://nutrition-14585-5-1312889136.sh.run.tcloudbase.com/dish',
      method:'post',
      header: { 'Content-Type': 'application/json'},
      data:dish,
      success: (res) => {
        console.log(res)
        if(res.data.flag===true){
        this.setData({
           heat:res.data.data.heat,
           protein:res.data.data.protein,
           fat:res.data.data.fat
        })}
        else{
          console.log(res.data.msg)
        }

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
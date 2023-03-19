const defaultAvatarUrl = 'https://mmbiz.qpic.cn/mmbiz/icTdbqWNOwNRna42FI242Lcia07jQodd2FJGIYQfG0LAJGFxM4FbnQP6yfMxBgJ0F3YRqJCJ1aPAK2dQagdusBZg/0'
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
         t:'0',
         nickname:"",
          avatarurl:defaultAvatarUrl,
          nickname:"请输入昵称"
  }
 ,
 onChooseAvatar(e) {
  let avatarurl = e.detail 
  this.setData({
    avatarurl:avatarurl.avatarUrl,
  })
  wx.setStorage({
    key: 'avatarurl',
    data: avatarurl,
    success:function(res){console.log(avatarurl)}
  })
},
getinfo:function(e){
  wx.navigateTo({
    url: '../info/info',
  })
}
,
keyInputNickname:function(e){
  let nickname=e.detail;
  let that=this
  this.setData({
    nickname:e.detail,
  })
  wx.setStorage({
    key: 'nickname',
    data: nickname,
    success:function(res){console.log(nickname)}
  })
 
},
  bindKeyInput1:function(e){
   
    this.setData({
    id:e.detail.value,
    
    })},
    goto:function(e){
      wx.navigateTo({
        url: '../info/info',
      })
    }
    ,
   
    
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {
    let that=this
    wx.getStorage({
      key: 'avatarurl',
      success: function (res){
       that.setData({
         avatarurl:res.data.avatarUrl
       })
       console.log(res.data)
      }
    })
    wx.getStorage({
      key: 'nickname',
      success: function (res){
       that.setData({
         nickname:res.data.value
       })
       
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
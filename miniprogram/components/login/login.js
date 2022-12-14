// components/login/login.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    userInfo:"",
    hasUserInfo:"false"
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
    getUserProfile(e){
      console.log(e)
    wx.getUserProfile({
      desc: '用于完善会员资料', // 声明获取用户个人信息后的用途，后续会展示在弹窗中，请谨慎填写
      success: (res) => {
        
        this.setData({
          userInfo: res.userInfo,
          hasUserInfo: true,
          
        })
        console.log(this.data.userInfo)
        wx.switchTab({
          url: '../index/index',
          success:function(e){
                 console.log("登录成功")
          }})
      }
      }  
    )
  }
  }
})

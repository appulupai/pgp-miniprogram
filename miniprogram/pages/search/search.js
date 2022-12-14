// pages/search/search.js
import Toast from "../miniprogram_npm/@vant/weapp/toast/toast"
Page({

  /**
   * 页面的初始数据
   */
  data: {
              value:"",
              list:[ ],
	            pagesize:10,//每页展示的条数
	            curpage: 1,//当前页数
	            totalpage:1,//总页数
              tyindex:1,
                frontPage:false,
                lastPage:false,
                menuinfo:{},
                circle:[1],
                ifdetail:false,
                currentdish:0,
                text:"详情",                
                editor:true,
                dishname:"",
                newdishname:"",
                matename:[],
                mateProportions:[],
                newdish:[],
                count:0,
                request:{"dishName":" ","dishUnit":"100","mateProportions":[]},
                ifsearch:false
          

  },
  getlist:function(e){
    let pagesize=this.data.pagesize
    let pageNumber=this.data.curpage
   wx.request({
     url: 'https://nutrition-14585-5-1312889136.sh.run.tcloudbase.com/dish/page?currentPage='+pageNumber+'&&pageSize='+pagesize,
     method:'get',
     success:(res)=>{
      var arr1 = new Array();
      var arr2 = new Array();
      arr1= this.data.list;//页面此时展示的l列表(数组)
      arr2 = res.data.data.records;//后端返回的列表（数组）
      console.log(res)
      var totalpage=res.data.data.total/this.data.pagesize+1;//后端返回的页数（数组）
      for(var i=0;i<arr2.length;i++){
        arr2[i]=arr2[i].dishName
      }
       arr1 = arr1.concat(arr2);//合并两个数组
       this.setData({
                     list: arr1, //合并后更新list
                     totalpage:totalpage ,//
                   })
     }
   })
  },
  bindkeyinput:function(e){
    this.data.matename[e.target.dataset.id-1]=e.detail
    this.setData({
      matename:this.data.matename
    })
   },
   bindkeyinput2:function(e){
     this.data.proportion[e.target.dataset.id-1]=e.detail
     this.setData({
       proportion:this.data.proportion
     })
     
   },
  adddish:function(e){
    wx.navigateTo({
      url: '../add/add',
    })
  }
  ,
  savesuccess: function(e){
    Toast.success('保存成功');
    }
  ,
  search:function(name){
    let dish=name
  wx.request({
    url: 'https://nutrition-14585-5-1312889136.sh.run.tcloudbase.com/relation?Name='+dish,
    method:'get',
    header:{  
      'content-type':'application/json'
   },
    success: (res) => {
      this.data.circle=[1]
      console.log(res)
      for(var i=2;i<=res.data.data.mateProportions.length;i++){
        this.data.circle.push(i)
      }
      if(res.data.flag===true &&res.data.data!==null){
        this.setData({
          mateProportions:res.data.data.mateProportions,
          dishname:res.data.data.dishName,
          ifsearch:true,
          ifdetail:false,
          circle:this.data.circle
        })
        console.log(this.data.mateProportions)
     }
      else{
        this.setData({
          circle:[1],
          dishname:"菜品暂无",
          ifsearch:true,
          ifdetail:false
        })
      }

    },
   
    fail: (res) => {  wx.showToast({
      title: '请求失败',
      icon:"error"
    })},
    complete: (res) => {},
  })}
  ,
  onSearch:function(e){
    console.log(e.detail)
    this.search(e.detail)
    this.setData({
      dishname:e.detail
    })
  },
  getdetail:function(e){
    if(this.data.ifdetail==0){
      this.setData({
        ifdetail:true,
        })
    }else{    
   this.setData({
     editor:false
   })
  }
},
  save:function(e){
    this.savesuccess()
    this.data.request.mateProportions=this.data.mateProportions
    this.data.request.dishName=this.data.dishname
    let dish=JSON.parse(JSON.stringify(this.data.request))
    wx.request({
      url: 'https://nutrition-14585-5-1312889136.sh.run.tcloudbase.com/relation/update',
      method:'post',
      header: { 'Content-Type': 'application/json'},
      data:dish,
      success: (res) => {
        console.log(res)
        
      }
    })
    this.setData(
      {
        ifdetail:0
      }
    )
  }
  ,
  edit:function(e){
    
  this.setData(
    {editor:false}
  )
  },
  

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {
    this.getlist();
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
    if(this.data.curpage <= this.data.totalpage ){//这里是为了当前页数大于小于总页数，否则会一直刷新
      var curpage = this.data.curpage*1+1//上滑一次就加载下一页 在当前页数加一  就是加载下一页
      this.setData({
        curpage:curpage//更新data重的页数
      })
      this.getlist();//再次调用（获取下一页的数据）
    }else{
     
        Toast.success('暂无更多数据')//如果当前页数大于总页数则不会刷新并显示提示
        
    }

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage() {

  }
})
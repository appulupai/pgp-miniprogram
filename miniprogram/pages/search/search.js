// pages/search/search.js
import Toast from "../miniprogram_npm/@vant/weapp/toast/toast"
let test=[]

Page({

  /**
   * 页面的初始数据
   */
  data: {     
             
              value:"",
              list:[ ],//储存名字的数组
	            pagesize:10,//每页展示的条数
	            curpage: 1,//当前页数
	            totalpage:1,//总页数
              tyindex:1,
                frontPage:false,
                lastPage:false,
                menuinfo:{},
                circle:[1],//菜品循环
                circleList:[[1]],//成分循环
                ifdetailList:[false],//是否展示详情
                currentdish:0,
                text:"详情",                
                editor:true,
                editorUsual:true,
                dishName:"",
                newdishName:"",
                mateName:[],
                mateProportions:[],
                newdish:[],
                count:0,
                mateProportionsList:[{"num":" ","mateProportions":[]}],
                request:{"dishName":" ","dishUnit":"100","mateProportions":[]},
                ifsearch:false,
                index:[0],
                updateList:[false]
          

  },
  addMate:function(e){
   this.data.mateProportionsList[e.target.dataset.id].mateProportions.push({mateName:"",proportion:""})
   this.data.circleList[e.target.dataset.id].push(this.data.circleList[e.target.dataset.id].length+1)
   this.setData({
     mateProportionsList:this.data.mateProportionsList,
     circleList:this.data.circleList
   })
  }
  ,
  getlist:function(e){
    let pagesize=this.data.pagesize
    let pageNumber=this.data.curpage
    let that=this
   wx.request({
     url: 'https://nutrition-14585-5-1312889136.sh.run.tcloudbase.com/dish/page?currentPage='+pageNumber+'&&pageSize='+pagesize,
     method:'get',
     success:(res)=>{
      var arr1 = new Array();
      var arr2 = new Array();
      arr1= that.data.list;//页面此时展示的l列表(数组)
      arr2 = res.data.data.records;//后端返回的列表（数组）
      console.log(res)
      console.log(that.data.totalpage)
      var totalpage=Math.floor(res.data.data.total/that.data.pagesize)+1;//后端返回的页数（数组）
      for(var i=0;i<arr2.length;i++){
        arr2[i]=arr2[i].dishName
        that.data.ifdetailList.push(false)
        that.data.mateProportionsList[i]={"num":"","mateProportions":[]}
      }
       arr1 = arr1.concat(arr2);//合并两个数组
       that.setData({
                     list: arr1, //合并后更新list
                     totalpage:totalpage ,//
                     mateProportionsList:that.data.mateProportionsList
                   })
     }
   })
   console.log(this.data.mateProportionsList)
  },
  bindkeyinput:function(e){
    
   this.data.mateProportionsList[e.target.dataset.id].mateProportions[e.target.dataset.num-1].mateName=e.detail
   this.setData({
     mateProportionsList:this.data.mateProportionsList
   })
   console.log(e.target.dataset.num-1)
   },
   bindkeyinput2:function(e){
    this.data.mateProportionsList[e.target.dataset.id].mateProportions[e.target.dataset.num-1].proportion=e.detail
     this.setData({
       proportion:this.data.proportion
     })
     console.log(this.data.circleList)
     
   },
  adddish:function(e){
    wx.navigateTo({
      url: '../add/add',
    })
  }
  ,

  search:function(num,name){
    console.log(name)
    let dish=name
    this.data.ifdetailList[num]=false,
  wx.request({
    url: 'https://nutrition-14585-5-1312889136.sh.run.tcloudbase.com/relation?Name='+dish,
    method:'get',
    header:{  
      'content-type':'application/json'
   },
    success: (res) => {
      this.data.circle=[1]
      
      console.log(res)
      if(res.data.data==null){
        this.data.mateProportionsList[num]={"num":num,mateProportions:[{"mateName":" ","proportion":" "}]}
        this.data.circleList[num]=this.data.circle
        this.setData({
          circle:[1],
          circleList:this.data.circleList,
          ifdetailList:this.data.ifdetailList,
          dishName:dish,
          mateProportions:[{"mateName":" ","proportion":" "}],
          mateProportionsList:this.data.mateProportionsList
        })
      }else{
        this.data.mateProportionsList[num]={"num":num,"mateProportions":[res.data.data.mateProportions[0]]}
      for(var i=1;i<=res.data.data.mateProportions.length-1;i++){
        this.data.circle.push(i+1)
        this.data.mateProportionsList[num].mateProportions.push(res.data.data.mateProportions[i])
      }
    }
      if(res.data.flag===true &&res.data.data!==null){
        this.data.circleList[num]=this.data.circle
        this.setData({
          ifdetailList:this.data.ifdetailList,
          mateProportionsList:this.data.mateProportionsList,
          mateProportions:res.data.data.mateProportions,
          dishName:res.data.data.dishName,
          circle:this.data.circle,
          circleList:this.data.circleList
        })
        console.log(this.data.mateProportionsList)
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
    
    if(e.detail==""){
      this.getlist()
      this.setData({
        ifsearch:false,
        ifdetailList:[false]
      })
    }else{this.search(0,e.detail)
        this.data.list[0]=e.detail
        this.setData({
          ifsearch:true,
      dishName:e.detail
    })}
    console.log(this.data.mateProportionsList)
  },
  getdetail:function(e){
    this.search(0,this.data.list[0])
   this.setData({
     ifdetailList:[true],
     updateList:[true]
   })
},getdetailUsual:function(e){
  let index=e.target.dataset.id
  this.search(index,this.data.list[index])
  this.data.ifdetailList[index]=true
  this.data.updateList[index]=true
  this.setData({
    ifdetailList:this.data.ifdetailList,
    updateList:this.data.updateList
  })
  console.log(this.data.mateProportionsList)
},
  save:function(e){
    Toast.success('保存成功');
    for(let i=0;i<this.data.mateProportionsList.length;i++){
      if(this.data.mateProportionsList[i].num!==""){
    this.data.request.mateProportions=this.data.mateProportionsList[i].mateProportions
    this.data.request.dishName=this.data.list[i]
    let dish=JSON.parse(JSON.stringify(this.data.request))
    console.log(dish)
    wx.request({
      url: 'https://nutrition-14585-5-1312889136.sh.run.tcloudbase.com/relation/update',
      method:'post',
      header: { 'Content-Type': 'application/json'},
      data:dish,
      success: (res) => {
        console.log(res)
        
      }
    })
  }
  }
    this.setData(
      {
        ifdetailList:[false],
        mateProportionsList:[]
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
    if(this.data.curpage < this.data.totalpage ){//这里是为了当前页数小于总页数，否则会一直刷新
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
//app.js
/**
 * 有鱼记账( v0.0.1)
 * 未尽事项事项 ： 该项目不提供服务的支持，但会用假数据模拟ajax请求
 * @version v0.0.1
 * @author 老皇叔 官方网站 ： http://118.178.85.4/ (或访问 www.zhixingai.ren 知性爱人)
 * @date  2016.10.08 13:10 
 */
App({
  onLaunch: function () {
      
  },
  getUserInfo:function(cb){
    var that = this
    if(this.globalData.userInfo){
      typeof cb == "function" && cb(this.globalData.userInfo)
    }else{
      //调用登录接口
      wx.login({
        success: function () {
          wx.getUserInfo({
            success: function (res) {
              that.globalData.userInfo = res.userInfo
              typeof cb == "function" && cb(that.globalData.userInfo)
            }
          })
        }
      })
    }
  },
  globalData:{
    userInfo:null
  }
})
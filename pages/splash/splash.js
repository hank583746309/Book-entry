Page({
  data:{
    // text:"这是一个页面"
  },
  onLoad:function(options){
     var isInit = wx.getStorageSync('_is_init') || false;
     if(isInit){  wx.redirectTo({url:'../index/index'}); }
  }
  ,nextStepHandler:function(){
     wx.setStorageSync('_is_init',true);
     wx.redirectTo({url:'../index/index'});
  }
})
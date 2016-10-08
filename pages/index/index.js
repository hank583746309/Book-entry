//index.js
//获取应用实例
var app = getApp()
var animation = wx.createAnimation({
      duration: 200,
      timingFunction: "ease"
    }),interval = null;
var top = 0,curTop = 0;
Page({
  data: {
     day   : '01',
     month : '01',
     editAnimationData : {}
  },
  onLoad: function () {
     var d = new Date(),day = d.getDate(),month = d.getMonth() + 1;
     if(day < 10){ day = '0' + day;}
     if(month < 10){ month = '0' + month;}
     this.setData({day : day,month : month});
  }

  ,touchstartHandler:function(e){
      var that = this;
      if(0 == top){  }

      animation.rotate(30).step().rotate(-30).step();
      this.setData({ editAnimationData : animation.export() });
      
  }
  ,touchmovetHandler: function(e){
      //console.log(e);
      
  }
  ,touchendHandler  : function(e){
     animation.rotate(0).step();
     //clearInterval(interval); interval = null;
     this.setData({ editAnimationData : animation.export() });
  }
})

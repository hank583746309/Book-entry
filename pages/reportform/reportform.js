Page({
  data:{
     curTbarIndex : 0,
     topbars      : [
       {title:'支出',controlElement:"out"},
       {title:'收入',controlElement:"in"}
     ],
     curPages    : {
         'out' : 'block'
         ,'in'  : 'none'
     }
  },
  onLoad:function(options){
    // 页面初始化 options为页面跳转所带来的参数
  }

  ,switchTopbar : function(e){
      var index = parseInt(e.currentTarget.dataset.index),
            ele = this.data.topbars[index]['controlElement'],cps = {};
      if(index  === this.data.curTbarIndex){ return; }
      
      for(var e in this.data.curPages){
          cps[e] = this.data.curPages[e];
          if(this.data.curPages[e] == 'block'){  cps[e] = 'none'; }
      }
      cps[ele] = 'block'; 
      this.setData({curPages : cps,curTbarIndex : index});
  }
})
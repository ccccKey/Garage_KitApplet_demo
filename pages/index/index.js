//index.js
//获取应用实例
var app = getApp()
Page({
  data: {
    homePageImgs : [
      'http://img02.tooopen.com/images/20150928/tooopen_sy_143912755726.jpg',
    ]
  },
  onLoad: function () {
    
  },

  //主页图片点击
  gotoActivites:function(event){
    console.log(event.currTarget.dataset);
  }
})

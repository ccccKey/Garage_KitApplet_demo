// personalCenter.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
  
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
  
  },

  //前往订单支付页面
  gotoPayOrder:function(event){
    wx.navigateTo({
      url: '../order/payOrder',
    })
  }

})
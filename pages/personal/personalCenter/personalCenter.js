// personalCenter.js
var app = getApp();

Page({

  /**
   * 页面的初始数据
   */
  data: {
    payNums : "",
    getNums : ""
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
  
  },

  onShow:function(event){
    var shopCarNum = app.shoppingCarData.length;
    if(shopCarNum == 0)
    {
      this.setData({
        getNums : ""
      })
    }else{
      this.setData({
        getNums: shopCarNum.toString()
      })
    }
  },

  //前往订单支付页面
  gotoPayOrder:function(event){
    wx.navigateTo({
      url: '../order/payOrder',
    })
  }

})
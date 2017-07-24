// payOrder.js
var app = getApp();

Page({

  /**
   * 页面的初始数据
   */
  data: {
    shoppingCarData: [],
    costPrice : 0
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var data = [];
    for (var i = 0; i < app.shoppingCarData.length; i++) {
      data.push(app.shoppingCarData[i]);
    }

    this.setData({
      shoppingCarData: data
    })

    this.handleCost();
  },

  //处理费用
  handleCost: function (event) {
    var shoppingCarData = this.data.shoppingCarData;
    var cost = 0;

    for (var i = 0; i < shoppingCarData.length; i++) {
      cost += shoppingCarData[i].nums * shoppingCarData[i].shopData.costNum;
    }

    this.setData({
      costPrice: cost
    })
  }
})
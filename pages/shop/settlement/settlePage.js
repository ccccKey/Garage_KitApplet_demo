// settlePage.js
var app = getApp();

Page({

  /**
   * 页面的初始数据
   */
  data: {
    shoppingCarData : []
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var data = [];
    for (var i = 0; i < app.shoppingCarData.length;i++)
    {
      data.push(app.shoppingCarData[i]);
    }

    this.setData({
      shoppingCarData: data
    })
  },
})
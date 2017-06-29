var app = getApp();

Page({

  /**
   * 页面的初始数据
   */
  data: {
    shopId : 0,
    shopData : {}
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.setData({
      shopId : options.shopId
    })

    for(var i=0;i<app.AllItemArr.length;i++)
    {
      if (app.AllItemArr[i].shopId == options.shopId)
      {
        this.setData({
          shopData: app.AllItemArr[i]
        })
      }
    }

    var shopData = this.data.shopData;
    if (shopData != {})
    {
      wx.setNavigationBarTitle({
        title: shopData.name,
      })
    }
  },

})
var app = getApp();

Page({

  /**
   * 页面的初始数据
   */
  data: {
    shopId: 0,
    shopData: {},
    buyNum: 1,
    selectTar: -1
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.setData({
      shopId: options.shopId
    })

    for (var i = 0; i < app.AllItemArr.length; i++) {
      if (app.AllItemArr[i].shopId == options.shopId) {
        this.setData({
          shopData: app.AllItemArr[i]
        })
      }
    }

    var shopData = this.data.shopData;
    if (shopData != {}) {
      wx.setNavigationBarTitle({
        title: shopData.name,
      })
    }

    this.setSelectOne(0);
  },

  //减少购买数量
  minusBuyNum: function (event) {
    var num = this.data.buyNum;

    if (num - 1 >= 1) {
      num--;
    }

    this.setData({
      buyNum: num
    })
  },

  //增加购买数量
  plusBuyNum: function (event) {
    var num = this.data.buyNum;
    var limitNum = app.buyLimit;

    if (num + 1 <= limitNum) {
      num++;
    }

    this.setData({
      buyNum: num
    })
  },

  //选择款式
  styleSelect: function (event) {
    var tarId = event.currentTarget.dataset.index;
    var sData = this.data.shopData;

    this.setData({
      selectTar: tarId
    })

    for (var i = 0; i < sData.styles.length; i++) {
      sData.styles[i].chosen = false;
      this.setData({
        shopData: sData
      })
    }

    this.setSelectOne(tarId);
  },

  //选中某一个款式
  setSelectOne: function (tarId) {
    var sData = this.data.shopData;
    for (var i = 0; i < sData.styles.length; i++) {
      if (tarId == i) {
        sData.styles[i].chosen = true
        this.setData({
          shopData: sData
        })
      }
    }
    this.setData({
      selectTar: tarId
    })
  },

  //点击购买
  buyNow:function(event){
    var styleId = this.data.selectTar;
    var buyNum = this.data.buyNum
    var shopId = this.data.shopId;

    var selectData = [];
    selectData.push({ shopData: this.data.shopData, styleId: styleId, nums: buyNum});
    // selectData.push({ shopData: this.data.shopData, styleId: styleId, nums: buyNum });
    app.shoppingCarData = selectData;

    wx.navigateTo({
      url: '../settlement/settlePage?shopId=' + this.data.shopData.shopId,
    })
  }

})
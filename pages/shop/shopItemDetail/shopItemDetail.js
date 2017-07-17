var app = getApp();

Page({

  /**
   * 页面的初始数据
   */
  data: {
    shopId : 0,
    shopData : {},
    buyNum: 1,
    selectTar : -1
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

  //减少购买数量
  minusBuyNum:function(event){
    var num = this.data.buyNum;

    if (num - 1 >= 1)
    {
      num--;
    } 

    this.setData({
      buyNum : num
    })
  },

  //增加购买数量
  plusBuyNum:function(event){
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
  styleSelect:function(event){
    var tarId = event.currentTarget.dataset.index;

    console.log(tarId);
    
    this.setData({
      selectTar : tarId
    })

    console.log(this.data.selectTar);
  }

})
// settlePage.js
var app = getApp();

Page({

  /**
   * 页面的初始数据
   */
  data: {
    shoppingCarData : [],
    costPrice : 0
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

    this.handleCost();
  },

  //点击删除订单
  closeThisSettle:function(event){
    var data = this.data.shoppingCarData;
    var currIndex = event.currentTarget.dataset.index;
    var that = this;

    wx.showModal({
      title: '',
      content: '删除该商品?',
      showCancel : "true",
      success : function(res){
        if (res.confirm) {
          data.splice(currIndex, 1);

          that.setData({
            shoppingCarData : data
          })
        }
      }
    })

    app.shoppingCarData = data;
  },

  //减少购买数量
  minusBuyNum: function (event) {
    var currIndex = event.currentTarget.dataset.index;
    var shoppingCarData = this.data.shoppingCarData;
    var data = shoppingCarData[currIndex];

    var num = data.nums;
    if (num - 1 >= 1) {
      num--;
    }

    data.nums = num;
    shoppingCarData[currIndex] = data;

    this.setData({
      shoppingCarData: shoppingCarData,
    })

    app.globalData.shoppingCarData = shoppingCarData;
    this.handleCost();
  },

  //增加购买数量
  plusBuyNum: function (event) {
    var currIndex = event.currentTarget.dataset.index;
    var shoppingCarData = this.data.shoppingCarData;
    var data = shoppingCarData[currIndex];

    var num = data.nums;
    var limitNum = app.buyLimit;

    if (num + 1 <= limitNum) {
      num++;
    }
    data.nums = num;
    shoppingCarData[currIndex] = data;

    this.setData({
      shoppingCarData: shoppingCarData,
    })

    app.globalData.shoppingCarData = shoppingCarData;
    this.handleCost();
  },

  //处理费用
  handleCost:function(event){
    var shoppingCarData = this.data.shoppingCarData;
    var cost = 0;

    for (var i = 0; i < shoppingCarData.length;i++){
      cost += shoppingCarData[i].nums * shoppingCarData[i].shopData.costNum;
    }

    this.setData({
      costPrice : cost
    })
  }
})
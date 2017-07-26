// payOrder.js
var app = getApp();

Page({

  /**
   * 页面的初始数据
   */
  data: {
    shoppingCarData: [],
    costPrice : 0,
    costDes : ""
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

  onShow:function(options){
    var shoppingCarData = this.data.shoppingCarData;
    var cost = 0;
    var costTxt = "";

    for (var i = 0; i < shoppingCarData.length;i++)
    {
      cost += shoppingCarData[i].nums * shoppingCarData[i].shopData.costNum;
    }

    if(cost == 0)
    {
      costTxt = "";
    }else{
      costTxt = cost.toString();
    }

    var costDes = "共" + shoppingCarData.length.toString() + "件商品  实付¥" + costTxt;
    this.setData({
      costDes : costDes
    })
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
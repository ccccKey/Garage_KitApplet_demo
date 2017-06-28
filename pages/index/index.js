//index.js
//获取应用实例
var app = getApp()
Page({
  data: {
    homePageImgs : [
      'http://img02.tooopen.com/images/20150928/tooopen_sy_143912755726.jpg',
    ],
    
    ItemArr : [
      {
        shopId : 10001,
        img: 'http://img06.tooopen.com/images/20160818/tooopen_sy_175866434296.jpg',
        name: "这是商品名字1,商品描述1述abcdefghijk",
        costNum : 100,
        sellNum : 55,
      },
      {
        shopId: 10002,
        img: 'http://img06.tooopen.com/images/20160818/tooopen_sy_175866434296.jpg',
        name: "这是商品名字2",
        costNum: 100,
        sellNum: 55,
      },
      {
        shopId: 10003,
        img: 'http://img06.tooopen.com/images/20160818/tooopen_sy_175866434296.jpg',
        name: "这是商品名字3",
        costNum: 100,
        sellNum: 55,
      },
      {
        shopId: 10004,
        img: 'http://img06.tooopen.com/images/20160818/tooopen_sy_175866434296.jpg',
        name: "这是商品名字4",
        costNum: 100,
        sellNum: 55,
      },
    ]
  },
  onLoad: function () {
    
  },

  //主页图片点击
  gotoActivites:function(event){
    console.log(event.currTarget.dataset);
  },

  //商品项点击
  onShopItemClick:function(shopItem){
    console.log(shopItem.currentTarget.dataset.shopId);
  }
})

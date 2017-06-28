//index.js
//获取应用实例
var app = getApp()
Page({
  data: {
    homePageImgs : [
      'http://img02.tooopen.com/images/20150928/tooopen_sy_143912755726.jpg',
    ],
    AllItemArr : [],
    ItemArr : [],
    showLimit : 8,
    currPage : 1
  },
  onLoad: function () {
    var testArr = [];
    for(var i=0;i<10;i++)
    {
      var item = {
        shopId: 10000 + i,
        img: 'http://img06.tooopen.com/images/20160818/tooopen_sy_175866434296.jpg',
        name: "这是商品名字,这是商品名字,这是商品名字" + i,
        costNum: 100,
        sellNum: 55,
      }
      testArr.push(item);
    } 
    this.setData({
      AllItemArr: testArr
    })

    this.handleItemArr();
  },

  //处理显示的数组
  handleItemArr:function(){
    var AllItemArr = this.data.AllItemArr;
    var showLimit = this.data.showLimit;
    var currPage = this.data.currPage;
    var ItemArr = [];
    var showNum = 0

    if (AllItemArr.length >= showLimit * currPage)
    {
      showNum = showLimit * currPage
    }else{
      showNum = AllItemArr.length;
    }

    for (var i = 0; i < showNum;i++)
    {
      ItemArr.push(AllItemArr[i])
    }

    this.setData({
      ItemArr : ItemArr
    })
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

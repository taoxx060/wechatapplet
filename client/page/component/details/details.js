// page/component/details/details.js

Page({
  data:{
    goods: {
      name: "",
      image: '/image/s4.png',
      price: 0
    },
    num: 1,
    totalNum: 0,
    hasCarts: false,
    curIndex: 0,
    show: false,
    scaleCart: false
  },

  onLoad:function(options){
      // 生命周期函数--监听页面加载
      this.setData({
        goods:{
          name: options.name,
          image: '/image/s4.png',
          price: options.price
        }
      })
    },

  decrementCount() {
    let num = this.data.num;
    if (num > 0) {
      num--;
      this.setData({
        num: num
      })
    }
  },

  addCount() {
    let num = this.data.num;
    num++;
    this.setData({
      num : num
    })
  },

  addToCart() {
    const self = this;
    const num = this.data.num;
    
    let total = getApp().globalData.totalCount;

    self.setData({
      show: true
    })
    setTimeout( function() {
      self.setData({
        show: false,
        scaleCart : true
      })
      setTimeout( function() {
        self.setData({
          scaleCart: false,
          hasCarts : true
        })
      }, 200)
    }, 300)
    getApp().globalData.totalCount = getApp().globalData.totalCount + num
    if (self.data.goods.name in getApp().globalData.maps){
      var orders = getApp().globalData.maps[self.data.goods.name]
      orders["count"] = orders["count"] + num
    } else {
      getApp().globalData.maps[self.data.goods.name] = { id: getApp().globalData.categoryCount, name: self.data.goods.name, count: num, image: self.data.goods.image, price: self.data.goods.price, selected: true}
      getApp().globalData.carts.push(getApp().globalData.maps[self.data.goods.name])
    }
    console.log(getApp().globalData)
    this.updateGlobalAndLocalData()
  },

  updateGlobalAndLocalData() {
    var app = getApp();
    var currentTotalCount = 0;
    var currentTotalPrice = 0
    for (var i = 0; i < app.globalData.carts.length; i++){
      currentTotalCount += app.globalData.carts[i]["count"]
      currentTotalPrice += app.globalData.carts[i]["count"] * app.globalData.carts[i]["price"]
    }
    app.globalData.totalCount = currentTotalCount;
    app.globalData.totalPrice = currentTotalPrice;
    app.globalData.categoryCount = app.globalData.carts.length;
    console.log("hello")
    console.log(app.globalData.carts)
    this.setData({
      totalNum: currentTotalCount
    })
    console.log(this.data.totalNum)
  },


  bindTap(e) {
    const index = parseInt(e.currentTarget.dataset.index);
    this.setData({
      curIndex: index
    })
  }
 
})
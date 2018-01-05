//app.js
var qcloud = require('./vendor/wafer2-client-sdk/index')
var config = require('./config')

App({

    globalData: {
      carts:null,
      maps: null,
      totalCount: null,
      categoryCount: null,
      totalPrice: null,
      pickupLocation:null,
      memo: null
    },
    onLaunch: function () {
        qcloud.setLoginUrl(config.service.loginUrl)
        console.log('App Launch')
        this.globalData.carts = []
        this.globalData.maps = {}
        this.globalData.totalCount = 0
        this.globalData.categoryCount = 0
        this.globalData.totalPrice = 0
    },
    onShow: function () {
      console.log('App Show')
    },
    onHide: function () {
      console.log('App Hide')
    },
    globalData: {
      hasLogin: false
    }
})
// page/component/combolist/combolist.js
var qcloud = require('../../../vendor/wafer2-client-sdk/index')
var util = require('../../../utils/util.js')
var config = require('../../../config')

Page({
  data: {
    menu:[]
  },

  doRequest: function () {
    util.showBusy('请求中...')
    var that = this
    var options = {
      //url: config.service.combolistUrl,
      url: 'https://49.51.33.221:443/tasks'
      login: true,
      success(result) {
        util.showSuccess('请求成功完成')
        console.log('request success', result)

        that.setData({
          menu: result.data.data.menu
        })
        
      },
      fail(error) {
        util.showModel('请求失败', error);
        console.log('request fail', error);
      },
      
    }
    if (this.data.takeSession) {  // 使用 qcloud.request 带登录态登录
      qcloud.request(options)
    } else {    // 使用 wx.request 则不带登录态
      wx.request(options)
    }
  },

  onLoad:function(options){
    // 页面初始化 options为页面跳转所带来的参数
    this.doRequest()
   
  },
  onReady:function(){
    // 页面渲染完成
  },
  onShow:function(){
    // 页面显示
  },
  onHide:function(){
    // 页面隐藏
  },
  onUnload:function(){
    // 页面关闭
  }
})
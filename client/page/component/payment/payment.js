// page/component/new-pages/user/payment/payment.js

var qcloud = require('../../../vendor/wafer2-client-sdk/index')
var util = require('../../../utils/util.js')
var config = require('../../../config')

Page({
  data:{
    card:{
      name:'',
      cardDigits:'',
      cvv:'',
      validDate:''
    }
  },
  onLoad(){
    var self = this;
    
    wx.getStorage({
      key: 'card',
      success: function(res){
        self.setData({
          card : res.data
        })
      }
    })
  },
  bindpayment(e) {
    this.doRequest()
  },
  doRequest: function () {
    util.showBusy('请求中...')
    var that = this
    var options = {
      url: config.service.paymentUrl,
      data: { name: "111", password: "123", id: "123" },
      method: 'post',
      login: true,
      success(result) {
        util.showSuccess('请求成功完成')
        console.log('request success', result)

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


  formSubmit(){
    var self = this;
    if (self.data.card.name && self.data.card.cardDigits && self.data.card.cvv && self.data.card.validDate){
      wx.setStorage({
        key: 'card',
        data: self.data.card,
        success(){
          wx.navigateBack();
        }
      })
    }else{
      wx.showModal({
        title:'提示',
        content:'请填写完整资料',
        showCancel:false
      })
    }
  },
  bindName(e){
    this.setData({
      'card.name' : e.detail.value
    })
  },
  bindCardDigits(e){
    this.setData({
      'card.cardDigits' : e.detail.value
    })
  },
  bindValidDate(e){
    this.setData({
      'card.validDate' : e.detail.value
    })
  },
  bindCvv(e) {
    this.setData({
      'card.cvv': e.detail.value
    })
  }
})
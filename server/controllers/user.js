module.exports = async (ctx, next) => {
    // 通过 Koa 中间件进行登录态校验之后
    // 登录信息会被存储到 ctx.state.$wxInfo
    // 具体查看：
    if (ctx.state.$wxInfo.loginState === 1) {
      // loginState 为 1，登录态校验成功
      ctx.state.data = ctx.state.$wxInfo.userinfo
    } else {
      ctx.state.code = -1
    }
    // if (ctx.state.$wxInfo.loginState === 1) {
        // loginState 为 1，登录态校验成功
        // ctx.state.data = ctx.state.$wxInfo.userinfo
      // var request = require('request');
      // request({
      //   url: "https://api-cert.payeezy.com/v1/events/8a34e7644856ca2701485f1280be0224",
      //   method: "GET",
      //   headers: {
      //     "Accept": "*/*",
      //     "Accept-Encoding": "gzip",
      //     "Accept-Language": "en-US",
      //     "Apikey": "y6pWAJNyJyjGv66IsVuWnklkKUPFbb0a",
      //     "Authorization": "Y2NlMzY1MzY3ZjZlY2E4NTMzNzU2OTU0YzgzN2Q3NzIxYTYxZWRhMmViOGRjMDRjMzY5NmYyZmNjMWUwYTQwYg",
      //     // "Content-Length": "322",
      //     "Content-Type": "application/json",
      //     "Host": "api-cert.payeezy.com",
      //     "Nonce": "9956156727599813000",
      //     "Timestamp": "1511416049237",
      //     "Token": "fdoa-a480ce8951daa73262734cf102641994c1e55e7cdf4c02b6",
      //     "User-Agent": "runscope/0.1"
      //   }

        // url: "https://api-cert.payeezy.com/v1/transactions",
        // method: "POST",
        // headers: {
        //   "Accept": "*/*",
        //   "Accept-Encoding": "gzip",
        //   "Accept-Language": "en-US",
        //   "Apikey": "y6pWAJNyJyjGv66IsVuWnklkKUPFbb0a",
        //   "Authorization": "OTIyMWZjMDc4Njk3NTg0NjcyYTUzODQ5ZjE2ZmU5ZGFiNWI2NmVhMWUzMjVlYjU5OGQxNzczZmYwMzdiNjU2OQ==",
        //   "Content-Length": "322",
        //   "Content-Type": "application/json",
        //   "Host": "api-cert.payeezy.com",
        //   "Nonce": "1307665983483491800",
        //   "Timestamp": "1511248171184",
        //   "Token": "fdoa-a480ce8951daa73262734cf102641994c1e55e7cdf4c02b6",
        //   "User-Agent": "runscope/0.1,Mozilla/5.0 (Windows NT 6.1; Win64; x64) AppleWebKit/537.36 (KHTML",
        //   "X-Forwarded-For": "24.35.64.187",
        //   "X-Forwarded-Port": "443",
        //   "X-Forwarded-Proto": "https"
        // },
        // json: {
        //   "merchant_ref": "Astonishing-Sale",
        //   "transaction_type": "authorize",
        //   "method": "credit_card",
        //   "amount": "1299",
        //   "currency_code": "USD",
        //   "credit_card": {
        //     "type": "visa",
        //     "cardholder_name": "John Smith",
        //     "card_number": "4788250000028291",
        //     "exp_date": "1020",
        //     "cvv": "123"
        //   }
        // },
        // url: "https://api-cert.payeezy.com/v1/events",
        // method: "GET",
        // headers: {
        //   "Accept": "*/*",
        //   "Accept-Encoding": "gzip",
        //   "Accept-Language": "en-US",
        //   "Apikey": "y6pWAJNyJyjGv66IsVuWnklkKUPFbb0a",
        //   "Authorization": "Y2NlMzY1MzY3ZjZlY2E4NTMzNzU2OTU0YzgzN2Q3NzIxYTYxZWRhMmViOGRjMDRjMzY5NmYyZmNjMWUwYTQwYg",
        //   "Content-Length": "322",
        //   "Content-Type": "application/json",
        //   "Host": "api-cert.payeezy.com",
        //   "Nonce": "9956156727599813000",
        //   "Timestamp": "1511416049237",
        //   "Token": "fdoa-a480ce8951daa73262734cf102641994c1e55e7cdf4c02b6"
        // },
        // qs: {
        //   "eventType": "TRANSACTION_STATUS",
        //   "from": "2014-07-01",
        //   "to": "2015-07-30",
        //   "offset": "20",
        //   "limit": "10"
        // }
      // }, function (error, response, body) {
      //   console.log(response);
      //   ctx.state.data = response;
      // });
    // } else {
    //     ctx.state.code = -1
    // }

 


    // wx.request({
    //     url: "https://api-cert.payeezy.com/v1/transactions",
    //     header: {
    //       "Accept": "*/*",
    //       "Accept-Encoding": "gzip",
    //       "Accept-Language": "en-US",
    //       "Apikey": "y6pWAJNyJyjGv66IsVuWnklkKUPFbb0a",
    //       "Authorization":"NGQyOTZhYWFiYjM4MWUyMTVhZjc1Zjc5MjUxYjg4OGRjNGE1ZDY1MGVjN2RlMTVkNTcwZTM2NjViZmQ4MzFhNw==",
    //       "Content-Length": "322",
    //       "Content-Type": "application/json",
    //       "Host": "api-cert.payeezy.com",
    //       "Nonce": "8025781533485956000",
    //       "Timestamp": "1511121319546",
    //       "Token": "fdoa-a480ce8951daa73262734cf102641994c1e55e7cdf4c02b6",
    //       "User-Agent": "runscope/0.1,Mozilla/5.0 (Windows NT 6.1; Win64; x64) AppleWebKit/537.36 (KHTML",
    //       "X-Forwarded-For": "24.35.64.187",
    //       "X-Forwarded-Port": "443",
    //       "X-Forwarded-Proto": "https"
    //     },
    //     method: "POST",
    //     //data: { cityname: "上海", key: "1430ec127e097e1113259c5e1be1ba70" },  
    //     data: json2Form({
    //       "merchant_ref": "Astonishing-Sale",
    //       "transaction_type": "authorize",
    //       "method": "credit_card",
    //       "amount": "1299",
    //       "currency_code": "USD",
    //       "credit_card": {
    //         "type": "visa",
    //         "cardholder_name": "John Smith",
    //         "card_number": "4788250000028291",
    //         "exp_date": "1020",
    //         "cvv": "123"
    //       }
    //     }),
    //     complete: function (res) {
    //       console.error(JSON.stringify(res));
    //       if (res == null || res.data == null) {
    //         console.error('网络请求失败');
    //         return;
    //       }
    //     }
    //   }) 
}

function json2Form(json) {
  var str = [];
  for (var p in json) {
    str.push(encodeURIComponent(p) + "=" + encodeURIComponent(json[p]));
  }
  return str.join("&");
} 
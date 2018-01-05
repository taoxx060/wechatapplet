module.exports = ctx => {
  maindishes = [{
                  name: '白菜绘虾球',
                  price: 15
                },
                {
                  name: '酸菜羊肉',
                  price: 12
                },
                {
                  name: '香干肉片',
                  price: 10
                }
                ]

  starters = [{
                name: "红肠",
                price: 1
              }]

  menutoday = []
  var currentid = 0
  for (var i = 0; i < maindishes.length; i++) {
    for (var j = 0; j < starters.length; j++) {
        var fullname = maindishes[i]["name"] + "+" + starters[j]["name"]
        var totalprice = maindishes[i]["price"] + starters[j]["price"]
        menutoday.push({ id: currentid, name: fullname, price: totalprice })
        currentid = currentid + 1
    }
  }

  ctx.state.data = {
    menu: menutoday
  }
}
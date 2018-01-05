module.exports = ctx => {
  maindishes = [{
                name:'白菜绘虾球',
                price:15
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
  sides = [{
            name: "烤羊排",
            price: 3
          },
          {
            name: "烤鸡翅",
            price: 1
          },
          {
            name: "香煎比目鱼",
            price: 2
          }
          ]
  salads = [{
              name: "海带丝",
              price: 1
            }]

  menutoday = []
  var currentid = 0
  for (var i = 0; i < maindishes.length; i++) {
    for (var j = 0; j < sides.length; j++) {
      for (var k = 0; k < salads.length; k++) {
        var fullname = maindishes[i]["name"] + "+" + sides[j]["name"] + "+" + salads[k]["name"]
        var totalprice = maindishes[i]["price"] + sides[j]["price"] + salads[k]["price"]
        menutoday.push({ id: currentid, name: fullname, price: totalprice})
        currentid = currentid + 1
      }
    }
  }

  ctx.state.data = {
    menu: menutoday
  }
}
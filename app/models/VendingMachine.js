class VendingMachine {
  constructor() {
    this.transactionTotal = 0
    this.acceptableCurrency = {
      quarter: .25,
      dime: .1,
      nickel: .05
    }
    this.foodItems = [{
      id: 'a1',
      img: 'https://target.scene7.com/is/image/Target/51591776?wid=400&hei=400&fmt=pjpeg',
      price: 1.25,
      quantity: 10
    }, {
      id: 'a2',
      img: 'https://pbs.twimg.com/profile_images/824647153721106432/gwLIQxqy_400x400.jpg',
      price: 2.00,
      quantity: 1
    }, {
      id: 'a3',
      img: 'http://www.mountaindew.com/assets/content/38195/20881/21892-grew-dew-product.png',
      price: .75,
      quantity: 15
    }]
    this.machineTotal = 10
  }

  addMoney(coin) {
    if (this.acceptableCurrency[coin]) {
      this.transactionTotal += this.acceptableCurrency[coin]
      return this.transactionTotal.toFixed(2)
    }
    return 'invalid coin'
  }


  vend(foodIndex) { //foodId
    let item = this.foodItems[foodIndex] //let item = this.foodItems.find(i => i.id == foodId)
    if (this.transactionTotal >= item.price && item.quantity > 0) {
      item.quantity -= 1
      this.transactionTotal -= item.price
      this.machineTotal += item.price
      return {
        img: item.img,
        total: this.transactionTotal.toFixed(2)
      }
    }
  }
  giveChange() {
    let change = this.transactionTotal
    this.transactionTotal = 0
    return change
  }

  getItems() {
    return this.foodItems
  }
}


export default VendingMachine
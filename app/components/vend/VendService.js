import VendingMachine from "../../models/VendingMachine.js";

//Private Parts


const vm = new VendingMachine()



//public to controller
class VendService {
  constructor() {

  }
  giveChange() {
    return vm.giveChange()
  }

  getItems() {
    return vm.getItems()
  }
  addMoney(type) {
    return vm.addMoney(type)
  }

  vend(foodIndex) {
    return vm.vend(foodIndex)
  }

}


export default VendService
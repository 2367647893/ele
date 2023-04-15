import { observable, computed, action } from 'mobx'

class HomeStore {
  @observable str = 'leo'
  @observable num = 123
  @observable bool = '真'

  @action x0 (opt) {
    this.str = opt
    console.log(this.str, 1)
  }

  @computed get total () {
    console.log(3)
    return this.str + this.num
  } 
}

export default new HomeStore()
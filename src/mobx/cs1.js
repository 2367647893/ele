import { observable, toJS, autorun, computed, action } from 'mobx'
import { getData } from '@/services'

class Cs1 {
  @observable str = 'leo'
  @observable num = 123
  @observable bool = '真'
  @observable data = '3333'

  @action async x0 (opt) {
    const data = await getData(opt)
    this.data = 'xxxx'
  }

  @computed get total () {
    console.log(3)
    return this.str + this.num
  } 
}

export default new Cs1()

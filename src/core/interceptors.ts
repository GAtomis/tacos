/*
 * @Description: interceptors
 * @Author: Gavin
 * @Date: 2022-02-11 23:05:18
 * @LastEditTime: 2023-07-04 13:41:29
 * @LastEditors: GAtomis 850680822@qq.com
 */
import utils from '../utils/utils'


export default class Interceptors {
  handlers:any[]
  forEach(fn) {
    utils.forEach(this.handlers, (h) => {
      if (h != null) fn(h)
    })

  }
  clean(id) {
    if (this.handlers[id]) {
      this.handlers[id] = null;
    }
  };
  use(fulfilled, rejected) {
    this.handlers.push({
      fulfilled,
      rejected
    })
    return this.handlers.length - 1
  
  }
  constructor() {
    this.handlers = []
  }
}


// Interceptors.prototype.use = function use(fulfilled, rejected) {
//   this.handlers.push({
//     fulfilled,
//     rejected
//   })
//   return this.handlers.length - 1

// }


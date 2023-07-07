/*
 * @Description: processResult
 * @Author: Gavin
 * @Date: 2022-02-13 19:42:52
 * @LastEditTime: 2023-07-07 12:55:50
 * @LastEditors: GAtomis 850680822@qq.com
 */

import {cloneDeep} from 'lodash-es'


export function processFulfilled(config) {
  config = cloneDeep(config)
  return function useResolve<T=any>(res) {
    res.config = config
    return Promise.resolve<T>(res)
  }

}
export function processRejected(config) {
  config = cloneDeep(config)
  return function useReject<T=any>(err) {
    err.config = config
    return Promise.reject<T>(err)

  }
}




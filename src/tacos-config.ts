/*
 * @Description: 本地配置
 * @Author: Gavin
 * @Date: 2022-02-09 15:23:07
 * @LastEditTime: 2023-07-04 09:58:02
 * @LastEditors: GAtomis 850680822@qq.com
 */


import type {DefaultConfig} from './main'
const contentType = {
  json: 'application/json',
  form: "application/x-www-form-urlencoded"
}



const defaults:DefaultConfig = {
  header: {
    'content-type': contentType["json"]
  },
  getTask: task => task,
  timeout: 2000,
}
export default defaults


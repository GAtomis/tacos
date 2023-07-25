# tacos
vxios的ts版本 支持自定义传入

## 修改日志
* 去除了./core/processResult 改变了实例原型的用法 0.0.1-beta8

## 关于Tacos
设计这个mini库的初衷是为了统一管理微信的所有请求方法,目的是将所有微信与网络的请求统一Promise化，并且能与web端Axios进行相互迁移(仍在完善中),目前可以支持wxapp原生,uniapp,taro
## 特性
* 支持Promise API
* CommonJS模块规范
* ES6书写风格
* 拦截请求和响应
* 集成所有wx请求
* 开箱即用的取消请求
## 开始使用

Taro是一个基于微信请求封装的mini请求库

### 安装
```shell
//npm
npm i @gatomis/tacos -s
or
//yarn
yarn add @gatomis/tacos -s
```
### 引入项目

```
//来自./http.js
//创建实例

import Taro from '@tarojs/taro'
import tacos from '@gatomis/tacos'






//与vxios axios不同的是,tacos必须进行实例化后才能使用
const instance = tacos.create({
  baseURL: "https://m.shuyishuer.cn/api/v1/",
  http: Taro,//请求实例 可以切换成wx,uni,Taro 
  timeout:10000
})
//请求拦截器配置
instance.interceptors.request.use(async (config) => {
  return config

})
//响应拦截器配置
instance.interceptors.response.use((response) => {



}, error => {

}
)


//返回实例request
export default instance

```
使用请求
```
import  http from  './http.ts'
export function getType() {
    return http.request<Result<any>>({
        method: 'post',
        url: `content/category/combox`
    })

}
```


### 基于原型
本项目原型基于[微信开发手册](https://developers.weixin.qq.com/miniprogram/dev/api/network/request/wx.request.html)
## licence
MIT License
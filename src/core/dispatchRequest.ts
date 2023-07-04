/*
 * @Description: 请求
 * @Author: Gavin
 * @Date: 2022-02-09 15:23:07
 * @LastEditTime: 2023-07-03 18:20:18
 * @LastEditors: GAtomis 850680822@qq.com
 */


import network from './wx-network'
import {createFullPath} from './createFullPath'
const {getDownload,getUpload,getXhr}=network

export default function (config) {

    
  const method =config.method||"get"
  const fullPath=createFullPath(config.baseURL,config.url)
  config.url=fullPath

  let result={}
  if(method=='downloadFile'||method=='downloadfile'){
    //文件下载
   result= getDownload(config)    
 }else if (method=='uploadFile'||method=='uploadfile'){
   //文件上传
   result= getUpload(config)
 }else{
      //正常请求
     result= getXhr(config)
  }
  return result
}

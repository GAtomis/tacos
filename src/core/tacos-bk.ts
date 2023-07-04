
import utils from '../utils/utils'
import Interceptors from './interceptors'
import dispatchRequest from './dispatchRequest'

import { processFulfilled, processRejected } from './processResult'
import type {RequestFn} from '../main'


export  class Tacos {
    defaults
    //@ts-ignore
    post: RequestFn
     //@ts-ignore
    get: RequestFn
     //@ts-ignore
    downloadFile: RequestFn
     //@ts-ignore
    uploadFile: RequestFn
     //@ts-ignore
    put: RequestFn
     //@ts-ignore
    delete: RequestFn
     //@ts-ignore
    connect:RequestFn
     //@ts-ignore
    head:RequestFn
     //@ts-ignore
    trace:RequestFn
      //@ts-ignore
    create:(config: any)=>RequestFn | Tacos
          //@ts-ignore
    mergebase:(newItem: any, base?: any)=> void
        //@ts-ignore
    request:<T>(config: any)=> Promise<T>
    interceptors: {
        request: Interceptors,
        response: Interceptors
    }
    constructor(instanceConfig) {
        this.defaults = instanceConfig
        this.interceptors = {
            request: new Interceptors(),
            response: new Interceptors()
        }
        // utils.forEach(['downloadFile', "uploadFile"], this.forEachMethodNoData)
        // utils.forEach(['post', 'get','post', 'put', 'delete'], this.forEachMethodWithData)
    }
    
   


}


       //@ts-ignore
Tacos.prototype.mergebase = function mergebase(newItem, base = this.defaults) {
    if (base.baseUrl) {
        newItem.url = base.baseUrl + newItem.url
    }
}

Tacos.prototype.request = function request(config) {
    if (typeof config === 'string') {
        config = arguments[1] || {}
        config.url = arguments[0]
    } else {
        config = config || {}
    }
    config = utils.merge({}, this.defaults, config)
    if (config.method) {
        config.method = config.method.toLowerCase()
    } else if (this.defaults.method) {
        config.method = this.defaults.method.toLowerCase()
    } else {
        config.method = 'get'
    }
    //链式调用

    let chain = [dispatchRequest, undefined, processFulfilled(config), processRejected(config)];
    // let chain =[];
    // let hasInterceptors=true
    // console.error(this);
    let promise = Promise.resolve(config)
    this.interceptors.request.forEach(function unshiftRequest(interceptor) {
        chain.unshift(interceptor.fulfilled, interceptor.rejected)
    })
    this.interceptors.response.forEach(function pushResponse(interceptor) {
        chain.push(interceptor.fulfilled, interceptor.rejected)
    })
    while (chain.length) {
        promise = promise.then(chain.shift(), chain.shift())
    }
    return promise
}


function forEachMethodWithData(method) {
    Tacos.prototype[method] = function (url, data, config) {
        
        return this.request({
            ...config,
            ...{
                method,
                url,
                data
            }
        })
    }

}

function forEachMethodNoData(method) {
    Tacos.prototype[method] = function (url, config) {
        return this.request({
            ...config,
            ...{
                method,
                url
            }
        })
    }
}

utils.forEach(['downloadFile', "uploadFile"], forEachMethodNoData)

utils.forEach(['post', 'get', 'head', 'post', 'put', 'delete', 'trace', 'connect'], forEachMethodWithData)


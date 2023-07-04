/*
 * @Description: 入口
 * @Author: Gavin
 * @Date: 2022-02-09 14:48:14
 * @LastEditTime: 2023-07-04 14:21:04
 * @LastEditors: GAtomis 850680822@qq.com
 */

import { bind } from './helper/bind'
import utils from './utils/utils'
import { Tacos } from './core/tacos'
import defaultes from './tacos-config'




export interface DefaultConfig {
    header: {
        'content-type': string;
    };
    getTask: (task: any) => any;
    timeout: number;
    baseURL?: string
}
export interface TacosRequestConfig<D> extends DefaultConfig {
    url?: string;
    method?: Method | string;
    data?: D;


}
export type RequestFn = (<T=any>(url: string, config: any) => Promise<T>) | (<T=any>(url: string, data: any, config: any) => Promise<T>)


export type Method = 'post' | 'get' | 'head' | 'post' | 'put' | 'delete' | 'trace' | 'connect' | 'downloadFile' | "uploadFile"

function createInstance(defaultConfig): Tacos  {
    const context = new Tacos(defaultConfig)
    // const intstance = bind(Tacos.prototype.request, context)

    // utils.useExtend(intstance, Tacos.prototype, context)
    // utils.useExtend(intstance, context)
    // utils.useExtend(intstance, { create, Tacos, context })
    context.create=create
    return context
}

let tacos = createInstance(defaultes)
function create(config) {
    if (config.constructor != Object) {
        throw new Error("传入参数不是配置类型")
    }
    return createInstance({ ...defaultes, ...config })
}





export default tacos
import { Tacos } from './core/tacos';
export interface DefaultConfig {
    header: {
        'content-type': string;
    };
    getTask: (task: any) => any;
    timeout: number;
    baseURL?: string;
}
export interface TacosRequestConfig<D> extends DefaultConfig {
    url?: string;
    method?: Method | string;
    data?: D;
}
export type RequestFn = (<T = any>(url: string, config: any) => Promise<T>) | (<T = any>(url: string, data: any, config: any) => Promise<T>);
export type Method = 'post' | 'get' | 'head' | 'post' | 'put' | 'delete' | 'trace' | 'connect' | 'downloadFile' | "uploadFile";
declare let tacos: Tacos;
export default tacos;

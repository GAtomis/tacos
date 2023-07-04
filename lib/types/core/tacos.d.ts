import Interceptors from './interceptors';
import type { RequestFn } from '../main';
export declare class Tacos {
    defaults: any;
    post: RequestFn;
    get: RequestFn;
    downloadFile: RequestFn;
    uploadFile: RequestFn;
    put: RequestFn;
    delete: RequestFn;
    connect: RequestFn;
    head: RequestFn;
    trace: RequestFn;
    create: (config: any) => Tacos;
    interceptors: {
        request: Interceptors;
        response: Interceptors;
    };
    constructor(instanceConfig: any);
    private forEachMethodNoData;
    private forEachMethodWithData;
    request<T = any>(config: any): Promise<T>;
    mergebase(newItem: any, base?: any): void;
}

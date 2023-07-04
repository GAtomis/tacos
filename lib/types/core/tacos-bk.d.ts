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
    create: (config: any) => RequestFn | Tacos;
    mergebase: (newItem: any, base?: any) => void;
    request: <T>(config: any) => Promise<T>;
    interceptors: {
        request: Interceptors;
        response: Interceptors;
    };
    constructor(instanceConfig: any);
}

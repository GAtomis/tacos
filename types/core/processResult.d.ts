export declare function processFulfilled(config: any): <T = any>(res: any) => Promise<Awaited<T>>;
export declare function processRejected(config: any): <T = any>(err: any) => Promise<T>;

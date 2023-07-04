declare function getXhr(config: any): Promise<unknown>;
declare function getUpload(config: any): Promise<unknown>;
declare function getDownload(config: any): Promise<unknown>;
declare const _default: {
    getDownload: typeof getDownload;
    getUpload: typeof getUpload;
    getXhr: typeof getXhr;
};
export default _default;

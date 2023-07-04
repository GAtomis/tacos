/**
 * @description: 遍历每一项都并执行回调函数
 * @param {any} obj 原对象
 * @param {function} fn执行回调
 * @param {object} 词法作用域执行
 * @return {*}
 *
 *  */
declare function forEach(obj: any, fn: any, context?: null): void;
/**
 * @description: 拓展函数
 * @param {object} origin 原对象
 * @param {object} copy 需要拷贝上的对象
 * @param {object}  thisArg this指向参数
 * @return {*}
 *
 *  */
declare function useExtend(origin: any, copy: any, thisArg?: any): void;
declare function merge(...arg: any[]): any;
declare const _default: {
    useExtend: typeof useExtend;
    forEach: typeof forEach;
    merge: typeof merge;
};
export default _default;

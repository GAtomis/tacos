export default class Interceptors {
    handlers: any[];
    forEach(fn: any): void;
    clean(id: any): void;
    use(fulfilled: any, rejected?: any): number;
    constructor();
}

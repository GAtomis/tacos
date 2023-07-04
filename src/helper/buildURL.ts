



function encode(val) {
    return encodeURIComponent(val).
        replace(/%3A/gi, ':').
        replace(/%24/g, '$').
        replace(/%2C/gi, ',').
        replace(/%20/g, '+').
        replace(/%5B/gi, '[').
        replace(/%5D/gi, ']');
}

export function buildURL(url, params, options) {
 

        /**
     * @description: 把object转化为url请求参数
     * @param {type}
     * @return: 拼接url
     */

            let obj = arguments[0];
            let prefix = arguments[1];
            if (typeof obj !== "object") return "";
            const attrs = Object.keys(obj);
            return attrs.reduce((query, attr, index) => {
                // 判断是否是第一层第一个循环
                if (index === 0 && !prefix) query += "?";
                if (typeof obj[attr] === "object") {
                    const subPrefix = prefix ? `${prefix}[${attr}]` : attr;
                    //@ts-ignore
                    query += this.objectToQuery(obj[attr], subPrefix);
                } else {
                    if (prefix) {
                        query += `${prefix}[${attr}]=${obj[attr]}`;
                    } else {
                        query += `${attr}=${obj[attr]}`;
                    }
                }
                // 判断是否是第一层最后一个循环
                if (index !== attrs.length - 1) query += "&";
                return query;
            }, "");
        
}
/**
 * Creates a new URL by combining the specified URLs
 *
 * @param {string} baseURL The base URL
 * @param {string} relativeURL The relative URL
 * @returns {string} The combined URL
 */
declare function combineURLs(baseURL: any, relativeURL: any): any;
/**
 * Determines whether the specified URL is absolute
 *
 * @param {string} url The URL to test
 * @returns {boolean} True if the specified URL is absolute, otherwise false
 */
declare function isAbsoluteURL(url: any): boolean;
declare const _default: {
    combineURLs: typeof combineURLs;
    isAbsoluteURL: typeof isAbsoluteURL;
};
export default _default;

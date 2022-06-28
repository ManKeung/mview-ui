/**
 * @Author: ManKeung
 * @description: 防抖函数: 一定时间内，只有最后一次操作，再过wait毫秒后才执行函数
 */

let timeout:any = null

/**
 * @param {Function} func 执行的函数
 * @param {Number} wait 延时时间
 * @param {Boolean} immediate 是否立即执行
 * @return {void}
 */
export default function debounce(func: Function, wait = 500, immediate = false) {
    // 清除定时器
    if (timeout !== null) clearTimeout(timeout)

    // 立即执行，此类情况一般用不到
    if (immediate) {
        const callNow = !timeout

        timeout = setTimeout(() => {
            timeout = null
        }, wait)

        if (callNow) typeof func === 'function' && func()
    } else {
        // 设置定时器，当最后一次操作后，timeout不会再被清除，所以在延时wait毫秒后执行func回调方法
        timeout = setTimeout(() => {
            typeof func === 'function' && func()
        }, wait)
    }
}
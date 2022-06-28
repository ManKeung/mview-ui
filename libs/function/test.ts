/**
 * @Author: ManKeung
 * @description: 校验
 */

// 校验邮箱
function email(value: string) {
    return /^\w+((-\w+)|(\.\w+))*\@[A-Za-z0-9]+((\.|-)[A-Za-z0-9]+)*\.[A-Za-z0-9]+$/.test(value)
}

// 验证手机格式
function mobile(value: string | number) {
    return /^1[23456789]\d{9}$/.test(value)
}

// 是否固定电话
function landline(value: string | number) {
    const reg = /^\d{3,4}-\d{7,8}(-\d{3,4})?$/
    return reg.test(value)
}

// 验证URL格式
function url(value: string) {
    return /^((https|http|ftp|rtsp|mms):\/\/)(([0-9a-zA-Z_!~*'().&=+$%-]+: )?[0-9a-zA-Z_!~*'().&=+$%-]+@)?(([0-9]{1,3}.){3}[0-9]{1,3}|([0-9a-zA-Z_!~*'()-]+.)*([0-9a-zA-Z][0-9a-zA-Z-]{0,61})?[0-9a-zA-Z].[a-zA-Z]{2,6})(:[0-9]{1,4})?((\/?)|(\/[0-9a-zA-Z_!~*'().;?:@&=+$,%#-]+)+\/?)$/
        .test(value)
}

// 验证数字
function number(value: string | number) {
    return /^[\+-]?(\d+\.?\d*|\.\d+|\d\.\d+e\+\d+)$/.test(value)
}

// 验证日期格式
function date(value: any) {
    if (!value) return false
    // 判断是否数值或者字符串数值(意味着为时间戳)，转为数值，否则new Date无法识别字符串时间戳
    if (number(value)) value = +value
    return !/Invalid|NaN/.test(new Date(value).toString())
}

// 验证ISO类型的日期格式
function dateISO(value: string | number) {
    return /^\d{4}[\/\-](0?[1-9]|1[012])[\/\-](0?[1-9]|[12][0-9]|3[01])$/.test(value)
}

// 验证字符串
function string(value) {
    return typeof value === 'string'
}

// 验证整数
function digits(value: string | number) {
    return /^\d+$/.test(value)
}

// 验证身份证号码
function idCard(value: string | number) {
    return /^[1-9]\d{5}[1-9]\d{3}((0\d)|(1[0-2]))(([0|1|2]\d)|3[0-1])\d{3}([0-9]|X)$/.test(
        value
    )
}

// 中文
function chinese(value: string) {
    const reg = /^[\u4e00-\u9fa5]+$/gi
    return reg.test(value)
}

// 只能输入字母
function letter(value: string) {
    return /^[a-zA-Z]*$/.test(value)
}

// 只能是字母或者数字
function enOrNum(value) {
    // 英文或者数字
    const reg = /^[0-9a-zA-Z]*$/g
    return reg.test(value)
}

// 验证是否包含某个值
function contains(value: string | number, param: string | number) {
    return value.indexOf(param) >= 0
}

// 判断是否为空
function empty(value: any) {
    switch (typeof value) {
        case 'undefined':
            return true
        case 'string':
            if (value.replace(/(^[ \t\n\r]*)|([ \t\n\r]*$)/g, '').length == 0) return true
            break
        case 'boolean':
            if (!value) return true
            break
        case 'number':
            if (value === 0 || isNaN(value)) return true
            break
        case 'object':
            if (value === null || value.length === 0) return true
            for (const i in value) {
                return false
            }
            return true
    }
    return false
}

// 是否json字符串
function jsonString(value: string) {
    if (typeof value === 'string') {
        try {
            const obj = JSON.parse(value)
            if (typeof obj === 'object' && obj) {
                return true
            }
            return false
        } catch (e) {
            return false
        }
    }
    return false
}

// 是否数组
function array(value: any) {
    if (typeof Array.isArray === 'function') {
        return Array.isArray(value)
    }
    return Object.prototype.toString.call(value) === '[object Array]'
}

// 是否对象
function object(value: any) {
    return Object.prototype.toString.call(value) === '[object Object]'
}

// 是否短信验证码
function code(value: string | number, len = 6) {
    return new RegExp(`^\\d{${len}}$`).test(value)
}

// 是否函数方法
function func(value: any) {
    return typeof value === 'function'
}

// 是否promise对象
function promise(value: any) {
    return object(value) && func(value.then) && func(value.catch)
}

// 是否图片格式
function image(value: string) {
    const IMAGE_REGEXP = /\.(jpeg|jpg|gif|png|svg|webp|jfif|bmp|dpg)/i
    return IMAGE_REGEXP.test(value)
}

// 是否视频格式
function video(value: string) {
    const VIDEO_REGEXP = /\.(mp4|mpg|mpeg|dat|asf|avi|rm|rmvb|mov|wmv|flv|mkv)/i
    return VIDEO_REGEXP.test(value)
}

// 是否为正则对象
function regExp(o: any) {
    return o && Object.prototype.toString.call(o) === '[object RegExp]'
}

export default {
    email,
    mobile,
    landline,
    url,
    date,
    dateISO,
    number,
    digits,
    idCard,
    chinese,
    letter,
    enOrNum,
    contains,
    empty,
    jsonString,
    object,
    array,
    code,
    func,
    promise,
    image,
    video,
    regExp,
    string
}
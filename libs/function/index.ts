import test from './test'
import { round } from './digit'

// 获取系统信息
function getSys() {
    const sys = uni.getSystemInfoSync()

    let customBar = 0

    // #ifndef MP
    customBar = sys.statusBarHeight + 44
    sys.mpW = {
        bottom: 0,
        top: 0,
        left: 0,
        right: 0,
        width: 0,
        height: 0,
        pad: 10
    }
    // if (sys.platform === 'android') {
    //     customBar = sys.statusBarHeight + 50
    // } else {
    //     customBar = sys.statusBarHeight + 50
    // }
    // #endif

    // #ifdef MP
    const custom = uni.getMenuButtonBoundingClientRect()
    customBar = custom.bottom + custom.top - sys.statusBarHeight
    sys.mpW = custom
    sys.mpW.pad = sys.screenWidth - custom.left - custom.width
    // #endif

    return {
        ...sys,
        customBar
    }
}

// 震动
function vibrate() {
    // #ifdef APP-PLUS
    if (sys.platform === 'ios') {
        const UIImpactFeedbackGenerator = plus.ios.importClass('UIImpactFeedbackGenerator');
        const impact = new UIImpactFeedbackGenerator()
        impact.prepare()
        impact.init(1)
        impact.impactOccurred()
    }

    if (sys.platform === 'android') {
        uni.vibrateShort()
    }
    // #endif

    // #ifdef MP
    uni.vibrateShort()
    // #endif
}

// toast提示
function toast(title: string, duration = 2000) {
    uni.showToast({
        icon: 'none',
        title,
        duration
    })
}

// 延迟执行
function sleep(time = 30) {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve()
        }, time)
    })
}

// 清除空格
function trim(str: any, pos = 'both') {
    str = String(str)
    let newStr = ''

    switch (pos) {
        case 'both':
            newStr = str.replace(/^\s+|\s+$/g, '')
            break
        case 'left':
            newStr = str.replace(/^\s*/, '')
            break
        case 'right':
            newStr = str.replace(/(\s*$)/g, '')
            break
        case 'all':
            newStr = str.replace(/\s+/g, '')
            break
        default:
            newStr = str
            break
    }

    return newStr
}

// 新增样式
function addStyle(customStyle: any, target = 'object') {
    // 字符串转字符串，对象转对象情形，直接返回
    if (test.empty(customStyle) || typeof (customStyle) === 'object' && target === 'object' || target === 'string'
        && typeof (customStyle) === 'string') {
        return customStyle
    }
    // 字符串转对象
    if (target === 'object') {
        // 去除字符串样式中的两端空格(中间的空格不能去掉，比如padding: 20px 0如果去掉了就错了)，空格是无用的
        customStyle = trim(customStyle)
        // 根据";"将字符串转为数组形式
        const styleArray = customStyle.split(';')
        const style = {}
        // 历遍数组，拼接成对象
        for (let i = 0; i < styleArray.length; i++) {
            // 'font-size:20px;color:red;'，如此最后字符串有";"的话，会导致styleArray最后一个元素为空字符串，这里需要过滤
            if (styleArray[i]) {
                const item = styleArray[i].split(':')
                style[trim(item[0])] = trim(item[1])
            }
        }
        return style
    }
    // 这里为对象转字符串形式
    let string = ''
    for (const i in customStyle) {
        // 驼峰转为中划线的形式，否则css内联样式，无法识别驼峰样式属性名
        const key = i.replace(/([A-Z])/g, '-$1').toLowerCase()
        string += `${key}:${customStyle[i]};`
    }
    // 去除两端空格
    return trim(string)
}

function addUnit(value = 'auto', unit = 'px') {
    value = String(value)

    return test.number(value) ? `${value}${unit}` : value
}

// 深克隆
function deepClone<T>(obj: T): T {
    // 对常见的“非”值，直接返回原来值
    if ([null, undefined, NaN, false].includes(obj)) return obj

    // 原始类型直接返回
    if (typeof obj !== 'object' && typeof obj !== 'function') return obj

    const o = test.array(obj) ? [] : {}

    for (const i in obj) {
        if (obj.hasOwnProperty(i)) {
            o[i] = typeof obj[i] === 'object' ? deepClone(obj[i]) : obj[i]
        }
    }

    return o
}

// JS对象深度合并
function deepMerge(target = {}, source = {}) {
    target = deepClone(target)
    if (typeof target !== 'object' || typeof source !== 'object') return false
    for (const prop in source) {
        if (!source.hasOwnProperty(prop)) continue
        if (prop in target) {
            if (typeof target[prop] !== 'object') {
                target[prop] = source[prop]
            } else if (typeof source[prop] !== 'object') {
                target[prop] = source[prop]
            } else if (target[prop].concat && source[prop].concat) {
                target[prop] = target[prop].concat(source[prop])
            } else {
                target[prop] = deepMerge(target[prop], source[prop])
            }
        } else {
            target[prop] = source[prop]
        }
    }
    return target
}

// 阻止事件冒泡
function noop(e: EventTarget) {
    e && typeof (e.stopPropagation) === 'function' && e.stopPropagation()
}

// 对象转url参数
function queryParams(data = {}, isPrefix = true, arrayFormat = 'brackets') {
    const prefix = isPrefix ? '?' : ''
    const _result = []
    if (['indices', 'brackets', 'repeat', 'comma'].indexOf(arrayFormat) == -1) arrayFormat = 'brackets'
    for (const key in data) {
        const value = data[key]
        // 去掉为空的参数
        if (['', undefined, null].indexOf(value) >= 0) {
            continue
        }
        // 如果值为数组，另行处理
        if (value.constructor === Array) {
            // e.g. {ids: [1, 2, 3]}
            switch (arrayFormat) {
                case 'indices':
                    // 结果: ids[0]=1&ids[1]=2&ids[2]=3
                    for (let i = 0; i < value.length; i++) {
                        _result.push(`${key}[${i}]=${value[i]}`)
                    }
                    break
                case 'brackets':
                    // 结果: ids[]=1&ids[]=2&ids[]=3
                    value.forEach((_value) => {
                        _result.push(`${key}[]=${_value}`)
                    })
                    break
                case 'repeat':
                    // 结果: ids=1&ids=2&ids=3
                    value.forEach((_value) => {
                        _result.push(`${key}=${_value}`)
                    })
                    break
                case 'comma':
                    // 结果: ids=1,2,3
                    let commaStr = ''
                    value.forEach((_value) => {
                        commaStr += (commaStr ? ',' : '') + _value
                    })
                    _result.push(`${key}=${commaStr}`)
                    break
                default:
                    value.forEach((_value) => {
                        _result.push(`${key}[]=${_value}`)
                    })
            }
        } else {
            _result.push(`${key}=${value}`)
        }
    }
    return _result.length ? prefix + _result.join('&') : ''
}

// 获取当前页面路径
function page() {
    const pages = getCurrentPages()

    return `/${pages[pages.length - 1].route}`
}

// 修改mView内置配置
function setConfig({ props = {}, config = {}, zIndex = {} }) {
    uni.$m.config = deepMerge(uni.$m.config, config)
    uni.$m.props = deepMerge(uni.$m.props, props)
    uni.$m.zIndex = deepMerge(uni.$m.zIndex, zIndex)
}

// 条件编译
function getPlatform() {
    let platform = 'none'

    // #ifdef VUE3
    platform = 'vue3'
    // #endif

    // #ifdef VUE2
    platform = 'vue2'
    // #endif

    // #ifdef APP-PLUS
    platform = 'plus'
    // #endif

    // #ifdef APP-NVUE
    platform = 'nvue'
    // #endif

    // #ifdef H5
    platform = 'h5'
    // #endif

    // #ifdef MP-WEIXIN
    platform = 'weixin'
    // #endif

    // #ifdef MP-ALIPAY
    platform = 'alipay'
    // #endif

    // #ifdef MP-BAIDU
    platform = 'baidu'
    // #endif

    // #ifdef MP-TOUTIAO
    platform = 'toutiao'
    // #endif

    // #ifdef MP-QQ
    platform = 'qq'
    // #endif

    // #ifdef MP-KUAISHOU
    platform = 'kuaishou'
    // #endif

    // #ifdef MP-360
    platform = '360'
    // #endif

    // #ifdef MP
    platform = 'mp'
    // #endif

    // #ifdef QUICKAPP-WEBVIEW
    platform = 'quickapp-webview'
    // #endif

    // #ifdef QUICKAPP-WEBVIEW-HUAWEI
    platform = 'quickapp-webview-huawei'
    // #endif

    // #ifdef QUICKAPP-WEBVIEW-UNION
    platform = 'quckapp-webview-union'
    // #endif

    return platform
}

const platform = getPlatform()

// 数字化格式
function priceFormat(number: number, decimals = 0, decimalPoint = '.', thousandsSeparator = ',') {
    thousandsSeparator = trim(thousandsSeparator) || ','
    decimalPoint = trim(decimalPoint) || '.'
    number = (`${number}`).replace(/[^0-9+-Ee.]/g, '')
    const n = !isFinite(+number) ? 0 : +number
    const prec = !isFinite(+decimals) ? 0 : Math.abs(decimals)
    const sep = (typeof thousandsSeparator === 'undefined') ? ',' : thousandsSeparator
    const dec = (typeof decimalPoint === 'undefined') ? '.' : decimalPoint
    let s = ''

    s = (prec ? round(n, prec) + '' : `${Math.round(n)}`).split('.')
    const re = /(-?\d+)(\d{3})/
    while (re.test(s[0])) {
        s[0] = s[0].replace(re, `$1${sep}$2`)
    }

    if ((s[1] || '').length < prec) {
        s[1] = s[1] || ''
        s[1] += new Array(prec - s[1].length + 1).join('0')
    }
    return s.join(dec)
}

// 时间格式化
function timeFormat(dateTime = null, formatStr = 'yyyy-mm-dd') {
    let date
    // 若传入时间为假值，则取当前时间
    if (!dateTime) {
        date = new Date()
    }
    // 若为unix秒时间戳，则转为毫秒时间戳（逻辑有点奇怪，但不敢改，以保证历史兼容）
    else if (/^\d{10}$/.test(dateTime?.toString().trim())) {
        date = new Date(dateTime * 1000)
    }
    // 若用户传入字符串格式时间戳，new Date无法解析，需做兼容
    else if (typeof dateTime === 'string' && /^\d+$/.test(dateTime.trim())) {
        date = new Date(Number(dateTime))
    }
    // 其他都认为符合 RFC 2822 规范
    else {
        // 处理平台性差异，在Safari/Webkit中，new Date仅支持/作为分割符的字符串时间
        date = new Date(
            typeof dateTime === 'string'
                ? dateTime.replace(/-/g, '/')
                : dateTime
        )
    }

    const timeSource = {
        'y': date.getFullYear().toString(), // 年
        'm': (date.getMonth() + 1).toString().padStart(2, '0'), // 月
        'd': date.getDate().toString().padStart(2, '0'), // 日
        'h': date.getHours().toString().padStart(2, '0'), // 时
        'M': date.getMinutes().toString().padStart(2, '0'), // 分
        's': date.getSeconds().toString().padStart(2, '0') // 秒
        // 有其他格式化字符需求可以继续添加，必须转化成字符串
    }

    for (const key in timeSource) {
        const [ret] = new RegExp(`${key}+`).exec(formatStr) || []
        if (ret) {
            // 年可能只需展示两位
            const beginIndex = key === 'y' && ret.length === 2 ? 2 : 0
            formatStr = formatStr.replace(ret, timeSource[key].slice(beginIndex))
        }
    }

    return formatStr
}

// 时间戳转为多久之前
function timeFrom(timestamp = null, format = 'yyyy-mm-dd') {
	if (timestamp == null) timestamp = Number(new Date())
	timestamp = parseInt(timestamp)
	// 判断用户输入的时间戳是秒还是毫秒,一般前端js获取的时间戳是毫秒(13位),后端传过来的为秒(10位)
	if (timestamp.toString().length == 10) timestamp *= 1000
	let timer = (new Date()).getTime() - timestamp
	timer = parseInt(timer / 1000)
	// 如果小于5分钟,则返回"刚刚",其他以此类推
	let tips = ''
	switch (true) {
		case timer < 300:
			tips = '刚刚'
			break
		case timer >= 300 && timer < 3600:
			tips = `${parseInt(timer / 60)}分钟前`
			break
		case timer >= 3600 && timer < 86400:
			tips = `${parseInt(timer / 3600)}小时前`
			break
		case timer >= 86400 && timer < 2592000:
			tips = `${parseInt(timer / 86400)}天前`
			break
		default:
			// 如果format为false，则无论什么时间戳，都显示xx之前
			if (format === false) {
				if (timer >= 2592000 && timer < 365 * 86400) {
					tips = `${parseInt(timer / (86400 * 30))}个月前`
				} else {
					tips = `${parseInt(timer / (86400 * 365))}年前`
				}
			} else {
				tips = timeFormat(timestamp, format)
			}
	}
	return tips
}

// uuid
function guid(len = 32, firstU = true, radix = null) {
	const chars = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz'.split('')
	const uuid = []
	radix = radix || chars.length

	if (len) {
		// 如果指定uuid长度,只是取随机的字符,0|x为位运算,能去掉x的小数位,返回整数位
		for (let i = 0; i < len; i++) uuid[i] = chars[0 | Math.random() * radix]
	} else {
		let r
		// rfc4122标准要求返回的uuid中,某些位为固定的字符
		uuid[8] = uuid[13] = uuid[18] = uuid[23] = '-'
		uuid[14] = '4'

		for (let i = 0; i < 36; i++) {
			if (!uuid[i]) {
				r = 0 | Math.random() * 16
				uuid[i] = chars[(i == 19) ? (r & 0x3) | 0x8 : r]
			}
		}
	}
	// 移除第一个字符,并用u替代,因为第一个字符为数值时,该guuid不能用作id或者class
	if (firstU) {
		uuid.shift()
		return `m${uuid.join('')}`
	}
	return uuid.join('')
}

export default {
    sys: getSys,
    toast,
    vibrate,
    sleep,
    trim,
    addStyle,
    addUnit,
    deepClone,
    deepMerge,
    noop,
    queryParams,
    page,
    setConfig,
    platform,
    priceFormat,
    timeFormat,
    timeFrom,
    guid
}

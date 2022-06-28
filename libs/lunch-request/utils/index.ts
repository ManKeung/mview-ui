
const { toString } = Object.prototype

export function isArray(val: any) {
    return toString.call(val) === '[object Array]'
}

export function isObject(val) {
    return val !== null && typeof val === 'object'
}

export function isDate(val) {
    return toString.call(val) === '[object Date]'
}

export function isURLSearchParams(val) {
    return typeof URLSearchParams !== 'undefined' && val instanceof URLSearchParams
}

export function forEach(obj, fn) {
    // Don't bother if no value provided
    if (obj === null || typeof obj === 'undefined') {
        return
    }

    // Force an array if not already something iterable
    if (typeof obj !== 'object') {
        /* eslint no-param-reassign:0 */
        obj = [obj]
    }

    if (isArray(obj)) {
        // Iterate over array values
        for (let i = 0, l = obj.length; i < l; i++) {
            fn.call(null, obj[i], i, obj)
        }
    } else {
        // Iterate over object keys
        for (const key in obj) {
            if (Object.prototype.hasOwnProperty.call(obj, key)) {
                fn.call(null, obj[key], key, obj)
            }
        }
    }
}

export function isBoolean(val) {
    return typeof val === 'boolean'
}

export function isPlainObject(obj) {
    return Object.prototype.toString.call(obj) === '[object Object]'
}

export function deepMerge(/* obj1, obj2, obj3, ... */) {
    const result = {}
    function assignValue(val, key) {
        if (typeof result[key] === 'object' && typeof val === 'object') {
            result[key] = deepMerge(result[key], val)
        } else if (typeof val === 'object') {
            result[key] = deepMerge({}, val)
        } else {
            result[key] = val
        }
    }
    for (let i = 0, l = arguments.length; i < l; i++) {
        forEach(arguments[i], assignValue)
    }
    return result
}

export function isUndefined(val) {
    return typeof val === 'undefined'
}
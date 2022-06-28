import dispatchRequest from './dispatchRequest'
import InterceptorManager from './InterceptorManager'
import mergeConfig from './mergeConfig'
import defaults from './defaults'
import { isPlainObject } from '../utils'
import { HttpRequestConfig } from '../index.d.ts'

type Interceptors = {
    request: InterceptorManager,
    response: InterceptorManager
}

export default class Request {
    config: HttpRequestConfig = {}
    interceptors: Interceptors

    constructor(arg: Object) {
        if (!isPlainObject(arg)) {
            arg = {}
            console.warn('设置全局参数必须接收一个object对象')
        }

        this.config = { ...defaults, ...arg }
        this.interceptors = {
            request: new InterceptorManager(),
            response: new InterceptorManager()
        }
    }

    setConfig(f: (conf: HttpRequestConfig) => HttpRequestConfig) {
        this.config = f(this.config)
    }

    middleware(config) {
        config = mergeConfig(this.config, config)
        const chain = [dispatchRequest, undefined]
        let promise = Promise.resolve(config)

        this.interceptors.request.forEach((interceptor) => {
            chain.unshift(interceptor.fulfilled, interceptor.rejected)
        })

        this.interceptors.response.forEach((interceptor) => {
            chain.push(interceptor.fulfilled, interceptor.rejected)
        })

        while (chain.length) {
            promise = promise.then(chain.shift(), chain.shift())
        }

        return promise
    }

    request(config = {}) {
        return this.middleware(config)
    }

    get(url, options = {}) {
        return this.middleware({
            url,
            method: 'GET',
            ...options
        })
    }

    post(url, data, options = {}) {
        return this.middleware({
            url,
            data,
            method: 'POST',
            ...options
        })
    }

    // #ifndef MP-ALIPAY
    put(url, data, options = {}) {
        return this.middleware({
            url,
            data,
            method: 'PUT',
            ...options
        })
    }

    // #endif

    // #ifdef APP-PLUS || H5 || MP-WEIXIN || MP-BAIDU
    delete(url, data, options = {}) {
        return this.middleware({
            url,
            data,
            method: 'DELETE',
            ...options
        })
    }

    // #endif

    // #ifdef H5 || MP-WEIXIN
    connect(url, data, options = {}) {
        return this.middleware({
            url,
            data,
            method: 'CONNECT',
            ...options
        })
    }

    // #endif

    // #ifdef  H5 || MP-WEIXIN || MP-BAIDU
    head(url, data, options = {}) {
        return this.middleware({
            url,
            data,
            method: 'HEAD',
            ...options
        })
    }

    // #endif

    // #ifdef APP-PLUS || H5 || MP-WEIXIN || MP-BAIDU
    options(url, data, options = {}) {
        return this.middleware({
            url,
            data,
            method: 'OPTIONS',
            ...options
        })
    }

    // #endif

    // #ifdef H5 || MP-WEIXIN
    trace(url, data, options = {}) {
        return this.middleware({
            url,
            data,
            method: 'TRACE',
            ...options
        })
    }

    // #endif

    upload(url, config = {}) {
        config.url = url
        config.method = 'UPLOAD'
        return this.middleware(config)
    }

    download(url, config = {}) {
        config.url = url
        config.method = 'DOWNLOAD'
        return this.middleware(config)
    }
}
import { HttpRequestConfig, Method } from '../index.d.ts'

const def: HttpRequestConfig = {
    baseURL: '',
    header: {},
    method: Method.GET,
    dataType: 'json',
    // #ifndef MP-ALIPAY
    responseType: 'text',
    // #endif
    custom: {},
    // #ifdef H5 || APP-PLUS || MP-ALIPAY || MP-WEIXIN
    timeout: 60000,
    // #endif
    // #ifdef APP-PLUS
    sslVerify: true,
    // #endif
    // #ifdef H5
    withCredentials: false,
    // #endif
    // #ifdef APP-PLUS
    firstIpv4: false,
    // #endif
    validateStatus(status: number) {
        return status >= 200 && status < 300
    }
}

export default def
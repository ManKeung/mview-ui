import { deepMerge, isUndefined } from '../utils'

const mergeKeys = (keys, globalsConfig, config2) => {
    const config = {}
    keys.forEach((prop) => {
        if (!isUndefined(config2[prop])) {
            config[prop] = config2[prop]
        } else if (!isUndefined(globalsConfig[prop])) {
            config[prop] = globalsConfig[prop]
        }
    })
    return config
}

export default (globalsConfig, config2 = {}) => {
    const method = config2.method || globalsConfig.method || 'GET'
    let config = {
        baseURL: globalsConfig.baseURL || '',
        method,
        url: config2.url || '',
        params: config2.params || {},
        custom: { ...(globalsConfig.custom || {}), ...(config2.custom || {}) },
        header: deepMerge(globalsConfig.header || {}, config2.header || {})
    }
    const defaultToConfig2Keys = ['getTask', 'validateStatus']
    config = { ...config, ...mergeKeys(defaultToConfig2Keys, globalsConfig, config2) }

    // eslint-disable-next-line no-empty
    if (method === 'DOWNLOAD') {
        // #ifdef H5 || APP-PLUS
        if (!isUndefined(config2.timeout)) {
            config.timeout = config2.timeout
        } else if (!isUndefined(globalsConfig.timeout)) {
            config.timeout = globalsConfig.timeout
        }
        // #endif
    } else if (method === 'UPLOAD') {
        delete config.header['content-type']
        delete config.header['Content-Type']
        const uploadKeys = [
            // #ifdef APP-PLUS || H5
            'files',
            // #endif
            // #ifdef MP-ALIPAY
            'fileType',
            // #endif
            // #ifdef H5
            'file',
            // #endif
            'filePath',
            'name',
            // #ifdef H5 || APP-PLUS
            'timeout',
            // #endif
            'formData'
        ]
        uploadKeys.forEach((prop) => {
            if (!isUndefined(config2[prop])) {
                config[prop] = config2[prop]
            }
        })
        // #ifdef H5 || APP-PLUS
        if (isUndefined(config.timeout) && !isUndefined(globalsConfig.timeout)) {
            config.timeout = globalsConfig.timeout
        }
        // #endif
    } else {
        const defaultsKeys = [
            'data',
            // #ifdef H5 || APP-PLUS || MP-ALIPAY || MP-WEIXIN
            'timeout',
            // #endif
            'dataType',
            // #ifndef MP-ALIPAY
            'responseType',
            // #endif
            // #ifdef APP-PLUS
            'sslVerify',
            // #endif
            // #ifdef H5
            'withCredentials',
            // #endif
            // #ifdef APP-PLUS
            'firstIpv4'
            // #endif
        ]
        config = { ...config, ...mergeKeys(defaultsKeys, globalsConfig, config2) }
    }

    return config
}

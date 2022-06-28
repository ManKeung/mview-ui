/**
 * @Author: ManKeung
 * @description: 路由跳转
 */

class Router {
    private config = {
        type: 'navigateTo',
        url: '',
        delta: 1, // navigateBack页面后退时,回退的层数
        params: {}, // 传递的参数
        animationType: 'pop-in', // 窗口动画,只在APP有效
        animationDuration: 300, // 窗口动画持续时间,单位毫秒,只在APP有效
        intercept: false // 是否需要拦截
    }

    constructor() {
        // 因为route方法是需要对外赋值给另外的对象使用，同时route内部有使用this，会导致route失去上下文
        // 这里在构造函数中进行this绑定
        this.route = this.route.bind(this)
    }

    // 判断url前面是否有"/"，如果没有则加上，否则无法跳转
    private addRootPath(url: string) {
        return url[0] === '/' ? url : `/${url}`
    }

    // 整合路由参数
    private mixinParam(url: string, params: {[x: string]: any}) {
        url = url && this.addRootPath(url)
        // 使用正则匹配，主要依据是判断是否有"/","?","="等，如“/page/index/index?name=mary"
        // 如果有url中有get参数，转换后无需带上"?"
        let query = ''
        if (/.*\/.*\?.*=.*/.test(url)) {
            query = uni.$m.queryParams(params, false)

            return url += `&${query}`
        }

        query = uni.$m.queryParams(params)

        return url += query
    }

    // 对外的方法名称
    async route(options = {}, params = {}) {
        // 合并用户的配置和内部的默认配置
        let mergeConfig = {}

        if (typeof options === 'string') {
            // 如果options为字符串，则为route(url, params)的形式
            mergeConfig.url = this.mixinParam(options, params)
            mergeConfig.type = 'navigateTo'
        } else {
            mergeConfig = uni.$m.deepClone(options, this.config)
            // 否则正常使用mergeConfig中的url和params进行拼接
            mergeConfig.url = this.mixinParam(options.url, options.params)
        }

        // 如果本次跳转的路径和本页面路径一致，不执行跳转，防止用户快速点击跳转按钮，造成多次跳转同一个页面的问题
        if (mergeConfig.url === uni.$m.page()) return

        if (params.intercept) this.config.intercept = params.intercept

        // params参数也带给拦截器
        mergeConfig.params = params
        // 合并内外部参数
        mergeConfig = uni.$m.deepMerge(this.config, mergeConfig)

        // 判断用户是否定义了拦截器
        if (typeof uni.$m.routeIntercept === 'function') {
            // 定一个promise，根据用户执行resolve(true)或者resolve(false)来决定是否进行路由跳转
            const next = await new Promise(resolve => {
                uni.$m.routeIntercept(mergeConfig, resolve)
            })

            // 果next为true，则执行路由跳转
            next && this.openPage(mergeConfig)
        } else {
            this.openPage(mergeConfig)
        }
    }

    private openPage(config = {}) {
        // 解构参数
        const {
           url,
           type,
           delta,
           animationType,
           animationDuration
        } = config

        switch (type){
            case 'navigateTo':
            case 'to':
                uni.navigateTo({
                    url,
                    animationType,
                    animationDuration
                })
                break
            case 'redirectTo':
            case 'redirect':
                uni.redirectTo({
                    url
                })
                break
            case 'switchTab':
            case 'tab':
                uni.switchTab({
                    url
                })
                break
            case 'reLaunch':
            case 'launch':
                uni.reLaunch({
                    url
                })
                break
            case 'navigateBack':
            case 'back':
                uni.navigateBack({
                    delta
                })
                break
            default:

                break
        }
    }
}


export default (new Router()).route

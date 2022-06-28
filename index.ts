import { App } from 'vue'
// 全局挂载引入http相关请求拦截插件
import Request from './libs/lunch-request'
// 配置信息
import config from './libs/config/conifg'
// props配置信息
import props from './libs/config/props'
// 各个需要fixed的地方的z-index配置文件
import zIndex from './libs/config/zIndex'
import index from './libs/function/index'

const $m = {
    config,
    http: new Request(),
    props,
    zIndex,
    ...index
}

const funcModules = import.meta.globEager('./libs/function/*.ts')
const utilModules = import.meta.globEager('./libs/util/*.ts')

modules(funcModules, $m)
modules(utilModules, $m)

function modules(obj: any, $m: any) {

    for (const o in obj) {
        const re = /^\.\/(\S+).ts$/
        const group: any = o.match(re)
        const arr = group[1].split('/')
        const name = arr[arr.length - 1].replace('.ts', '')

        if (name !== 'index') $m[name] = obj[o].default
    }
}

// $m挂载到uni对象上
uni.$m = $m

const install = (app: App) => {
    app.config.globalProperties.$m = $m
}

export default {
    install
}

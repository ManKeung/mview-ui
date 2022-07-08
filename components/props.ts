/**
 * @Author: ManKeung
 * @description: 由于app与其他端代码执行顺序不一样导致在设置prop默认值时$m不能挂载到uni上
 */

import config from '../libs/config/conifg'
import props from '../libs/config/props'

export function getDefault(val: string, val2: string): any {
    // #ifdef APP-PLUS
    return props[val][val2]
    // #endif

    // #ifndef APP-PLUS
    console.log(val)
    console.log(val2)
    return uni.$m.props[val][val2]
    // #endif
}

export function getCommon(): any {
    // #ifdef APP-PLUS
    return config.props
    // #endif

    // #ifndef APP-PLUS
    return uni.$m.config.props
    // #endif
}

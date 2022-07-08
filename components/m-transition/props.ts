import { getCommon, getDefault } from '../props'

export default {
    ...getCommon(),
    // 是否展示组件
    show: {
        type: Boolean,
        default: getDefault('transition', 'show')
    },
    // 使用的动画模式
    mode: {
        type: String,
        default: getDefault('transition', 'mode')
    },
    // 动画的执行时间，单位ms
    duration: {
        type: [String, Number],
        default: getDefault('transition', 'duration')
    },
    // 使用的动画过渡函数
    timingFunction: {
        type: String,
        default: getDefault('transition', 'timingFunction')
    }
}

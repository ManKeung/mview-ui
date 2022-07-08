import { getCommon, getDefault } from '../props'

export default {
    ...getCommon(),
    // 图标类名
    name: {
        type: String,
        default: getDefault('icon', 'name')
    },
    // 图标颜色
    color: {
        type: String,
        default: getDefault('icon', 'color')
    },
    // 字体大小，单位px
    size: {
        type: [String, Number],
        default: getDefault('icon', 'size')
    },
    // 是否显示粗体
    bold: {
        type: Boolean,
        default: getDefault('icon', 'bold')
    },
    // 是否阻止事件传播
    stop: {
        type: Boolean,
        default: getDefault('icon', 'stop')
    },
    // 点击图标的时候传递事件出去的index（用于区分点击了哪一个）
    index: {
        type: [String, Number],
        default: getDefault('icon', 'index')
    }
}

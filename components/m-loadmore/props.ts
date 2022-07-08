import { getCommon, getDefault } from '../props'

export default {
    ...getCommon(),
    // 组件状态，loadmore-加载前的状态，loading-加载中的状态，nomore-没有更多的状态
    status: {
        type: String,
        default: getDefault('loadmore', 'status')
    },
    // 组件背景色
    bgColor: {
        type: String,
        default: getDefault('loadmore', 'bgColor')
    },
    // 是否显示加载中的图标
    icon: {
        type: Boolean,
        default: getDefault('loadmore', 'icon')
    },
    // 字体大小
    fontSize: {
        type: [String, Number],
        default: getDefault('loadmore', 'fontSize')
    },
    // 字体颜色
    color: {
        type: String,
        default: getDefault('loadmore', 'color')
    },

    // 加载中状态的图标，spinner-花朵状图标，circle-圆圈状，semicircle-半圆
    loadingIcon: {
        type: String,
        default: getDefault('loadmore', 'loadingIcon')
    },
    // 加载前的提示语
    loadmoreText: {
        type: String,
        default: getDefault('loadmore', 'loadmoreText')
    },
    // 加载中提示语
    loadingText: {
        type: String,
        default: getDefault('loadmore', 'loadingText')
    },
    // 没有更多的提示语
    nomoreText: {
        type: String,
        default: getDefault('loadmore', 'nomoreText')
    },
    // 在“没有更多”状态下，是否显示粗点
    isDot: {
        type: Boolean,
        default: getDefault('loadmore', 'isDot')
    },
    // 加载中图标的颜色
    iconColor: {
        type: String,
        default: getDefault('loadmore', 'iconColor')
    },
    // 图标大小
    iconSize: {
        type: String,
        default: getDefault('loadmore', 'iconSize')
    },
    // 上边距
    marginTop: {
        type: [String, Number],
        default: getDefault('loadmore', 'marginTop')
    },
    // 下边距
    marginBottom: {
        type: [String, Number],
        default: getDefault('loadmore', 'marginBottom')
    },
    // 高度，单位px
    height: {
        type: [String, Number],
        default: getDefault('loadmore', 'height')
    },
    // 是否显示左边分割线
    line: {
        type: Boolean,
        default: getDefault('loadmore', 'line')
    }
}

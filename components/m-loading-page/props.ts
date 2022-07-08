import { getCommon, getDefault } from '../props'

export default {
    ...getCommon(),
    // 提示内容
    loadingText: {
        type: [String, Number],
        default: getDefault('loadingPage', 'loadingText')
    },
    // 文字上方用于替换loading动画的图片
    image: {
        type: String,
        default: getDefault('loadingPage', 'image')
    },
    // 加载动画的模式，circle-圆形，spinner-花朵形，semicircle-半圆形 bicircle-双圆 default-四圆
    loadingMode: {
        type: String,
        default: getDefault('loadingPage', 'loadingMode')
    },
    // 是否加载中
    loading: {
        type: Boolean,
        default: getDefault('loadingPage', 'loading')
    },
    // 背景色
    bgColor: {
        type: String,
        default: getDefault('loadingPage', 'bgColor')
    },
    // 文字颜色
    color: {
        type: String,
        default: getDefault('loadingPage', 'color')
    },
    // 文字大小
    fontSize: {
        type: [String, Number],
        default: getDefault('loadingPage', 'fontSize')
    },
    // 加载中图标的颜色，只能rgb或者十六进制颜色值
    loadingColor: {
        type: String,
        default: getDefault('loadingPage', 'loadingColor')
    },
    // 加载动画浅色颜色
    loadingInactiveColor: {
        type: String,
        default: getDefault('loadingPage', 'loadingInactiveColor')
    },
    // loading大小
    iconSize: {
        type: [String, Number],
        default: getDefault('loadingPage', 'loadingSize')
    }
}

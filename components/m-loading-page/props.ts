export default {
    ...uni.$m.config.props,
    // 提示内容
    loadingText: {
        type: [String, Number],
        default: uni.$m.props.loadingPage.loadingText
    },
    // 文字上方用于替换loading动画的图片
    image: {
        type: String,
        default: uni.$m.props.loadingPage.image
    },
    // 加载动画的模式，circle-圆形，spinner-花朵形，semicircle-半圆形 bicircle-双圆 default-四圆
    loadingMode: {
        type: String,
        default: uni.$m.props.loadingPage.loadingMode
    },
    // 是否加载中
    loading: {
        type: Boolean,
        default: uni.$m.props.loadingPage.loading
    },
    // 背景色
    bgColor: {
        type: String,
        default: uni.$m.props.loadingPage.bgColor
    },
    // 文字颜色
    color: {
        type: String,
        default: uni.$m.props.loadingPage.color
    },
    // 文字大小
    fontSize: {
        type: [String, Number],
        default: uni.$m.props.loadingPage.fontSize
    },
    // 加载中图标的颜色，只能rgb或者十六进制颜色值
    loadingColor: {
        type: String,
        default: uni.$m.props.loadingPage.loadingColor
    },
    // 加载动画浅色颜色
    loadingInactiveColor: {
        type: String,
        default: uni.$m.props.loadingPage.loadingInactiveColor
    },
    // loading大小
    iconSize: {
        type: [String, Number],
        default: uni.$m.props.loadingPage.loadingSize
    }
}

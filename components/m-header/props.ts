/**
 * @Author: ManKeung
 * @description: 组件参数
 */

export default {
    ...uni.$m.config.props,
    // 背景色
    bgc: {
        type: String,
        default: ''
    },
    // 渐变色
    linear: {
        type: String,
        default: ''
    },
    // 自定义返回事件
    back: {
        type: Function
    },
    // 是否显示返回
    left: {
        type: Boolean,
        default: true
    },
    // 返回标题
    leftTitle: {
        type: String,
        default: ''
    },
    // 返回图标
    leftIcon: {
        type: String,
        default: 'left'
    },
    // 返回字体颜色
    leftColor: {
        type: String,
        default: ''
    },
    // 标题
    title: {
        type: String,
        default: ''
    },
    // 标题长度
    titleLen: {
        type: [Number, String],
        default: 12
    },
    // 标题颜色
    titleColor: {
        type: String,
        default: ''
    },
    // 样式
    sty: {
        type: Object,
        default: () => {}
    }
}

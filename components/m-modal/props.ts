import { getDefault } from '../props'

export default {
    // 是否展示modal
    show: {
        type: Boolean,
        default: getDefault('modal', 'show')
    },
    // 标题
    title: {
        type: [String],
        default: getDefault('modal', 'title')
    },
    // 弹窗内容
    content: {
        type: String,
        default: getDefault('modal', 'content')
    },
    // 确认文案
    confirmText: {
        type: String,
        default: getDefault('modal', 'confirmText')
    },
    // 取消文案
    cancelText: {
        type: String,
        default: getDefault('modal', 'cancelText')
    },
    // 是否显示确认按钮
    showConfirmButton: {
        type: Boolean,
        default: getDefault('modal', 'showConfirmButton')
    },
    // 是否显示取消按钮
    showCancelButton: {
        type: Boolean,
        default: getDefault('modal', 'showCancelButton')
    },
    // 确认按钮颜色
    confirmColor: {
        type: String,
        default: getDefault('modal', 'confirmColor')
    },
    // 取消文字颜色
    cancelColor: {
        type: String,
        default: getDefault('modal', 'cancelColor')
    },
    // 对调确认和取消的位置
    buttonReverse: {
        type: Boolean,
        default: getDefault('modal', 'buttonReverse')
    },
    // 是否开启缩放效果
    zoom: {
        type: Boolean,
        default: getDefault('modal', 'zoom')
    },
    // 是否允许点击遮罩关闭modal
    closeOnClickOverlay: {
        type: Boolean,
        default: getDefault('modal', 'closeOnClickOverlay')
    },
    // 给一个负的margin-top，往上偏移，避免和键盘重合的情况
    negativeTop: {
        type: [String, Number],
        default: getDefault('modal', 'negativeTop')
    },
    // modal宽度，不支持百分比，可以数值，px，rpx单位
    width: {
        type: [String, Number],
        default: getDefault('modal', 'width')
    }
}

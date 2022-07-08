import { getCommon, getDefault } from '../props'

export default {
    ...getCommon(),
    // 键盘的类型，number-数字键盘，card-身份证键盘
    mode: {
        type: String,
        default: getDefault('keyboard', 'mode')
    },
    // 是否显示键盘的"."符号
    dotDisabled: {
        type: Boolean,
        default: getDefault('keyboard', 'dotDisabled')
    },
    // 是否显示顶部工具条
    tooltip: {
        type: Boolean,
        default: getDefault('keyboard', 'tooltip')
    },
    // 是否显示工具条中间的提示
    showTips: {
        type: Boolean,
        default: getDefault('keyboard', 'showTips')
    },
    // 工具条中间的提示文字
    tips: {
        type: String,
        default: getDefault('keyboard', 'tips')
    },
    // 是否显示工具条左边的"取消"按钮
    showCancel: {
        type: Boolean,
        default: getDefault('keyboard', 'showCancel')
    },
    // 是否显示工具条右边的"完成"按钮
    showConfirm: {
        type: Boolean,
        default: getDefault('keyboard', 'showConfirm')
    },
    // 是否打乱键盘按键的顺序
    random: {
        type: Boolean,
        default: getDefault('keyboard', 'random')
    },
    // 是否开启底部安全区适配，开启的话，会在iPhoneX机型底部添加一定的内边距
    safeAreaInsetBottom: {
        type: Boolean,
        default: getDefault('keyboard', 'safeAreaInsetBottom')
    },
    // 是否允许通过点击遮罩关闭键盘
    closeOnClickOverlay: {
        type: Boolean,
        default: getDefault('keyboard', 'closeOnClickOverlay')
    },
    // 控制键盘的弹出与收起
    show: {
        type: Boolean,
        default: getDefault('keyboard', 'show')
    },
    // 是否显示遮罩，某些时候数字键盘时，用户希望看到自己的数值，所以可能不想要遮罩
    overlay: {
        type: Boolean,
        default: getDefault('keyboard', 'overlay')
    },
    // z-index值
    zIndex: {
        type: [String, Number],
        default: getDefault('keyboard', 'zIndex')
    },
    // 取消按钮的文字
    cancelText: {
        type: String,
        default: getDefault('keyboard', 'cancelText')
    },
    // 确认按钮的文字
    confirmText: {
        type: String,
        default: getDefault('keyboard', 'confirmText')
    },
    // 是否开始震动
    vibrate: {
        type: Boolean,
        default: getDefault('keyboard', 'vibrate')
    }
}

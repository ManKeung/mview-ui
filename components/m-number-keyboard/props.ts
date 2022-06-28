export default {
    // 是否打乱键盘按键的顺序
    random: {
       type: Boolean,
        default: false
    },
    // 是否去掉小数点
    dotDisabled: {
        type: Boolean,
        default: true
    },
    // 是否震动
    vibrate: {
        type: Boolean,
        default: false
    },
    // 键盘模式
    mode: {
        type: String,
        default: 'number' // card -> 身份证
    }
}

export default {
    ...uni.$m.config.props,
    // 是否显示遮罩
    show: {
        type: Boolean,
        default: uni.$m.props.overlay.show
    },
    // 层级z-index
    zIndex: {
        type: [String, Number],
        default: uni.$m.props.overlay.zIndex
    },
    // 遮罩的过渡时间，单位为ms
    duration: {
        type: [String, Number],
        default: uni.$m.props.overlay.duration
    },
    // 不透明度值，当做rgba的第四个参数
    opacity: {
        type: [String, Number],
        default: uni.$m.props.overlay.opacity
    }
}

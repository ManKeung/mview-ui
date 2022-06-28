export default {
    ...uni.$m.config.props,
    // 分组标题
    title: {
        type: String,
        default: uni.$m.props.cellGroup.title
    },
    // 是否显示外边框
    border: {
        type: Boolean,
        default: uni.$m.props.cellGroup.border
    }
}
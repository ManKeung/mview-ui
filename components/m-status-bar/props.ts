/**
 * @Author: ManKeung
 * @description: 组件参数
 */

export default {
    ...uni.$m.config.props,
    bac: {
        type: String,
        default: uni.$m.props.statusBar.bac
    }
}

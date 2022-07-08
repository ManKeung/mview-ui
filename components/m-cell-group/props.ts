import { getCommon, getDefault } from '../props'

export default {
    ...getCommon(),
    // 分组标题
    title: {
        type: String,
        default: getDefault('cellGroup', 'title')
    },
    // 是否显示外边框
    border: {
        type: Boolean,
        default: getDefault('cellGroup', 'border')
    }
}

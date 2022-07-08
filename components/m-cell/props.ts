import { getCommon, getDefault } from '../props'

export default {
    ...getCommon(),
    // 标题
    title: {
        type: [String, Number],
        default: getDefault('cell', 'title')
    },
    // 标题下方的描述信息
    label: {
        type: [String, Number],
        default: getDefault('cell', 'label')
    },
    // 右侧的内容
    value: {
        type: [String, Number],
        default: getDefault('cell', 'value')
    },
    // 左侧图标名称，或者图片链接(本地文件建议使用绝对地址)
    icon: {
        type: String,
        default: getDefault('cell', 'icon')
    },
    // 标题的宽度，单位任意，数值默认为px单位
    titleWidth: {
        type: [String, Number],
        default: getDefault('cell', 'titleWidth')
    },
    // 是否禁用cell
    disabled: {
        type: Boolean,
        default: getDefault('cell', 'disabled')
    },
    // 是否显示下边框
    border: {
        type: Boolean,
        default: getDefault('cell', 'border')
    },
    // 内容是否垂直居中(主要是针对右侧的value部分)
    center: {
        type: Boolean,
        default: getDefault('cell', 'center')
    },
    // 点击后跳转的URL地址
    url: {
        type: String,
        default: getDefault('cell', 'url')
    },
    // 链接跳转的方式，内部使用的是uView封装的route方法，可能会进行拦截操作
    linkType: {
        type: String,
        default: getDefault('cell', 'linkType')
    },
    // 是否开启点击反馈(表现为点击时加上灰色背景)
    clickable: {
        type: Boolean,
        default: getDefault('cell', 'clickable')
    },
    // 是否展示右侧箭头并开启点击反馈
    isLink: {
        type: Boolean,
        default: getDefault('cell', 'isLink')
    },
    // 右侧的图标箭头
    rightIcon: {
        type: String,
        default: getDefault('cell', 'rightIcon')
    },
    // 右侧箭头的方向，可选值为：left，up，down
    arrowDirection: {
        type: String,
        default: getDefault('cell', 'arrowDirection')
    },
    // 左侧图标样式
    iconStyle: {
        type: [Object, String],
        default: () => {
            return getDefault('cell', 'iconStyle')
        }
    },
    // 右侧箭头图标的样式
    rightIconStyle: {
        type: [Object, String],
        default: () => {
            return getDefault('cell', 'rightIconStyle')
        }
    },
    // 标题的样式
    titleStyle: {
        type: [Object, String],
        default: () => {
            return getDefault('cell', 'titleStyle')
        }
    },
    // 单位元的大小，可选值为large
    size: {
        type: String,
        default: getDefault('cell', 'size')
    },
    // 点击cell是否阻止事件传播
    stop: {
        type: Boolean,
        default: getDefault('cell', 'stop')
    },
    // 标识符，cell被点击时返回
    name: {
        type: [Number, String],
        default: getDefault('cell', 'name')
    }
}

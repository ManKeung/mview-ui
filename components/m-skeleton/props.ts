import { getDefault } from '../props'

export default {
    // 是否展示骨架组件
    loading: {
        type: Boolean,
        default: getDefault('skeleton', 'loading')
    },
    // 是否开启动画效果
    animate: {
        type: Boolean,
        default: getDefault('skeleton', 'animate')
    },
    // 段落占位图行数
    rows: {
        type: [String, Number],
        default: getDefault('skeleton', 'rows')
    },
    // 段落占位图的宽度
    rowsWidth: {
        type: [String, Number, Array],
        default: getDefault('skeleton', 'rowsWidth')
    },
    // 段落占位图的高度
    rowsHeight: {
        type: [String, Number, Array],
        default: getDefault('skeleton', 'rowsHeight')
    },
    // 是否展示标题占位图
    title: {
        type: Boolean,
        default: getDefault('skeleton', 'title')
    },
    // 段落标题的宽度
    titleWidth: {
        type: [String, Number],
        default: getDefault('skeleton', 'titleWidth')
    },
    // 段落标题的高度
    titleHeight: {
        type: [String, Number],
        default: getDefault('skeleton', 'titleHeight')
    },
    // 是否展示头像占位图
    avatar: {
        type: Boolean,
        default: getDefault('skeleton', 'avatar')
    },
    // 头像占位图大小
    avatarSize: {
        type: [String, Number],
        default: getDefault('skeleton', 'avatarSize')
    },
    // 头像占位图的形状，circle-圆形，square-方形
    avatarShape: {
        type: String,
        default: getDefault('skeleton', 'avatarShape')
    }
}

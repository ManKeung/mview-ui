/**
 * @Author: ManKeung
 * @description: 组件参数
 */

export interface Options {
    width: number // 盒子宽度
    heigth: number // 盒子高度
    len: number // 数据长度
    index: number // 当前第几个
    loading: boolean // 数据加载中
    isDown: boolean // 是否是下拉
}

export default {
    options: {
        type: Object,
        default: () => {}
    }
}

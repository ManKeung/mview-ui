<template>
    <view class="m-line" :style="[lineStyle]">

    </view>
</template>

<script lang="ts" setup>
import { computed } from 'vue'
import Props from './props'

const props = defineProps(Props)

const lineStyle = computed(() => {
    const style = {}
    style.margin = props.margin

    // 如果是水平线条，边框高度为1px，再通过transform缩小一半，就是0.5px了
    if (props.direction === 'row') {
        // 此处采用兼容分开写，兼容nvue的写法
        style.borderBottomWidth = '1px'
        style.borderBottomStyle = props.dashed ? 'dashed' : 'solid'
        style.width = uni.$m.addUnit(props.length)

        if (props.hairline) style.transform = 'scaleY(0.5)'
    } else {
        // 如果是竖向线条，边框宽度为1px，再通过transform缩小一半，就是0.5px了
        style.borderLeftWidth = '1px'
        style.borderLeftStyle = props.dashed ? 'dashed' : 'solid'

        style.height = uni.$m.addUnit(props.length)

        if (props.hairline) style.transform = 'scaleX(0.5)'
    }

    style.borderColor = props.color

    return uni.$m.deepMerge(style, uni.$m.addStyle(props.customStyle))
})
</script>

<style lang="scss" scoped>
@import "../../libs/css/components.scss";

.m-line {
    /* #ifndef APP-NVUE */
    vertical-align: middle;
    /* #endif */
}
</style>

<template>
    <view class="m-header" :style="hSty">
        <m-status-bar />
        <view class="m-header-content">
            <view v-if="props.left || slots.left" class="m-header-left" :style="leftSty">
                <slot name="left">
                    <m-icon name="left" color="" size="42rpx" stop @click="handleBack" />
                    <text v-if="props.leftTitle" class="txt">
                        {{ props.leftTitle }}
                    </text>
                </slot>
            </view>
            <view v-if="slots.default" class="m-header-center">
                <slot></slot>
            </view>
            <view v-if="title && !slots.default" class="m-header-center center" :style="titleSty">
                {{ title }}
            </view>
            <view v-if="slots.right" class="m-header-right">
                <slot name="right"></slot>
            </view>
        </view>
    </view>
</template>

<script lang="ts" setup>
import { computed, useSlots } from 'vue'
import Props from './props'

const props = defineProps(Props)
const slots = useSlots()

// 标题样式
const hSty = computed(() => {
    const style = {
        height: `${uni.$m.sys().customBar}px`,
        zIndex: uni.$m.zIndex.navBar
    }

    if (props.bgc) style['backgroundColor'] = props.bgc
    if (props.linear) style['backgroundImage'] = props.linear

    // #ifdef MP-WEIXIN
    style['paddingRight'] = uni.$m.sys().mpW.width + 2 * uni.$m.sys().mpW.pad + 'px'
    // #endif

    return {
        ...style,
        ...props.sty,
        ...uni.$m.addStyle(props.customStyle)
    }
})

// 返回按钮类
const iconLeft = computed(() => {
    if (props.leftIcon) return `m-${props.leftIcon}`

    return 'm-left'
})

// 返回样式
const leftSty = computed(() => {
    if (slots.left || !props.leftColor) return {}

    if (props.leftColor) return {
        color: props.leftColor
    }
})

// 标题样式
const titleSty = computed(() => {
    const style = {}

    style.top = uni.$m.sys().statusBarHeight + 'px'

    if (props.titleColor) style.color = props.titleColor

    if (!props.titleColor && props.leftColor) style.color = props.leftColor

    return style
})

// 标题
const title = computed(() => {
    if (!props.title) return ''

    const str = props.title + ''
    let len = props.title.len * 1

    if (Number.isNaN(len)) len = 12

    if (str.length <= len) return str

    return (props.title + '').slice(0, len) + '...'
})

// 点击返回
const handleBack = () => {
    const pages = getCurrentPages()

    // 没有上层页面
    if (pages.length === 1) return

    if (props.back) {
        props.back()
        return
    }

    if (uni.$Route) {
        uni.$Route.navigateBack()
        return
    }

    uni.navigateBack()
}
</script>

<style lang="scss" scoped>
@import "../../libs/css/components.scss";

.m-header {
    width: 100%;
    box-sizing: border-box;
    position: fixed;
    top: 0;
    padding: 0 $m-pad;
    /* #ifdef MP-WEIXIN */
    padding-right: 0;
    /* #endif */
    box-sizing: border-box;
    background-color: transparent;
    z-index: 99;
    @include flex(column);
    color: $m-main-color;

    &-status {
        width: 100%;
        background-color: transparent;
    }

    &-content {
        flex: 1;
        background-color: transparent;
        @include flex;
        align-items: center;
        justify-content: space-between;
    }

    &-left {
        padding-right: $m-pad;
        @include flex;
        align-items: center;

        .iconm {
            font-size: 42rpx;
        }

        .txt {
            font-size: 32rpx;
            line-height: normal;
        }
    }

    &-center {
        flex: 1;
        font-size: 32rpx;

        &.center {
            position: absolute;
            top: 0;
            right: 0;
            bottom: 0;
            left: 0;
            @include flex;
            justify-content: center;
            align-items: center;
            pointer-events: none !important;
        }
    }

    &-right {
        padding-left: $m-pad;
    }
}
</style>

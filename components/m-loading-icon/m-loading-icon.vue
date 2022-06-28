<template>
    <view
        class="m-loading-icon"
        :class="[props.vertical && 'm-loading-icon--vertical']"
        v-if="props.show"
    >
        <!-- 'spinner', 'semicircle', 'circle' -->
        <view
            v-if="!webviewHide && ['spinner', 'semicircle', 'circle'].indexOf(props.mode) !== -1"
            class="m-loading-icon__spinner"
            :class="[`m-loading-icon__spinner--${props.mode}`]"
            :style="spinnerStyle"
        >
            <block v-if="mode === 'spinner'">
                <view class="m-loading-icon__dot" v-for="(_item, index) in 12" :key="index">
                </view>
            </block>
        </view>
        <!-- bicircle -->
        <view  v-if="!webviewHide && props.mode === 'bicircle'" class="m-loading-icon__bicircle" :style="bicircleStyle">
            <view class="m-loading-icon__bicircle--left" :style="bicircleItemStyle('left')"></view>
            <view class="m-loading-icon__bicircle--right" :style="bicircleItemStyle('right')"></view>
        </view>
        <!-- default -->
        <view v-if="!webviewHide && props.mode === 'default'" class="m-loading-icon__default" :style="defaultStyle">
            <view v-for="(_item, index) in 4" :key="index" class="m-loading-icon__default--item" :style="defaultItemStyle">
            </view>
        </view>
        <text v-if="props.text" class="m-loading-icon__text" :style="textStyle"> {{ props.text }} </text>
    </view>
</template>

<script lang="ts" setup>
import { ref, computed, onMounted } from 'vue'
import Props from './props'

const props = defineProps(Props)
// 监听webview的状态，如果隐藏了页面，则停止动画，以免性能消耗
const webviewHide = ref(false)

onMounted(() => {
    init()
})

const customStyle = computed(() => {
    return uni.$m.addStyle(props.customStyle)
})

const otherBorderColor = computed(() => {
    const lightColor = uni.$m.color.colorGradient(props.color, '#ffffff', 100)[80]

    if (props.mode === 'circle') {
        return props.inactiveColor ? props.inactiveColor : lightColor
    }

    return 'transparent'
})

const spinnerStyle = computed(() => {
    return {
        color: props.color,
        width: uni.$m.addUnit(props.size),
        height: uni.$m.addUnit(props.size),
        borderTopColor: props.color,
        borderBottomColor: otherBorderColor.value,
        borderLeftColor: otherBorderColor.value,
        borderRightColor: otherBorderColor.value,
        'animation-duration': `${props.duration}ms`,
        'animation-timing-function': props.mode === 'semicircle' || props.mode === 'circle' ? props.timingFunction : ''
    }
})

const textStyle = computed(() => {
    return {
        fontSize: uni.$m.addUnit(props.textSize),
        color: props.textColor,
        paddingLeft: props.vertical ? '' : '4px'
    }
})

// ----------- bicircle -----------
const bicircleStyle = computed(() => {
    const size = Number.parseFloat(props.size + '')

    return {
        width: `${size * 3}px`,
        height: `${size}px`
    }
})

const bicircleItemStyle = computed(() => {
    return item => {
        const size = Number.parseFloat(props.size + '')
        const style = {
            width: `${size}px`,
            height: `${size}px`,
            animationDuration: `${props.duration}ms`
        }

        if (item === 'left') {
            style.background = props.color === '#909399' ? '#3c9cff' : props.color
        } else {
            style.background = props.inactiveColor === '' ? '#0ff' : props.inactiveColor
        }

        return style
    }
})

// default
const defaultStyle = computed(() => {
    const size = Number.parseFloat(props.size + '')

    return {
        width: `${size * 2.5}px`,
        height: `${size * 2.5}px`,
        animationDuration: `${props.duration}ms`
    }
})

const defaultItemStyle = computed(() => {
    const size = Number.parseFloat(props.size + '')

    return {
        width: `${size}px`,
        height: `${size}px`,
        'background-color': props.color === '#909399' ? '#3c9cff' : props.color
    }
})

function init() {
    setTimeout(() => {
        // #ifdef APP-PLUS
        props.show && addEventListenerToWebview()
        // #endif
    }, 20)
}

// 监听webview的显示与隐藏
function addEventListenerToWebview() {
    // webview的堆栈
    const pages = getCurrentPages()
    // 当前页面
    const page = pages[pages.length - 1]
    // 当前页面的webview实例
    const currentWebview = page.$getAppWebview()
    // 监听webview的显示与隐藏，从而停止或者开始动画(为了性能)
    currentWebview.addEventListener('hide', () => {
        webviewHide.value = true
    })
    currentWebview.addEventListener('show', () => {
        webviewHide.value = false
    })
}
</script>

<style lang="scss" scoped>
@import "../../libs/css/components.scss";
$m-loadidng-icon-color: #c8c9cc !default;
$m-loading-width: 30px !default;
$m-loading-height: 30px !default;
$m-loading-max-width: 100% !default;
$m-loading-max-height: 100% !default;
$m-loading-semicircle-border-width: 2px !default;
$m-loading-semicircle-border-color: transparent !default;
$m-loading-semicircle-border-top-right-radius: 100px !default;
$m-loading-semicircle-border-top-left-radius: 100px !default;
$m-loading-semicircle-border-bottom-left-radius: 100px !default;
$m-loading-semicircle-border-bottom-right-radiu: 100px !default;
$m-loading-semicircle-border-style: solid !default;
$m-loading-icon-text-margin-left: 4px !default;
$m-loading-icon-text-color: $m-content-color !default;
$m-loading-icon-text-font-size: 14px !default;
$m-loading-icon-text-line-height: 20px !default;
$m-loading-icon-vertical-margin: 6px 0 0 !default;
$m-loading-icon-host-font-size: 0px !default;
$m-loading-icon-host-line-height: 1 !default;
$m-loading-icon-dot-top: 0 !default;
$m-loading-icon-dot-left: 0 !default;
$m-loading-icon-dot-width: 100% !default;
$m-loading-icon-dot-height: 100% !default;
$m-loading-icon-dot-before-width: 2px !default;
$m-loading-icon-dot-before-height: 25% !default;
$m-loading-icon-dot-before-margin: 0 auto !default;
$m-loading-icon-dot-before-background-color: currentColor !default;
$m-loading-icon-dot-before-border-radius: 40% !default;
$m-loading-bicircle-left-color: #3c9cff !default;
$m-loading-bicircle-right-color: #0ff !default;
$m-loading-default-size: 10px !default;

.m-loading-icon {
    @include flex;
    align-items: center;
    justify-content: center;
    color: $m-loadidng-icon-color;

    &__text {
        margin-left: $m-loading-icon-text-margin-left;
        color: $m-loading-icon-text-color;
        font-size: $m-loading-icon-text-font-size;
        line-height: $m-loading-icon-text-line-height;
    }

    &--vertical {
        flex-direction: column
    }

    &__spinner {
        width: $m-loading-width;
        height: $m-loading-height;
        position: relative;
        /* #ifndef APP-NVUE */
        box-sizing: border-box;
        max-width: $m-loading-max-width;
        max-height: $m-loading-max-height;
        animation: m-rotate 1s linear infinite;
        /* #endif */
    }

    &__spinner--semicircle,
    &__spinner--circle {
        border-width: $m-loading-semicircle-border-width;
        border-color: $m-loading-semicircle-border-color;
        border-top-right-radius: $m-loading-semicircle-border-top-right-radius;
        border-top-left-radius: $m-loading-semicircle-border-top-left-radius;
        border-bottom-left-radius: $m-loading-semicircle-border-bottom-left-radius;
        border-bottom-right-radius: $m-loading-semicircle-border-bottom-right-radiu;
        border-style: $m-loading-semicircle-border-style;
    }
}

/* #ifndef APP-NVUE */

:host {
    font-size: $m-loading-icon-host-font-size;
    line-height: $m-loading-icon-host-line-height;
}

.m-loading-icon {
    &__text:empty {
        display: none
    }

    &--vertical &__text {
        margin: $m-loading-icon-vertical-margin;
        color: $m-content-color;
    }

    &__spinner--spinner {
        animation-timing-function: steps(12)
    }

    &__dot {
        position: absolute;
        top: $m-loading-icon-dot-top;
        left: $m-loading-icon-dot-left;
        width: $m-loading-icon-dot-width;
        height: $m-loading-icon-dot-height;

        &:before {
            display: block;
            width: $m-loading-icon-dot-before-width;
            height: $m-loading-icon-dot-before-height;
            margin: $m-loading-icon-dot-before-margin;
            background-color: $m-loading-icon-dot-before-background-color;
            border-radius: $m-loading-icon-dot-before-border-radius;
            content: " "
        }
    }

    &__bicircle {
        display: block;
        position: relative;
        width: 80rpx;
        height: 80rpx;

        &--left,
        &--right {
            width: 28rpx;
            height: 28rpx;
            position: absolute;
            top: 50%;
            left: 50%;
            background: $m-loading-bicircle-left-color;
            border-radius: 50%;
            transform: translate(-50%, -50%);
        }

        &--left {
            left: 20%;
            animation: m-left 1s ease infinite;
        }

        &--right {
            left: 80%;
            animation: m-right 1s ease infinite;
            background: $m-loading-bicircle-right-color;
        }
    }

    &__default {
        position: relative;
        width: $m-loading-default-size * 2.5;
        height: $m-loading-default-size * 2.5;
        animation: m-rotate 1.2s infinite linear;

        &--item {
            position: absolute;
            display: inline-block;
            width: $m-loading-default-size;
            height: $m-loading-default-size;
            border-radius: 50%;
            background-color: $m-primary;

            &:nth-of-type(1) {
                top: 0;
                left: 0;
                opacity: 1;
            }

            &:nth-of-type(2) {
                top: 0;
                right: 0;
                opacity: 0.8;
            }

            &:nth-of-type(3) {
                bottom: 0;
                right: 0;
                opacity: 0.6;
            }

            &:nth-of-type(4) {
                bottom: 0;
                left: 0;
                opacity: 0.4;
            }
        }
    }
}

@for $i from 1 through 12 {
    .m-loading-icon__dot:nth-of-type(#{$i}) {
        transform: rotate($i * 30deg);
        opacity: 1 - 0.0625 * ($i - 1);
    }
}

@keyframes m-rotate {
    0% {
        transform: rotate(0deg)
    }

    to {
        transform: rotate(1turn)
    }
}

@keyframes m-left {
    0% {
        left: 20%;
    }
    50% {
        left: 50%;
    }
    100% {
        left: 20%;
    }
}

@keyframes m-right {
    0% {
        left: 80%;
    }
    50% {
        left: 50%;
    }
    100% {
        left: 80%;
    }
}


// @keyframes m-default {
//     0% {
//         transform: rotate(0deg);
//     }

//     100% {
//         transform: rotate(360deg);
//     }
// }
/* #endif */
</style>

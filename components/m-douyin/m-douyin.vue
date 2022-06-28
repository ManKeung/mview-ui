<template>
    <!-- #ifdef MP-WEIXIN || MP-QQ -->
    <view
        class="m-swiper"
        :change:prop="wxs.propObserver"
        :prop="props.options"
        :style="boxStyle"
        @touchstart="wxs.touchstartEvent"
        @touchmove="wxs.touchmoveEvent"
        @touchend="wxs.touchendEvent"
        @touchcancel="wxs.touchendEvent"
    >
    <!-- #endif -->
    <!-- #ifdef APP-PLUS || H5 -->
    <view
        class="m-swiper"
        :change:prop="wxs.propObserver"
        :prop="props.options"
        :style="boxStyle"
        @touchstart="wxs.touchstartEvent"
        @touchmove="wxs.touchmoveEvent"
        @touchend="wxs.touchendEvent"
        @touchcancel="wxs.touchendEvent"
    >
    <!-- #endif -->
        <view class="m-swiper-up" :style="boxStyle">
            <m-loading-icon class="loading" :size="14" :duration="900" mode="bicircle"></m-loading-icon>
        </view>
        <view class="m-swiper-box" :style="itemStyle">
            <slot name="default"></slot>
        </view>
        <view class="m-swiper-down" :style="downStyle">
            <m-status-bar />
            <view class="m-swiper-down-box">
                <view class="left">
                    <!-- 下拉刷新内容 -->
                </view>
                <view class="right" :class="rightCls">
                    <m-loading-icon :size="14" :duration="900" mode="bicircle"></m-loading-icon>
                </view>
            </view>
        </view>
    </view>
</template>

<!-- 微信小程序, QQ小程序, app, h5使用wxs -->
<!-- #ifdef MP-WEIXIN || MP-QQ -->
<script src="./wxs/wxs.wxs" module="wxs" lang="wxs"></script>
<!-- #endif -->

<!-- app, h5使用renderjs -->
<!-- #ifdef APP-PLUS || H5 -->
<script module="wxs" lang="renderjs">
import wxs from './wxs/renderjs'

export default wxs
</script>
<!-- #endif -->

<script lang="ts" setup>
import { onMounted, ref, nextTick, getCurrentInstance, computed, watch } from 'vue'
import Props from './props'

const instance = getCurrentInstance().proxy

// 组件传参
const props = defineProps(Props)

// 父盒子样式
const boxStyle = computed(() => {
    const { height, width } = props.options

    return {
        width: `${width}px`,
        height: `${height}px`,
    }
})

// 下拉位置
const downStyle = computed(() => {
    return {
        height: `${uni.$m.sys().customBar}px`
    }
})

// 右边样式
const rightCls = computed(() => {
    // #ifdef MP
    return 'mp'
    // #endif

    // #ifndef MP
    return ''
    // #endif
})

// 滚动区域
const itemStyle = computed(() => {
    const { height, width, data = [] } = props

    const len = data.length

    return {
        width: `${width}px`,
        height: `${height * len}px`,
    }
})
</script>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
    emits: ['change'],
    methods: {
        $emitWXS(options) {
            this.$emit('change', options)
        }
    }
})
</script>

<style lang="scss" scoped>
@import "../../libs/css/components.scss";
/* #ifdef APP-PLUS || H5 */
* { touch-action: pan-y; }
/* #endif */

.m-swiper {
    position: relative;
    width: 100%;
    height: 100%;
    overflow: hidden;

    &-box {
        position: absolute;
        top: 0;
    }

    &-down {
        pointer-events: none !important;
        position: absolute;
        top: 0;
        width: 100%;
        height: 88rpx;
        @include flex(column);

        &-box {
            flex: 1;
            position: relative;
            @include flex;

            .left {
                @include flex;
                justify-content: center;
                align-items: center;
                flex: 1;
                text-align: center;
                font-weight: 700;
                line-height: 100%;
                color: white;
                font-size: 34rpx;
                opacity: 0;
                order: 2;
            }

            .right {
                position: relative;
                margin-right: $m-pad;
                // width: 80rpx;
                @include flex;
                justify-content: center;
                align-items: center;
                display: flex;
                justify-content: center;
                align-items: center;
                order: 3;
                opacity: 0;

                &.mp {
                    margin-left: $m-pad;
                    order: 1;
                }
            }
        }
    }

    &-up {
        position: absolute;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
        @include flex;
        justify-content: center;
        align-items: center;
        background-color: #333;
        align-items: flex-end;

        .loading {
            padding-bottom: 88rpx;
        }
    }
}
</style>

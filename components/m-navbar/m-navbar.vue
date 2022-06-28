<template>
    <view class="m-navbar">
        <view v-if="props.fixed && props.placeholder" :style="placeholderStyle" class="m-navbar__placeholder"></view>
        <view :class="[props.fixed && 'm-navbar--fixed']">
            <m-status-bar v-if="props.safeAreaInsetTop" :bac="props.bgColor"></m-status-bar>
            <view class="m-navbar__content" :class="[props.border && 'm-border-bottom']" :style="contentStyle">
                <view
                    class="m-navbar__content__left"
                    hover-class="m-navbar__content__left--hover"
                    hover-start-time="150"
                    @tap="handleLeft"
                    :style="padType('left')"
                >
                    <slot name="left">
                        <m-icon v-if="props.leftIcon" :name="props.leftIcon" :size="props.leftIconSize" :color="props.leftIconColor"></m-icon>
                        <text v-if="props.leftText" :style="{color: props.leftIconColor}" class="m-navbar__content__left__text"> {{ props.leftText }}</text>
                    </slot>
                </view>
                <slot name="center">
                    <text class="m-line-1 m-navbar__content__title" :style="[{width: $m.addUnit(props.titleWidth)}, $m.addStyle(props.titleStyle)]">{{ props.title }}</text>
                </slot>
                <view v-if="$slots.right || props.rightIcon || props.rightText" class="m-navbar__content__right" hover-class="m-navbar__content__right--hover" @click="handleRight" :style="padType('right')">
                    <m-icon v-if="props.rightIcon" :name="props.rightIcon" size="20"></m-icon>
                    <text v-if="props.rightText" class="m-navbar__content__right__text">{{ props.rightText }}</text>
                </view>
            </view>
        </view>
    </view>
</template>

<script lang="ts" setup>
import { computed, useSlots } from 'vue'
import Props from './props'

const props = defineProps(Props)
const emits = defineEmits(['leftClick', 'rightClick'])
const $slots = useSlots()

const handleLeft = () => {
    emits('leftClick')

    props.autoBack && uni.navigateBack()
}

const handleRight = () => {
    emits('rightClick')
}

const placeholderStyle = computed(() => {
    // #ifdef MP
    return {
       height:  uni.$m.addUnit(uni.$m.sys().customBar ?? 40)
    }
    // #endif
    const height = Number.parseFloat(props.height) + uni.$m.sys().statusBarHeight

    return {
        height: uni.$m.addUnit(height)
    }
})

const contentStyle = computed(() => {

    // #ifdef MP
    const { customBar = 0, statusBarHeight = 0} = uni.$m.sys() ?? {}
    return {
        height: uni.$m.addUnit(customBar - statusBarHeight),
        backgroundColor: props.bgColor
    }
    // #endif

    return {
        height: uni.$m.addUnit(props.height),
        backgroundColor: props.bgColor
    }
})

const padType = computed(() => {
    return (type = 'left') => {
        const { pad = 0, width = 0 } = uni.$m.sys().mpW ?? {}

        // #ifdef MP
        if (type === 'left') return {
            paddingLeft: uni.$m.addUnit(pad)
        }

        if (type === 'right') return {
            paddingRight: uni.$m.addUnit(pad * 2 + width)
        }
        // #endif

        return {}
    }
})
</script>

<style lang="scss" scoped>
@import "../../libs/css/components.scss";

.m-navbar {

    &--fixed {
        position: fixed;
        left: 0;
        right: 0;
        top: 0;
        z-index: 11;
    }

    &__content {
        @include flex(row);
        align-items: center;
        height: 44px;
        background-color: #9acafc;
        position: relative;
        justify-content: center;

        &__left,
        &__right {
            /* #ifndef MP */
            padding: 0 13px;
            /* #endif */
            /* #ifdef MP */
            padding: 0;
            /* #endif */
            position: absolute;
            top: 0;
            bottom: 0;
            @include flex(row);
            align-items: center;
        }

        &__left {
            left: 0;

            &--hover {
                opacity: 0.7;
            }

            &__text {
                font-size: 15px;
                margin-left: 3px;
            }
        }

        &__title {
            text-align: center;
            font-size: 16px;
            color: $m-main-color;
        }

        &__right {
            right: 0;

            &--hover {
                opacity: 0.7;
            }

            &__txet {
                font-size: 15px;
                margin-left: 3px;
            }
        }
    }
}
</style>

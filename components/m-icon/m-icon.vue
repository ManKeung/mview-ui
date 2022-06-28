<template>
    <view class="m-icon" :class="name" :style="style" @click="handleClick">

    </view>
</template>

<script lang="ts" setup>
import { computed } from 'vue'
import Props from './props'

const props = defineProps(Props)
const emits = defineEmits(['click'])

const name = computed(() => {
    let cls = []
    if (props.color && uni.$m.config.type.includes(props.color)) cls.push(`m-icon__icon--${props.color}`)

    if (!props.name) return cls
    cls.push('iconm')
    cls.push(`m-${props.name}`)

    return cls
})

const style = computed(() => {
    const style = {}

    if (props.color && !uni.$m.config.type.includes(props.color)) style.color = props.color

    style.fontSize = uni.$m.addUnit(props.size)
    style.lineHeight = uni.$m.addUnit(props.size)
    style.fontWeight = props.bold ? 'bold' : 'normal'

    return {
        ...style,
        ...uni.$m.addStyle(props.customStyle)
    }
})

const handleClick = (e) => {
    if (props.stop) uni.$m.noop(e)
    emits('click', props.index)
}
</script>

<style lang="scss" scoped>
@import "../../libs/css/components.scss";

// 变量定义
$m-icon-primary: $m-primary !default;
$m-icon-success: $m-success !default;
$m-icon-info: $m-info !default;
$m-icon-warning: $m-warning !default;
$m-icon-error: $m-error !default;
$m-icon-label-line-height: 1 !default;

/* #ifndef APP-NVUE */
// 非nvue下加载字体
// @font-face {
//     font-family: '';
//     src: url('') format('truetype');
// }
/* #endif */

.m-icon {
    /* #ifndef APP-NVUE */
    display: flex;
    /* #endif */
    align-items: center;

    &__icon {
        @include flex;
        align-items: center;

        &--primary {
            color: $m-icon-primary;
        }

        &--success {
            color: $m-icon-success;
        }

        &--error {
            color: $m-icon-error;
        }

        &--warning {
            color: $m-icon-warning;
        }

        &--info {
            color: $m-icon-info;
        }
    }
}
</style>

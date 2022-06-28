<template>
    <view :style="$m.addStyle(props.customStyle)" :class="[props.customClass]" class="m-cell-group">
        <view v-if="props.title || $slots.title" class="m-cell-group__title" :style="$slots.title ? {padding: 0} : {}">
            <slot name="title">
                <text class="m-cell-group__title__text">{{ props.title }}</text>
            </slot>
        </view>
        <view class="m-cell-group__wrapper">
            <m-line v-if="props.border"></m-line>
            <slot></slot>
        </view>
    </view>
</template>

<script lang="ts" setup>
import { useSlots } from 'vue'
import Props from './props'

const props = defineProps(Props)
const $slots = useSlots()

</script>

<style lang="scss" scoped>
$m-cell-group-title-padding: 16px 16px 8px !default;
$m-cell-group-title-font-size: 15px !default;
$m-cell-group-title-line-height: 16px !default;
$m-cell-group-title-color: $m-main-color !default;

.m-cell-group {
    flex: 1;

    &__title {
        padding: $m-cell-group-title-padding;

        &__text {
            font-size: $m-cell-group-title-font-size;
            line-height: $m-cell-group-title-line-height;
            color: $m-cell-group-title-color;
        }
    }

    &__wrapper {
        position: relative;
    }
}
</style>

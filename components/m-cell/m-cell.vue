<template>
    <view
        :style="[$m.addStyle(props.customStyle)]"
        :class="[props.customClass]"
        :hover-class="(!props.disabled && (props.clickable || props.isLink)) ? 'm-cell--clickable' : ''" :hover-stay-time="250"
        class="m-cell"
        @tap="handleClick"
    >
        <view :class="[props.center && 'm-cell--center', props.size === 'large' && 'm-cell__body--large']" class="m-cell__body">
            <view class="m-cell__body__content">
                <view v-if="$slots.icon || props.icon" class="m-cell__left-icon-wrap">
                   <slot v-if="$slots.icon" name="icon"></slot>
                   <m-icon v-else :name="props.icon" :custom-style="props.iconStyle" :size="props.size === 'large' ? 26 : 20"></m-icon>
                </view>
                <view class="m-cell__title">
                    <slot name="title">
                        <text v-if="props.title" :style="[$m.addStyle(props.titleStyle)]" :class="[props.disabled && 'm-cell--disabled', props.size === 'large' && 'm-cell__title-text--large']"> {{ props.title }}</text>
                    </slot>
                    <slot name="label">
                        <text v-if="props.label" :class="[props.disabled && 'm-cell--disabled', props.size === 'large' && 'm-cell__title-label--large']" class="m-cell__label">{{ props.label }}</text>
                    </slot>
                </view>
            </view>
            <slot name="value">
                <text v-if="!$m.test.empty(props.value)" :class="[props.disabled && 'm-cell--disabled', props.size === 'large' && 'm-cell__value--large']" class="m-cell__value">{{ props.value }}</text>
            </slot>
            <view v-if="$slots['right-icon'] || props.isLink" :class="[`m-cell__right-icon-wrap--${props.arrowDirection}`]" class="m-cell__right-icon-wrap">
                <slot v-if="$slots['right-icon']" name="right-icon"></slot>
                <m-icon v-else :name="props.rightIcon" :custom-style="props.rightIconStyle" :color="props.disabled ? '#c8c9cc' : 'info'" :size="props.size === 'large' ? 24 : 18"></m-icon>
            </view>
        </view>
        <m-line v-if="border"></m-line>
    </view>
</template>

<script lang="ts" setup>
import { useSlots } from 'vue'
import Props from './props'

const props = defineProps(Props)
const $slots = useSlots()
const emits = defineEmits(['click'])

const handleClick = (e) => {
    if (props.disabled) return
    emits('click', {
        name: props.name
    })
    if (props.url) {
        uni.$m.route({
            type: props.linkType,
            url: props.url
        })
    }
    props.stop && uni.$m.noop(e)
}
</script>

<style lang="scss" scoped>
@import "../../libs/css/components.scss";

$m-cell-padding: 10px 15px !default;
$m-cell-font-size: 15px !default;
$m-cell-line-height: 24px !default;
$m-cell-color: $m-main-color !default;
$m-cell-icon-size: 16px !default;
$m-cell-title-font-size: 15px !default;
$m-cell-title-line-height: 22px !default;
$m-cell-title-color: $m-main-color !default;
$m-cell-label-font-size: 12px !default;
$m-cell-label-color: $m-tips-color !default;
$m-cell-label-line-height: 18px !default;
$m-cell-value-font-size: 14px !default;
$m-cell-value-color: $m-content-color !default;
$m-cell-clickable-color: $m-bg-color !default;
$m-cell-disabled-color: #c8c9cc !default;
$m-cell-padding-top-large: 13px !default;
$m-cell-padding-bottom-large: 13px !default;
$m-cell-value-font-size-large: 15px !default;
$m-cell-label-font-size-large: 14px !default;
$m-cell-title-font-size-large: 16px !default;
$m-cell-left-icon-wrap-margin-right: 4px !default;
$m-cell-right-icon-wrap-margin-left: 4px !default;
$m-cell-title-flex:1 !default;
$m-cell-label-margin-top:5px !default;

.m-cell {
    &__body {
        @include flex();
        /* #ifndef APP-NVUE */
        box-sizing: border-box;
        /* #endif */
        padding: $m-cell-padding;
        font-size: $m-cell-font-size;
        color: $m-cell-color;
        // line-height: $m-cell-line-height;
        align-items: center;

        &__content {
            @include flex(row);
            align-items: center;
            flex: 1;
        }

        &--large {
            padding-top: $m-cell-padding-top-large;
            padding-bottom: $m-cell-padding-bottom-large;
        }
    }

    &__left-icon-wrap,
    &__right-icon-wrap {
        @include flex();
        align-items: center;
        // height: $m-cell-line-height;
        font-size: $m-cell-icon-size;
    }

    &__left-icon-wrap {
        margin-right: $m-cell-left-icon-wrap-margin-right;
    }

    &__right-icon-wrap {
        margin-left: $m-cell-right-icon-wrap-margin-left;
        transition: transform 0.3s;

        &--up {
            transform: rotate(-90deg);
        }

        &--down {
            transform: rotate(90deg);
        }
    }

    &__title {
        flex: $m-cell-title-flex;

        &-text {
            font-size: $m-cell-title-font-size;
            line-height: $m-cell-title-line-height;
            color: $m-cell-title-color;

            &--large {
                font-size: $m-cell-title-font-size-large;
            }
        }

    }

    &__label {
        margin-top: $m-cell-label-margin-top;
        font-size: $m-cell-label-font-size;
        color: $m-cell-label-color;
        line-height: $m-cell-label-line-height;

        &--large {
            font-size: $m-cell-label-font-size-large;
        }
    }

    &__value {
        text-align: right;
        font-size: $m-cell-value-font-size;
        line-height: $m-cell-line-height;
        color: $m-cell-value-color;

        &--large {
            font-size: $m-cell-value-font-size-large;
        }
    }

    &--clickable {
        background-color: $m-cell-clickable-color;
    }

    &--disabled {
        color: $m-cell-disabled-color;
        /* #ifndef APP-NVUE */
        cursor: not-allowed;
        /* #endif */
    }

    &--center {
        align-items: center;
    }
}
</style>

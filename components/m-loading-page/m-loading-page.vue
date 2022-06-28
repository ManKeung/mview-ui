<template>
    <m-transition
        :show="props.loading"
        :custom-style="{
            position: 'fixed',
            zIndex: 10100,
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: props.bgColor,
            display: 'flex',
        }"
    >
        <view class="m-loading-page">
            <view class="m-loading-page__warpper">
                <view class="m-loading-page__warpper__loading-icon">
                   <image v-if="props.image" :src="props.image" mode="widthFit" class="m-loading-page__warpper__loading-icon__img"></image>
                   <m-loading-icon
                        v-else
                        :mode="props.loadingMode"
                        :size="size"
                        :color="props.loadingColor"
                        :inactive-color="props.loadingInactiveColor"
                   ></m-loading-icon>
                </view>
                <slot>
                    <text
                        class="m-loading-page__warpper__text"
                        :style="{
                            fontSize: $m.addUnit(props.fontSize),
                            color: props.color,
                        }"
                    >
                        {{ props.loadingText }}
                    </text>
                </slot>
            </view>
        </view>
    </m-transition>
</template>

<script lang="ts" setup>
import { computed } from 'vue'
import Props from './props'

const props = defineProps(Props)
const size = computed(() => {

    if (props.iconSize) return props.iconSize

    const arr = ['spinner', 'semicircle', 'circle']

    if (arr.indexOf(props.loadingMode) !== -1) return 28

    if (props.loadingMode === 'default') return 10

    return 16
})
</script>

<style lang="scss" scoped>
@import "../../libs/css/components.scss";
$text-color: rgb(200, 200, 200) !default;
$text-size: 19px !default;
$m-loading-icon-margin-bottom: 10px !default;

.m-loading-page {
    @include flex(column);
    flex: 1;
    align-items: center;
    justify-content: center;

    &__warpper {
        margin-top: -150px;
        justify-content: center;
        align-items: center;
        /* #ifndef APP-NVUE */
        color: $text-color;
        font-size: $text-size;
        /* #endif */
        @include flex(column);

        &__loading-icon {
            margin-bottom: $m-loading-icon-margin-bottom;

            &__img {
                width: 40px;
                height: 40px;
            }
        }

        &__text {
            font-size: $text-size;
            color: $text-color;
        }
    }
}
</style>

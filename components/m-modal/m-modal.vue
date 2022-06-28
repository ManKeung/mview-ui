<template>
    <m-popup
        mode="center"
        :zoom="props.zoom"
        :show="props.show"
        :custom-style="{
            borderRadius: '6px',
            overflow: 'hidden',
            marginTop: `-${$m.addUnit(props.negativeTop)}`
        }"
        :closeOnClickOverlay="props.closeOnClickOverlay"
        :safeAreaInsetBottom="false"
        :duration="400"
        @click="handleClick"
    >
        <view
            class="m-modal"
            :style="{
                width: $m.addUnit(props.width)
            }"
        >
            <text v-if="props.title" class="m-modal__title">{{ title }}</text>
            <view
                class="m-modal__content"
                :style="{
                    paddingTop: `${title ? 12 : 25}px`
                }"
            >
                <slot>
                    <text class="m-modal__content__text">{{ props.content }}</text>
                </slot>

            </view>
            <view v-if="$slots.confirmButton" class="m-modal__button-group--confirm-button">
                <slot name="confirmButton"></slot>
            </view>
            <template v-else>
                <m-line></m-line>
                <view
                    class="m-modal__button-group"
                    :style="{
                        flexDirection: props.buttonReverse ? 'row-reverse' : 'row'
                    }"
                >
                    <view
                        v-if="props.showCancelButton"
                        class="m-modal__button-group__wrapper m-modal__button-group__wrapper--cancel"
                        :hover-stay-time="150"
                        hover-class="m-modal__button-group__wrapper--hover"
                        :class="[props.showCancelButton && !props.showConfirmButton && 'u-modal__button-group__wrapper--only-cancel']"
                        @tap="handleCancel"
                    >
                        <text
                            class="m-modal__button-group__wrapper__text"
                            :style="{
                                color: props.cancelColor
                            }"
                        >
                            {{ props.cancelText }}
                        </text>
                    </view>
                    <m-line
                        v-if="props.showConfirmButton && props.showCancelButton"
                        direction="column"
                    ></m-line>
                    <view
                        v-if="props.showConfirmButton"
                        class="m-modal__button-group__wrapper m-modal__button-group__wrapper--confirm"
                        :hover-stay-time="150"
                        hover-class="m-modal__button-group__wrapper--hover"
                        :class="[!props.showCancelButton && props.showConfirmButton && 'u-modal__button-group__wrapper--only-confirm']"
                        @tap="handleConfirm"
                    >
                        <text
                            class="m-modal__button-group__wrapper__text"
                            :style="{
                                color: props.confirmColor
                            }"
                        >
                            {{ props.confirmText }}
                        </text>
                    </view>
                </view>
            </template>
        </view>
    </m-popup>
</template>

<script lang="ts" setup>
import { useSlots, computed } from 'vue'
import Props from './props'

const props = defineProps(Props)
const $slots = useSlots()
const emits = defineEmits(['confirm', 'cancel', 'close'])

// 点击确定按钮
const handleConfirm = () => {
    emits('confirm')
}

// 点击取消按钮
const handleCancel = () => {
    emits('cancel')
}

// 点击遮罩
// 从原理上来说，modal的遮罩点击，并不是真的点击到了遮罩
// 因为modal依赖于popup的中部弹窗类型，中部弹窗比较特殊，虽有然遮罩，但是为了让弹窗内容能flex居中
// 多了一个透明的遮罩，此透明的遮罩会覆盖在灰色的遮罩上，所以实际上是点击不到灰色遮罩的，popup内部在
// 透明遮罩的子元素做了.stop处理，所以点击内容区，也不会导致误触发

const handleClick = () => {
    emits('close')
}
</script>

<style lang="scss" scoped>
@import "../../libs/css/components.scss";
$m-modal-border-radius: 6px;

.m-modal {
    width: 650rpx;
    border-radius: $m-modal-border-radius;
    overflow: hidden;

    .line {
        margin: 0px;
        border-bottom: 1px solid rgb(214, 215, 217);
        width: 100%;
        transform: scaleY(0.5);
        border-top-color: rgb(214, 215, 217);
        border-right-color: rgb(214, 215, 217);
        border-left-color: rgb(214, 215, 217);
    }

    &__title {
        font-size: 16px;
        font-weight: bold;
        color: $m-content-color;
        text-align: center;
        padding-top: 25px;
    }

    &__content {
        padding: 12px 25px 25px 25px;
        @include flex(column);
        justify-content: center;

        &__text {
            font-size: 15px;
            color: $m-content-color;
            flex: 1;
        }
    }

    &__button-group {
        @include flex;

        &--confirm-button {
            flex-direction: column;
            padding: 0px 25px 15px 25px;
        }

        &__wrapper {
            flex: 1;
            @include flex;
            justify-content: center;
            align-items: center;
            height: 48px;

            &--confirm,
            &--only-cancel {
                border-bottom-right-radius: $m-modal-border-radius;
            }

            &--cancel,
            &--only-confirm {
                border-bottom-left-radius: $m-modal-border-radius;
            }

            &--hover {
                background-color: $m-bg-color;
            }

            &__text {
                color: $m-content-color;
                font-size: 16px;
                text-align: center;
            }
        }
    }
}
</style>

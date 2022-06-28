<template>
    <m-popup
        mode="bottom"
        :overlay="props.overlay"
        :closeOnClickOverlay="props.closeOnClickOverlay"
        :popup="false"
        :show="props.show"
        :safeAreaInsetBottom="props.safeAreaInsetBottom"
        @close="popupClose"
        :zIndex="props.zIndex"
        :customStyle="{
            backgroundColor: 'rgb(214, 218, 220)'
        }"
    >
        <view class="m-keyboard">
            <slot></slot>
            <view v-if="props.tooltip" class="m-keyboard__tooltip">
                <view hover-class="m-hover-class" :hover-stay-time="200">
                    <text v-if="props.showCancel" class="m-keyboard__tooltip__item m-keyboard__tooltip__cancel" @tap="onCancel">{{ props.showCancel && props.cancelText }}</text>
                </view>
                <view v-if="props.showTips" class="m-keyboard__tooltip__item m-keyboard__tooltip__tips">
                   {{props.tips ? props.tips : props.mode == 'number' ? '数字键盘' : mode == 'card' ? '身份证键盘' : '英文键盘'}}
                </view>
                <view
				    hover-class="m-hover-class"
				    :hover-stay-time="100"
				>
					<text v-if="props.showConfirm" class="m-keyboard__tooltip__item m-keyboard__tooltip__submit" hover-class="m-hover-class" @tap="onConfirm">{{props.showConfirm && props.confirmText}}</text>
				</view>
            </view>
            <template v-if="props.mode === 'number' || props.mode === 'card'">
                <m-number-keyboard
                    :random="props.random"
                    :mode="props.mode"
                    :dotDisabled="props.dotDisabled"
                    :vibrate="props.vibrate"
                    @change="change"
                    @backspace="backspace"
                ></m-number-keyboard>
            </template>
            <template v-else>
                <m-english-keyboard
                    :random="props.random"
                    :mode="props.mode"
                    :vibrate="props.vibrate"
                    @change="change"
                    @backspace="backspace"
                ></m-english-keyboard>
            </template>
        </view>
    </m-popup>
</template>

<script lang="ts" setup>
import {} from 'vue'
import Props from './props'

const props = defineProps(Props)
const emits = defineEmits(['change', 'close', 'confirm', 'cancel', 'backspace'])

// 输入值改变
const change = (e = '') => {
    emits('change', e)
}

// 键盘关闭
const popupClose = () => {
    emits('close')
}

// 输入完成
const onConfirm = () => {
    emits('confirm')
}

// 取消输入
const onCancel = () => {
    emits('cancel')
}

// 退格键
const backspace = () => {
    emits('backspace')
}
</script>

<style lang="scss" scoped>
@import "../../libs/css/components.scss";

.m-keyboard {
    &__tooltip {
        @include flex;
        justify-content: space-between;
        background-color: #FFFFFF;
        padding: 14px 12px;

        &__item {
            color: #333333;
            flex: 1;
            text-align: center;
            font-size: 15px;
        }

        &__submit {
            text-align: right;
            color: $m-primary;
        }

        &__cancel {
            text-align: left;
            color: #888888;
        }

        &__tips {
            color: $m-tips-color;
        }
    }
}

.m-hover-class {
    opacity: 0.6;
}
</style>

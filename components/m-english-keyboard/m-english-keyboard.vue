<template>
    <view class="m-keyboard" @touchmove.stop.prevent="$m.noop">
        <view
            v-for="(group, i) in keyList"
            :key="i"
            class="m-keyboard__button"
        >
            <view
                v-for="(item, j) in group"
                class="m-keyboard__button__inner-wrapper"
                :class="{btn: ['abc', '@123', 'clear'].indexOf(item) !== -1}"
                :key="j"
            >
                <view
                    v-if="item === 'clear'"
                    class="m-keyboard__button__inner-wrapper__inner"
                    hover-class="m-hover-class"
                    :class="{btn: ['abc', '@123', 'clear'].indexOf(item) !== -1}"
                    :hover-stay-time="200"
                    @touchstart="handleClickInput(item)"
                    @touchend="clearTimer(item)"
                >
                    <m-icon v-if="item === 'clear'" size="28" name="backspace" color="#303133"></m-icon>
                    <text v-else class="m-keyboard__button__inner-wrapper__inner__text">{{ abcStr(item) }}</text>
                </view>
                <view
                    v-else
                    class="m-keyboard__button__inner-wrapper__inner"
                    hover-class="m-hover-class"
                    :class="{btn: ['abc', '@123', 'clear'].indexOf(item) !== -1}"
                    :hover-stay-time="200"
                    @tap="handleClickInput(item)"
                >
                    <m-icon v-if="item === 'clear'" size="28" name="backspace" color="#303133"></m-icon>
                    <text v-else class="m-keyboard__button__inner-wrapper__inner__text">{{ abcStr(item) }}</text>
                </view>
            </view>
        </view>
    </view>
</template>

<script lang="ts" setup>
import { ref, computed, onUnmounted } from 'vue'
import Props from './props'

const props = defineProps(Props)
const emits = defineEmits(['change', 'backspace'])

const timer = ref(null)
// 是小写
const isAbc = ref(true)
// 是字母
const isEn = ref(true)

const keyList = computed(() => {
    // 字母
    let abc = ['Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P', 'A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L', 'Z', 'X', 'C', 'V', 'B', 'N', 'M'].map(item => {
        if (isAbc.value) {
            return item.toLocaleLowerCase()
        }

        return item
    })
    // 字母键盘字符
    let abcF = [':', "'", '/', '>', '.', '?', ',', '<']

    // 数字
    let num = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0']
    // 数字键盘字符
    let numF = ['`', '!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '-', '+', '=', '{', '}', '[', ']', ';', '"', '~', '?', '|', '_', '-', '\\']

    if (props.random) {
        abc = abc.sort(() => Math.random() > 0.5 ? -1 : 1)
        abcF = abcF.sort(() => Math.random() > 0.5 ? -1 : 1)
        num = num.sort(() => Math.random() > 0.5 ? -1 : 1)
        numF = numF.sort(() => Math.random() > 0.5 ? -1 : 1)
    }


    const tmp = []

    if (isEn.value) {
        tmp[0] = abc.slice(0, 10)
        tmp[1] = abc.slice(10, 20)
        tmp[2] = ['abc', ...abc.slice(20, 26), ...abcF.slice(0, 2)]
        tmp[3] = ['@123', ...abcF.slice(2, 8), 'clear']
    } else {
        tmp[0] = num
        tmp[1] = numF.slice(0, 10)
        tmp[2] = numF.slice(10, 20)
        tmp[3] = ['abc', ...numF.slice(20, 26), 'clear']
    }

    return tmp
})

const abcStr = computed(() => {
    return (item = '') => {
        if (!item) return ''

        if (item === 'abc') return isAbc.value && isEn.value ? 'ABC' : 'abc'

        return item
    }
})

const handleClickInput = (value = '') => {
    props.vibrate && uni.$m.vibrate()

    if (isEn.value && value === 'abc') return isAbc.value = !isAbc.value

    if (!isEn.value && value === 'abc') return isEn.value = true
    if (value === '@123') return isEn.value = false

    if (value === 'clear') {
        emits('backspace')
        clearInterval(timer.value)

        timer.value = setInterval(() => {
            emits('backspace')
        }, 250)

        return
    }

    emits('change', value)
}

const clearTimer = (item = 'clear') => {
    if (item !== 'clear') return
    clearInterval(timer.value)
    timer.value = null
}

onUnmounted(() => {
    clearTimer()
})
</script>

<style lang="scss" scoped>
@import '../../libs/css/components.scss';
$m-keyboard-background-color: rgb(224, 228, 230) !default;
$m-keyboard-padding: 6px 0 6px !default;
$m-keyboard-button-inner-width: 64rpx !default;
$m-keyboard-button-inner-background-color: #ffffff !default;
$m-keyboard-button-height: 80rpx !default;
$m-keyboard-button-inner-box-shadow: 0 1px 0px #999992 !default;
$m-keyboard-button-border-radius: 4px !default;
$m-keyboard-button-inner-margin: 8rpx 5rpx !default;
$m-keyboard-button-text-font-size: 16px !default;
$m-keyboard-button-text-color: $m-main-color !default;
$m-keyboard-center-inner-margin: 0 4rpx !default;
$m-keyboard-special-button-width: 134rpx !default;
$m-keyboard-lang-font-size: 16px !default;
$m-keyboard-lang-color: $m-main-color !default;
$m-keyboard-active-color: $m-primary !default;
$m-keyboard-line-font-size: 15px !default;
$m-keyboard-line-color: $m-main-color !default;
$m-keyboard-line-margin: 0 1px !default;
$m-keyboard-m-hover-class-background-color: #bbbcc6 !default;

.m-keyboard {
    width: 100%;
    box-sizing: border-box;
    @include flex(column);
    justify-content: space-around;
    background-color: $m-keyboard-background-color;
    align-items: stretch;
    padding: $m-keyboard-padding;

    &__button {
        @include flex;
        justify-content: center;
        justify-content: space-around;
        flex: 1;
        padding: 0 2.5rpx;

        &__inner-wrapper {
            box-shadow: $m-keyboard-button-inner-box-shadow;
            margin: $m-keyboard-button-inner-margin;
            border-radius: $m-keyboard-button-border-radius;
            flex: 1;

            &.btn {
                flex: 2;
                padding: 0 5rpx;
                background-color: $m-keyboard-m-hover-class-background-color;
            }

            &__inner {
                @include flex;
                width: 100%;
                justify-content: center;
                align-items: center;
                background-color: $m-keyboard-button-inner-background-color;
                height: $m-keyboard-button-height;
                border-radius: $m-keyboard-button-border-radius;

                &.btn {
                    background-color: $m-keyboard-m-hover-class-background-color;
                    // box-shadow: $m-keyboard-button-inner-box-shadow;
                }

                &__text {
                    font-size: $m-keyboard-button-text-font-size;
                    color: $m-keyboard-button-text-color;
                }
            }
        }
    }
}

.m-hover-class {
    background-color: $m-keyboard-m-hover-class-background-color;
}

.btn {
    .m-hover-class {
        opacity: 0.7;
    }
}
</style>

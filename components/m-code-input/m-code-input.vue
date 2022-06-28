<template>
    <view class="m-code-input">
        <view
            v-for="(item, index) in codeLength"
            class="m-code-input__item"
            :style="[itemStyle(index)]"
            :key="index"
        >
            <view
                v-if="props.dot && codeArray.length > index"
                class="m-code-input__item__dot"
                :style="{backgroundColor: props.color}"
            ></view>
            <text
                v-else
                :style="textStyle"
            >
                {{ codeArray[index] }}
            </text>
            <view
                v-if="props.mode === 'line'"
                class="m-code-input__item__line"
                :style="[lineStyle]"
            ></view>
            <!-- #ifndef APP-PLUS -->
            <view v-if="isFocus && codeArray.length === index" :style="{backgroundColor: color}" class="m-code-input__item__cursor"></view>
            <!-- #endif -->
        </view>
        <input
            class="m-code-input__input"
            type="number"
            :focus="props.focus"
            :maxlength="props.maxlength"
            :disabled="props.disabledKeyboard"
            :style="inputStyle"
            @input="inputHandler"
            @focus="isFocus = true"
            @blur="isFocus = false"
        >
    </view>
</template>

<script lang="ts" setup>
import { computed, ref, watch, nextTick as $nextTick } from 'vue'
import Props from './props'

const props = defineProps(Props)
const emits = defineEmits(['change', 'update:modelValue', 'finish'])
const inputValue = ref('')
const isFocus = ref(props.focus)

// 根据长度，循环输入框的个数，因为头条小程序数值不能用于v-for
const codeLength = computed(() => {
    return new Array(Number(props.maxlength))
})

// watch(() => props.value, val => {
watch(() => props.modelValue, val => {
    // 转为字符串，超出部分截掉
    inputValue.value = String(val).substring(0, props.maxlength)
}, {
    immediate: true
})

// 循环item的样式
const itemStyle = computed(() => {

    return index => {
        const style = {
            width: uni.$m.addUnit(props.size),
            height: uni.$m.addUnit(props.size)
        }

        // 盒子模式下，需要额外进行处理
        if (props.mode === 'box') {
            // 设置盒子的边框，如果是细边框，则设置为0.5px宽度
            style.border = `${props.hairline ? 0.5 : 1}px solid ${props.borderColor}`
        }

        if (Number(props.space) === 0) {
            // 给第一和最后一个盒子设置圆角
            if (index === 0) {
                style.borderTopLeftRadius = '3px'
                style.borderBottomLeftRadius = '3px'
            }

            if (index === codeLength.value.length - 1) {
                style.borderTopRightRadius = '3px'
                style.borderBottomRightRadius = '3px'
            }

            if (index !== codeLength.value.length - 1) style.borderRight = 'none'
        }

        if (index !== codeLength.value.length - 1) {
            // 设置验证码字符之间的距离，通过margin-right设置，最后一个字符，无需右边框
            style.marginRight = uni.$m.addUnit(props.space)
        } else {
            // 最后一个盒子的有边框需要保留
            style.marginRight = 0
        }

        return style
    }
})

// 将输入的值，转为数组，给item历遍时，根据当前的索引显示数组的元素
const codeArray = computed(() => {
    return String(inputValue.value).split('')
})

// 下划线模式下，横线的样式
const lineStyle = computed(() => {
    const style = {}
    style.height = props.hairline ? '2px' : '4px'
    style.width = uni.$m.addUnit(props.size)
    // 线条模式下，背景色即为边框颜色
    style.backgroundColor = props.borderColor

    return style
})

const textStyle = computed(() => {
    return {
        fontSize: uni.$m.addUnit(props.fontSize),
        fontWeight: props.bold ? 'bold' : 'normal',
        color: props.color
    }
})

const inputStyle = computed(() => {
    return {
        height: uni.$m.addUnit(props.size)
    }
})

// 监听输入框的值发生变化
const inputHandler = e => {
    const value = e.detail.value
    inputValue.value = value
    // 是否允许输入“.”符号
    if (props.disabledDot) {
        $nextTick(() => {
            inputValue.value = value.replace('.', '')
        })
    }

    // 未达到maxlength之前，发送change事件，达到后发送finish事件
    emits('change', value)
    // 修改通过v-model双向绑定的值
    emits('update:modelValue', value)
    // 达到用户指定输入长度时，发出完成事件
    if (String(value).length >= Number(props.maxlength)) {
        emits('finish', value)
    }
}
</script>

<style lang="scss" scoped>
@import '../../libs/css/components.scss';
$m-code-input-cursor-width: 1px;
$m-code-input-cursor-height: 40%;
$m-code-input-cursor-animation-duration: 1s;
$m-code-input-cursor-animation-name: m-cursor-flicker;

.m-code-input {
    @include flex;
    position: relative;
    overflow: hidden;

    &__item {
        @include flex;
        justify-content: center;
        align-items: center;
        box-sizing: border-box;
        position: relative;

        &__text {
            font-size: 15px;
            color: $m-content-color;
        }

        &__dot {
            width: 7px;
            height: 7px;
            border-radius: 100px;
            background-color: $m-content-color;
        }

        &__line {
            position: absolute;
            bottom: 0;
            height: 4px;
            border-radius: 100px;
            width: 40px;
            background-color: $m-content-color;
        }

        /* #ifndef APP-PLUS */
        &__cursor {
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%,-50%);
            width: $m-code-input-cursor-width;
            height: $m-code-input-cursor-height;
            animation: $m-code-input-cursor-animation-duration m-cursor-flicker infinite;
        }
        /* #endif */
    }

    &__input {
        // 之所以需要input输入框，是因为有它才能唤起键盘
        // 这里将它设置为两倍的屏幕宽度，再将左边的一半移出屏幕，为了不让用户看到输入的内容
        position: absolute;
        left: -150rpx;
        width: 1500rpx;
        top: 0;
        background-color: transparent;
        text-align: left;
    }
}

/* #ifndef APP-PLUS */
@keyframes m-cursor-flicker {
    0% {
        opacity: 0;
    }
    50% {
        opacity: 1;
    }
    100% {
        opacity: 0;
    }
}
/* #endif */
</style>

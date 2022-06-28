<template>
    <view
        v-if="inited"
        ref="$transition"
        class="m-transition"
        :class="classes"
        :style="[mergeStyle]"
        @tap="handleClick"
        @touchmove="$m.noop"
    >
        <slot></slot>
    </view>
</template>

<script lang="ts" setup>
import { ref, nextTick as $nextTick, computed, watch } from 'vue'
import animationMap from './nvue.ani-map'
import Props from './props'

const props = defineProps(Props)

// ref
const $transition = ref(null)
// 是否显示/隐藏组件
const inited = ref(false)
// 记录组件动画的状态
const status = ref('')
// 组件是否结束的标记
const transitionEnded = ref(false)
// 组件是否展示
const display = ref(false)
// 应用的类名
const classes = ref('')
// 组件内部的样式
const viewStyle = ref({})

const mergeStyle = computed(() => {
    return {
        // #ifndef APP-NVUE
        transitionDuration: `${props.duration}ms`,
        transitionTimingFunction: props.timingFunction,
        // #endif
        // 避免自定义样式影响到动画属性，所以写在viewStyle前面
        ...uni.$m.addStyle(props.customStyle),
        ...viewStyle
    }
})

watch(() => props.show, (newVal) => {
    // vue和nvue分别执行不同的方法
    // #ifdef APP-NVUE
    newVal ? nvueEnter() : nvueLeave()
    // #endif
    // #ifndef APP-NVUE
    newVal ? vueEnter() : vueLeave()
    // #endif
}, {
    immediate: true
})

// 定义一个一定时间后自动成功的promise，让调用nextTick方法处，进入下一个then方法
const nextTick = () => Promise(resolve => setTimeout(resolve, 1000 / 50))
// nvue动画模块实现细节抽离在外部文件

// #ifndef APP-NVUE
// 定义类名，通过给元素动态切换类名，赋予元素一定的css动画样式
function getClassNames(name) {
    return ({
        enter: `m-${name}-enter m-${name}-enter-active`,
        'enter-to': `m-${name}-enter-to m-${name}-enter-active`,
        leave: `m-${name}-leave m-${name}-leave-active`,
        'leave-to': `m-${name}-leave-to m-${name}-leave-active`
    })
}
// #endif

// #ifdef APP-NVUE
// 引入nvue(weex)的animation动画模块，文档见：
// https://weex.apache.org/zh/docs/modules/animation.html#transition
const animation = uni.requireNativePlugin('animation')
const getStyle = (name) => animationMap[name]
// #endif

const emits = defineEmits(['click', 'beforeEnter', 'enter', 'afterEnter', 'beforeLeave', 'leave', 'afterLeave'])

// 组件被点击发出事件
const handleClick = () => {
    emits('click')
}

// #ifndef APP-NVUE
// vue版本的组件进场处理
function vueEnter() {
    // 动画进入时的类名
    const classNames = getClassNames(props.mode)
    // 定义状态和发出动画进入前事件
    status.value = 'enter'
    emits('beforeEnter')
    inited.value = true
    display.value = true
    classes.value = classNames.enter
    $nextTick(async () => {
        // #ifdef H5
        await uni.$m.sleep(20)
        // #endif
        // 组件动画进入后触发的事件
        emits('afterEnter')
        // 标识动画尚未结束
        transitionEnded.value = false
        // 赋予组件enter-to类名
        classes.value = classNames['enter-to']
    })
}

// 动画离场处理
function vueLeave() {
    // 如果不是展示状态，无需执行逻辑
    if (!display.value) return

    const classNames = getClassNames(props.mode)
    // 标记离开状态和发出事件
    status.value = 'leave'
    emits('beforeLeave')
    // 获得类名
    classes.value = classNames.leave

    $nextTick(() => {
        // 标记动画已经结束了
        transitionEnded.value = false
        // 组件执行动画，到了执行的执行时间后，执行一些额外处理
        setTimeout(onTransitionEnd, props.duration)
        classes.value = classNames['leave-to']
    })
}
// #endif

// #ifdef APP-NVUE
function nvueEnter() {
    // 获得样式的名称
    const currentStyle = getStyle(props.mode)
    // 定义状态和发出动画进入前事件
    status.value = 'enter'
    emits('beforeEnter')
    inited.value = true
    display.value = true
    // 在nvue安卓上，由于渲染速度慢，在弹窗，键盘，日历等组件中，渲染其中的内容需要时间
    // 导致出现弹窗卡顿，这里让其一开始为透明状态，等一定时间渲染完成后，再让其隐藏起来，再让其按正常逻辑出现
    viewStyle.value = {
        opacity: 0
    }

    $nextTick(() => {
       viewStyle.value = currentStyle.enter

        Promise
            .resolve()
            .then(() => {
                emits('enter')
                // nvue的transition动画模块需要通过ref调用组件，注意此处的ref不同于vue的this.$refs['u-transition']用法
                animation.transition($transition.value.$el, {
                    styles: currentStyle['enter-to'],
                    duration: props.duration,
                    timingFunction: props.timingFunction,
                    needLayout: false,
                    delay: 0
                }, () => {
                    emits('afterEnter')
                })
            })
            .catch(() => {})
    })
}

function nvueLeave() {
    if (!display.value) return

    const currentStyle = getStyle(props.mode)
    // 标记离开状态和发出事件
    status.value = 'leave'
    emits('beforeLeave')
    // 合并样式
    viewStyle.value = currentStyle.leave
    // 放到promise中处理执行过程
    Promise
        .resolve()
        .then(nextTick) // 等待几十ms
        .then(() => {
            transitionEnded.value = false
            emits('leave')
            animation.transition($transition.value.$el, {
                styles: currentStyle['leave-to'],
                duration: props.duration,
                timingFunction: props.timingFunction,
                needLayout: false,
                delay: 0
            }, () => {
                onTransitionEnd()
            })
        })
        .catch(() => {})
}
// #endif

// 完成过渡后触发
function onTransitionEnd () {
    // 如果已经是结束的状态，无需再处理
    if (transitionEnded.value) return
    transitionEnded.value = true
    emits(status.value === 'leave' ? 'afterLeave' : 'afterEnter')
    // 发出组件动画执行后的事件
    if (!props.show && display.value) {
        display.value = false
        inited.value = false
    }
}
</script>

<style lang="scss" scoped>
@import "../../libs/css/components.scss";
/* #ifndef APP-NVUE */
// vue版本动画相关的样式抽离在外部文件
@import './vue.ani-style.scss';
/* #endif */
</style>

<template>
    <view class="m-popup">
        <m-overlay
            v-if="props.overlay"
            :show="props.show"
            :duration="props.duration"
            :custom-style="props.overlayStyle"
            :opacity="props.overlayOpacity"
            @click="overlayClick"
        ></m-overlay>
        <m-transition
            :show="props.show"
            :mode="position"
            :duration="props.duration"
            :custom-style="transitionStyle"
            @after-enter="afterEnter"
            @click="handleClick"
        >
            <view
                class="m-popup__content"
                :style="[contentStyle]"
                @tap.stop="$m.noop"
            >
                <m-status-bar v-if="props.safeAreaInsetTop"></m-status-bar>
                <slot></slot>
                <view
                    v-if="props.closeable"
                    class="m-popup__content__close"
                    :class="['m-popup__content__close--' + closeIconPos]"
                    hover-class="m-popup__content__close--hover"
                    hover-stay-time="150"
                    @tap="close"
                >
                    <m-icon
                        name="close"
                        color="#909399"
                        size="18"
                        bold
                    ></m-icon>
                </view>
                <m-safe-bottom v-if="props.safeAreaInsetBottom"></m-safe-bottom>
            </view>
        </m-transition>
    </view>
</template>

<script lang="ts" setup>
import { computed, watch, ref } from 'vue'
import Props from './props'

const props = defineProps(Props)
const emits = defineEmits(['close', 'open', 'click'])
const $popup = ref(null)

// #ifdef MP-WEIXIN
watch(() => props.show, newValue => {
    if (newValue === true) {
        // #ifdef MP-WEIXIN
        if (!$popup.value) return
        const children = $popup.value.$el.children
        retryComputedComponentRect(children)
        // #endif
    }
})

function retryComputedComponentRect(children) {
    // 组件内部需要计算节点的组件
    const names = ['m-header', 'm-tabbar'].join(' ')
    // 历遍所有的子组件节点
    for(let i = 0; i < children.length; i++) {
        const child = children[i]
        // 拿到子组件的子组件
        const grandChild = child.children
        // 判断如果在需要重新初始化的组件数组中名中，并且存在init方法的话，则执行
        let clsNames = child.className ?? ''
        clsNames = clsNames.split(' ')
        const has = clsNames.filter(item => names.indexOf(item) !== -1)
        if (has.length && typeof child.init === 'function') {
            // 需要进行一定的延时，因为初始化页面需要时间
            // 需要进行一定的延时，因为初始化页面需要时间
            uni.$m.sleep(50).then(() => {
                child.init()
            })
        }

        if (grandChild.length) retryComputedComponentRect(grandChild)
    }
}
// #endif

const transitionStyle = computed(() => {
    let style = {
        zIndex: props.zIndex,
        position: 'fixed',
        display: 'flex',
    }

    style[props.mode] = 0

    switch (props.mode){
        case 'left':
            style = uni.$m.deepMerge(style, {
               bottom: 0,
               top: 0
            })
            break
        case 'right':
            style = uni.$m.deepMerge(style, {
               bottom: 0,
               top: 0
            })
            break
        case 'top':
            style = uni.$m.deepMerge(style, {
               left: 0,
               right: 0
            })
            break
        case 'bottom':
            style = uni.$m.deepMerge(style, {
               left: 0,
               right: 0
            })
            break
        case 'center':
            style = uni.$m.deepMerge(style, {
               alignItems: 'center',
               'justify-content': 'center',
               top: 0,
               left: 0,
               right: 0,
               bottom: 0
            })
            break
    }

    return style
})

const contentStyle = computed(() => {
    const style = {}
    const { safeAreaInsets } = uni.$m.sys()

    if (props.mode !== 'center') style.flex = 1
    if (props.bgColor) style.backgroundColor = props.bgColor
    if (props.round) {
        const value = props.round + 'px'
        switch (props.mode){
            case 'top':
                style.borderBottomLeftRadius = value
                style.borderBottomRightRadius = value
                break
            case 'bottom':
                style.borderTopLeftRadius = value
                style.borderTopRightRadius = value
                break
            case 'center':
                style.borderRadius = value
                break
        }
    }

    return {
        ...style,
        zIndex: 10080,
        ...uni.$m.addStyle(props.customStyle)
    }
})

const position = computed(() => {
    let cls = ''

    switch (props.mode){
        case 'center':
            cls = props.zoom ? 'fade-zoom' : 'fade'
            break
        case 'left':
            cls = 'slide-left'
            break
        case 'right':
            cls = 'slide-right'
            break
        case 'bottom':
            cls = 'slide-up'
            break
        case 'top':
            cls = 'slide-down'
            break
    }

    return cls
})

const overlayClick = () => {
    if (!props.closeOnClickOverlay) return

    emits('close')
}

const close = () => {
    emits('close')
}

const afterEnter = () => {
    emits('open')
}

const handleClick = () => {
    // 由于中部弹出时，其m-transition占据了整个页面相当于遮罩，此时需要发出遮罩点击事件，是否无法通过点击遮罩关闭弹窗
    if (props.mode === 'center') overlayClick()
    
    emits('click')
}
</script>

<style lang="scss" scoped>
@import "../../libs/css/components.scss";
$m-popup-flex: 1 !default;
$m-popup-content-background-color: #fff !default;

.m-popup {
    flex: $m-popup-flex;

    &__content {
        background-color: $m-popup-content-background-color;
        position: relative;

        &--round-top {
            border-top-left-radius: 0;
            border-top-right-radius: 0;
            border-bottom-left-radius: 10px;
            border-bottom-right-radius: 10px;
        }

        &--round-left {
            border-top-left-radius: 0;
            border-top-right-radius: 10px;
            border-bottom-left-radius: 0;
            border-bottom-right-radius: 10px;
        }

        &--round-right {
            border-top-left-radius: 10px;
            border-top-right-radius: 0;
            border-bottom-left-radius: 10px;
            border-bottom-right-radius: 0;
        }

        &--round-bottom {
            border-top-left-radius: 10px;
            border-top-right-radius: 10px;
            border-bottom-left-radius: 0;
            border-bottom-right-radius: 0;
        }

        &--round-center {
            border-top-left-radius: 10px;
            border-top-right-radius: 10px;
            border-bottom-left-radius: 10px;
            border-bottom-right-radius: 10px;
        }

        &__close {
            position: absolute;

            &--hover {
                opacity: 0.4;
            }
        }

        &__close--top-left {
            top: 15px;
            left: 15px;
        }

        &__close--top-right {
            top: 15px;
            right: 15px;
        }

        &__close--bottom-left {
            bottom: 15px;
            left: 15px;
        }

        &__close--bottom-right {
            right: 15px;
            bottom: 15px;
        }
    }
}
</style>

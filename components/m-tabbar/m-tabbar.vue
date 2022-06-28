<template>
    <view class="m-tabbar">
        <view
            class="m-tabbar__content"
            @touchmove.stop.prevent="$m.noop"
            :class="[props.border && 'm-border-top', props.fixed && 'm-tabbar--fixed']"
            :style="[tabbarStyle]"
        >
            <view class="m-tabbar__content__item-wrapper">
                <slot />
            </view>
            <m-safe-bottom v-if="props.safeAreaInsetBottom"></m-safe-bottom>
        </view>
        <view
            class="m-tabbar__placeholder"
            v-if="props.placeholder"
            :style="{
                height: placeholderHeight + 'px',
            }"
        ></view>
    </view>
</template>

<script lang="ts" setup>
import { ref, getCurrentInstance, computed, watch, onBeforeMount, onMounted } from 'vue'
import Props from './props'

const placeholderHeight = ref(0)
const currentInstance = getCurrentInstance()
const props = defineProps(Props)

onBeforeMount(() => {
    setPlaceholderHeight()
})

onMounted(() => {
    setPlaceholderHeight()
    updateChildren()
})

// 合并来自父组件的customStyle样式
const tabbarStyle = computed(() => {
    const style = {
        zIndex: props.zIndex
    }

    return uni.$m.deepMerge(style, uni.$m.addStyle(props.customStyle))
})

// 监听多个参数的变化，通过在computed执行对应的操作
const updateChild = computed(() => {
    return [props.value, props.activeColor, props.inactiveColor]
})

const updatePlaceholder = computed(() => {
    return [props.fixed, props.placeholder]
})

watch(updateChild, () => {
    // 如果updateChildren中的元素发生了变化，则执行子元素初始化操作
    updateChildren()
})

watch(updatePlaceholder, () => {
    // 如果fixed，placeholder等参数发生变化，重新计算占位元素的高度
    setPlaceholderHeight()
})

function updateChildren() {
    const children = currentInstance.proxy
    console.log(children)
}

async function setPlaceholderHeight() {
    if (!props.fixed || !props.placeholder) return
    await uni.$m.sleep(20)
    uni.createSelectorQuery().in(currentInstance).select('.m-tabbar__content').boundingClientRect(data => {
        placeholderHeight.value = data.height ?? 50
    }).exec()
}
</script>

<style>
</style>

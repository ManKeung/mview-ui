<template>
    <view class="m-status-bar" :style="style">
        <slot />
    </view>
</template>

<script lang="ts" setup>
import { computed } from 'vue'
import Props from './props'

const props = defineProps(Props)

const style = computed(() => {
    const style = {}

    style.height = uni.$m.sys().statusBarHeight + 'px'

    if (props.bac) style['backgroundColor'] = props.bac

    return uni.$m.deepMerge(style, uni.$m.addStyle(props.customStyle))
})
</script>

<style lang="scss" scoped>
@import "../../libs/css/components.scss";
.m-status-bar {
    /* #ifndef APP-NVUE */
    width: 100%;
    /* #endif */
    background-color: transparent;
}
</style>

<template>
    <view
        class="m-safe-bottom"
        :style="[style]"
        :class="[!isNvue && 'm-safe-area-inset-bottom']"
    >
    </view>
</template>

<script lang="ts" setup>
import { ref, onMounted, computed } from 'vue'
import Props from './props'

const props = defineProps(Props)
const isNvue = ref(false)

onMounted(() => {
    // #ifdef APP-NVUE
    isNvue.value = true
    // #endif
})

const style = () => {
    const style = {}

    // #ifdef APP-NVUE
    // nvue下，高度使用js计算填充
    style.height = uni.$m.sys().safeAreaInsets.bottom + 'px'
    // #endif
    return {
        ...style,
        ...uni.$m.addStyle(props.customStyle)
    }
}
</script>

<style lang="scss" scoped>
@import "../../libs/css/components.scss";
.m-safe-bottom {
    /* #ifndef APP-NVUE */
    width: 100%;
    /* #endif */
}
</style>

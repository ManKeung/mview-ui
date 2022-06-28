<template>
    <m-transition
        :show="props.show"
        :duration="props.duration"
        :custom-style="overlayStyle"
        @click="handleClick"
    >
        <slot></slot>
    </m-transition>
</template>

<script lang="ts" setup>
import { computed } from 'vue'
import Props from './props'

const props = defineProps(Props)

const overlayStyle = computed(() => {
    const style = {
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: props.zIndex,
        bottom: 0,
        'background-color': `rgba(0, 0, 0, ${props.opacity})`
    }

    return {
        ...style,
        ...uni.$m.addStyle(props.customStyle)
    }
})

const emits = defineEmits(['click'])

const handleClick = () => {
    emits('click')
}
</script>

<style lang="scss" scoped>
@import "../../libs/css/components.scss";
</style>

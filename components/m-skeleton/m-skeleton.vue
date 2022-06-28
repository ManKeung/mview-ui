<template>
    <view class="m-skeleton">
        <view class="m-skeleton__wrapper" v-if="props.loading" style="display: flex; flex-direction: row;">
            <view
                class="m-skeleton__wrapper__avatar"
                v-if="props.avatar"
                :class="[`m-skeleton__wrapper__avatar--${props.avatarShape}`, props.animate && 'animate']"
                :style="avatarStyle"
            ></view>
           <view class="m-skeleton__wrapper__content" ref="m-skeleton__wrapper__content" style="flex: 1;">
                <view
                    class="m-skeleton__wrapper__content__title"
                    v-if="props.title"
                    :style="titleStyle"
                    :class="[props.animate && 'animate']"
                ></view>
                <view
                    class="m-skeleton__wrapper__content__rows"
                    :class="[props.animate && 'animate']"
                    v-for="(item, index) in rowsArray"
                    :key="index"
                    :style="rowStyle(item)"
                ></view>
            </view>
        </view>
        <slot v-else />
    </view>
</template>

<script lang="ts" setup>
import { ref, computed, onMounted, getCurrentInstance } from 'vue'
import Props from './props'

const props = defineProps(Props)
const width = ref(0)
const currentInstance = getCurrentInstance()

onMounted(() => {
    getComponentWidth()
})

const avatarStyle = computed(() => {
    return {
        height: uni.$m.addUnit(props.avatarSize),
        width: uni.$m.addUnit(props.avatarSize)
    }
})

const titleStyle = computed(() => {
    let tWidth = 0

    if (/%$/.test(props.titleWidth)) {
        // 通过parseInt提取出百分比单位中的数值部分，除以100得到百分比的小数值
        tWidth = uni.$m.addUnit(width.value * parseInt(props.titleWidth) / 100)
    } else {
        tWidth = uni.$m.addUnit(props.titleWidth)
    }

    return {
        width: uni.$m.addUnit(tWidth),
        height: uni.$m.addUnit(props.titleHeight),
    }
})

const rowStyle = computed(() => {
    return item => ({
        width: item.width,
        height: item.height,
        marginTop: item.marginTop
    })
})

const rowsArray = computed(() => {
    if (/%$/.test(props.rowsHeight)) {
        console.error('rowsHeight参数不支持百分比单位')
    }

    const rows = []
    let px = ''

    if (uni.$m.test.string(props.rowsWidth)) px = props.rowsWidth.replace(/[0-9]/g, '')

    if (!px) px = 'px'

    for (let i = 0; i < props.rows; i++) {
        let item = {}
        // 需要预防超出数组边界的情况
        let rowWidth = uni.$m.test.array(props.rowsWidth) ? (props.rowsWidth[i] || (i === props.row - 1 ? '70%' : '100%')) : i === props.rows - 1 ? Number.parseFloat(props.rowsWidth) * 0.7 + px  : props.rowsWidth
        let rowHeight = uni.$m.test.array(props.rowsHeight) ? (props.rowsHeight[i] || '18px') : props.rowsHeight
        // 如果有title占位图，第一个段落占位图的外边距需要大一些，如果没有title占位图，第一个段落占位图则无需外边距
        // 之所以需要这么做，是因为weex的无能，以提升性能为借口不支持css的一些伪类
        item.marginTop = !props.title && i === 0 ? 0 : props.title && i === 0 ? '20px' : '12px'
        // 如果设置的为百分比的宽度，转换为px值，因为nvue不支持百分比单位
        if (/%$/.test(rowWidth)) {
            // 通过parseInt提取出百分比单位中的数值部分，除以100得到百分比的小数值
            item.width = uni.$m.addUnit(width.value * Number.parseInt(rowWidth) / 100)
        } else {
            item.width = uni.$m.addUnit(rowWidth)
        }
        item.height = uni.$m.addUnit(rowHeight)
        rows.push(item)
    }

    return rows
})

// 获取组件的宽度
async function getComponentWidth () {
    // 延时一定时间，以获取dom尺寸
    await uni.$m.sleep(20)
    uni.createSelectorQuery().in(currentInstance).select('.m-skeleton__wrapper__content').boundingClientRect(data => {
        width.value = data.width
    }).exec()
}
</script>

<style lang="scss" scoped>
@import '../../libs/css/components.scss';

@mixin background {
    /* #ifdef APP-NVUE */
    background-color: #f1f2f4;
    /* #endif */
    /* #ifndef APP-NVUE */
    background: linear-gradient(90deg, #f1f2f4 25%, #e6e6e6 37%, #f1f2f4 50%);
    background-size: 400% 100%;
    /* #endif */
}

.m-skeleton {
    flex: 1;

    &__wrapper {
        @include flex(row);

        &__avatar {
            @include background;
            margin-right: 15px;

            &--circle {
                border-radius: 100px;
            }

            &--square {
                border-radius: 4px;
            }
        }

        &__content {
            flex: 1;

            &__rows,
            &__title {
                @include background;
                border-radius: 3px;
            }
        }
    }
}

/* #ifndef APP-NVUE */
.animate {
    animation: skeleton 1.8s ease infinite;
}

@keyframes skeleton {
    0% {
        background-position: 100% 50%;
    }

    100% {
        background-position: 0 50%;
    }
}

/* #endif */
</style>

<template>
    <view class="m-loadmore" :style="customStyle">
        <m-line
            length="140rpx"
            color="#E6E8EB"
            :hairline="false"
            v-if="props.line"
        ></m-line>
        <!-- 加载中和没有更多的状态才显示两边的横线 -->
            <view
                :class="props.status == 'loadmore' || props.status == 'nomore' ? 'm-more' : ''"
                class="m-loadmore__content"
            >
                <view
                    class="m-loadmore__content__icon-wrap"
                    v-if="props.status === 'loading' && props.icon"
                >
                    <m-loading-icon
                        :color="props.iconColor"
                        :size="props.iconSize"
                        :mode="props.loadingIcon"
                    ></m-loading-icon>
                </view>
                <!-- 如果没有更多的状态下，显示内容为dot（粗点），加载特定样式 -->
                <text
                    class="m-line-1"
                    :style="[loadTextStyle]"
                    :class="[(props.status == 'nomore' && props.isDot == true) ? 'm-loadmore__content__dot-text' : 'm-loadmore__content__text']"
                    @tap="loadMore"
                >{{ showText }}</text>
            </view>
        <m-line
            length="140rpx"
            color="#E6E8EB"
            :hairline="false"
            v-if="props.line"
        ></m-line>
    </view>
</template>

<script lang="ts" setup>
import { computed } from 'vue'
import Props from './props'

const props = defineProps(Props)
const emits = defineEmits(['loadmore'])

const customStyle = computed(() => {
    return uni.$m.addStyle({
        backgroundColor: props.bgColor,
        marginBottom: uni.$m.addUnit(props.marginBottom),
        marginTop: uni.$m.addUnit(props.marginTop),
        height: uni.$m.addUnit(props.height),
    })
})

const loadTextStyle = computed(() => {
    return {
        color: props.color,
        fontSize: uni.$m.addUnit(props.fontSize),
        lineHeight: uni.$m.addUnit(props.fontSize),
        backgroundColor: props.bgColor,
    }
})

const showText = computed(() => {
    let text = ''

    switch (props.status){
        case 'loadmore':
            text = props.loadmoreText
            break
        case 'loading':
            text = props.loadingText
            break
        case 'nomore':
            text = props.isDot ? '●' : props.nomoreText
            break
    }

    return text
})

const loadMore = () => {
    if (props.status === 'loadmore') emits('loadmore')
}
</script>

<style lang="scss" scoped>
@import "../../libs/css/components.scss";

.m-loadmore {
    @include flex(row);
    align-items: center;
    justify-content: center;
    flex: 1;

    &__content {
        margin: 0 15px;
        @include flex(row);
        align-items: center;
        justify-content: center;

        &__icon-wrap {
            margin-right: 8px;
        }

        &__text {
            font-size: 14px;
            color: $m-content-color;
        }

        &__dot-text {
            font-size: 15px;
            color: $m-tips-color;
        }
    }
}
</style>

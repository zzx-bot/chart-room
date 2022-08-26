<template>
	<view class="top-bar">
		<view class="top-bar-left" @tap="backOne">
			<slot name="left">
				<image class="goback" src="@/static/common/goback.png" alt="" />
			</slot>
		</view>
		<view class="top-bar-center"><slot name="center">好友申请</slot></view>
		<view class="top-bar-right" v-if="show">
			<slot name="right"><image class="more" src="@/static/group/more.png" alt="" /></slot>
		</view>
	</view>
</template>

<script lang="ts" setup>
import { defineProps } from 'vue'
interface propInt {
	show: boolean
}
const props = defineProps<propInt>()
const { show } = props
const backOne = () => {
	uni.navigateBack({
		delta: 1
	})
}
</script>

<style lang="scss" scoped>
.top-bar {
	height: 88rpx;
	width: 100%;
	// padding: 0 32rpx;
	position: fixed;
	top: 0;
	z-index: 101;
	display: flex;
	align-items: center;

	justify-content: space-between;

	background: rgba(255, 255, 255, 0.96);
	border-bottom: 1rpx solid rgba(39, 40, 50, 0.1);
	.top-bar-left {
		display: flex;
		align-items: center;
		height: 88rpx;
		image {
			padding-left: 32rpx;
			width: 50rpx;
			height: 50rpx;
		}
	}
	.top-bar-center {
		position: absolute;
		left: 50%;
		top: 50%;
		transform: translate(-50%, -50%);
		font-size: 36rpx;
		font-weight: 600;
	}
	.top-bar-right {
		.more {
			padding-right: 32rpx;
			width: 50rpx;
			height: 12rpx;
		}
	}
}
</style>

<template>
	<view class="plus-panel">
		<view class="tool"><image src="../../../static/chatroom/tp.png" mode=""></image></view>
		<view class="tool"><image src="../../../static/chatroom/pz.png" mode=""></image></view>
		<view class="tool"><image src="../../../static/chatroom/dww.png" mode=""></image></view>
		<view class="tool"><image src="../../../static/chatroom/sp.png" mode=""></image></view>
		<view class="tool"><image src="../../../static/chatroom/wj.png" mode=""></image></view>
	</view>
</template>

<script lang="ts" setup>
const clickEmoji = e => {
	console.log(e)
}
</script>

<style lang="scss" scoped>
.plus-panel {
	display: flex;
	justify-content: space-between;
	flex-wrap: wrap;
	width: 100%;
	box-sizing: border-box;
	padding: 10rpx 40rpx;

	overflow: hidden;
	.tool {
		margin: 20rpx;
		width: 120rpx;
		height: 120rpx;
		background: #fff;
		border-radius: 20rpx;
		image {
			width: 80rpx;
			height: 80rpx;
		}
		text-align: center;
		line-height: 180rpx;
	}
}
</style>

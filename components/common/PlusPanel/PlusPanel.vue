<template>
	<view class="plus-panel">
		<view class="tool">
			<image @tap="choseImg" src="../../../static/chatroom/tp.png" mode=""></image>
		</view>
		<view class="tool"><image src="../../../static/chatroom/pz.png" mode=""></image></view>
		<view class="tool"><image src="../../../static/chatroom/dww.png" mode=""></image></view>
		<view class="tool"><image src="../../../static/chatroom/sp.png" mode=""></image></view>
		<view class="tool"><image src="../../../static/chatroom/wj.png" mode=""></image></view>
	</view>
</template>

<script lang="ts" setup>
import { inject } from 'vue'
const addMsg = inject('addMsg')

const choseImg = () => {
	uni.chooseImage({
		count: 6, //默认9
		sizeType: ['original', 'compressed'], //可以指定是原图还是压缩图，默认二者都有
		sourceType: ['album'], //从相册选择
		success: function(res) {
			for (let item of res.tempFilePaths) {
				addMsg({ msg: item, type: '1' })
			}
		}
	})
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
		width: 110rpx;
		height: 110rpx;
		background: #fff;
		border-radius: 20rpx;
		image {
			width: 80rpx;
			height: 80rpx;
		}
		text-align: center;
		line-height: 160rpx;
	}
}
</style>

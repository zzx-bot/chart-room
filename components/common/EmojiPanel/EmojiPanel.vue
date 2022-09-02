<template>
	<view class="emoji">
		<ul class="emoji-default" @tap="clickEmoji">
			<li v-for="(item, index) in emojiJson" :key="item">{{ item }}</li>
		</ul>
		<view class="backspace" @tap="backspace">
			<image src="../../../static/chatroom/back.png" mode=""></image>
		</view>
	</view>
</template>

<script lang="ts" setup>
import { defineEmits } from 'vue'
import emojiData from './emjoydata.js'
const emojiJson = emojiData.data.split(',')
const emit = defineEmits(['addEmoji', 'deleteLast'])
const clickEmoji = e => {
	emit('addEmoji', e.target.innerText)
}
const backspace = () => {
	emit('deleteLast')
}
</script>

<style lang="scss" scoped>
.emoji {
	height: 340rpx;
	width: 100%;
	position: relative;
	overflow-y: auto;
	margin-left: 10rpx;
	&::-webkit-scrollbar {
		width: 0 !important;
	} //让滚动条消失
	.emoji-default {
		width: 100%;
		height: 100%;
		padding-bottom: 50rpx;
		box-sizing: border-box;
		display: flex;
		overflow-y: auto;
		flex-wrap: wrap;
		li {
			list-style-type: none;
			display: inline-block;
			cursor: pointer;
			width: 90rpx;
			height: 93rpx;
			text-align: center;
			font-size: 50rpx;
			line-height: 93rpx;
		}

		li:hover {
			background-color: #d5d5d5;
		}
	}
	.backspace {
		width: 100rpx;
		height: 80rpx;
		position: absolute;
		right: 32rpx;
		bottom: 10rpx;
		display: flex;
		align-items: center;
		justify-content: center;
		background: #fff;
		border-radius: 10rpx;

		image {
			width: 50rpx;
			height: 40rpx;
		}
	}
}
</style>

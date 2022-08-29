<template>
	<view class="emoji">
		<ul class="emoji-default">
			<li v-for="(item, index) in emojiJson" :key="item" @click="clickEmoji(item)">
				{{ item }}
			</li>
		</ul>
	</view>
</template>

<script lang="ts" setup>
import emojiData from './emjoydata.js'
const emojiJson = emojiData.data.split(',')
const clickEmoji = e => {
	console.log(e)
}
</script>

<style lang="scss" scoped>
.emoji {
	height: 500rpx;
	width: 100%;
	overflow-y: auto;
	margin-left: 10rpx;
	&::-webkit-scrollbar {
		width: 0 !important;
	} //让滚动条消失
	.emoji-default {
		display: flex;
		overflow-y: auto;
		flex-wrap: wrap;
		li {
			list-style-type: none;
			display: inline-block;
			cursor: pointer;
			width: 60rpx;
			height: 60rpx;
			text-align: center;
			line-height: 60rpx;
		}

		li:hover {
			background-color: #d5d5d5;
		}
	}
}
</style>

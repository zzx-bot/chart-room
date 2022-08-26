<template>
	<view class="bottom-bar">
		<view class="bottom-bar-left" @tap="backOne">
			<image class="voice" src="../../static/chatroom/voice.png" alt="" />
		</view>
		<view class="bottom-bar-center">
			<textarea
				v-model="msgText"
				class="msg-input"
				fixed="true"
				name=""
				id=""
				maxlength="150"
				auto-height="true"
			></textarea>
		</view>
		<view class="bottom-bar-right">
			<image
				class="emoj"
				src="../../static/chatroom/open-mouth.png"
				alt=""
				mode="aspectFill"
			/>
			<image
				v-show="false"
				class="plus"
				src="../../static/chatroom/plus.png"
				alt=""
				mode="aspectFill"
			/>
			<button v-show="true" size="mini" type="primary" @tap="sendMsg">发送</button>
		</view>
	</view>
</template>

<script lang="ts" setup>
import { ref, defineProps, defineEmits } from 'vue'

const backOne = () => {
	uni.navigateBack({
		delta: 1
	})
}
const msgText = ref('')
const emit = defineEmits(['addMsg'])
const sendMsg = () => {
	emit('addMsg', msgText.value)
	msgText.value = ''
}
</script>

<style lang="scss" scoped>
.bottom-bar {
	width: 100%;
	height: auto;
	max-height: 7rem;
	bottom: 0;
	z-index: 101;
	position: fixed;
	display: flex;
	align-items: end;
	justify-content: space-between;

	background: rgba(244, 244, 244, 1);
	border-top: 2rpx solid rgba(39, 40, 50, 0.1);
	padding: 8rpx 0;
	.bottom-bar-left {
		display: flex;
		align-items: center;
		.voice {
			padding: 0 20rpx 25rpx 32rpx;
		}
	}
	.bottom-bar-center {
		align-self: center;
		justify-self: center;
		font-size: 36rpx;
		overflow: hidden;
		width: 0;
		flex: 1;
		max-height: 9rem;
		.msg-input {
			width: calc(100% - 40rpx);
			padding: 10rpx 22rpx;
			max-height: 6rem !important;
			overflow: hidden;
			background: #fff;
			border-radius: 10rpx;
			margin: 15rpx 0;
		}
	}
	.bottom-bar-right {
		.emoj {
			width: 55rpx;
			height: 55rpx;
			margin: 0 15rpx 15rpx 15rpx;
		}
		.plus {
			margin: 0 32rpx 16rpx 0;
		}
	}
	image {
		width: 50rpx;
		height: 50rpx;
	}
}
</style>
<style>
button {
	margin: 0 32rpx 8rpx 0;
}

button::after {
	border: none;
}
</style>

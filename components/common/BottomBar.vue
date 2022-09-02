<template>
	<view class="bottom-bar">
		<view class="bottom-bar-top">
			<view class="bottom-bar-left">
				<image
					@tap="showBtn('showVoicePanel')"
					class="voice"
					:src="`../../static/chatroom/${voice}.png`"
					alt=""
				/>
			</view>
			<view class="bottom-bar-center">
				<textarea
					v-show="!showVoicePanel"
					v-model="msgText"
					class="msg-input"
					fixed="true"
					name=""
					id=""
					maxlength="150"
					auto-height="true"
				></textarea>
				<view
					v-show="showVoicePanel"
					class="msg-input"
					style="height: 43rpx; text-align:center;line-height: 43rpx;"
				>
					请按住 讲话
				</view>
			</view>
			<view class="bottom-bar-right">
				<image
					class="emoji"
					:src="`../../static/chatroom/${emoji}.png`"
					alt=""
					mode="aspectFill"
					@tap="showBtn('showEmojiPanel')"
				/>
				<image
					v-show="!msgText || showVoicePanel"
					class="plus"
					@tap="showBtn('showPlusPanel')"
					src="../../static/chatroom/plus.png"
					alt=""
					mode="aspectFill"
				/>
				<button
					v-show="msgText && !showVoicePanel"
					size="mini"
					type="primary"
					@tap="sendMsg"
				>
					发送
				</button>
			</view>
		</view>

		<EmojiPanel
			v-show="showEmojiPanel"
			@addEmoji="addEmoji"
			@deleteLast="deleteLast"
		></EmojiPanel>
		<PlusPanel v-show="showPlusPanel"></PlusPanel>
	</view>
</template>

<script lang="ts" setup>
import EmojiPanel from '@/components/common/EmojiPanel/EmojiPanel.vue'
import PlusPanel from '@/components/common/PlusPanel/PlusPanel.vue'
import { ref, reactive, computed, toRefs, defineProps, defineEmits } from 'vue'

import GraphemeSplitter from 'grapheme-splitter'

const splitter = new GraphemeSplitter()

const backOne = () => {
	uni.navigateBack({
		delta: 1
	})
}
const msgText = ref('')
const emit = defineEmits(['addMsg'])
const sendMsg = () => {
	emit('addMsg', { msg: msgText.value, type: '0' })
	msgText.value = ''
}
const deleteLast = () => {
	let textArr = splitter.splitGraphemes(msgText.value)
	textArr.pop()
	msgText.value = textArr.join('')
}

const addEmoji = emoji => {
	msgText.value += emoji
}
//#region按钮转换

const buttonStatus = reactive({
	showVoicePanel: false,
	showEmojiPanel: false,
	showPlusPanel: false
})

const { showVoicePanel, showEmojiPanel, showPlusPanel } = toRefs(buttonStatus)
const voice = computed(() => (showVoicePanel.value ? 'jp' : 'voice'))
const emoji = computed(() => (showEmojiPanel.value ? 'jp' : 'open-mouth'))
const showBtn = propName => {
	let preStatus = buttonStatus[propName]
	for (let item in buttonStatus) {
		buttonStatus[item] = false
	}
	buttonStatus[propName] = !preStatus
}
//#endregion
</script>

<style lang="scss" scoped>
.bottom-bar {
	width: 100%;
	height: auto;
	max-height: 16rem;
	position: fixed;
	bottom: 0;
	z-index: 101;
	background: rgba(244, 244, 244, 1);

	.bottom-bar-top {
		display: flex;
		align-items: flex-end;
		justify-content: space-between;
		flex-wrap: wrap;
		padding: 8rpx 0;
		border: 2rpx solid rgba(39, 40, 50, 0.1);
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
			.emoji {
				width: 52rpx;
				height: 52rpx;
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

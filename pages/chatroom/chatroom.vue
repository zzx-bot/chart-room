<template>
	<view class="main" ref="mainRef">
		<TopBar ref="topRef" style="position: relative; background: #f4f4f4;" :show="true">
			<template #center>
				{{ 'Xiaomi' }}
			</template>
		</TopBar>

		<scroll-view
			class="container"
			scroll-y="true"
			scroll-with-animation="true"
			:scroll-into-view="scrollId"
		>
			<view class="chat-main">
				<view
					class="chat-item"
					v-for="item in msgArr"
					:key="item.id"
					:id="'test' + item.tip"
				>
					<view class="send-time" v-if="!item.unShowTime">
						{{ MsgDateTime(item.time) }}
					</view>
					<view :class="['chat-msg', { myself: myself }]">
						<image class="avatar" src="@/static/avatar/three.jpg" mode=""></image>
						<view
							v-if="item.type == 0"
							:class="['text-msg', { tri_left: !myself }, { tri_right: myself }]"
						>
							{{ item.message }}
						</view>
						<image
							@tap="previewImg(item.message)"
							v-if="item.type == 1"
							class="img-msg"
							:src="item.message"
							mode="aspectFill"
						></image>
						<view
							v-if="item.type == 3"
							:class="[
								'text-msg',
								{ 'voice-left': !myself },
								{ tri_left: !myself },
								{ tri_right: myself }
							]"
							style="white-space:nowrap;"
						>
							{{ item.message.time + '"' }}
							<span :style="{ width: item.message.time * 2.5 + 'px' }"></span>
							&ensp;

							<image
								@tap="playVoice(item.message)"
								class="voice-msg"
								src="@/static/chatroom/yy.png"
							></image>
						</view>
					</view>
				</view>
			</view>
			<div :style="{ height: divheight + 'px' }"></div>
		</scroll-view>
		<BottomBar @addMsg="addMsg" ref="bottomRef" id="bottom"></BottomBar>
	</view>
</template>

<script lang="ts" setup>
import TopBar from '@/components/common/TopBar.vue'
import BottomBar from '@/components/common/BottomBar.vue'

import { ref, watch, reactive, toRefs, onMounted, nextTick, provide } from 'vue'
import { useStore } from 'vuex'
import { MsgDateTime } from '@/utils/timeTrans.js'

const myself = ref(true)
const divheight = ref(0)
const resizeObserver = new ResizeObserver(entries => {
	for (let entry of entries) {
		divheight.value = entry.target.offsetHeight - 54
		// console.log(divheight.value)
	}
})

onMounted(() => {
	resizeObserver.observe(document.querySelector('#bottom'))
})
interface voiceIntf {
	msg: string
	time: string
}
interface messageIntf {
	id: string
	image: string
	message: string | voiceIntf
	type: string
	time: Date
	tip: string
	unShowTime?: boolean
}
const arr: messageIntf[] = [
	{
		id: '1',
		image: 'http://dummyimage.com/400x400',
		message: 'Excepteur anim id',
		type: '0',
		time: new Date(new Date().getTime() - 25 * 60 * 60 * 1000),
		tip: '1'
	},
	{
		id: '2',
		image: 'http://dummyimage.com/400x400',
		message: '早知道小时候就把你的腿脚打断',
		type: '0',
		time: new Date(new Date().getTime() - 72 * 60 * 60 * 1000),
		tip: '2'
	},
	{
		id: '3',
		image: 'http://dummyimage.com/400x400',
		message: '你小时候真丑',
		type: '0',
		time: new Date(new Date().getTime() - 5 * 24 * 60 * 60 * 1000),
		tip: '3'
	},
	{
		id: '4',
		image: 'http://dummyimage.com/400x400',
		message: '傻孩子 那时候还没你呢',
		type: '0',
		time: new Date(new Date().getTime() - 4 * 24 * 60 * 60 * 1000),
		tip: '4'
	},
	{
		id: '5',
		image: 'http://dummyimage.com/400x400',
		message:
			'美国务院连夜发布「解密情报」，警告在乌美国人撤离，释放了什么信号？俄乌局势会恶化吗？',
		type: '0',
		time: new Date(new Date().getTime() - 6 * 60 * 1000),
		tip: '5'
	},
	{
		id: '6',
		image: 'http://dummyimage.com/400x400',
		message: 'http://dummyimage.com/400x400',
		type: '1',
		time: new Date(new Date().getTime() - 6 * 60 * 1000),
		tip: '6'
	},
	{
		id: '7',
		image: 'http://dummyimage.com/400x400',
		message: '../../static/avatar/one.jpg',
		type: '1',
		time: new Date(new Date().getTime() - 5 * 60 * 1000),
		tip: '7'
	},
	{
		id: '8',
		image: 'http://dummyimage.com/400x400',
		message: '../../static/avatar/two.jpg',
		type: '1',
		time: new Date(new Date().getTime() - 4 * 60 * 1000),
		tip: '8'
	},

	{
		id: '9',
		image: 'http://dummyimage.com/400x400',
		message: '../../static/avatar/three.jpg',
		type: '1',
		time: new Date(new Date().getTime() - 4 * 60 * 1000),
		tip: '9'
	},

	{
		id: '9',
		image: 'http://dummyimage.com/400x400',
		message: {
			msg: 'aaaaaaaa',
			time: '21'
		},
		type: '3',
		time: new Date(new Date().getTime() - 4 * 60 * 1000),
		tip: '9'
	}
]

const msgArr = reactive(arr)
const scrollId = ref(`test${msgArr[msgArr.length - 1].tip}`)

const addMsg = ({ msg, type }) => {
	let msgTemp: messageIntf = {
		id: `${msgArr.length * 2}`,
		image: 'http://dummyimage.com/400x400',
		message: msg,
		type: type,
		time: new Date(new Date().getTime() - 4 * 60 * 1000),
		tip: `${msgArr.length * 3}`
	}

	if (msgTemp.type == '1') {
		console.log(type, msg)
		imgUrl.push(msg)
	}
	if (msgArr.length > 0) {
		if (
			msgTemp.time.getTime() - msgArr[msgArr.length - 1].time.getTime() <
			1000 * 60 * 60 * 5
		) {
			msgTemp.unShowTime = true
		}
	}
	msgArr.push(msgTemp)

	nextTick(() => {
		scrollId.value = `test${msgArr[msgArr.length - 1].tip}`
	})
}
provide('addMsg', addMsg)

// const userLoginInfo = reactive<message>({
// 	time: 'admin123',
// 	textMsg: '',
// 	imgMsg: ''
// })

// const { time, textMsg, imgMsg } = toRefs(userLoginInfo)

const imgUrl = []
msgArr.forEach((cur, index, arr) => {
	if (cur.type == '1') {
		imgUrl.unshift(cur.message)
	}
	if (index !== 0) {
		if (cur.time.getTime() - arr[index - 1].time.getTime() < 1000 * 60 * 60 * 5) {
			cur.unShowTime = true
		}
	}
})

const previewImg = msg => {
	// 预览图片
	uni.previewImage({
		current: imgUrl.indexOf(msg),
		urls: imgUrl,
		longPressActions: {
			itemList: ['发送给朋友', '保存图片', '收藏'],
			success: function(data) {
				console.log(
					'选中了第' + (data.tapIndex + 1) + '个按钮,第' + (data.index + 1) + '张图片'
				)
			},
			fail: function(err) {
				console.log(err.errMsg)
			}
		}
	})
}

const store = useStore()

//播放语音
const innerAudioContext = uni.createInnerAudioContext()
innerAudioContext.autoplay = true
const playVoice = voicePath => {
	console.log('播放录音', voicePath)
	// if (voicePath) {
	// 	innerAudioContext.src = voicePath
	// 	innerAudioContext.play()
	// }
}
</script>

<style lang="scss" scoped>
::-webkit-scrollbar {
	width: 5rpx !important;
	height: 10rpx !important;
	display: block;
	appearance: button !important;
	-webkit-appearance: button !important;
}

::-webkit-scrollbar-track {
	border-radius: 10rpx;
}

::-webkit-scrollbar-thumb {
	border-radius: 10rpx;
	-webkit-box-shadow: inset 0 0 6rpx rgba(0, 0, 0, 0.3);
	background-color: #f2f2f2;
}
.mask {
	background: $uni-bg-color-mask;
}
.main {
	height: 100%;
	width: 100%;
	position: absolute;
	white-space: wrap;

	.container {
		width: 100%;
		height: calc(100% - 188rpx);
		background: #f4f4f4;
		overflow: hidden;
		.chat-main {
			width: 100%;
			box-sizing: border-box;
			padding: 0 32rpx 50rpx 32rpx;
			.chat-item {
				display: flex;
				flex-direction: column;
				align-items: center;
				width: 100%;
				max-width: 100%;
				.send-time {
					margin-top: 30rpx;
					padding: 20rpx 0;
					font-size: 24rpx;
					color: rgba(39, 40, 50, 0.5);
				}
				.chat-msg {
					width: 100%;
					margin-top: 30rpx;
					align-self: flex-start;
					display: flex;
					align-items: flex-start;
					overflow: hidden;
					.avatar {
						width: 80rpx;
						height: 80rpx;
						border-radius: 20rpx;
					}
					.img-msg {
						margin: 0 32rpx;
						width: 284rpx;
						height: 320rpx;
						border-radius: 20rpx;
					}
					.text-msg {
						margin: 0 32rpx;
						display: flex;
						align-items: center;
						word-break: break-all; //解决纯字母和数字不换行
						max-width: calc(100% - 300rpx);
						padding: 16rpx 22rpx;
						position: relative;
						line-height: 50rpx;
						font-size: 32rpx;
						color: #272832;
						background: #fff;
						border-radius: 20rpx;
						.voice-msg {
							width: 32rpx;
							height: 36rpx;
						}
					}
					.voice-left {
						flex-direction: row-reverse;
						.voice-msg {
							transform: rotateY(180deg);
						}
					}
					.tri_left:before {
						content: '';
						width: 0px;
						height: 0px;
						border-top: 20rpx solid transparent;
						border-bottom: 20rpx solid transparent;
						border-right: 20rpx solid #fff;
						position: absolute;
						top: 16rpx;
						left: -16rpx;
					}

					.tri_right:after {
						content: '';
						width: 0px;
						height: 0px;
						border-top: 20rpx solid transparent;
						border-bottom: 20rpx solid transparent;
						border-left: 20rpx solid $uni-color-primary;
						position: absolute;
						top: 16rpx;
						right: -16rpx;
					}
				}
				.myself {
					flex-direction: row-reverse;
					.text-msg {
						background: $uni-color-primary;
					}
				}
			}
		}
	}
}
</style>

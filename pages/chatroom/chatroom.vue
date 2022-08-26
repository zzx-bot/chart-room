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
					<view class="send-time" v-if="item.time">{{ MsgDateTime(item.time) }}</view>
					<view :class="['chat-msg', { myself: false }]">
						<image class="avatar" src="@/static/avatar/three.jpg" mode=""></image>
						<view
							v-if="item.type == 0"
							:class="['text-msg', { tri_left: true }, { tri_right: false }]"
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
					</view>
				</view>
			</view>
			<div style="padding-top: var(--status-bar-height); height='20rpx';"></div>
		</scroll-view>
		<BottomBar @addMsg="addMsg" ref="bottomRef" id="bottom"></BottomBar>
	</view>
</template>

<script lang="ts" setup>
import TopBar from '@/components/common/TopBar.vue'
import BottomBar from '@/components/common/BottomBar.vue'
import { ref, watch, reactive, toRefs, onMounted, nextTick } from 'vue'
import { useStore } from 'vuex'
import { MsgDateTime } from '@/utils/timeTrans.js'

const arr = [
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
	}
]

const msgArr = reactive(arr)
const scrollId = ref(`test${msgArr[msgArr.length - 1].tip}`)

const addMsg = msg => {
	console.log(msgArr)
	msgArr.push({
		id: `${msgArr.length * 2}`,
		image: 'http://dummyimage.com/400x400',
		message: msg,
		type: '0',
		time: new Date(new Date().getTime() - 4 * 60 * 1000),
		tip: `test${msgArr.length * 3}`
	})

	nextTick(() => {
		scrollId.value = msgArr[msgArr.length - 1].tip
		console.log(scrollId.value)
	})
}
// interface message {
// 	time: string
// 	textMsg: string
// 	imgMsg: string
// }

// const userLoginInfo = reactive<message>({
// 	time: 'admin123',
// 	textMsg: '',
// 	imgMsg: ''
// })

// const { time, textMsg, imgMsg } = toRefs(userLoginInfo)

const imgUrl = []
let lastItem = msgArr[0].time
msgArr.forEach((cur, index, arr) => {
	if (cur.type == '1') {
		imgUrl.unshift(cur.message)
	}
	if (index !== 0) {
		let space = cur.time.getTime() - lastItem.getTime()
		lastItem = cur.time
		if (space < 1000 * 60 * 60 * 5) {
			cur.time = null
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
</script>

<style lang="scss" scoped>
.main {
	height: 100%;
	overflow: hidden;
}

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
.container {
	width: 100%;
	height: calc(100% - 188rpx);
	background: #f4f4f4;

	.chat-main {
		padding: 0 32rpx 50rpx 32rpx;
		.chat-item {
			display: flex;
			flex-direction: column;
			align-items: center;

			.send-time {
				margin-top: 30rpx;
				padding: 20rpx 0;
				font-size: 24rpx;
				color: rgba(39, 40, 50, 0.5);
			}
			.chat-msg {
				margin-top: 30rpx;
				width: 100%;
				align-self: flex-start;
				display: flex;
				align-items: start;

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
					max-width: calc(100% - 300rpx);
					padding: 16rpx 22rpx;
					position: relative;
					line-height: 50rpx;
					font-size: 32rpx;
					color: #272832;
					background: #fff;
					border-radius: 20rpx;
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
</style>

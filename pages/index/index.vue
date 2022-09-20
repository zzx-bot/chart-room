<template>
	<view class="container" id="container">
		<view
			class="top-bar"
			style="background: rgba(255, 255, 255, 0.96);
				border-bottom: 1rpx solid rgba(39, 40, 50, 0.1);"
		>
			<view class="top-bar-left">
				<image
					@tap="personInfo"
					class="avatar"
					src="../../static/index/avatar.png"
					alt=""
				/>
			</view>
			<view class="top-bar-center"><image src="../../static/index/huo.png" alt="" /></view>
			<view class="top-bar-right">
				<view>
					<image
						class="search"
						@tap="toSearch"
						src="../../static/index/search.png"
						alt=""
					/>
					<image
						@tap="toNewGroup"
						class="addgroup"
						src="../../static/index/addgroup.png"
						alt=""
					/>
				</view>
			</view>
		</view>
		<view class="chat-list" @click="onClick" data-index="insd">
			<view class="frends">
				<view :class="['frend-list']">
					<view class="frend-list-left">
						<view class="msgNum">{{ '99+' }}</view>
						<image src="../../static/index/apply.svg" alt="" />
					</view>
					<view class="frend-list-container">
						<view class="fir-info">
							<h2 class="nickName">浩</h2>
							<p class="message">
								相遇不一定有结局，但一定有意义相遇不一定有结局，但一定有意义
							</p>
						</view>
						<view class="msgtime">11:30</view>
					</view>
				</view>
			</view>

			<view class="frends" v-for="item in user" :key="item.id" :data-index="item.id">
				<view :class="['frend-list']">
					<view class="frend-list-left">
						<view class="msgNum">{{ item.msgNum }}</view>
						<image :src="item.imgUrl" alt="" />
					</view>
					<view class="frend-list-container">
						<view class="fir-info">
							<h2 class="nickName">{{ item.name }}</h2>
							<p class="message">
								相遇不一定有结局，但一定有意义相遇不一定有结局，但一定有意义
							</p>
						</view>
						<view class="msgtime">11:30</view>
					</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script setup>
import { ref, reactive, onMounted } from 'vue'
const user = reactive([
	{
		id: 1,
		chosed: false,
		msgNum: 11,
		imgUrl: '../../static/avatar/two.png',
		name: 'false',
		time: new Date()
	},
	{
		id: 2,
		chosed: true,
		msgNum: 11,
		imgUrl: '../../static/avatar/one.png',
		name: '名字',
		time: new Date()
	},
	{
		id: 3,
		chosed: false,
		msgNum: 11,
		imgUrl: '../../static/avatar/three.png',
		name: '我的名字有点长长长长长长长长长长ccc',
		time: new Date()
	},
	{
		id: 4,
		chosed: true,
		msgNum: 11,
		imgUrl: '../../static/avatar/three.png',
		name: '名字',
		time: new Date()
	},
	{
		id: 5,
		chosed: false,
		msgNum: 11,
		imgUrl: '../../static/avatar/three.png',
		name: '名字',
		time: new Date()
	},
	{
		id: 6,
		chosed: false,
		msgNum: 11,
		imgUrl: '../../static/avatar/three.png',
		name: '我的名字有点长长长长长长长'
	},
	{
		id: 7,
		chosed: true,
		msgNum: 11,
		imgUrl: '../../static/avatar/three.png',
		name: '名字',
		time: new Date()
	},
	{
		id: 8,
		chosed: false,
		msgNum: 11,
		imgUrl: '../../static/avatar/three.png',
		name: '名字',
		time: new Date()
	}
])

onMounted(() => {
	// var parent = document.getElementById('container')
	// parent.addEventListener(
	// 	'click',
	// 	function(e) {
	// 		console.log(e)
	// 	},
	// 	false
	// )
})
const toSearch = () => {
	uni.navigateTo({
		url: '/pages/search/search'
	})
}

const personInfo = () => {
	uni.navigateTo({
		url: '/pages/userhome/userDetailInfo'
	})
}
const onClick = evt => {
	console.log(evt)
}

const toNewGroup = () => {
	uni.navigateTo({
		url: '/pages/newGroup/newGroup'
	})
}
</script>

<style lang="scss" scoped>
@import '@/commons/css/topbar.scss';
.container {
	padding-left: 0;
	padding-right: 0;
	.top-bar {
		padding-left: 36rpx;
		padding-right: 36rpx;
	}
	.chat-list {
		width: 100%;
		margin-top: 88rpx;
		box-sizing: border-box;
		padding-top: var(--status-bar-height);
		.frends {
			width: 100%;
			height: 128rpx;

			.frend-list {
				padding-left: 32rpx;
				padding-right: 32rpx;
				height: 100%;
				display: flex;
				align-items: center;
				justify-container: space-between;
				position: relative;
				background: $uni-bg-color;
				&.active {
					background: chartreuse;
				}
				.frend-list-left {
					position: relative;
					margin-right: $uni-spacing-col-base;
					margin-top: 14rpx;
					.msgNum {
						z-index: 101;
						box-sizing: border-box;
						padding: 2rpx 12rpx;
						position: absolute;
						top: 0;
						right: 0;
						background: $uni-color-warning;
						border-radius: $uni-border-radius-base;
						transform: translate(50%, -50%);
						font-size: 24rpx;
						color: #ffffff;
						letter-spacing: -0.82rpx;
						font-weight: 400;
					}
					image {
						width: 96rpx;
						height: 96rpx;
						border-radius: 24rpx;
						background-color: $uni-color-primary;
					}
				}
				.frend-list-container {
					height: 100%;
					width: 100%;
					display: flex;
					margin-right: auto;
					.fir-info {
						height: 50rpx;
						width: 0;
						flex: 1;
						line-height: 50rpx;
						margin: 10rpx 0;

						.nickName {
							display: block;
							overflow: hidden;
							white-space: nowrap;
							text-overflow: ellipsis;
							font-size: 32rpx;
							color: #272832;
						}
						.message {
							position: relative;

							margin-top: 4rpx;
							overflow: hidden;
							white-space: nowrap;
							text-overflow: ellipsis;
							height: 40rpx;
							line-height: 40rpx;

							font-size: 28rpx;
							color: rgba(39, 40, 50, 0.6);
						}
					}

					.msgtime {
						width: 50rpx;
						margin-top: 10rpx;
						align-self: flex-start;
						font-size: 24rpx;
						color: rgba(39, 40, 50, 0.4);
					}
				}
			}
		}
	}
}
</style>

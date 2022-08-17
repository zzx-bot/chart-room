<template>
	<view class="container">
		<view
			class="top-bar"
			style="background: rgba(255, 255, 255, 0.96);
				border-bottom: 1rpx solid rgba(39, 40, 50, 0.1);"
		>
			<view class="top-bar-left">
				<image class="avatar" src="../../static/index/avatar.png" alt="" />
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
					<image class="addgroup" src="../../static/index/addgroup.png" alt="" />
				</view>
			</view>
		</view>
		<view class="chat-list">
			<view class="frends">
				<view :class="['frend-list']">
					<view class="frend-list-left">
						<view class="msgNum">{{ '99+' }}</view>
						<image src="../../static/index/apply.svg" alt="" />
					</view>
					<view class="frend-list-container">
						<view class="fir-info">
							<h2 class="nickName">浩</h2>
							<view class="msgtime">11:30</view>
						</view>

						<p class="message">
							相遇不一定有结局，但一定有意义相遇不一定有结局，但一定有意义
						</p>
					</view>
				</view>
			</view>
			<!-- <view class="frends" v-for="fir in firendsArr" :key="fir.id">
				<view class="frend-list">
					<view class="frend-list-left">
						<view class="msgNum">{{ fir.tip }}</view>
						<image :src="`../../static/avatar/${fir.imageUrl}`" alt="" />
					</view>
					<view class="frend-list-container">
						<view class="fir-info">
							<h2 class="nickName">{{ fir.name }}</h2>
							<view class="msgtime">11:30</view>
						</view>
						<p class="message">{{ fir.msg }}</p>
					</view>
				</view>
			</view> -->
		</view>
	</view>
</template>

<script setup>
import { ref, reactive, onMounted } from 'vue'
// import datas from '../../commons/js/data.js'

// const firendsArr = reactive(datas.firends())
const toSearch = () => {
	uni.navigateTo({
		url: '/pages/search/search'
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

					margin-right: auto;
					.fir-info {
						height: 50rpx;
						line-height: 50rpx;
						margin: 10rpx 0;
						.nickName {
							display: inline;
							font-size: 32rpx;
							color: #272832;
							letter-spacing: -1.24rpx;
							font-weight: 400;
						}
						.msgtime {
							float: right;
							align-self: flex-start;
							font-size: 24rpx;
							color: rgba(39, 40, 50, 0.4);
							letter-spacing: -0.82rpx;
						}
					}

					.message {
						position: relative;
						overflow: hidden;
						margin-top: 4rpx;
						text-overflow: ellipsis;
						display: -webkit-box;
						height: 40rpx;
						line-height: 40rpx;
						-webkit-line-clamp: 1;
						-webkit-box-orient: vertical;
						font-size: 28rpx;
						color: rgba(39, 40, 50, 0.6);
						letter-spacing: -0.96rpx;
					}
				}
			}
		}
	}
}
</style>

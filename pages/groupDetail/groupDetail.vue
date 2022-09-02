<template>
	<view class="top-bar">
		<view class="top-bar-left" @tap="backOne">
			<image class="goback" src="../../static/common/back1.png" alt="" />
		</view>
		<view class="top-bar-right">
			<image class="more" src="../../static/group/more1.png" alt="" />
		</view>
	</view>

	<image
		class="bg"
		style="width: 100%; z-index: -1100;"
		src="../../static/avatar/three.jpg"
		mode="widthFix"
	></image>

	<view class="main-panel">
		<view class="introduce">
			<view class="introduce-header">
				<view class="group-name">萤火虫</view>
				<view class="group-createTime">2022/02/02</view>
			</view>
			<view class="group-note">
				萤火虫俗称火金姑、亮火虫，是 昆虫纲 鞘翅目 萤科
				中能够发光的昆虫的俗称，已知共有2000多种，分属于8个亚科92属和亚属，分布于温带、亚热带和热带地区。
				依照成虫的活动规律可分为昼行性，昼夜两行性和夜行性。
			</view>
		</view>

		<view class="group-member">
			<view class="group-member-header">
				<view class="header-title">群成员</view>
				<view class="header-group-manage">成员管理</view>
				<image class="header-group-more" src="../../static/common/more.png"></image>
			</view>
			<view class="user-list">
				<view class="user-item" v-for="(item, index) in user" :key="index">
					<image class="user-item-avatar" :src="item.imgUrl" mode=""></image>
					<view class="user-item-name">{{ item.name }}</view>
				</view>
				<view class="user-item">
					<image class="user-item-add" src="../../static/group/add.png" mode=""></image>
					<view class="user-item-name">邀请</view>
				</view>
			</view>
		</view>
		<view class="group-info">
			<view class="group-info-item " data-index="群名称">
				<view class="label">群名称</view>
				<view class="info">127999999@134.com</view>
				<image class="more" src="@/static/common/more.png" mode=""></image>
			</view>
			<view class="group-info-item " data-index="邮箱">
				<view class="label">群公告</view>
				<view class="info">127999999@134.com</view>
				<image class="more" src="@/static/common/more.png" mode=""></image>
			</view>
			<view class="group-info-item " data-index="邮箱">
				<view class="label">群内名</view>
				<view class="info">127999999@134.com</view>
				<image class="more" src="@/static/common/more.png" mode=""></image>
			</view>
			<view class="group-info-item " data-index="邮箱">
				<view class="label">消息免打扰</view>
				<switch
					:checked="NoDisturbing"
					@change="changeStatus"
					color="rgba(255, 228, 49, 1)"
					style="transform:scale(0.7);position: absolute; right:-20rpx;"
				/>
			</view>
		</view>
		<button class="btn-logout">退出群聊</button>
	</view>
</template>

<script lang="ts" setup>
import { ref, reactive, toRefs } from 'vue'
import { useStore } from 'vuex'
import TopBar from '@/components/common/TopBar.vue'
const NoDisturbing = ref(true)
const changeStatus = e => {
	NoDisturbing.value = e.detail.value
}
const user = reactive([
	{
		chosed: false,
		imgUrl: '../../static/avatar/two.png',
		name: 'false'
	},
	{
		chosed: true,
		imgUrl: '../../static/avatar/one.png',
		name: '名字'
	},
	{
		chosed: false,
		imgUrl: '../../static/avatar/three.png',
		name: '我的名字有点长长长长长长长长长长长长长长长长长长长长长长长长'
	},
	{
		chosed: true,
		imgUrl: '../../static/avatar/three.png',
		name: '名字'
	},
	{
		chosed: false,
		imgUrl: '../../static/avatar/three.png',
		name: '名字'
	},
	{
		chosed: false,
		imgUrl: '../../static/avatar/three.png',
		name: '我的名字有点长长长长长长长长长长长长长长长长长长长长长长长长'
	},
	{
		chosed: true,
		imgUrl: '../../static/avatar/three.png',
		name: '名字'
	},
	{
		chosed: false,
		imgUrl: '../../static/avatar/three.png',
		name: '名字'
	}
])

const backOne = () => {
	uni.navigateBack({
		delta: 1
	})
}
</script>

<style lang="scss" scoped>
.top-bar {
	height: 88rpx;
	width: 100%;
	box-sizing: border-box;
	padding: 0 32rpx;
	position: relative;
	top: 0;
	z-index: 101;
	display: flex;
	align-items: center;
	justify-content: space-between;
	background: transparent;

	.top-bar-left {
		display: flex;
		align-items: center;
		height: 88rpx;
		z-index: 11;
		image {
			width: 30rpx;
			height: 45rpx;
		}
	}

	.top-bar-right {
		.more {
			z-index: 11;
			width: 50rpx;
			height: 12rpx;
		}
	}
}
.bg {
	position: fixed;
	width: 100%;
	height: auto;
	left: 0;
	top: 0;
}

.main-panel {
	z-index: 100;
	height: calc(100% - 366rpx);
	background: #fff;
	margin-top: 27%;
	border-radius: 48rpx;
	position: relative;
	padding: 48rpx 32rpx 0 32rpx;
	.introduce {
		margin-bottom: 50rpx;
		.introduce-header {
			display: flex;
			justify-content: space-between;
			align-items: flex-end;
			margin-bottom: 32rpx;
			.group-name {
				font-size: 48rpx;
				color: #272832;

				font-weight: 600;
			}
			.group-createTime {
				font-size: 28rpx;
				color: rgba(39, 40, 50, 0.5);
			}
		}
		.group-note {
			font-size: 28rpx;
			color: #272832;
			letter-spacing: 0.48rpx;
			display: -webkit-box;
			-webkit-box-orient: vertical;
			-webkit-line-clamp: 2;
			overflow: hidden;
		}
	}
	.group-member {
		margin-bottom: 32rpx;
		.group-member-header {
			margin-bottom: 20rpx;
			display: flex;
			justify-content: flex-end;
			align-items: center;
			.header-title {
				margin-right: auto;
				font-size: 36rpx;
				color: #272832;
				font-weight: 600;
			}
			.header-group-manage {
				margin-right: 32rpx;
				font-size: 32rpx;
				color: rgba(39, 40, 50, 0.6);
			}
			.header-group-more {
				position: relative;
				width: 20rpx;
				height: 35rpx;
			}
		}
		.user-list {
			width: 100%;
			height: 350rpx;
			margin-top: 20rpx;
			display: flex;
			justify-content: start;
			flex-wrap: wrap;
			.user-item {
				width: 104rpx;
				margin-right: 33rpx;
				.user-item-avatar,
				.user-item-add {
					width: 104rpx;
					height: 104rpx;
					border-radius: 20rpx;
				}
				.user-item-avatar {
					width: 104rpx;
					height: 104rpx;
					border-radius: 20rpx;
				}
				.user-item-name {
					text-align: center;
					white-space: nowrap;
					overflow: hidden;
					text-overflow: ellipsis;
				}
				.user-item-add {
					background: $uni-color-primary;
					box-sizing: border-box;
					padding: 25rpx;
					z-index: 10;
				}
			}
		}
	}

	.group-info {
		width: 100%;
		height: auto;
		border-top: 2rpx solid rgba(238, 238, 238, 1);
		border-bottom: 2rpx solid rgba(238, 238, 238, 1);
		.group-info-item {
			height: 112rpx;
			position: relative;
			background: transparent;
			display: flex;
			align-items: center;

			.label {
				position: relative;

				margin-right: 32rpx;
				font-size: 32rpx;
				white-space: nowrap;
				color: #000;
			}
			.info {
				position: relative;

				// background: #000;
				white-space: nowrap;
				overflow: hidden;
				text-overflow: ellipsis;
				width: 100%;
				font-size: 32rpx;
				color: rgba(39, 40, 50, 0.6);
				.avatar {
					display: flex;
					align-items: center;
					width: 108rpx;
					height: 108rpx;
					border-radius: $uni-border-radius-base;
				}
			}
			.more {
				position: relative;

				margin-left: auto;
				width: 25rpx;
				height: 35rpx;
			}
		}
	}
	button {
		position: absolute;
		bottom: 0rpx;
		color: $uni-color-warning;
		width: 90%;
		border: 0;
		background: transparent;
	}

	button:after {
		border: 0;
	}
}
</style>

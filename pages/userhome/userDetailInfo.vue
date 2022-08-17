<template>
	<TopBar :show="false">
		<template #center>
			详细信息
		</template>
	</TopBar>
	<view class="content">
		<view class="info-div">
			<view class="infoItem head">
				<view class="label">头像</view>
				<view class="info">
					<image class="avatar" src="../../static/avatar/one.jpg" mode=""></image>
				</view>
				<view class="more"><image src="../../images/common/more.png" mode=""></image></view>
			</view>
			<view class="infoItem ">
				<view class="label">签名</view>
				<view class="info">高高在上的月亮，相遇不一定有结局，但一定有意义</view>
				<view class="more"><image src="../../images/common/more.png" mode=""></image></view>
			</view>
		</view>

		<view class="info-div">
			<view class="infoItem head">
				<view class="label">注册</view>
				<view class="info">2000-01-22 13:22:33</view>
				<view class="more"><image src="../../images/common/more.png" mode=""></image></view>
			</view>
			<view class="infoItem ">
				<view class="label">昵称</view>
				<view class="info">月亮</view>
				<view class="more"><image src="../../images/common/more.png" mode=""></image></view>
			</view>
			<view class="infoItem ">
				<view class="label">性别</view>
				<view class="info">女</view>
				<view class="more"><image src="../../images/common/more.png" mode=""></image></view>
			</view>
			<view class="infoItem ">
				<view class="label">生日</view>
				<view class="info">1997-08-15</view>
				<view class="more"><image src="../../images/common/more.png" mode=""></image></view>
			</view>

			<view class="infoItem ">
				<view class="label">电话</view>
				<view class="info">127999999</view>
				<view class="more"><image src="../../images/common/more.png" mode=""></image></view>
			</view>
			<view class="infoItem ">
				<view class="label">邮箱</view>
				<view class="info">127999999@134.com</view>
				<view class="more"><image src="../../images/common/more.png" mode=""></image></view>
			</view>
		</view>
		<view class="info-div">
			<view class="infoItem ">
				<view class="label">密码</view>
				<view class="info">*******</view>
				<view class="more"><image src="../../images/common/more.png" mode=""></image></view>
			</view>
		</view>
	</view>
	<button class="btn-logout">退出登录</button>
</template>

<script lang="ts" setup>
import TopBar from '@/components/common/TopBar.vue'
</script>

<style lang="scss">
.content {
	display: flex;
	flex-direction: column;
	.info-div {
		margin-bottom: 12rpx;
		border-bottom: 2rpx solid rgba(238, 238, 238, 1);
		.infoItem {
			height: 112rpx;
			display: flex;
			align-items: center;

			.label {
				margin-right: 32rpx;
				font-size: 32rpx;
				white-space: nowrap;
				color: #272832;
			}
			.info {
				white-space: nowrap;
				overflow: hidden;
				text-overflow: ellipsis;

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
				margin-left: auto;
				width: 20rpx;
				height: 32rpx;

				image {
					width: 20rpx;
					height: 32rpx;
				}
			}
		}
		.head {
			padding: 10rpx 0;
		}
	}
}
.btn-logout {
	position: fixed;
	bottom: 76rpx;
	color: $uni-color-warning;
	width: 90%;
	margin-left: 5%;
	border: 0;
	background: transparent;
}
</style>

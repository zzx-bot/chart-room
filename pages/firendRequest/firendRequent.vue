<template>
	<TopBar :show="false"></TopBar>
	<view class="content">
		<view class="apply-card">
			<view class="card-top">
				<view class="reject">拒绝</view>
				<image class="avatar" src="../../static/avatar/four.jpg"></image>
				<view class="accept">同意</view>
			</view>
			<view class="applicant">范大儿</view>
			<view class="apply-time">2222-2-22</view>
			<div class="desc">
				<span>留言：</span>
				my dad is zzx
			</div>
		</view>
	</view>
</template>

<script lang="ts" setup>
import TopBar from '@/components/common/TopBar.vue'
</script>

<style lang="scss">
@mixin btn($bgColor) {
	width: 160rpx;
	height: 64rpx;
	text-align: center;
	line-height: 64rpx;
	background: $bgColor;
	border-radius: $uni-border-radius-lg;
}
.content {
	margin-top: 88rpx;
	.apply-card {
		display: flex;
		flex-direction: column;
		margin-top: 100rpx;
		width: 100%;
		align-items: center;
		position: relative;
		background: rgba(255, 255, 255, 1);
		box-shadow: 0 24rpx 64rpx -8rpx rgba(0, 0, 0, 0.2);
		border-radius: $uni-border-radius-base;
		.card-top {
			width: 100%;
			display: flex;
			align-items: center;
			justify-content: space-around;
			.reject {
				@include btn(rgba(255, 93, 91, 0.1));
				color: rgba(255, 93, 91, 1);
			}
			.avatar {
				transform: translateY(-50%);
				width: 144rpx;
				height: 144rpx;
				background: rgba(255, 93, 91, 1);
				border-radius: $uni-border-radius-circle;
				align-self: start;
				border: 6rpx solid #fff;
				box-shadow: 0 24rpx 32rpx -8rpx rgba(0, 0, 0, 0.3);
			}
			.accept {
				@include btn($uni-color-primary);
			}
		}
		.applicant {
			font-size: 36rpx;
			font-weight: bold;
			margin-top: -18rpx;
			color: $uni-text-color;
		}
		.apply-time {
			font-size: $uni-font-size-sm;
			color: $uni-text-color-disable;
			line-height: 34rpx;
		}
		.desc {
			width: 80%;
			position: relative;
			overflow: hidden;
			padding: $uni-spacing-row-sm $uni-spacing-col-base;
			margin: 40rpx;
			border-radius: $uni-border-radius-base;
			background: $uni-bg-color-grey;
			font-size: $uni-font-size-base;
			color: $uni-text-color;
			line-height: 40rpx;
		}
	}
}
</style>

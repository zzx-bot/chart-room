<template>
	<TopBar :show="false">
		<template #left>
			<div style="font-size: 32rpx;color: #272832;">取消</div>
		</template>
		<template #center>
			<div style="font-size: 40rpx;color: #272832; font-weight: 400;">创建群聊</div>
		</template>
	</TopBar>

	<view class="content">
		<view class="group-info">
			<view class="group-info-avatar" @tap="upload">
				<image class="default" src="../../static/group/group2.png" mode=""></image>
				<image class="edit" src="../../static/group/change.png" mode=""></image>

				<image :src="cropFilePath" class="group-avatar"></image>
			</view>
			<!--  -->
			<input class="group-name" placeholder="请输入群名称" type="text" v-model="groupName" />
		</view>
		<view class="add-panel">
			<view class="add-panel-title">好友列表</view>
			<scroll-view class="add-panel-list" scroll-y="true" scroll-with-animation="true">
				<view
					:class="['friend-item']"
					v-for="(item, index) in user"
					:key="index"
					@tap="choseFirend(item)"
				>
					<view
						:dataset-index="index"
						:class="['friend-item-checkbox', { 'friend-item-active': item.chosed }]"
					>
						<image v-if="item.chosed" src="../../static/group/choose.png" />
					</view>

					<image class="friend-item-avatar" :src="item.imgUrl"></image>
					<view class="friend-item-info">{{ item.name }}</view>
				</view>
			</scroll-view>
		</view>
	</view>
	<view class="bottom-bar">
		<view
			:class="[
				'bottom-bar-btn',
				{ 'bottom-bar-btn-active': personCount > 0 && groupName.length > 0 }
			]"
		>
			创建({{ personCount }})
		</view>
	</view>
	<image-cropper :src="tempFilePath" @confirm="confirm" @cancel="cancel"></image-cropper>
</template>

<script lang="ts" setup>
import TopBar from '@/components/common/TopBar.vue'
import ImageCropper from '@/components/ling-imgcropper/ling-imgcropper.vue'
import { tempFilePath, cropFilePath, upload, confirm, cancel } from '@/utils/upload.js'
import { reactive, computed, ref } from 'vue'

const groupName = ref('')
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

const choseFirend = friend => {
	friend.chosed = !friend.chosed
}
const personCount = computed(() => {
	return user.reduce((pre, cur) => {
		return pre + (cur.chosed ? 1 : 0)
	}, 0)
})
</script>

<style lang="scss" scoped>
.content {
	height: calc(100% - 88rpx);
	padding-top: 88rpx;

	.group-info {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: space-evenly;
		height: 460rpx;
		width: 100%;
		&-avatar {
			width: 180rpx;
			height: 180rpx;
			margin: 20rpx;
			background: $uni-color-primary;
			border-radius: 48rpx;
			box-shadow: 0rpx 18rpx 20rpx 0rpx rgba(39, 40, 50, 0.1);

			position: relative;
			.default {
				width: 150rpx;
				height: 150rpx;
				position: absolute;
				left: 50%;
				top: 50%;
				transform: translate(-50%, -50%);
			}
			.edit {
				z-index: 6;
				width: 60rpx;
				height: 60rpx;
				position: absolute;
				left: 50%;
				top: 50%;
				transform: translate(-50%, -50%);
			}

			.group-avatar {
				z-index: 8;
				width: 180rpx;
				height: 180rpx;
				border-radius: 48rpx;
			}
		}
		.group-name {
			height: 100rpx;
			box-sizing: border-box;
			padding: 0 20rpx;
			width: 100%;
			text-align: center;
			background: #f3f4f6;
			border-radius: 46rpx;
		}
	}
	.add-panel {
		height: calc(100% - 460rpx);
		&-title {
			font-size: 44rpx;
			color: #272832;

			font-weight: 600;
		}
		&-list {
			margin-top: 20rpx;
			height: 100%;
			width: 100%;
			box-sizing: border-box;
			padding-bottom: 88rpx;
			.friend-item {
				display: flex;
				align-items: center;
				justify-content: flex-start;
				height: 120rpx;

				&-checkbox {
					width: 48rpx;
					height: 48rpx;
					border-radius: 24px;
					background: rgba(255, 228, 49, 0.5);
					margin-right: 32rpx;
				}
				&-active {
					display: flex;
					align-items: center;
					justify-content: space-evenly;
					background: #ffe431;
					border-radius: 50%;
					image {
						width: 30rpx;
						height: 20rpx;
					}
				}
				&-avatar {
					width: 80rpx;
					height: 80rpx;
					border-radius: 20rpx;
					margin-right: 32rpx;
				}
				&-info {
					flex-shrink: 199;
					font-size: 36rpx;
					color: #272832;
					white-space: nowrap;
					overflow: hidden;
					text-overflow: ellipsis;
				}
			}
		}
	}
}
.bottom-bar {
	height: 100rpx;
	width: 100%;
	position: fixed;
	box-sizing: border-box;
	padding: 12rpx 32rpx;
	bottom: 0;
	background: #fafafa;
	box-shadow: inset 0px 1px 0px 0px rgba(0, 0, 0, 0.1);
	.bottom-bar-btn {
		height: 80rpx;
		width: 686rpx;
		background: rgba(39, 40, 50, 0.1);
		border-radius: 10rpx;
		text-align: center;
		line-height: 80rpx;
	}
	.bottom-bar-btn-active {
		background: #ffe431;
	}
}
</style>

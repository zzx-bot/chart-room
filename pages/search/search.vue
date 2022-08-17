<template>
	<view class="container">
		<view
			class="top-bar"
			style="background: rgba(255, 255, 255, 0.96);
				border-bottom: 1rpx solid rgba(39, 40, 50, 0.1);"
		>
			<view class="top-bar-left">
				<view class="searchInput">
					<input
						type="text"
						v-model="queryString"
						placeholder="搜索用户/群"
						placeholder-style="color:#aaa;font-weight:400; padding-left:4rpx"
					/>
					<image class="search" src="../../static/common/searchGray.png" alt="" />
				</view>
			</view>

			<view class="top-bar-right"><view class="text" @tap="backIndex">取消</view></view>
		</view>

		<view class="content">
			<view class="result" v-if="searchRes">
				<view class="result-title">用户</view>

				<view class="item" v-for="item in searchRes" :key="item.id">
					<image class="item-avatar" src="../../static/index/apply.svg" alt="" />
					<div class="itemInfo">
						<view class="item-name" v-html="item.name"></view>
						<view class="item-email" v-html="item.email"></view>
					</div>

					<div :class="['btn', { firend: item.active }]">
						{{ item.active ? '发消息' : '加好友' }}
					</div>
				</view>
			</view>
		</view>
	</view>
</template>

<script setup>
import { ref, reactive, computed } from 'vue'
const queryString = ref('')
const active = ref(true)
const userArr = [
	{
		id: 1,
		name: '大海',
		email: 'dahai@qq.com'
	},

	{
		id: 2,

		name: '大山',
		email: 'dashan@qq.com'
	},
	{
		id: 3,

		name: '大江',
		email: 'dajiang@qq.com'
	},
	{
		id: 4,

		name: '大河',
		email: 'dahe@qq.com'
	}
]
const firArr = [
	{
		userId: 1,
		firendId: 2
	},

	{
		userId: 1,
		firendId: 4
	}
]

const searchRes = computed(() => {
	if (queryString.value.length === 0) return null

	let res = []
	userArr.map(item => {
		if (
			item.name.search(queryString.value) != -1 ||
			item.email.search(queryString.value) != -1
		) {
			let temp = { ...item }
			isFirend(temp)
			let exp = eval('/' + queryString.value + '/g')
			console.log(temp.name)
			temp.name = temp.name.replace(
				exp,
				'<span style="color:#4AAAFF">' + queryString.value + ' </span>'
			)
			temp.email = temp.email.replace(
				exp,
				'<span style="color:#4AAAFF">' + queryString.value + '</span>'
			)
			res.push(temp)
			console.log(temp)
		}
	})
	return res
})

const isFirend = temp => {
	for (let i = 0; i < firArr.length; i++) {
		if (firArr[i].firendId === temp.id) {
			temp.active = true
		}
	}
}
const backIndex = () => {
	// 在C页面内 navigateBack，将返回A页面
	uni.redirectTo({
		url: '../index/index'
	})
}
</script>

<style lang="scss">
@import '@/commons/css/topbar.scss';
.container {
	padding: 0 32rpx;
	.top-bar {
		.top-bar-left {
			margin-left: 32rpx;
			.searchInput {
				height: 60rpx;
				width: 600rpx;
				border-radius: 8rpx;
				position: relative;
				border: 2rpx solid $uni-border-color;
				background: #f3f4f6;
				padding-left: 8rpx;
				input {
					display: inline;
					width: calc(100% - 60rpx);
				}
				.search {
					position: absolute;
					right: 0;
					top: 50%;
					transform: translate(-20%, -50%);
					height: 40rpx;
					width: 40rpx;
				}
			}
		}
		.top-bar-right {
			margin-right: 32rpx;
			font-size: 28rpx;
		}
	}
	.content {
		margin-top: 88rpx;
		width: 100%;
		.result {
			width: 100%;

			.result-title {
				height: 60rpx;
				line-height: 60rpx;
				margin: 20rpx 0;
				font-family: PingFangSC-Semibold;
				font-size: 44rpx;
				color: #272832;

				font-weight: 600;
			}
			.item {
				width: 100%;
				display: flex;
				align-items: center;
				justify-content: start;
				margin-bottom: 40rpx;
				.item-avatar {
					width: 96rpx;
					height: 96rpx;
					border-radius: 24rpx;
					background-color: $uni-color-primary;
				}
				.itemInfo {
					flex: 1;
					margin-left: 32rpx;
					.item-name {
						font-size: 36rpx;
						color: #272832;
						line-height: 50rpx;
						font-weight: 600;
					}
					.item-email {
						font-size: 32rpx;
						color: #272832;
						line-height: 50rpx;
					}
				}

				.btn {
					width: 120rpx;
					height: 48rpx;
					line-height: 48rpx;
					text-align: center;
					background: rgba(74, 170, 255, 0.1);
					border-radius: 24rpx;
					font-size: 24rpx;
					color: #4aaaff;
				}
				.firend {
					background: #ffe431;
					color: #272832;
				}
			}
		}
	}
}
</style>

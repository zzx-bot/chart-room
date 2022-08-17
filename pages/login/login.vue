<template>
	<view class="container">
		<view class="top-bar">
			<view class="top-bar-right" @tap="toRegister"><p class="text">注册</p></view>
		</view>

		<view class="logo"><image src="../../static/index/huo.png" alt="" /></view>
		<view class="main">
			<view class="inputs">
				<view class="login">登录</view>
				<view class="hellow">您好，欢迎来到yikes</view>

				<input
					type="text"
					placeholder="用户名/邮箱"
					v-model="username"
					placeholder-style="color:#aaa;font-weight:400;"
				/>

				<input
					type="password"
					placeholder="输入密码"
					v-model="password"
					placeholder-style="color:#aaa;font-weight:400;"
					autocomplete="on"
				/>
			</view>
			<view class="tip">{{ '用户名或密码错误！' }}</view>
		</view>
		<view class="submit" @tap="testFun">登录</view>
	</view>
</template>

<script lang="ts" setup>
import { reactive, toRefs } from 'vue'
interface loginIntf {
	username: string
	password: string
}

const userLoginInfo = reactive<loginIntf>({
	username: '',
	password: ''
})

const { username, password } = toRefs(userLoginInfo)
const toRegister = () => {
	uni.navigateTo({
		url: '/pages/register/register'
	})
}
const testFun = () => {
	uni.request({
		url: 'http://localhost:3030/mail',
		data: { email: '731918391@qq.com' },
		method: 'POST',
		success: data => {
			console.log(data)
		}
	})
}
</script>

<style lang="scss">
@import '@/commons/css/topbar.scss';
.container {
	display: flex;
	flex-direction: column;
	align-items: center;
	margin-top: var(--status-bar-height);
	box-sizing: border-box;
	padding-left: 56rpx;
	padding-right: 56rpx;
	.top-bar {
		position: static;
		font-size: 36rpx;
	}
	.logo {
		display: flex;
		align-items: center;
		justify-content: center;
		width: 100%;
		height: 226rpx;
		image {
			height: 88rpx;
			width: 184rpx;
		}
	}
	.main {
		align-self: start;
		width: 100%;
		.login {
			font-size: 56rpx;
			font-weight: 500;
			line-height: 100rpx;
		}
		.hellow {
			color: rgba(39, 40, 50, 0.5);
			font-size: 40rpx;
			line-height: 72rpx;
			margin-bottom: 48rpx;
		}
		.inputs {
			width: 100%;
			font-size: 36rpx;
			color: #272832;
			input {
				height: 88rpx;
				margin-top: 48rpx;
				font-weight: 500;
				line-height: 88rpx;
				border-bottom: 2rpx solid $uni-border-color;
			}
		}
		.tip {
			position: absolute;
			font-size: 36rpx;
			color: $uni-color-warning;

			line-height: 56rpx;
		}
	}

	.submit {
		height: 100rpx;
		width: 520rpx;
		border-radius: 50rpx;
		margin-top: 120rpx;
		background: rgba(255, 228, 49, 1);
		line-height: 100rpx;
		text-align: center;
		font-size: 32rpx;
		color: #272832;
		letter-spacing: 0;
		font-weight: 500;
	}
}
</style>

<template>
	<view class="top-bar">
		<view class="top-bar-left" @tap="backLogin">
			<image src="../../static/common/goback.png" alt="" />
		</view>
	</view>
	<view class="container">
		<view class="logo"><image src="../../static/index/huo.png" alt="" /></view>
		<view class="main">
			<view class="login">注册</view>

			<view class="inputs">
				<div class="username">
					<input
						type="text"
						v-model="username"
						placeholder="取一个名字吧"
						placeholder-style="color:#aaa;font-weight:400;"
					/>
					<i class="icons" v-if="!isUserExist">
						<image src="../../static/login/right1.png" alt="" />
					</i>
					<view class="user-has-existed error-tip" v-if="isUserExist">
						{{ '用户名已存在' }}
					</view>
				</div>

				<div class="email">
					<input
						@input="isEmail"
						type="text"
						v-model="email"
						placeholder="你的邮箱多少呢"
						placeholder-style="color:#aaa;font-weight:400;"
					/>
					<view class="email-error error-tip" v-if="isEmaiError">
						{{ '邮箱格式错误' }}
					</view>
					<view class="email-error error-tip" v-if="!isEmailValid">
						{{ '邮箱已经注册' }}
					</view>
					<i class="icons" v-if="!isEmaiError && isEmailValid">
						<image src="../../static/login/right1.png" alt="" />
					</i>
				</div>
				<div class="password">
					<input
						v-model="password"
						:type="passwordType"
						placeholder="这里填写密码哦"
						placeholder-style="color:#aaa;font-weight:400;"
					/>
					<i class="icons" @click="showPassword">
						<image :src="`../../static/login/${lookUrl}.png`" alt="" />
					</i>
				</div>
			</view>
		</view>
		<view :class="[{ active: isOk }, 'submit']">注册</view>
	</view>
</template>

<script lang="ts" setup>
import { ref, reactive, toRefs, computed } from 'vue'

interface registerIntf {
	username: string
	email: string
	password: string
}
interface stateIntf {
	passwordType: 'text' | 'password'
	isUserExist: boolean
	isEmaiError: boolean
	showPas: boolean
	isEmailValid: boolean

	lookUrl: 'isShow' | 'unShow'
}
const state = reactive<stateIntf>({
	passwordType: 'password',
	isUserExist: false,
	isEmaiError: false,
	showPas: true,
	isEmailValid: true,

	lookUrl: 'unShow'
})

const registerTable = reactive<registerIntf>({
	username: '123',
	email: '123@qq.com',
	password: '123456'
})

let { passwordType, isUserExist, isEmaiError, showPas, isEmailValid, lookUrl } = toRefs(state)

let { username, email, password } = toRefs(registerTable)

const showPassword = () => {
	if (lookUrl.value === 'unShow') {
		lookUrl.value = 'isShow'
		passwordType.value = 'text'
	} else if (lookUrl.value === 'isShow') {
		lookUrl.value = 'unShow'
		passwordType.value = 'password'
	}
}

const isEmail = e => {
	if (email.value != '') {
		let reg = /^\w+((-\w+)|(\.\w+))*\@[A-Za-z0-9]+((\.|-)[A-Za-z0-9]+)*\.[A-Za-z0-9]+$/
		//调用正则验证test()函数
		if (!reg.test(email.value)) {
			isEmaiError.value = true
		} else {
			isEmaiError.value = false
		}
	}
}
const isOk = computed(() => {
	return (
		username.value != '' &&
		!isUserExist.value &&
		!isEmaiError.value &&
		isEmailValid.value &&
		password.value.length > 5
	)
})
const backLogin = () => {
	// 在C页面内 navigateBack，将返回A页面
	uni.redirectTo({
		url: '/pages/login/login'
	})
}
</script>

<style lang="scss">
@mixin abs-position {
	position: absolute;
	top: 50%;
	right: 0;
	transform: translateY(-50%);
}
@mixin icon-position {
	@include abs-position;
	image {
		width: 40rpx;
		height: 40rpx;
	}
}
.top-bar {
	width: 100%;
	background: $uni-bg-color;
	margin-left: 24rpx;
	.top-bar-left {
		display: flex;
		align-items: center;
		height: 88rpx;
		image {
			width: 50rpx;
			height: 50rpx;
		}
	}
}
.container {
	display: flex;
	flex-direction: column;
	align-items: center;
	margin-top: var(--status-bar-height);
	box-sizing: border-box;
	padding-left: 56rpx;
	padding-right: 56rpx;

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
			.username {
				position: relative;
				.user-has-existed {
					@include abs-position;
				}
				.icons {
					@include icon-position;
				}
			}
			.email {
				position: relative;
				.email-error {
					@include abs-position;
				}
				.icons {
					@include icon-position;
				}
			}
			.password {
				position: relative;
				.icons {
					@include icon-position;
				}
			}
		}
		.tip {
			position: absolute;
		}
	}

	.submit {
		height: 100rpx;
		width: 520rpx;
		border-radius: 50rpx;
		margin-top: 120rpx;

		line-height: 100rpx;
		text-align: center;
		font-size: 32rpx;
		color: #ffffff;
		background: rgba(39, 40, 50, 0.2);
		letter-spacing: 0;
		font-weight: 500;
	}
	.active {
		color: #272832;
		background: rgba(255, 228, 49, 1);
	}
}
.error-tip {
	font-size: 36rpx;
	color: $uni-color-warning;

	line-height: 56rpx;
}
</style>

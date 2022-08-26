<template>
	<TopBar :show="false">
		<template #left>
			<div style="font-size: 32rpx;color: #272832;margin-left: 32rpx;">取消</div>
		</template>
		<template #center>
			<div style="font-size: 40rpx;color: #272832; font-weight: 400;">创建群聊</div>
		</template>
	</TopBar>
</template>

<script lang="ts" setup>
import { ref, reactive, toRefs } from 'vue'
import { useStore } from 'vuex'
import TopBar from '@/components/common/TopBar.vue'
interface loginIntf {
	account: string
	password: string
}

const userLoginInfo = reactive<loginIntf>({
	account: 'admin123',
	password: 'admin123'
})

const { account, password } = toRefs(userLoginInfo)
const logindef = ref(false)
const toRegister = () => {
	uni.navigateTo({
		url: '/pages/register/register'
	})
}

const store = useStore()
const login = () => {
	const param = { account: account.value, password: password.value }

	store
		.dispatch('user/login', param)
		.then(() => {
			uni.navigateTo({
				url: '/'
			})
		})
		.catch(res => {
			logindef.value = true
		})
}
</script>

<style lang="scss">
.top-bar {
	width: 100%;
	height: 88rpx;
	position: relative;
	font-size: 36rpx;
	display: inline-block;
	.top-bar-right {
		position: absolute;
		line-height: 88rpx;
		right: 32rpx;
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
		line-height: 100rpx;
		text-align: center;
		font-size: 32rpx;
		background: rgba(255, 228, 49, 1);
		color: #272832;
		letter-spacing: 0;
		font-weight: 500;
	}
}
</style>

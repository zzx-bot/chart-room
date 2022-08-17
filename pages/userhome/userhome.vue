<template>
	<TopBar :show="true" />
	<view class="container">
		<view class="bg">
			<view :class="{ 'bg-bai': showAddPanel }"></view>
			<image
				:class="[{ 'bg-image': !showAddPanel }]"
				src="../../static/common/son.jpg"
				mode="aspectFill"
				alt=""
			/>
		</view>
		<Transition name="fade">
			<view class="main">
				<div :class="['headimage', { changeStyle: showAddPanel }]">
					<image
						:class="['avatar', { avatarActive: showAddPanel }]"
						src="../../static/common/son.jpg"
						mode="aspectFill"
						alt=""
					/>
					<image
						class="gender"
						style="background: #ff5d5b;"
						src="../../static/common/female.png"
						v-show="showAddPanel"
					/>
				</div>

				<view class="beizhu">宋黄文滨</view>
				<view class="nickName">昵称：son</view>
				<view class="des">
					埃尔温·薛定谔（Erwin
					Schrödinger，1887年8月12日—1961年1月4日），男，奥地利物理学家，量子力学奠基人之一，发展了分子生物学。维也纳大学哲学博士。苏黎世大学、柏林大学和格拉茨大学教授。
				</view>
			</view>
		</Transition>
		<view class="bottom" @tap="addFriend">加好友</view>
		<Transition name="fade">
			<view class="add-firend-panel" v-show="showAddPanel">
				<view class="name">{{ username }}</view>
				<textarea :value="'加我好友哦~'" class="add-msg" maxlength="120"></textarea>
				<view class="cancel" @tap="hiddenAddFriend">取消</view>
				<view class="confirm">确认</view>
			</view>
		</Transition>
	</view>
</template>

<script lang="ts" setup>
import AddFirend from '@/pages/userhome/AddFirend.vue'
import { ref, reactive, toRefs, computed } from 'vue'
import TopBar from '@/components/common/TopBar.vue'
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
	username: '文宾儿子',
	email: '123@qq.com',
	password: '123456'
})

let { passwordType, isUserExist, isEmaiError, showPas, isEmailValid, lookUrl } = toRefs(state)

let { username, email, password } = toRefs(registerTable)

const backLogin = () => {
	// 在C页面内 navigateBack，将返回A页面
	uni.redirectTo({
		url: '/pages/login/login'
	})
}
const showAddPanel = ref(false)
const addFriend = () => {
	showAddPanel.value = true
}
const hiddenAddFriend = () => {
	showAddPanel.value = false
}
</script>

<style lang="scss">
@mixin abs-position {
	position: absolute;
	top: 50%;
	right: 0;
	transform: translateY(-50%);
}

.container {
	width: 100%;
	height: 100%;
	display: flex;
	flex-direction: column;
	.bg {
		position: fixed;
		left: 0;
		top: 0;
		width: 100%;
		height: 100%;
		.bg-bai {
			width: 100%;
			height: 100%;
			background: rgba(255, 228, 49, 1);
			transition: height 0.3s ease;
		}
		.bg-image {
			position: absolute;
			left: -5%;
			top: -5%;
			opacity: 0.7;
			width: 110%;
			height: 110%;
			filter: blur(32px);
			background-size: cover;
		}
	}
	.main {
		display: flex;
		flex-direction: column;
		align-items: center;
		width: 100%;
		height: 100%;
		margin-top: 168rpx;
		.headimage {
			animation-name: example2;
			animation-duration: 0.3s;
			animation-timing-function: ease;
			position: relative;
			z-index: 10;
			width: 360rpx;
			height: 360rpx;
			.avatar {
				width: 100%;
				height: 100%;
				border-radius: $uni-border-radius-lg;
				border: 6px solid #ffffff;
			}
			.gender {
				width: 64rpx;
				height: 64rpx;
				position: absolute;
				bottom: 1%;
				right: 1%;
				box-sizing: border-box;

				padding: 15rpx;
				border-radius: $uni-border-radius-circle;
			}
		}
		.changeStyle {
			animation-name: example;
			animation-duration: 0.3s;
			animation-timing-function: ease;
			transform: translateY(50%);
			margin-bottom: 30rpx;
			width: 240rpx;
			height: 240rpx;
			border-radius: $uni-border-radius-base;
			box-shadow: 0px 36px 40px 0px rgba(39, 40, 50, 0.25);
			.avatarActive {
				border-radius: $uni-border-radius-lg;
				border: 3px solid #ffffff;
			}
		}
		.beizhu {
			font-size: 52rpx;
			color: #272832;
			height: 74rpx;
			line-height: 74rpx;
			margin-top: 40rpx;
		}
		.nickName {
			height: 40rpx;
			line-height: 40rpx;
			font-size: 28rpx;
			color: #272832;
		}
		.des {
			margin-top: 20rpx;
			ont-size: 28px;
			color: #272832;
		}
	}
	.bottom {
		position: fixed;
		bottom: 36rpx;
		width: 684rpx;
		height: 80rpx;
		background: #ffe431;
		border-radius: $uni-border-radius-sm;
		font-size: 32rpx;
		color: #272832;
		text-align: center;
		line-height: 80rpx;
	}
	.add-firend-panel {
		width: 101%;
		height: 75%;
		box-sizing: border-box;
		padding: 0 56rpx;
		position: fixed;
		background-color: #fff;
		bottom: 0;
		border-radius: $uni-border-radius-lg $uni-border-radius-lg 0 0;

		.name {
			padding-top: 30%;
			font-size: 52rpx;
			color: #272832;
		}
		.add-msg {
			height: 50%;
			width: 100%;
			margin-top: 40rpx;
			background: #f3f4f6;
			border-radius: 20px;
			box-sizing: border-box;
			padding: 10rpx 20rpx;
		}
		.cancel {
			position: absolute;
			left: 34rpx;
			bottom: 36rpx;
			width: 172rpx;
			height: 80rpx;
			background: rgba(39, 40, 50, 0.1);
			border-radius: $uni-border-radius-sm;
			font-size: 32rpx;
			color: #272832;
			text-align: center;
			line-height: 80rpx;
		}
		.confirm {
			position: absolute;
			right: 34rpx;
			bottom: 36rpx;
			width: 480rpx;
			height: 80rpx;
			background: #ffe431;
			border-radius: $uni-border-radius-sm;
			font-size: 32rpx;
			color: #272832;
			text-align: center;
			line-height: 80rpx;
		}
	}
}

.animation-A {
	animation-name: example;
	animation-duration: 0.3s;
	animation-timing-function: ease;
	animation-direction: alternate;
}

.fade-enter-active,
.fade-leave-active {
	transition: all 0.3s ease;
}

.fade-enter-from,
.fade-leave-to {
	opacity: 0;
	transform: translateY(75%);
}
@keyframes example {
	from {
		z-index: 10;
		width: 360rpx;
		height: 360rpx;
	}
	to {
		transform: translateY(50%);
		width: 240rpx;
		height: 240rpx;
		border-radius: $uni-border-radius-base;
		box-shadow: 0px 36px 40px 0px rgba(39, 40, 50, 0.25);
	}
}
@keyframes example2 {
	from {
		transform: translateY(50%);
		width: 240rpx;
		height: 240rpx;
		border-radius: $uni-border-radius-base;
		box-shadow: 0px 36px 40px 0px rgba(39, 40, 50, 0.25);
	}
	to {
		z-index: 10;
		width: 360rpx;
		height: 360rpx;
	}
}
</style>

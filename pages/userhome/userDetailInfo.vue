<template>
	<transition name="main">
		<div class="main" v-show="showMainPanel">
			<image-cropper :src="tempFilePath" @confirm="confirm" @cancel="cancel"></image-cropper>
			<TopBar :show="false">
				<template #center>
					详细信息
				</template>
			</TopBar>
			<div class="content" @click.stop="modifyInfo">
				<div class="info-div">
					<div class="infoItem head" @tap="upload">
						<div class="label">头像</div>
						<div class="info"><image :src="cropFilePath" class="avatar"></image></div>
						<image class="more" src="@/static/common/more.png" mode=""></image>
					</div>
					<div class="infoItem " data-index="昵称">
						<div class="label">昵称</div>
						<div class="info">月亮</div>
						<image class="more" src="@/static/common/more.png" mode=""></image>
					</div>
					<div class="infoItem " data-index="签名">
						<div class="label">签名</div>
						<div class="info">高高在上的月亮，相遇不一定有结局，但一定有意义</div>
						<img class="more" src="@/static/common/more.png" mode="" />
					</div>
				</div>

				<div class="info-div">
					<picker @change="bindPickerChange" :value="index" :range="array">
						<div class="infoItem">
							<div class="label">性别</div>
							<div class="info">{{ array[index] }}</div>
							<image class="more" src="@/static/common/more.png" mode=""></image>
						</div>
					</picker>

					<picker
						mode="date"
						:value="date"
						:start="startDate"
						:end="endDate"
						@change="bindDateChange"
					>
						<div class="infoItem ">
							<div class="label">生日</div>
							<div class="info">{{ date }}</div>
							<image class="more" src="@/static/common/more.png" mode=""></image>
						</div>
					</picker>

					<div class="infoItem " data-index="电话">
						<div class="label">电话</div>
						<div class="info">127999999</div>
						<image class="more" src="@/static/common/more.png" mode=""></image>
					</div>
					<div class="infoItem " data-index="邮箱">
						<div class="label">邮箱</div>
						<div class="info">127999999@134.com</div>
						<image class="more" src="@/static/common/more.png" mode=""></image>
					</div>
				</div>
				<div class="info-div">
					<div class="infoItem " data-index="密码">
						<div class="label">密码</div>

						<div class="info">*******</div>
						<image class="more" src="@/static/common/more.png" mode=""></image>
					</div>
					<div class="infoItem">
						<div class="label">注册</div>
						<div class="info">2000-01-22 13:22:33</div>
					</div>
				</div>
			</div>
			<button class="btn-logout">退出登录</button>
		</div>
	</transition>
	<transition v-show="!showMainPanel" name="modify">
		<ModifyPanel :title="title" :tipsInfo="tipsInfo"></ModifyPanel>
	</transition>
</template>

<script lang="ts" setup>
import ImageCropper from '@/components/ling-imgcropper/ling-imgcropper.vue'
import ModifyPanel from './modifyPanel/ModifyPanel.vue'
import { ref, reactive, computed } from 'vue'
import { dateTime, FormatDate } from '@/utils/timeTrans.js'
import TopBar from '@/components/common/TopBar.vue'

import { tempFilePath, cropFilePath, upload, confirm, cancel } from '@/utils/upload.js'

const nowDate = new Date()

const date = ref(FormatDate(new Date().getTime()))

const startDate = computed(() => {
	return getDate('start')
})

const endDate = computed(() => {
	return getDate('end')
})

const bindDateChange = e => {
	date.value = e.detail.value
}
const getDate = type => {
	const date = new Date()
	let year = date.getFullYear()
	let month = date.getMonth() + 1
	let day = date.getDate()

	if (type === 'start') {
		year = year - 60
	}
	month = month > 9 ? month : '0' + month
	day = day > 9 ? day : '0' + day

	console.log(`${year}-${month}-${day}`)
	return `${year}-${month}-${day}`
}

const array = reactive(['男', '女', '未知'])
const index = ref(1)
const bindPickerChange = e => {
	index.value = e.detail.value
}

const showMainPanel = ref(true)
const title = ref('')
const tipsInfo = ref('')

const mpvuePicker = ref()
const modifyInfo = e => {
	console.log(e)
	let name = e.target.dataset.index
	if (name) {
		showMainPanel.value = false
		title.value = name
		tipsInfo.value = '好名字能让你朋友更好的记住你~'
		if (name === '注册') {
		}
	}
}
//endregion

//#region
</script>

<style lang="scss">
.modify-enter-active,
.modify-leave-active {
	transition: transform 0.3s;
}
.modify-enter,
.modify-leave-to {
	transform: translateX(0);
}
.main-enter-active,
.main-leave-active {
	transition: transform 0.3s;
}
.main-enter,
.main-leave-to {
	transform: translateX(-100%);
}
.main {
	height: 100%;
	z-index: 998;
}
.content {
	display: flex;
	flex-direction: column;

	padding: 100rpx 32rpx 0 32rpx;
	.info-div {
		margin-bottom: 20rpx;
		.infoItem {
			height: 112rpx;
			position: relative;
			z-index: auto;
			background: transparent;
			display: flex;
			align-items: center;
			border-bottom: 2rpx solid rgba(238, 238, 238, 1);
			.label {
				position: relative;
				z-index: -1;
				margin-right: 32rpx;
				font-size: 32rpx;
				white-space: nowrap;
				color: #272832;
			}
			.info {
				position: relative;
				z-index: -2;
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
				z-index: -2;
				margin-left: auto;
				width: 25rpx;
				height: 35rpx;
			}
		}
		.head {
			padding: 10rpx 0;
		}
		.pkr {
			display: block;
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

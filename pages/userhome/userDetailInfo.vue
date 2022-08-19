<template>
	<transition name="main">
		<div class="main" v-show="showMainPanel">
			<TopBar :show="false">
				<template #center>
					详细信息
				</template>
			</TopBar>
			<view class="content">
				<view class="info-div">
					<view class="infoItem head" @tap="upload">
						<view class="label">头像</view>
						<view class="info">
							<image-cropper
								:src="tempFilePath"
								@confirm="confirm"
								@cancel="cancel"
							></image-cropper>

							<image :src="cropFilePath" class="avatar"></image>
						</view>
						<image class="more" src="../../images/common/more.png" mode=""></image>
					</view>
					<view class="infoItem ">
						<view class="label">签名</view>
						<view class="info">高高在上的月亮，相遇不一定有结局，但一定有意义</view>
						<image class="more" src="../../images/common/more.png" mode=""></image>
					</view>
				</view>

				<view class="info-div">
					<view class="infoItem head">
						<view class="label">注册</view>
						<view class="info">2000-01-22 13:22:33</view>
						<image class="more" src="../../images/common/more.png" mode=""></image>
					</view>
					<view class="infoItem ">
						<view class="label">昵称</view>
						<view class="info">月亮</view>
						<image class="more" src="../../images/common/more.png" mode=""></image>
					</view>
					<view class="infoItem ">
						<view class="label">性别</view>
						<picker @change="bindPickerChange" :value="index" :range="array">
							<view class="uni-input">{{ array[index] }}</view>
						</picker>
						<image class="more" src="../../images/common/more.png" mode=""></image>
					</view>
					<view class="infoItem ">
						<view class="label">生日</view>
						<view class="info">
							<picker
								mode="date"
								:value="date"
								:start="startDate"
								:end="endDate"
								@change="bindDateChange"
							>
								<div style="display: flex; justify-content: space-between;">
									<view style="display: inline-block;" class="uni-input">
										{{ date }}
									</view>

									<image
										style="display: inline-block;"
										class="more"
										src="../../images/common/more.png"
										mode=""
									></image>
								</div>
							</picker>
						</view>
					</view>

					<view class="infoItem ">
						<view class="label">电话</view>
						<view class="info">127999999</view>
						<image class="more" src="../../images/common/more.png" mode=""></image>
					</view>
					<view class="infoItem ">
						<view class="label">邮箱</view>
						<view class="info">127999999@134.com</view>
						<image class="more" src="../../images/common/more.png" mode=""></image>
					</view>
				</view>
				<view class="info-div">
					<view class="infoItem ">
						<view class="label">密码</view>

						<view class="info">*******</view>
						<image class="more" src="../../images/common/more.png" mode=""></image>
					</view>
				</view>
			</view>
			<button class="btn-logout">退出登录</button>
		</div>
	</transition>
	<transition v-show="true"><ModifyPanel></ModifyPanel></transition>
</template>

<script lang="ts" setup>
import ImageCropper from '@/components/ling-imgcropper/ling-imgcropper.vue'
import ModifyPanel from '@/components/modifyPanel/ModifyPanel.vue'
import { ref, reactive, computed } from 'vue'
import { dateTime, FormatDate } from '@/utils/timeTrans.js'
import TopBar from '@/components/common/TopBar.vue'

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

//头像裁剪
const tempFilePath = ref('')
const cropFilePath = ref('')
const upload = () => {
	uni.chooseImage({
		count: 1, //默认9
		sizeType: ['original', 'compressed'], //可以指定是原图还是压缩图，默认二者都有
		sourceType: ['album', 'cream'], //从相册选择
		success: res => {
			tempFilePath.value = res.tempFilePaths.shift()
		}
	})
}
const confirm = e => {
	tempFilePath.value = ''
	cropFilePath.value = e.detail.tempFilePath

	// #ifdef APP-PLUS||MP
	//除了H5端返回base64数据外，其他端都是返回临时地址，所以你要判断base64还是临时文件名，（用条件编译APP-PLUS||MP执行编译。）
	//按我这里是先上传裁剪得来的临时文件地址然后得到临时文件名，
	//待活你要判断是H5还是其他端传给后端类型参数让后端判断执行何种情况代码就OK了

	uni.uploadFile({
		url: '后端地址上传图片接口地址',
		filePath: cropFilePath.value,
		name: 'file',
		fileType: 'image',
		//formData:{},传递参数
		success: uploadFileRes => {
			var backstr = uploadFileRes.data
			//自定义操作
		},

		fail(e) {
			console.log('this is errormes ' + e.message)
		}
	})

	//#endif
}
const cancel = () => {
	console.log('canceled')
	tempFilePath.value = ''
}

//#region
const showMainPanel = ref(false)

//endregion
</script>

<style lang="scss">
.modify {
	transform: translateX(100%);
}

.main-enter-active,
.main-leave-active {
	transition: transform 3s;
}
.main-enter,
.main-leave-to {
	transform: translateX(-100%);
}
.main {
	height: 100%;
}
.content {
	display: flex;
	flex-direction: column;
	padding-top: 100rpx;
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
				margin-left: auto;
				width: 25rpx;
				height: 35rpx;
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

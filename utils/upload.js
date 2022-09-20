//头像裁剪
import {
	ref
} from 'vue'
export const tempFilePath = ref('')
export const cropFilePath = ref('')
export const upload = (e) => {
	uni.chooseImage({
		count: 1, //默认9
		sizeType: ['original', 'compressed'], //可以指定是原图还是压缩图，默认二者都有
		sourceType: ['album', 'cream'], //从相册选择
		success: res => {
			tempFilePath.value = res.tempFilePaths.shift()
		}
	})
}
export const confirm = e => {
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
export const cancel = () => {
	console.log('canceled')
	tempFilePath.value = ''
}

//#region

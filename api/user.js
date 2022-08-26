// 引用网络请求中间件
import request from './../utils/request';
/**
 *    登陆请求
 */
export function login(data) {
	return request({
		url: '/signin',
		method: 'POST',
		data
	})
}

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

/**
 *    注册请求
 */
export function signUpApi(data) {
	console.log(data);
	return request({
		url: '/signup/adduser',
		method: 'POST',
		data
	})
}

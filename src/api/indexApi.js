import http from '../http/index.js'

// 测试请求
const test = function({data,url,method}){
	return http({
		data,
		url,
		method
	})
}
export {
	test
}
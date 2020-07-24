import http from '../../http/index.js'

// 注册验证码
function registerCustomer(data) {
	return http({
		method: 'post',
		data,
		url: 'dby/sysuser/registerCustomer'
	})
}

// 用户注册
function registerCust(data) {
	return http({
		method: 'post',
		data,
		url: 'dby/sysuser/registerCust'
	})
}

export {
	registerCustomer,
	registerCust
}

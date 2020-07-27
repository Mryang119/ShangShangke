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

// 用户登录
function loginByMobile(data) {
	return http({
		method: 'post',
		data: {
			sysAccount: "SYSTEM",
			...data
		},
		url: 'dby/sysuser/loginByMobile'
	})
}

// 手机直接登录不需要验证码

function loginByMobileNoCode(data) {
	return http({
		method: 'post',
		data: {
			...data,
			sysAccount: 'TESTSYSACCOUNT',
			parentNo: '0'
		},
		url: "backstages/sysuser/loginByMobileNoCode"
	})
}

export {
	registerCustomer,
	registerCust,
	loginByMobile,
	loginByMobileNoCode
}

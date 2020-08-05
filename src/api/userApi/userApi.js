import http from '../../http/index.js'
// 检测是否登录
import {
	isLogin
} from '../../utils/index.js'


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

// 微信登录环境   /backstages/sysuser/customerLogin
function customerLogin(data) {
	return http({
		url: '/backstages/sysuser/customerLogin',
		data,
		method: 'post'
	})
}

// 获取个人信息  /dby/homeInfo/getUserInfo
function getUserInfo(data) {
	return http({
		url: '/dby/homeInfo/getUserInfo',
		data,
		method: 'post'
	})
}

// 获取订单列表  dby/homeInfo/getCustOrderInfo
function getCustOrderInfo(data) {
	return http({
		url: 'dby/homeInfo/getCustOrderInfo',
		data,
		method: 'post'
	})
}

// backstage/file/upload  
// 图片上传接口
function upload(data) {
	return http({
		url: 'backstage/file/upload',
		data,
		method: 'post'
	})
}

// 修改用户资料接口 dby/homeInfo/updateImgAddr

function updateImgAddr(data) {
	
	if (isLogin()) {
		let loginDatas = uni.getStorageSync('loginDatas')
		
		return http({
			data:{
				...data,
				mobile:loginDatas.mobile
			},
			method: 'post',
			url: "dby/homeInfo/updateImgAddr"
		})
	} else {
		uni.showModal({
			title: '请求出错',
			content: `您未登录`
		})
	}

}
export {
	registerCustomer,
	registerCust,
	loginByMobile,
	loginByMobileNoCode,
	customerLogin,
	getUserInfo,
	getCustOrderInfo,
	upload,
	updateImgAddr
}

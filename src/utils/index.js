// 判断是否登录只返回true false

function isLogin() {
	const loginDatas = uni.getStorageSync('loginDatas')
	if (loginDatas) {
		return true
	} else {
		return false
	}
}

export {
	isLogin
}

// 判断是否登录只返回true false

function isLogin() {
	const loginDatas = uni.getStorageSync('loginDatas')
	if (loginDatas) {
		return true
	} else {
		return false
	}
}

// 计算scroll容器宽度函数
// 接收数组长度以及元素边距
function ScrollWidth(length, width, maring) {
	return length * width * 2 + length * maring * 2
}
export {
	isLogin,
	ScrollWidth
}

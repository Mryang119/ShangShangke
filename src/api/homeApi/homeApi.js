import http from '../../http/index.js'

// 获取城市列表
const getCityList = (data) => {
	return http({
		method: 'post',
		url: 'dby/homeInfo/getDbyDistrictList',
		data
	})
}
// 获取商圈信息
const getCircList = (data) => {
	return http({
		url: 'dby/homeInfo/getCircList',
		data,
		method: 'post'
	})
}


// 获取首页模块信息
const getHomeModuleMessages = (data) => {
	return http({
		method: 'post',
		url: "dby/homeInfo/getHomeInfo",
		data
	})
}
export {
	getCityList,
	getHomeModuleMessages,
	getCircList
}

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
// 获取更多活动信息
const getCircCampaignInfo = (data) => {
	return http({
		method: 'post',
		data,
		url: 'dby/homeInfo/getCircCampaignInfo'
	})
}

// 获取秒杀信息
const getSeckillMoreInfo = (data) => {
	return http({
		method: 'post',
		data,
		url: 'dby/homeInfo/getSeckillMoreInfo'
	})
}
// 获取优惠券信息
const getCouponList = (data) => {
	return http({
		data: {
			...data,
			sysAccount: 'TESTSYSACCOUNT'
		},
		method: 'post',
		url: 'backstages/mktCamp/getCouponList'
	})
}

export {
	getCityList,
	getHomeModuleMessages,
	getCircList,
	getCircCampaignInfo,
	getSeckillMoreInfo,
	getCouponList
}

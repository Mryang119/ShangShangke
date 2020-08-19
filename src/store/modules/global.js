const state = () => ({
	globalData: {
		circs: null, // 商圈信息
		cityList: [], //  城市列表信息
		cityName: '未定位', // 当前定位
		openid: '', // 微信id
		session_key: '', // 会话密钥
		latitude: '', // 维度
		longitude: '' ,// 经度,
		mobile:'' // 手机
	}
})
const mutations = {
	saveGlobal(state, payload) {
		const {
			value,
			key
		} = payload
		if (key === 'cityName') {
			let newValue = value.replace('市', '')
			state.globalData[key] = newValue
		} else {
			state.globalData[key] = value
		}
	}
}

export default {
	state,
	mutations
}

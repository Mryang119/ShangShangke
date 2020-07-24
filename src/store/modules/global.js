const state = () => ({
	globalData: {
		circs: null, // 商圈信息
		cityList: [], //  城市列表信息
		cityName: '未定位', // 当前定位
		openid:'', // 微信id
		session_key:'' // 会话密钥
	}
})
const mutations = {
	saveGlobal(state, payload) {
		const {
			value
		} = payload
		state.globalData.circs = value
	}
}

export default {
	state,
	mutations
}

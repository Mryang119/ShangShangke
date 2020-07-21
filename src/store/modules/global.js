const state = ()=> ({
	globalData:{
		circs:null
	}
})
const mutations = {
	saveGlobal(state,payload){
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
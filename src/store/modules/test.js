const state = () => ({
	test: '是一条测试'
})
const mutations = {
	setTest(state) {
		state.test = '修改成功'
	}
}
const getters = {}
const actions = {}
export default {
	state,
	mutations,
	getters,
	actions
}

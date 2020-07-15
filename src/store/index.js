import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)
const store = new Vuex.Store({
    state: {
		filterForm:{
			className:'', // 存储分类
			nearbys:[], // 存储附近
			smartSort:[], // 存储智能排序
			filters:[] // 存储筛选
		}
	},
    mutations: {},
    actions: {}
})
export default store
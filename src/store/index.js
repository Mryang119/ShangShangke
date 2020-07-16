import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)
const store = new Vuex.Store({
    state: {
		// form表单数据
		filterForm:{
			className:'', // 存储分类
			nearbys:[], // 存储附近
			smartSort:[], // 存储智能排序
			filters:[] // 存储筛选
		},
		// 城市列表信息
		cityList:[],
		// 定位城市名
		cityName:'未定位'
	},
    mutations: {
			
		},
    actions: {}
})
export default store
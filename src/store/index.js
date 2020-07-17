import Vue from 'vue'
import Vuex from 'vuex'
import {
	filterForm
} from '../utils/fakeFilterDatas.js'

Vue.use(Vuex)
const store = new Vuex.Store({
	state: {
		// form表单数据
		filterForm,
		// 选中的表单存贮数据
		selectFilterForm: {
			className: '分类', // 不是分类就高亮
			nearbys: [], // 长度大于等于2就高亮
			smartSort: '智能排序', // 不是智能排序就高亮	
			filters: [] // 数组长度不等于0就高亮
		},
		// 表单是否高亮
		isActiveForm: {
			className: true,
			nearbys: false,
			smartSort: false,
			filters: false
		},
		// 城市列表信息
		cityList: [],
		// 定位城市名
		cityName: '未定位'
	},
	mutations: {
		saveSelectDatas(state, payload) {
			const {
				type,
				value
			} = payload
			switch (type) {
				// 处理分类
				case 'className':
					state.className = value
					break;
					// 处理距离
				case 'nearbys':
					let length = state.selectFilterForm.nearbys.length
					let nearbys = state.selectFilterForm.nearbys
					// 数组长度小于等于2的时候代表存有操作空间，并且数组不存在当前value，
					// 如果数组含有value那么就要进行自身剔除
					if (length<=2 && nearbys.includes(value)!==false) {
						nearbys.push(value)
					} else if(length<=2 && nearbys.includes(value)===true){
						targetIndex = nearbys.indexOf(value)
						nearbys.splice(targetIndex,1)
					}
					break;
					// 处理排序
				case 'smartSort':

			}
		},
		active(state,payload){
			const {
				type
			} = payload
			console.log(type)
			state.isActiveForm[type] = true
		}
	},
	actions: {}
})
export default store

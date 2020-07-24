import {
	filterForm
} from '../../utils/fakeFilterDatas.js'
const state = () => ({
	// form表单数据
	filterForm,
	// 选中的表单存贮数据
	selectFilterForm: {
		className: '无', // 不是无就高亮
		nearbys: '附近', // 长度大于等于2就高亮
		smartSort: '智能排序', // 不是智能排序就高亮	
		filters: [] // 数组长度不等于0就高亮
	},
	// 表单是否高亮
	isActiveForm: {
		className: false,
		nearbys: false,
		smartSort: false,
		filters: false
	}
})
const mutations = {
	saveSelectDatas(state, payload) {
		const {
			type,
			value
		} = payload
		switch (type) {
			// 处理分类
			case 'className':
				state.selectFilterForm.className = value
				break;
				// 处理附近
			case 'nearbys':
				state.selectFilterForm.nearbys = value
				break;
				// 处理排序
			case 'smartSort':
				state.selectFilterForm.smartSort = value
				break;
			case 'filters':
				if (state.selectFilterForm.filters.includes(value)) {
					let index = state.selectFilterForm.filters.indexOf(value)
					state.selectFilterForm.filters.splice(index, 1)
				} else {
					state.selectFilterForm.filters.push(value)
				}
			default:
				return
		}
	},
	active(state, payload) {
		const {
			type
		} = payload
		state.isActiveForm[type] = true
	},
	testActive(state) {
		for (let key in state.isActiveForm) {
			if (state.selectFilterForm[key] == '无') {
				state.isActiveForm[key] = false
			} else if (state.selectFilterForm[key] == '附近') {
				state.isActiveForm[key] = false
			} else if (state.selectFilterForm[key] == '智能排序') {
				state.isActiveForm[key] = false
			} else if (state.selectFilterForm[key].length === 0) {
				state.isActiveForm[key] = false
			}
		}
	}
}
export default {
	state,
	mutations
}
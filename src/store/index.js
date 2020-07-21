import Vue from 'vue'
import Vuex from 'vuex'

import filter from './modules/filter.js'
Vue.use(Vuex)
const store = new Vuex.Store({
	actions: {},
	getters:{},
	modules:{
		filter
	}
	
})
export default store

import Vue from 'vue'
import Vuex from 'vuex'

import filter from './modules/filter.js'
import global from './modules/global.js'
Vue.use(Vuex)
const store = new Vuex.Store({
	actions: {},
	getters:{},
	modules:{
		filter,
		global
	}
	
})
export default store

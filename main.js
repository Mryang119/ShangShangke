import Vue from 'vue'
import App from './App'
import store from './src/store/index.js'
//#ifdef MP-WEIXIN
import './style/iconfont.css'
//#endif
import uView from "uview-ui";
Vue.use(uView);
Vue.config.productionTip = false
Vue.prototype.$store = store
App.mpType = 'app'

const app = new Vue({
	...App,
	store
})
app.$mount()

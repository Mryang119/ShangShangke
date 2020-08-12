import bmap from '@/common/bmap-wx.min.js'

/**
 * @method isLogin
 * @param{}
 * @description 检测是否登录函数
 * @return {Boolean}
 */
function isLogin() {
	const loginDatas = uni.getStorageSync('loginDatas')
	let strLoginDatas = JSON.stringify(loginDatas)
	if (loginDatas && strLoginDatas != '{}') {
		return true
	} else {
		return false
	}
}



/**
 * @method ScrollWidth
 * @param{length:Number,width:Number,maring:Number}
 * @description : 计算scroll容器宽度函数，接收数组长度以及元素边距，maring width 为px
 * @return {Number}
 */
function ScrollWidth(length, width, maring) {
	return length * width * 2 + length * maring * 2
}

/**
 * @method getLocations
 * @param{that:上下文}
 * @description 获取定位的函数,此函数做了App与wx小程序区分,返回一个promise
 * @return {Promise}
 */
function getLocations(that) {
	//#ifdef MP-WEIXIN
	// 百度地图数据⬇
	let ak = 'qC1AHsQNj44vE3ctEIi4IXLZBgHYf33F' // 企业ak
	// let ak = 'AQNjDWwRffaoqtGkNxfAQmwic9mtkS8w', // 个人ak
	let BMap = null
	let markers = []
	let latitude = '' // 经度
	let longitude = '' // 纬度
	let rgcData = {}
	// 百度地图数据⬆

	return function() {
		BMap = new bmap.BMapWX({
			ak
		});
		return new Promise((resolve, reject) => {
			// 小程序吊起权限校验
			uni.authorize({
				scope: 'scope.userLocation',
				success() {
					var fail = function(data) {
						reject(data)
					};
					var success = function(data) {
						console.log('百度定位', data)
						let wxMarkerData = data.wxMarkerData;
						markers = wxMarkerData
						latitude = wxMarkerData[0].latitude
						longitude = wxMarkerData[0].longitude
						var reg = /.+?(省|市|自治区|自治州|县|区)/g;
						// 存储一份到仓库
						that.$store.commit('saveGlobal', {
							key: 'cityName',
							value: wxMarkerData[0].address.match(reg)[1].replace('市', '')
						})
						// 存贮经纬度
						const globalKey = ['latitude', 'longitude']
						globalKey.forEach(k => {
							that.$store.commit('saveGlobal', {
								key: k,
								value: wxMarkerData[0][k]
							})
						})
						resolve(data)
					}
					BMap.regeocoding({
						fail: fail,
						success: success
					});
				},
				fail: (err) => {
					reject(err)
				}
			})
		})
	}
	//#endif
	// #ifdef APP-PLUS
	return function() {
		return new Promise((resolve, reject) => {
			uni.getLocation({
				geocode: true,
				success: (e) => {
					console.log('APP', e)
					const globalKey = ['latitude', 'longitude']
					globalKey.forEach(k => {
						that.$store.commit('saveGlobal', {
							key: k,
							value: e[k]
						})
					})
					// 存储城市名
					that.$store.commit('saveGlobal', {
						key: 'cityName',
						value: e.address.city.replace('市', '')
					})
					resolve(e)
				},
				fail: (err) => {
					reject(err)
				}
			})
		})
	}
	// #endif
}
export {
	isLogin,
	ScrollWidth,
	getLocations
}

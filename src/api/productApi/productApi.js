import http from '../../http/index.js'

// 获取商品详情
const getProductSkuList = (data) => {
	return http({
		data,
		method: 'post',
		url: '/backstages/product/getProductSkuList'
	})
}
export {
	getProductSkuList
}

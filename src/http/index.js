const URL = 'http://47.113.113.254:8081/' // 开发环境地址


export default function http({url,method,data,tips="数据加载中"}){
	return new Promise((resolve,reject)=>{
		uni.showToast({
			title:tips,
			duration:50000
		})
		uni.request({
			method,
			url:`${URL}${url}`,
			data,
			dataType:'json',
			success:(res)=>{
				uni.hideToast()
				resolve(res)
			},
			fail:(error)=>{
				reject(error)
			}
		})
	})
}
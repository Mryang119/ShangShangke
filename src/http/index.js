const URL = 'http://47.113.113.254:8081/' // 开发环境地址


export default function http({url,method,data,tips="数据加载中"}){
	return new Promise((resolve,reject)=>{
		uni.showLoading({
			title:tips,
			duration:50000,
			icon:'loading'
		})
		uni.request({
			method,
			url:`${URL}${url}`,
			data,
			dataType:'json',
			success:(res)=>{
				if(res.data.returnCode == '1') {
					uni.hideLoading()
					resolve(res)
				}else {
					uni.hideLoading()
					uni.showModal({
						title:'请求出错',
						content:`错误信息为${res.data.returnMsg}`
					})
					reject(res)
				}
				
			},
			fail:(error)=>{
				reject(error)
			},
			timeout:3000
		})
	})
}
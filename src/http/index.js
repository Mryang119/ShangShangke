const URL = 'http://47.113.113.254:8081/' // 开发环境地址


export default function http({url,method,data,tips="加载中"}){
	return new Promise((resolve,reject)=>{
		uni.request({
			method,
			url:`${URL}${url}`,
			data,
			dataType:'json',
			success:(res)=>{
				resolve(res)
			},
			fail:(error)=>{
				reject(error)
			}
		})
	})
}
export default function http({url,method="get",data,tips="加载中"}){
	return new Promise((resolve,reject)=>{
		uni.request({
			method,
			url
		})
	})
}
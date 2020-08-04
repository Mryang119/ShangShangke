// 开发环境地址
let URL = 'http://47.113.113.254:8081/'
if (process.env.NODE_ENV === 'development') {
	console.log('开发环境')
	URL = 'http://47.113.113.254:8081/'
} else {
	console.log('生产环境')
	URL = 'http://47.113.113.254:8081/'
}
export default URL

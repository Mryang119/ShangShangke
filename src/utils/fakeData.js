const list = [{
		price: 20,
		typeMessge: '满100可用',
		store: '海底捞'
	}, {
		price: 20,
		typeMessge: '满100可用',
		store: '海底捞'
	}, {
		price: 20,
		typeMessge: '满100可用',
		store: '海底捞'
	}, {
		price: 20,
		typeMessge: '满100可用',
		store: '海底捞'
	}, {
		price: 20,
		typeMessge: '满100可用',
		store: '海底捞'
	}, {
		price: 20,
		typeMessge: '满100可用',
		store: '海底捞'
	}, {
		price: 20,
		typeMessge: '满100可用',
		store: '海底捞'
	}, {
		price: 20,
		typeMessge: '满100可用',
		store: '海底捞'
	}, {
		price: 20,
		typeMessge: '满100可用',
		store: '海底捞'
	},
	{
		price: 20,
		typeMessge: '满100可用',
		store: '海底捞'
	}
]
let showItemList = [{
		price: 35,
		title: '北国风光，千里冰封，万里雪飘',
		shop: '李白杜甫白居易旗舰店',
		image: 'http://pic.sc.chinaz.com/Files/pic/pic9/202002/zzpic23327_s.jpg',
		type: 3
	},
	{
		price: 75,
		title: '望长城内外，惟余莽莽',
		shop: '李白杜甫白居易旗舰店',
		image: 'http://pic.sc.chinaz.com/Files/pic/pic9/202002/zzpic23325_s.jpg',
		type: 4
	},
	{
		price: 385,
		title: '大河上下，顿失滔滔',
		shop: '李白杜甫白居易旗舰店',
		image: 'http://pic2.sc.chinaz.com/Files/pic/pic9/202002/hpic2119_s.jpg',
		type: 4
	},
	{
		price: 784,
		title: '欲与天公试比高',
		shop: '李白杜甫白居易旗舰店',
		image: 'http://pic2.sc.chinaz.com/Files/pic/pic9/202002/zzpic23369_s.jpg',
		type: 8
	},
	{
		price: 7891,
		title: '须晴日，看红装素裹，分外妖娆',
		shop: '李白杜甫白居易旗舰店',
		image: 'http://pic2.sc.chinaz.com/Files/pic/pic9/202002/hpic2130_s.jpg',
		type: 4
	},
	{
		price: 2341,
		shop: '李白杜甫白居易旗舰店',
		title: '江山如此多娇，引无数英雄竞折腰',
		image: 'http://pic1.sc.chinaz.com/Files/pic/pic9/202002/zzpic23346_s.jpg',
		type: 3
	},
	{
		price: 661,
		shop: '李白杜甫白居易旗舰店',
		title: '惜秦皇汉武，略输文采',
		image: 'http://pic1.sc.chinaz.com/Files/pic/pic9/202002/zzpic23344_s.jpg',
		type: 8
	},
	{
		price: 1654,
		title: '唐宗宋祖，稍逊风骚',
		shop: '李白杜甫白居易旗舰店',
		image: 'http://pic1.sc.chinaz.com/Files/pic/pic9/202002/zzpic23343_s.jpg',
		type: 8
	},
	{
		price: 1678,
		title: '一代天骄，成吉思汗',
		shop: '李白杜甫白居易旗舰店',
		image: 'http://pic1.sc.chinaz.com/Files/pic/pic9/202002/zzpic23343_s.jpg',
		type: 4
	},
	{
		price: 924,
		title: '只识弯弓射大雕',
		shop: '李白杜甫白居易旗舰店',
		image: 'http://pic1.sc.chinaz.com/Files/pic/pic9/202002/zzpic23343_s.jpg',
		type: 3
	}
]

// 分类假数据
let classifyList = [{
	title: '热门推荐',
	children: [
		'无',
		'面包',
		'火锅',
		'自助餐',
		'住宿'
	]
}, {
	title: '美食',
	children: [
		'面包',
		'火锅',
		'自助餐',
		'住宿'
	]
}, {
	title: '服装',
	children: [
		'面包',
		'火锅',
		'自助餐',
		'住宿'
	]
}, {
	title: '美容美发',
	children: [
		'面包',
		'火锅',
		'自助餐',
		'住宿'
	]
}, {
	title: '住宿',
	children: [
		'面包',
		'火锅',
		'自助餐',
		'住宿'
	]
}, {
	title: '旅游度假',
	children: [
		'面包',
		'火锅',
		'自助餐',
		'住宿'
	]
}, {
	title: '交通出行',
	children: [
		'面包',
		'火锅',
		'自助餐',
		'住宿'
	]
}, {
	title: '孕婴儿童',
	children: [
		'面包',
		'火锅',
		'自助餐',
		'住宿'
	]
}, {
	title: '宠物',
	children: [
		'面包',
		'火锅',
		'自助餐',
		'住宿'
	]
}, {
	title: '学习住宿',
	children: [
		'面包',
		'火锅',
		'自助餐',
		'住宿'
	]
}]
// 拼团假数据
const groups = [{
		type: 1,
		productTitle: '韩国年糕料理(海岸城店)',
		productMessage: '两人芝士双拼套餐',
		price: '￥1.00',
		oldPrice: '￥11.00',
		distance: 400,
		tag: '直降5元'
	}, {
		type: 2,
		productTitle: '然也 保温杯',
		productMessage: '360°倒置不漏水',
		price: '￥1.00',
		oldPrice: '￥11.00',
		distance: '',
		tag: '直降5元'
	}, {
		type: 2,
		productTitle: '然也 保温杯',
		productMessage: '360°倒置不漏水',
		price: '￥1.00',
		oldPrice: '￥11.00',
		distance: '',
		tag: ''
	},
	{
		type: 1,
		productTitle: '韩国年糕料理(海岸城店)',
		productMessage: '两人芝士双拼套餐',
		price: '￥1.00',
		oldPrice: '￥11.00',
		distance: 400,
		tag: '直降5元'
	}
]
// 瀑布流测试数据
const waterfallList = [
	{
		title:"深圳最好吃的火锅！",
		siteDatas:{
			site:'深圳上梅林',
			distance:400
		},
		userImage:"https://profile.csdnimg.cn/1/D/D/3_dkr380205984",
		likeInfo:{
			like:123,
			status:0
		},
		userName:'彭于晏',
		key:Date.now()+Math.random()*999,
		image:"https://g-search3.alicdn.com/img/bao/uploaded/i4/i2/2641868119/O1CN01vGGTcn29qYH28gdgV_!!0-item_pic.jpg_360x360Q90.jpg",
		tags:[
			'火锅',
			'好吃的火锅',
			'推荐'
		]
	},{
		title:"刚出炉真的是热乎乎香喷喷软绵绵超好吃~！",
		siteDatas:{
			site:'深圳上梅林',
			distance:400
		},
		userName:'彭于晏',
		userImage:"https://profile.csdnimg.cn/1/D/D/3_dkr380205984",
		likeInfo:{
			like:123,
			status:0
		},
		key:Date.now()+Math.random()*999,
		image:"https://g-search3.alicdn.com/img/bao/uploaded/i4/i1/2641599952/O1CN016cf6Bb2NO4GNNJrGs_!!0-item_pic.jpg_360x360Q90.jpg",
		tags:[
			'火锅',
			'好吃的火锅',
			'推荐'
		]
	},{
		title:"深圳最好吃的火锅~！",
		siteDatas:{
			site:'深圳上梅林',
			distance:400
		},
		userName:'彭于晏',
		userImage:"https://profile.csdnimg.cn/1/D/D/3_dkr380205984",
		likeInfo:{
			like:123,
			status:0
		},
		key:Date.now()+Math.random()*999,
		image:"https://g-search1.alicdn.com/img/bao/uploaded/i4/i4/2065839946/O1CN018zYv742NLJst8S2hR_!!0-item_pic.jpg_360x360Q90.jpg",
		tags:[
			'火锅',
			'好吃的火锅',
			'推荐'
		]
	},{
		title:"刚出炉真的是热乎乎香喷喷软绵绵超好吃~！",
		siteDatas:{
			site:'深圳上梅林',
			distance:400
		},
		userName:'彭于晏',
		userImage:"https://profile.csdnimg.cn/1/D/D/3_dkr380205984",
		likeInfo:{
			like:123,
			status:1
		},
		key:Date.now()+Math.random()*999,
		image:"https://g-search1.alicdn.com/img/bao/uploaded/i4/i4/3325705083/O1CN01cPTMqf1nQ3oqHajXS_!!3325705083-0-lubanu-s.jpg_360x360Q90.jpg",
		tags:[
			'火锅',
			'好吃的火锅',
			'推荐'
		]
	},
]
export {
	list,
	showItemList,
	classifyList,
	groups,
	waterfallList
}

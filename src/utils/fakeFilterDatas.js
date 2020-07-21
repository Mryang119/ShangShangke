import {
	classifyList
} from './fakeData.js'

const filterForm = {
	className: classifyList, // 存储分类
	nearbys: [{
			title: '附近',
			children: [
				'1km',
				'3km',
				'5km',
				'10km',
				'附近'
			]
		}, {
			title: '南山',
			children: [
				'1km',
				'4km',
				'6km',
				'10km'
			]
		}, {
			title: '罗湖区',
			children: [
				'1km',
				'3km',
				'7km',
				'10km'
			]
		}, {
			title: '福田区',
			children: [
				'1km',
				'3km',
				'8km',
				'10km'
			]
		}, {
			title: '龙华区',
			children: [
				'1km',
				'3km',
				'5km',
				'10km'
			]
		}, {
			title: '宝安区',
			children: [
				'1km',
				'3km',
				'6km',
				'10km'
			]
		}, {
			title: '龙岗区',
			children: [
				'1km',
				'2km',
				'5km',
				'10km'
			]
		},


	], // 存储地址
	smartSort: ['智能排序', '评分最高', '离我最近', '销量从高到低'], // 存储智能排序
	filters: [{
		title: '营业',
		children: [
			'今日营业',
			'工作日',
			'周末'
		]
	}, {
		title: '优惠',
		children: [
			'有券',
			'满减',
			'满赠'
		]
	}, {
		title: '服务',
		children: [
			'买单',
			'预定',
			'WiFi',
			'宝宝椅',
			'可停车',
			'无烟区'
		]
	}] // 存储筛选
}


export {
	filterForm
}

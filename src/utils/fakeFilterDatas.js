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
				'3km',
				'5km',
				'10km'
			]
		}, {
			title: '罗湖区',
			children: [
				'1km',
				'3km',
				'5km',
				'10km'
			]
		},


	], // 存储地址
	smartSort: ['智能排序', '评分最高', '离我最近', '销量从高到低'], // 存储智能排序
	filters: [] // 存储筛选
}


export {
	filterForm
}

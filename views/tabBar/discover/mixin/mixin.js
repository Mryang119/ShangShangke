import {
	waterfallList
} from '@/src/utils/fakeData.js'
const mixin = {
	data() {
		return {
			datas:waterfallList,
			list1: [],
			list2: []
		}
	},
	created() {
		this.oddList()
	},
	methods: {
		oddList() {
			this.datas.map((item, index) => {
				if (index % 2 != 0) {
					this.list1.push(item)
				} else {
					this.list2.push(item)
				}
			})
		}
	}
}
export default mixin

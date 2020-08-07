const mixin = {
	data() {
		return {
			top: 0,
			isFixed: false
		}
	},
	onPageScroll(e) {
		console.log(e)
		if (this.top !== null) {
			if (e.scrollTop >= this.top) {
				this.isFixed = true
				console.log('触顶')
			} else {
				this.isFixed = false
			}
		}
	},
	mounted() {
		const query = uni.createSelectorQuery().in(this);
		const that = this
		query.select('#sticky').boundingClientRect(data => {
			that.top = data.top
			console.log(that.top)
		}).exec();
	}
}
export default mixin

<template>
	<!-- 附近筛选 -->
	<view class="c_nearby">
		<scroll-view scroll-y="true" class="tab-container">
			<view class="tab-item" :class="{'active-tab-item':index===currentIndex}" v-for="(item,index) in nearbys" :key="item"
			 @click="toggleIndex(item.title,index)">
				{{item.title}}
			</view>
		</scroll-view>
		<scroll-view scroll-y="true" class="distance-container">
			<view class="distance-item" :class="{'active-distance-item':currentAreaIndex==item}" @click="saveArea(item,index)"
			 v-for="(item,index) in children" :key="index">
				{{item}}
			</view>
		</scroll-view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				nearbys: this.$store.state.filterForm['nearbys'],
				children: [],
				currentIndex: 0,
				currentArea: '',
				currentAreaIndex: this.$store.state.selectFilterForm.nearbys
			}
		},
		created() {
			this.currentArea = this.$store.state.filterForm['nearbys'][this.currentIndex].title // 获取当前区域名称
			this.children = this.$store.state.filterForm.nearbys[this.currentIndex].children
		},
		methods: {
			toggleIndex(e, i) {
				this.currentIndex = i
				this.currentArea = e
				this.children = this.$store.state.filterForm.nearbys[this.currentIndex].children
			},
			saveArea(a) {
				console.log(a)
				// let value = `${this.currentArea}${a}`
				if (this.$store.state.selectFilterForm.nearbys.includes(a)) {
					this.$store.commit('saveSelectDatas', {
						type: "nearbys",
						value: '附近'
					})
					this.currentAreaIndex = '附近'
				} else {
					let value = `${a}`
					this.$store.commit('saveSelectDatas', {
						type: "nearbys",
						value: value
					})
					this.currentAreaIndex = a
				}
				console.log(this.$store.state.selectFilterForm.nearbys)
			}
		}
	}
</script>

<style lang="less" scoped>
	.c_nearby {
		width: 750rpx;
		background-color: #FFFFFF;
		height: 668rpx;
		display: flex;

		.tab-container {
			width: 202rpx;
			height: 668rpx;
			background-color: #F5F5F5;

			.tab-item {
				width: 202rpx;
				height: 82rpx;
				background-color: #F5F5F5;
				text-align: center;
				line-height: 82rpx;
				font-size: 28rpx;
			}

			.active-tab-item {
				background-color: #FFFFFF;
				color: #24A7FF;
			}
		}

		.distance-container {
			width: 548rpx;
			height: 668rpx;
			background-color: #FFFFFF;
			padding-top: 26rpx;
			padding-left: 50rpx;
			font-size: 28rpx;
			box-sizing: border-box;

			.distance-item {
				color: #333333;
				margin-bottom: 50rpx;
			}

			.active-distance-item {
				color: #24A7FF;
			}
		}
	}
</style>

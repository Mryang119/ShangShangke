<template>
	<view class="c_cityList">
		<u-index-list :scrollTop="scrollTop">
			<view v-for="(item, index) in indexList" :key="item">
				<u-index-anchor :index="item.key" />
				<view class="list-cell" v-for="(item1,index1) in item.children" :key="item">
					{{item1.name}}
				</view>
			</view>
		</u-index-list>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				scrollTop: 0,
				indexList: []
			}
		},
		methods: {
			onPageScroll(e) {
				this.scrollTop = e.scrollTop;
			}
		},
		created() {
			const cityList = this.$store.state.cityList
			cityList.forEach((item, index) => {
				Object.keys(item).forEach((k) => {
					this.indexList.push({
						key: k,
						children: cityList[index][k]
					})
				})
			})
			console.log(this.indexList)
		}
	}
</script>

<style lang="less">
	.c_cityList {


		width: 750rpx;

		.list-cell {
			display: flex;
			box-sizing: border-box;
			width: 100%;
			padding: 10px 24rpx;
			overflow: hidden;
			color: #323233;
			font-size: 14px;
			line-height: 24px;
			background-color: #fff;
			border-bottom: 1px solid #F3F3F3;
		}
	}
</style>

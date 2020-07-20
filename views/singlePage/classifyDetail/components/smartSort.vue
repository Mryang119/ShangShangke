<template>
	<view class="c_smartSort">
		<view class="smartSort-cotainer">
			<view class="smartSort-item" @click="saveSmartSort(item)" :class="{'active-smartSort-item':currentSort===item}"
			 v-for="(item,index) in smartSort" :key="item">
				{{item}}
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				smartSort: this.$store.state.filterForm.smartSort,
				currentSort: this.$store.state.selectFilterForm.smartSort
			}
		},
		methods: {
			saveSmartSort(item) {
				this.currentSort = item
				this.$store.commit('saveSelectDatas', {
					type: 'smartSort',
					value: item
				})
			}
		}
	}
</script>

<style lang="less" scoped>
	.c_smartSort {
		width: 750rpx;

		.smartSort-cotainer {
			width: 750rpx;
			padding-left: 30rpx;
			padding-bottom: 40rpx;

			.smartSort-item {
				color: #333333;
				font-size: 28rpx;
				margin-top: 50rpx;
			}

			.active-smartSort-item {
				color: #24A7FF;
			}
		}
	}
</style>

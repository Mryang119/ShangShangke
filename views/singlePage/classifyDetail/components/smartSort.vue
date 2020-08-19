<template>
	<view class="c_smartSort">
		<view class="smartSort-cotainer">
			<view class="smartSort-item" @click="saveSmartSort(item)" :class="{'active-smartSort-item':currentSort===item}"
			 v-for="(item,index) in smartSort" :key="item">
				<text>{{item}}</text>
			</view>
		</view>
	</view>
</template>

<script>
	import {
		mapState
	} from 'vuex'
	export default {
		data() {
			return {
			}
		},
		methods: {
			saveSmartSort(item) {
				this.$store.commit('saveSelectDatas', {
					type: 'smartSort',
					value: item
				})
			}
		},
		computed: {
			...mapState({
				smartSort: state => state.filter.filterForm.smartSort,
				currentSort: state => state.filter.selectFilterForm.smartSort
			})
		}
	}
</script>

<style lang="less" scoped>
	.c_smartSort {
		width: 750rpx;
		box-sizing: border-box;

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

<template>
	<view class="c_filters">
		<view class="filters-contianer">
			<view class="filters-item" v-for="(item,index) in fliters" :key="index">
				<view class="item-title">{{item.title}}</view>
				<view class="item-status-flexContainer">
					<view class="flex-item" :class="{'active-flex-item':$store.state.selectFilterForm.filters.includes(item1)}" @click="saveFilters(item1)"
					 v-for="(item1,index1) in item.children" :key="index1">
						{{item1}}
					</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				fliters: this.$store.state.filterForm.filters
			}
		},
		methods: {
			saveFilters(v) {
				this.$store.commit('saveSelectDatas', {
					type: 'filters',
					value: v
				})

			}
		}
	}
</script>

<style lang="less" scoped>
	.c_filters {
		width: 750rpx;

		.filters-contianer {
			width: 750rpx;
			box-sizing: border-box;

			.filters-item {
				width: 750rpx;
				box-sizing: border-box;
				padding: 30rpx 0 6rpx 30rpx;

				.item-title {
					font-size: 28rpx;
					color: #333333;
					font-weight: bold;
					margin-bottom: 30rpx;
				}

				.item-status-flexContainer {
					box-sizing: border-box;
					display: flex;
					flex-wrap: wrap;

					.flex-item {
						width: 156rpx;
						height: 60rpx;
						background-color: #F5F5F5;
						color: #858585;
						text-align: center;
						line-height: 60rpx;
						margin-right: 22rpx;
						margin-bottom: 22rpx;
						border-radius: 6rpx;
					}

					.active-flex-item {
						background-color: #24A7FF;
						color: #FFFFFF;
					}
				}

			}
		}
	}
</style>

<template>
	<!-- 自由宫格 -->
	<view class="store-freedom-grid-root">
		<!-- <view class="input-content">
			<input placeholder="输入行" v-model="row" type="number">
			<input placeholder="输入列" v-model="column" type="number">
			<input placeholder="输入元素数量" type="number" v-model="els">
		</view> -->
		<view class="store-freedom-grid-padding-box">
			<view class="store-freedom-grid-content" :style="{
				'grid-template-columns': `repeat(${column},${scaleGridItemWidth}rpx)`,
				'grid-template-rows': `repeat(${row})`
			}">
				<view class="grid-item-container" v-for="(item,index) in elList" :key="index">
					<view class="grid-item">
						<view class="grid-item-icon"></view>
						<view class="title">item{{index+1}}</view>
					</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		// props: {
		// 	row: {
		// 		type: Number,
		// 		default: 2
		// 	},
		// 	column: {
		// 		type: Number,
		// 		default: 4
		// 	},
		// 	els: {
		// 		type: Array,
		// 		default: () => (
		// 			[
		// 				'item1',
		// 				'item2',
		// 				'item3',
		// 				'item4',
		// 				'item5',
		// 				'item6',
		// 				'item7',
		// 				'item8',
		// 			]
		// 		)
		// 	}
		// },
		data() {
			return {
				row: 2,
				column: 4,
				els: 8,
				elList: []
			}
		},
		computed: {
			scaleGridItemWidth: function() {
				// 690是grid盒子的宽度
				return 690 / this.column // 每个元素宽度自适应
			}
		},
		watch: {
			els: {
				immediate: true,
				handler: function(newValue) {
					let newList = []
					for (let i = 0; i < newValue; i++) {
						newList.push(i)
					}
					this.elList = newList
				}
			}
		}

	}
</script>

<style lang="less" scoped>
	.store-freedom-grid-root {
		.store-freedom-grid-padding-box {
			padding: 30rpx 30rpx 0 30rpx;
			box-sizing: border-box;
			width: 750rpx;
		}

		.input-content {
			display: flex;
			justify-content: space-between;
		}

		.store-freedom-grid-content {
			width: 100%;
			display: grid;

		}

		.grid-item-container {
			display: flex;
			align-items: center;
			justify-content: center;

			.grid-item {
				text-align: center;
				margin-bottom: 30rpx;
				.grid-item-icon {
					width: 92rpx;
					height: 92rpx;
					border-radius: 50%;
					background-color: red;
					margin-bottom: 18rpx;
					font-size: 24rpx;
					color: #000000;
				}
			}
		}
	}
</style>

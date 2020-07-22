<template>
	<view class="c_timeKillRobItem">
		<view class="left-container">
			<image class="image" :src="imageUrl"></image>
		</view>
		<view class="right-container">
			<view class="title-content">{{title}}</view>
			<view class="site-content">
				<view>
					<u-icon name="map"></u-icon>
					<text>{{site}}</text>
				</view>
				<text>{{distanceText}}</text>
			</view>
			<!-- 图形 -->
			<view class="graphics-content">
				<view class="graphics" :class="{'graphics-not':messageText==='已抢完'}">
					<view class="progress" :style="{width:percentage+'%'}"></view>
				</view>
				<view class="messageText">{{messageText}}</view>
			</view>
			<!-- 价格抢按钮 -->
			<view class="price-content">
				<view>
					<text class="price">{{'￥'+price.toFixed(2)}}</text>
					<text class="oldPrice">{{'￥'+oldPrice.toFixed(2)}}</text>
				</view>
				<view class="button" v-if="messageText!=='已抢完'">
					<text>马上抢</text>
					<u-icon name="arrow-right"></u-icon>
				</view>
				<view class="button not" v-else>
					<text>已抢完</text>
				</view>
			</view>
		</view>
	</view>
</template>
<script>
	export default {
		props: {
			imageUrl: {
				type: String,
				default: 'https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=3539786012,1681746582&fm=15&gp=0.jpg'
			},
			// 商品名称
			title: {
				type: String,
				default: '抹茶柚子千层'
			},
			// 地点
			site: {
				type: String,
				default: '幸福糕点(海岸店)'
			},
			// 距离
			distance: {
				type: Number,
				default: 400
			},
			// 库存
			inventory: {
				type: Number,
				default: 500
			},
			// 促销价格
			price: {
				type: Number,
				default: 1.00
			},
			// 历史价格
			oldPrice: {
				type: Number,
				default: 11.00
			},
			// 现库存
			nowInventory: {
				type: Number,
				default: 500
			}
		},
		computed: {
			// 计算百分比
			percentage: function() {
				let value = this.nowInventory / this.inventory * 100
				return value.toFixed(0)
			},
			// 计算距离
			distanceText: function() {
				let value = this.distance > 500 ? '>500m' : '<500m'
				return value
			},
			// 抢了多少或者抢完了文字描述
			messageText: function() {
				if (this.nowInventory < this.inventory) {
					let value = this.nowInventory / this.inventory * 100
					return `已抢%${value}`
				} else {
					return '已抢完'
				}
			},

		}
	}
</script>
<style lang="less" scoped>
	.c_timeKillRobItem {
		width: 710rpx;
		height: 248rpx;
		display: flex;
		box-sizing: border-box;
		padding: 20rpx;
		.left-container {
			width: 232rpx;
			height: 208rpx;
			border-radius:12rpx;
			overflow: hidden;
			.image {
				width: 100%;
				height: 100%;
			}
		}

		.right-container {
			display: flex;
			flex: 1;
			flex-direction: column;
			justify-content: space-between;
			box-sizing: border-box;
			padding-left: 20rpx;
			.title-content {
				font-size: 28rpx;
				font-weight: bold;
			}

			.site-content {
				display: flex;
				justify-content: space-between;
				color: #707070;
				font-size: 24rpx;
			}

			.graphics-content {
				display: flex;
				justify-content: space-between;
				align-items: center;
				.graphics {
					width: 284rpx;
					height: 12rpx;
					box-sizing: border-box;
					border: 2rpx solid #FA2800;
					background-color: #fff;
					box-sizing: border-box;
					overflow: hidden;
					border-radius: 6rpx;

					.progress {
						background-color: #FA2800;
						height: 12rpx;
						border-radius: 6rpx;
					}
				}
				.messageText {
					font-size: 22rpx;
					color: #858585;
				}

				.graphics-not {
					background-color: #FFB4A5;
					border: none;
					.progress {
						background-color: #FFB4A5;
					}
				}
			}

			.price-content {
				display: flex;
				justify-content: space-between;

				.price {
					font-size: 36rpx;
					color: #F10000;
					font-weight: bold;
				}

				.oldPrice {
					font-size: 22rpx;
					color: #A9A9A9;
					text-decoration:line-through;
				}

				.button {
					width: 146rpx;
					height: 48rpx;
					border-radius: 48rpx;
					display: flex;
					justify-content: center;
					align-items: center;
					color: #FFFFFF;
					font-size: 24rpx;
					background-color: #FA2800;
					box-sizing: border-box;
					padding-left: 6rpx;
				}
				.not {
					background-color: #FFA999;
				}
			}
		}
	}
</style>

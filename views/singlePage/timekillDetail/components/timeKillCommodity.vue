<template>
	<!-- 秒杀商品展示组件 -->
	<view class="c_timeKillCommodity">
		<view class="img-content">
			<image class="image" :src="imageUrl" mode=""></image>
		</view>
		<view class="text-container">
			<!-- 商品标题 -->
			<view class="commodity-title">
				<text>{{title}}</text>
			</view>
			<!-- 商品地点 -->
			<view class="site-content">
				<text class="site">{{site}}</text>
				<text class="distance">{{distance > 500? '>500m':'<500m'}}</text>
			</view>
			<!-- 商品数量情况 -->
			<view class="graphics-content">
				<view class="graphics">
					<view class="progress" :class="{'not':inventory===nowInventory}" :style="{width:percentage+'%'}"></view>
				</view>
				<view class="message"><text>{{messageText}}</text></view>

			</view>
			<!-- 价格展示部分 -->
			<view class="price-content">
				<view class="price-box">
					<text class="price">
						{{'￥'+price.toFixed(2)}}
					</text>
					<text class="oldPrice">
						{{'￥'+oldPrice.toFixed(2)}}
					</text>
				</view>
				<!-- 马上抢 -->
				<view class="button usable" v-if="inventory>nowInventory">
					<text>马上抢</text><u-icon name="arrow-right"></u-icon>
				</view>
				<!-- 已抢完 -->
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
				default: 400
			}
		},
		computed: {
			percentage: function() {
				let number = this.nowInventory / this.inventory * 100
				return number.toFixed(0)
			},
			// 计算文字描述问题
			messageText: function() {
				let text = this.nowInventory < this.inventory ? this.inventory + '份限量抢' : this.inventory + '份已抢完'
				return text
			}
		}
	}
</script>

<style lang="less" scoped>
	.c_timeKillCommodity {
		width: 346rpx;
		height: 430rpx;
		border: 2rpx solid rgba(238, 238, 238, 1);
		opacity: 1;
		border-radius: 12rpx;
		box-sizing: border-box;
		overflow: hidden;

		.img-content {
			width: 346rpx;
			height: 222rpx;

			.image {
				width: 100%;
				height: 100%;
				border-radius: 12rpx 12rpx 0 0;
			}
		}

		.text-container {
			display: flex;
			flex-direction: column;
			// align-items: space-between;
			justify-content: space-between;
			padding: 16rpx 20rpx 20rpx 20rpx;
			height: 208rpx;
			.commodity-title {
				font-size: 28rpx;
				color: #333333;
				font-weight: bold;
			}

			.site-content {
				display: flex;
				justify-content: space-between;

				.site {
					font-size: 24rpx;
					color: #333333;
				}

				.distance {
					font-size: 22rpx;
					color: #666666;
				}
			}

			.graphics-content {

				display: flex;
				justify-content: space-between;
				align-items: center;
				.graphics {
					width: 170rpx;
					background-color: #DADADA;
					height: 10rpx;
					border-radius: 6rpx;

					.progress {
						height: 10rpx;
						background-color: #FF2F2F;
						border-radius: 6rpx;
					}

					.not {
						background-color: #FEC2C2;
					}
				}
				.message {
					font-size: 22rpx;
					color: #666666;
				}
			}

			.price-content {
				display: flex;
				justify-content: space-between;
				.price-box {
					.price {
						color: #F10000;
						font-size: 28rpx;
						font-weight: bold;
					}
					.oldPrice {
						color: #A9A9A9;
						font-size: 22rpx;
						text-decoration:line-through;
					}
				}
				.button {
					width: 126rpx;
					height: 44rpx;
					background: rgba(241, 0, 0, 1);
					opacity: 1;
					border-radius: 22rpx;
					display: flex;
					padding-left: 12rpx;
					align-items: center;
					color: #FFFFFF;
				}
				.not {
					background-color: #FEC2C2;
					
				}
			}
		}
	}
</style>

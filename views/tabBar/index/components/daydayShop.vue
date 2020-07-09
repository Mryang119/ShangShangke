<template>
	<view class="c_daydayShopItem">
		<view class="img-content">
			<image src="@/static/images/iconfont/shopitem.png" mode=""></image>
		</view>
		<view class="text-content">
			<view class="item-title">
				{{title}}
			</view>
			<view class="item-site">
				<image src="@/static/images/iconfont/position.png"></image>
				<text>{{site}}</text>
				<view v-if="distance<500" class="distance">
					{{"<"}}500m
				</view>
				<view class="distance" v-else-if="distance>500">
					{{">"}}500m
				</view>
			</view>
			<view class="item-price">
				<text class="price">￥{{price.toFixed(2)}}</text>
				<view class="buttonRob">
					<text class="buttonRob-text">马上抢</text>
					<text class="iconfont myionfont icon-youjiantou"></text>
				</view>
			</view>
			<view class="item-sum">
				<view class="oldPrice">
					<text class="oldPriceText">
						{{oldPrice.toFixed(2)}}
					</text>
				</view>
				<!-- 计算百分比 -->
				<view class="percentage-content">
					已抢{{now/sum*100}}%
				</view>
				<!-- 计算绘画图表 -->
				<view class="percentage-graph">
					<view class="percentage-color" :style="{width:now/sum*100+'%'}"></view>
				</view>
			</view>
		</view>
	</view>
</template>
<script>
	export default {
		props: {
			title: {
				type: String,
				default: '抹茶柚子千层'
			},
			site: {
				type: String,
				default: '幸福糕点(海岸店)'
			},
			distance: {
				type: Number,
				default: 400
			},
			price: {
				type: Number,
				default: 1.00
			},
			oldPrice: {
				type: Number,
				default: 11.00
			},
			sum: {
				type: Number,
				default: 100
			},
			now: {
				type: Number,
				default: 50
			}
		}
	}
</script>
<style lang="less">
	.c_daydayShopItem {
		width: 670rpx;
		height: 234rpx;
		background: rgba(255, 255, 255, 1);
		opacity: 1;
		border-radius: 12rpx;
		margin-top: 20rpx;
		overflow: hidden;
		display: flex;

		.img-content {
			width: 252rpx;
			height: 234rpx;
			background-size: cover;

			image {
				width: 100%;
				height: 100%;
			}
		}

		.text-content {
			width: 418rpx;
			padding: 24rpx 20rpx 18rpx 24rpx;
			box-sizing: border-box;

			.item-title {
				height: 32rpx;
				font-size: 28rpx;
				color: #333333;
				font-weight: bold;
				line-height: 32rpx;
				color: rgba(51, 51, 51, 1);
				margin-bottom: 20rpx;
			}

			.item-site {
				display: flex;
				font-size: 24rpx;
				height: 25.52rpx;
				font-family: PingFang SC;
				align-items: center;
				font-weight: 400;
				line-height: 28rpx;
				color: rgba(112, 112, 112, 1);
				opacity: 1;
				margin-bottom: 30rpx;

				.distance {
					flex: 1;
					text-align: right;
					font-size: 22rpx;
				}

				image {
					margin-right: 8rpx;
					width: 22rpx;
					height: 25.52rpx;
				}
			}

			.item-price {
				height: 48rpx;
				display: flex;

				.price {
					box-sizing: border-box;
					height: 42rpx;
					line-height: 42rpx;
					font-size: 36rpx;
					color: #F10000;
					font-weight: bold;
					flex: 1;
					text-align: left;
				}

				.buttonRob {
					width: 146rpx;
					height: 48rpx;
					background: linear-gradient(90deg, rgba(254, 99, 60, 1) 0%, rgba(250, 40, 0, 1) 100%);
					opacity: 1;
					border-radius: 24rpx;
					display: flex;
					align-items: center;
					justify-content: center;

					text {
						font-size: 24rpx;
						color: #FFFFFF;
						font-weight: 400;
						line-height: 48rpx;
					}
					.buttonRob-text {
						margin-left: 8rpx;
					}
					.myionfont {
						margin-left: 8rpx;
						font-size: 20rpx;
						color: #FFFFFF;
						font-weight: 400;
					}
				}

			}
			.item-sum {
				display: flex;
				align-items: center;
				// justify-content: center;
				.oldPrice {
					margin-right: 102rpx;
					.oldPriceText {
						text-decoration:line-through;
						color: #A9A9A9;
					}
				}
				.percentage-content {
					// box-sizing: border-box;
					height: 26rpx;
					width: 84rpx;
					font-size: 20rpx;
					color: #858585;
				}
				.percentage-graph {
					width: 98rpx;
					height: 8rpx;
					border-radius:6rpx;
					box-sizing: border-box;
					overflow: hidden;
					border: 1px solid #FB2B03;
					margin-left: 12rpx;
					.percentage-color {
						height: 8rpx;
						background-color: #FB2B03;
					}
				}
			}
		}
	}
</style>

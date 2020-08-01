<template>
	<!-- name:杨大锐 -->
	<!-- 天天免费抢商品组件 -->
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
				<!-- 未抢完 -->
				<view class="button Rob" v-if="now!==sum">
					<text class="buttonRob-text">马上抢</text>
					<text class="iconfont myionfont icon-youjiantou"></text>
				</view>
				<!-- 抢完了 -->
				<view class="button No" v-else-if="now>=sum">
					<text class="buttonNo-text">已抢完</text>
				</view>
			</view>
			<view class="item-sum">
				<view class="oldPrice">
					<text class="oldPriceText">
						{{oldPrice.toFixed(2)}}
					</text>
				</view>
				<!-- 计算百分比 -->
				<!-- 未抢完-文字 -->
				<view class="percentage-content" v-if="now!==sum">
					已抢{{percentage}}%
				</view>
				<view class="percentage-content-No" v-if="now>=sum">
					已抢完
				</view>
				<!-- 计算绘画图表 -->
				<!-- 未抢完-图表 -->
				<view class="percentage-graph graphRob" v-if="now!==sum">
					<view class="percentage-color" :style="{width:now/sum*100+'%'}"></view>
				</view>
				<!-- 已抢完 -->
				<view class="percentage-graph graphNo " v-if="now>=sum">
					<view class="percentage-color-No" :style="{width:now/sum*100+'%'}"></view>
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
				default: 50
			},
			now: {
				type: Number,
				default: 40
			}
		},
		computed:{
			percentage:function (){
				let number = this.now/this.sum*100
				return number.toFixed(0)
			}
		}
	}
</script>
<style lang="less" scoped>
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
				
				.button {
					width: 146rpx;
					height: 48rpx;
					opacity: 1;
					border-radius: 24rpx;
					display: flex;
					align-items: center;
					justify-content: center;
					
				}
				.Rob {
					background: linear-gradient(90deg, rgba(254, 99, 60, 1) 0%, rgba(250, 40, 0, 1) 100%);
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
				
				.No {
					background: linear-gradient(90deg, rgba(255, 192, 177, 1) 0%, rgba(255, 169, 153, 1) 100%);
					.buttonNo-text {
						font-size:24rpx;
						color:rgba(255,255,255,1);
						font-weight: 400;
						line-height: 48rpx;
					}
				}

			}

			.item-sum {
				display: flex;
				align-items: center;
				position: relative;

				.oldPrice {
					.oldPriceText {
						text-decoration: line-through;
						color: #A9A9A9;
					}
				}

				.percentage-content {
					// box-sizing: border-box;
					height: 29rpx;
					width: 84rpx;
					font-size: 20rpx;
					color: #858585;
					margin-left:110rpx;
				}
				.percentage-content-No {
					// box-sizing: border-box;
					height: 29rpx;
					width: 84rpx;
					font-size: 20rpx;
					color: #858585;
					margin-left:130rpx;
				}
				.percentage-graph {
					position: absolute;
					right: 0;
					width: 98rpx;
					height: 8rpx;
					border-radius: 6rpx;
					box-sizing: border-box;
					overflow: hidden;
				}
				.graphRob {
					border: 1px solid #FB2B03;
					.percentage-color {
						height: 8rpx;
						background-color: #FB2B03;
					}
				}
				.graphNo {
					.percentage-color-No {
						height: 8rpx;
						background:rgba(250,182,169,1);
					}
				}
			}
		}
	}
</style>

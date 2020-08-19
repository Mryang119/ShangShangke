<template>
	<!-- name:杨大锐 -->
	<!-- 拼团页面商品展示组件 -->
	<view class="c_groupShowItem">
		<view class="left-content">
			<view class="image-container">
				<view class="tag" v-if="tag!==''"><text>{{tag}}</text></view>
				<image class="image" src="../../static/images/Product/shangpingtu.png" mode=""></image>
			</view>
		</view>
		<view class="right-content">
			<view class="product-title">
				<text class="text">{{productTitle}}</text>
				<text class="distance" v-if="type===1">
					{{computeDistance}}
				</text>
			</view>
			<view class="product-message">
				<text>{{productMessage}}</text>
			</view>
			<view class="price-button">
				<view class="text-price">
					<text class="price">{{price}}</text>
					<text class="old-price">
						{{oldPrice}}
					</text>
				</view>
				<view class="button">
					<view class="text"><text>2人团</text></view>
					<view class="text"><text>去开团</text></view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		props: {
			type: {
				type: Number || String,
				default: 1 // 1：为到店使用，2：邮寄商品，区别在于是否显示地址和tag
			},
			productTitle: {
				type: String,
				default: '韩国年糕料理(海岸城店)'
			},
			productMessage: {
				type: String,
				default: '两人芝士双拼套餐'
			},
			price: {
				type: [String, Number],
				default: '￥1.00'
			},
			oldPrice: {
				type: String,
				default: '￥11.00'
			},
			distance: {
				type: [Number, String],
				default: 400
			},
			tag: {
				type: String,
				default: '直降5元'
			}
		},
		computed: {

			computeDistance: function() {
				if (this.distance > 500) {
					return '>500m'
				} else {
					return '<500m'
				}
			}
		}
	}
</script>

<style lang="less" scoped>
	.c_groupShowItem {
		width: 710rpx;
		height: 248rpx;
		overflow: hidden;
		padding: 20rpx;
		background-color: #FFFFFF;
		// background-color: #CCC;
		box-sizing: border-box;
		display: flex;
		border-radius: 12rpx;

		.left-content {
			width: 232rpx;
			height: 208rpx;

			.image-container {
				width: 232rpx;
				height: 208rpx;
				position: relative;
				border-radius: 12rpx;
				overflow: hidden;

				.tag {
					width: 84rpx;
					height: 38rpx;
					background-color: #FF2F2F;
					border-radius: 12rpx 8rpx 8rpx 0px;
					font-size: 18rpx;
					display: flex;
					align-items: center;
					justify-content: center;
					position: absolute;
					left: 0;
					top: 0;
					z-index: 99;
					color: #FFFFFF;
				}

				.image {
					width: 100%;
					height: 100%;
					border-radius: 12rpx;
				}
			}
		}

		.right-content {
			flex: 1;
			display: flex;
			flex-direction: column;
			justify-content: space-between;
			padding-left: 20rpx;
			padding-top: 8rpx;

			.product-title {
				display: flex;
				justify-content: space-between;
				align-items: flex-end;

				.text {
					font-size: 28rpx;
					color: #333333;
					font-weight: bold;
				}

				.distance {
					font-size: 22rpx;
					color: #707070;
				}
			}

			.product-message {
				color: #707070;
				font-size: 24rpx;
			}

			.price-button {
				display: flex;
				justify-content: space-between;
				align-items: flex-end;

				.text-price {
					.price {
						color: #F10000;
						font-size: 36rpx;
						font-weight: bold;
					}

					.old-price {
						color: #A9A9A9;
						font-size: 24rpx;
						text-decoration: line-through;
					}
				}

				.button {
					width: 146rpx;
					height: 78rpx;
					background-image: linear-gradient(to right, #FE633C, #FA2800);
					color: #FFFFFF;
					display: flex;
					flex-direction: column;
					align-items: center;
					justify-content: center;
					font-size: 24rpx;
					border-radius: 12rpx;

				}
			}
		}
	}
</style>

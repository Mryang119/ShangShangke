<template>
	<!-- name:杨大锐 -->
	<!-- 优惠券 -->
	<view class="c_discountCoupon">
		<view class="title-content">
			<view class="title-img">
				海底捞
			</view>
			<view class="store-title">
				{{store}}
			</view>
		</view>
		<view class="message-content" :class="{'qushiyongBg':status==1}">
			<!-- 左侧区域 -->
			<view class="left-container">
				<view class="top-tag">
					{{type}}
				</view>
				<view class="price">
					<text :style="{fontSize:30+'rpx'}">￥</text>
					<text>{{price}}</text>
				</view>
			</view>
			<view class="center-container">
				<view class="explain" :style="{fontWeight:'bold',fontSize:28+'rpx'}">{{explain}}</view>
				<view class="period">{{period}}</view>
			</view>
			<view class="right-container">
				<view class="button lijilingqu" v-if="status==0" @click="Now">立即领取</view>
				<view class="button qushiyong" v-else @click="Await">去使用</view>
			</view>
		</view>
	</view>
</template>

<script>
	// 这个组件向上返回组件自身选中状态
	export default {
		props: {
			imageUrl: {
				type: String
			},
			store: {
				type: String,
				default: '海底捞沃尔玛蓝山店'
			},
			type: {
				type: String,
				default: '全品类可用'
			},
			price: {
				type: Number,
				default: 100
			},
			explain: {
				type: String,
				default: '满1000元可用'
			},
			period: {
				type: String,
				default: '有效期至：2020-06-31'
			}
		},
		data() {
			return {
				status: 0
			}
		},
		methods: {
			Now() {
				this.status = 1
			},
			Await() {
				console.log('去使用')
			}
		}
	}
</script>

<style lang="less" scoped>
	.c_discountCoupon {
		width: 750rpx;
		background-color: #fff;
		overflow: hidden;

		.title-content {
			display: flex;
			align-items: center;

			.title-img {
				width: 54rpx;
				height: 54rpx;
				border-radius: 50%;
				background-color: red;
				text-align: center;
				line-height: 54rpx;
				margin-right: 20rpx;
				font-size: 16rpx;
				color: #FFF;
			}

			.store-title {
				font-size: 28rpx;
				font-weight: bold;
				color: #333333;
			}
		}

		.message-content {
			width: 690rpx;
			height: 146rpx;
			background-color: #FDF4E6;
			border-radius: 12rpx;
			display: flex;
			margin-top: 22rpx;
			.left-container {
					margin-right: 48rpx;
				.top-tag {
					width: 174rpx;
					height: 30rpx;
					background-color: #FFD89B;
					border-radius: 12rpx 0 12rpx 0;
					text-align: center;
					line-height: 30rpx;
					font-size: 20rpx;
					color: #9D4900;
				}

				.price {
					color: #FF2F2F;
					font-size: 52rpx;
					margin-left: 42rpx;
					margin-top: 12rpx;
					font-weight: bold;
				}
			}

			.center-container {
				color: #333333;
				font-size: 24rpx;
				margin-top: 34rpx;
				.explain {
					margin-bottom: 18rpx;
				}
			}

			.right-container {
				.button {
					width: 136rpx;
					height: 60rpx;
					opacity: 1;
					border-radius: 32rpx;
					box-sizing: border-box;
					display: flex;
					align-items: center;
					justify-content: center;
					font-size: 24rpx;
					margin-left: 52rpx;
					margin-top: 44rpx;
				}

				.lijilingqu {
					background: linear-gradient(90deg, rgba(254, 99, 60, 1) 0%, rgba(250, 40, 0, 1) 100%);
					color: #FFF;

				}

				.qushiyong {
					color: #FF2F2F;
					border: 2rpx solid #FF2F2F;

				}
			}
		}

		.qushiyongBg {
			background: url(@/static/images/Product/yilingquBg.png);
			background-size: cover;
		}
	}
</style>

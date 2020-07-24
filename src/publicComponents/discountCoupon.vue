<template>
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
		<view class="message-content">
			
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
			},
			status: {
				type: Number | String,
				default: 0
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
			display:flex;
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
			border-radius:12rpx;
		}
	}
</style>

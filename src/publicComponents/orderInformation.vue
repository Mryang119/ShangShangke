<!-- 订单信息 -->
<!-- name:陈铄源 -->
<template>
	<view class="orderNewContent">
		<view class="orderNewsText"><text>订单信息</text></view>
		<view class="orderNewsName">
			<span><text>订单数量</text></span>
			<span><text>{{orderNumber}}</text></span>
		</view>
		<view class="orderNewsName">
			<span><text>订单总价</text></span>
			<span><text>￥{{orderNumPrice}}</text></span>
		</view>
		<view class="orderNewsName">
			<span><text>订单编号</text></span>
			<view class="orderNewsSerial">
				<span><text>{{orderReference}}</text></span>
				<view class="orderNewsCopy" @click="cloneBtn(orderReference)"><text>复制</text></view>
			</view>
		</view>
		<view class="orderNewsName">
			<span><text>下单时间</text></span>
			<span><text>{{orderTime}}</text></span>
		</view>

	</view>
</template>

<script>
	export default {
		props: {
			orderNumber: { // 订单数量
				type: Number,
				default: 1
			},
			orderNumPrice: { //订单总价
				type: String,
				default: '79.00'
			},
			orderReference: { // 订单编号
				type: String,
				default: '34828342376473'
			},
			orderTime: { //下单时间
				type: String,
				default: '2020-09-09 12:30'
			}
		},
		data() {
			return {

			}
		},
		methods: {
			cloneBtn(orderReference) {
				uni.setClipboardData({
					data: orderReference,
					success: () => {
						uni.showToast({
							title: '复制成功',
							duration:800,
							icon:'none'
						})
					}
				})
			}
		}
	}
</script>

<style lang="less" scoped>
	// 订单信息
	.orderNewContent {
		width: 744rpx;
		height: 370rpx;
		background: #FFFFFF;
		padding: 0 30rpx;
		margin-top: 20rpx;

		.orderNewsText {
			width: 690rpx;
			height: 98rpx;
			font-size: 32rpx;
			font-family: PingFang SC;
			font-weight: bold;
			line-height: 38rpx;
			color: rgba(51, 51, 51, 1);
			display: flex;
			align-items: center;
		}

		.orderNewsName {
			width: 690rpx;
			height: 68rpx;
			font-size: 28rpx;
			font-family: PingFang SC;
			font-weight: 400;
			line-height: 32rpx;
			color: rgba(133, 133, 133, 1);
			display: flex;
			justify-content: space-between;
			align-items: center;

			.orderNewsSerial {
				width: 298rpx;
				height: 40rpx;
				display: flex;
				justify-content: space-between;
				align-items: center;

				.orderNewsCopy {
					font-size: 28rpx;
					font-family: PingFang SC;
					font-weight: bold;
					line-height: 34rpx;
					color: rgba(51, 51, 51, 1);
				}
			}
		}
	}
</style>

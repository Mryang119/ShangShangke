<template>
	<view class="pendingOrderContainer">
		<!-- 待使用 -->
		<view class="noUse">
			<view class="noUseText">待使用订单</view>
			<couponMessage />
			<view class="use">
				<view class="useCodeBtn"  @click="refundBtn">出示订单券码</view>
			</view>
		</view>
		<!-- 适用门店 -->
		<applyShop />
		<!-- 订单信息 -->
		<orderInformation />
		<!-- 申请退款 -->
		<view class="applyRefund">
			<view class="refundBtn">申请退款</view>
		</view>
		<!-- 出示二维码 -->
		<u-popup v-model="show" mode="center" width="576rpx" height="798rpx">
			<view class="codeText">
				<view class="textCon">
					<view class="couponText">{{cashCoupon}}元代金券</view>
					<view class="timeText">有效期至：2020-06-09</view>
				</view>
				<view class="useText">待使用</view>
			</view>
			<view class="code">
				<image src="../../../static/images/iconfont/erweima.png"></image>
				<view class="textUse">（请到店出示二维码使用）</view>
			</view>
			<view class="codeNumber">74838273</view>
			<!-- <view class="cancleCon"><view class="cancleIcon"><image src="../../../static/images/iconfont/guanbiBtn.png"></image></view></view> -->
		</u-popup>
	</view>
</template>

<script>
	import couponMessage from '../../../src/publicComponents/couponMessage.vue' // 代金券信息
	import applyShop from '../../../src/publicComponents/applyShop.vue' //适用门店
	import orderInformation from '../../../src/publicComponents/orderInformation.vue' //订单信息
	export default {
		data() {
			return {
				show:false,
				cashCoupon:'100'
			}
		},
		components: {
			couponMessage,
			applyShop,
			orderInformation
		},
		methods:{
			refundBtn(){
				this.show = true
			}
		}
	}
</script>

<style lang="less">
	.pendingOrderContainer {
		height: 1640rpx;
		background: rgba(246, 246, 246, 1);
		padding-top: 20rpx;

		// 待付款订单
		.noUse {
			width: 750rpx;
			height: 382rpx;
			padding: 0 30rpx;
			background: #FFFFFF;

			.noUseText {
				width: 690rpx;
				height: 98rpx;
				margin: auto 0;
				display: flex;
				align-items: center;
				font-size: 32rpx;
				font-family: PingFang SC;
				font-weight: bold;
				line-height: 38rpx;
				color: rgba(51, 51, 51, 1);
				border-bottom: 2rpx solid rgba(243, 243, 243, 1);
			}

			.use {
				display: flex;
				justify-content: flex-end;

				.useCodeBtn {
					width: 370rpx;
					height: 68rpx;
					border: 1px solid rgba(36, 167, 255, 1);
					border-radius: 12rpx;
					font-size: 14px;
					font-family: PingFang SC;
					font-weight: 400;
					line-height: 68rpx;
					color: rgba(36, 167, 255, 1);
					text-align: center;
				}
			}
		}

		// 申请退款
		.applyRefund {
			width: 750rpx;
			height: 160rpx;

			.refundBtn {
				width: 690rpx;
				height: 80rpx;
				margin: 40rpx auto;
				text-align: center;
				background: rgba(36, 167, 255, 1);
				border-radius: 12rpx;
				font-size: 28rpx;
				font-family: PingFang SC;
				font-weight: 400;
				line-height: 80rpx;
				color: rgba(255, 255, 255, 1);
			}
		}
		// 模态框
		.codeText{
			width: 576rpx;
			height: 146rpx;
			padding: 34rpx 30rpx;
			display: flex;
			justify-content: space-between;
			.textCon{
				display: flex;
				flex-direction: column;
				justify-content: space-between;
				.couponText{
					font-size:32rpx;
					font-family:PingFang SC;
					font-weight:bold;
					line-height:38rpx;
					color:rgba(51,51,51,1);
				}
				.timeText{
					font-size:24rpx;
					font-family:PingFang SC;
					font-weight:400;
					line-height:28rpx;
					color:rgba(51,51,51,1);
				}
			}
			.useText{
				font-size:28rpx;
				font-family:PingFang SC;
				font-weight:400;
				line-height:32rpx;
				color:rgba(51,51,51,1);
			}
		}
		.code{
			width: 576rpx;
			height: 386rpx;
			display: flex;
			flex-direction: column;
			justify-content: space-between;
			align-items: center;
			image{
				width: 304rpx;
				height: 318rpx;
			}
			.useText{
				font-size:24rpx;
				font-family:PingFang SC;
				font-weight:400;
				line-height:28rpx;
				color:rgba(51,51,51,1);
			}
		}
		.codeNumber{
			width: 576rpx;
			height: 58rpx;
			font-size:48rpx;
			font-family:PingFang SC;
			font-weight:bold;
			line-height:116rpx;
			color:rgba(51,51,51,1);
			letter-spacing:20rpx;
			text-align: center;
		}
		.cancleCon{
			width: 576rpx;
			height: 160rpx;
			text-align: center;
			line-height: 160rpx;
			background: rgba(0,0,0,0.1);
			margin-top: 50rpx;
			// .cancleIcon{
			// 	width: 58rpx;
			// 	height: 58rpx;
			// 	border-radius: 50%;
			// 	image{
			// 		width: 58rpx;
			// 		height: 58rpx;
			// 	}
			// }
		}
	}
</style>

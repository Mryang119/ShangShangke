<!-- 待使用订单 -->
<template>
	<view class="pendingOrderContainer">
		<!-- 待使用 -->
		<view class="noUse">
			<view class="noUseText">待使用订单</view>
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
			<navigator class="refundBtn" :url="applyRefund">申请退款</navigator>
		</view>	
		<!-- 出示二维码 -->
			<view class='mask' @touchmove.stop.prevent="moveHandle" v-if='isShow'  @click='closeGoodsDetail'>
				<view class='goods_detail' catchtap="zuzhi">
					111222333
				</view>
				<image class="img" src="../../static/image/3.png" mode="" @click="closeBtn"></image>
			</view>

	</view>
</template>

<script>
	export default {
		data() {
			return {
				show:false,
				isShow:false,
				cashCoupon:'100',
				applyRefund:'../../singlePage/applyRefund/applyRefund'
			}
		},
	
		methods:{
			// 显示遮罩
			refundBtn(){
				this.isShow = true
			},
			// 这是点外部黑色区域关闭
			closeGoodsDetail(){
				this.isShow = false
			},
			// 按钮的关闭
			closeBtn(){
				this.isShow = false
			},
			moveHandle(){
				console.log('阻止底部页面滑动')
			}
		}
	}
</script>

<style lang="less" scoped>
	
	.mask {
	  position: fixed;
	  z-index: 999999;
	  width: 100%;
	  height: 100vh;
	  top: 0;
	  left: 0;
	  background: rgba(0, 0, 0, 0.5);
	}
	
	.goods_detail {
	  position: absolute;
	  left: 0;
	  right: 0;
	  top: 0;
	  bottom: 0;
	  margin: auto;
	  width: 576rpx;
	  height: 638rpx;
	  background: rgba(255, 255, 255, 1);
	  border-radius: 40rpx;
	  z-index: 9999;
	}
	.img{
		width: 29rpx;
		height: 29rpx;
		position: absolute;
		bottom:15%;
		left:48%;
		z-index: 9999;
	}

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
		.orderModal{
			overflow: hidden;
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
			
				.cancleIcon{
					// width: 58rpx;
					// height: 58rpx;
					border-radius: 50%;
					image{
						position: absolute;
						left: 30%;
						button:30%;
						width: 58rpx;
						height: 58rpx;
						z-index: 10086;
					}
				}
			
		}
	}
</style>

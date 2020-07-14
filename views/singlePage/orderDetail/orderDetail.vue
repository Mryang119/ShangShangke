<!-- 订单详情-->
<template>
	<!-- 最外层 -->
	<view class="orderContainer">
		<!-- 待付款订单 -->
		<view class="noPay">
			<view class="noPayText">待付款订单</view>
			<view class="coupon">
				<!-- 商家店面图片 -->
				<image class="couponImg" src="@/static/images/tabBarImage/myLoginHeader.png"></image>
				<view class="noPayRight">
					<view class="noPayRightCon">
						<view class="noPayCoupon">100元代金券</view>
						<view class="noPayMoney">￥79.9</view>
					</view>
					<view class="noPayNumer">数量：1</view>

				</view>
			</view>
		</view>
		<!-- 适用门店 -->
		<view class="applyStore">
			<view class="applyStoreButton">
				<view class="applyStoreContent">
					<span class="applyStoreText">适用门店</span>
					<span class="applyStoreNumber">(10)</span>
				</view>
				<!-- 更多图标 -->
				<image class="applyStoreImg" src="@/static/images/iconfont/more.png"></image>
			</view>
			<!-- 地图 -->
			<image class="applyStoreMap" src="@/static/images/tabBarImage/orderDetailMap.png"></image>
			<!-- 位置 -->
			<view class="applyStoreCon">
				<view class="applyStorePlace">
					<view class="applyStoreName">韩国年糕料理（海岸城店）</view>
					<view class="applyStoreAddress">
						<view class="applyStoreDistance">距您500m</view>
						<span>|</span>
						<view class="applyStoreDoorplate">文新思路34号海岸城西座F2座806</view>
					</view>
				</view>
				<image class="applyStorePhone" src="@/static/images/iconfont/phone.png"></image>
			</view>
		</view>
		<!-- 订单信息-->
		<view class="orderNewContent">
			<view class="orderNewsText">订单信息</view>
			<view class="orderNewsName">
				<span>订单数量</span>
				<span>1</span>
			</view>
			<view class="orderNewsName">
				<span>订单总价</span>
				<span>￥79.00</span>
			</view>
			<view class="orderNewsName">
				<span>订单编号</span>
				<view class="orderNewsSerial">
					<span>34828342376473</span>
					<view class="orderNewsCopy">复制</view>
				</view>
			</view>
			<view class="orderNewsName">
				<span>下单时间</span>
				<span>2020-09-09 12:30</span>
			</view>
			
		</view>
		<!-- 取消订单按钮/去付款按钮 -->
		<view class="orderNewsButton">
			
			<button @click="open" @confirm="confirm" class="orderNewsCancel">
				取消订单
			</button>
			<button class="orderNewsPay">
				<span class="orderNewsPayMoney">￥79.00</span>
				<span class="orderNewsPayTo">待付款</span>
			</button>
		</view>
		<u-modal v-model="show" show-cancel-button="true" :content="content" :show-title="false" confirm-color="#007AFF" cancel-color="#007AFF"></u-modal>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				show: false,
				content: '是否取消订单',
			}
		},
		methods: {
			confirm(){
				
			},
			open() {
				this.show = true;
			}
		}
	}
</script>

<style lang="less">
	// 最外层
	.orderContainer {
		padding-top: 20rpx;
		background: #F6F6F6;

		// 待付款订单
		.noPay {
			width: 750rpx;
			height: 304rpx;
			padding-left: 30rpx;
			background: #FFFFFF;

			.noPayText {
				width: 690rpx;
				height: 104rpx;
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

			.coupon {
				width: 690rpx;
				height: 200rpx;
				display: flex;
				justify-content: space-between;
				align-items: center;

				.couponImg {
					width: 148rpx;
					height: 146rpx;
					background: rgba(0, 0, 0, 0);
					border-radius: 12rpx;
				}

				.noPayRight {
					width: 524rpx;
					margin-bottom: 60rpx;

					.noPayRightCon {
						display: flex;
						justify-content: space-between;

						// 代金券
						.noPayCoupon {
							font-size: 28rpx;
							font-family: PingFang SC;
							font-weight: bold;
							line-height: 32rpx;
							color: rgba(51, 51, 51, 1);
						}

						// 价格
						.noPayMoney {
							font-size: 28rpx;
							font-family: PingFang SC;
							font-weight: bold;
							line-height: 32rpx;
							color: rgba(255, 47, 47, 1);
						}
					}

					.noPayNumer {
						font-size: 24rpx;
						font-family: PingFang SC;
						font-weight: 400;
						line-height: 28rpx;
						color: rgba(133, 133, 133, 1);
						margin-top: 16rpx;
					}
				}
			}
		}

		// 适用门店
		.applyStore {
			width: 750rpx;
			height: 494rpx;
			background: #FFFFFF;
			padding-left: 30rpx;
			margin-top: 20rpx;
			margin-bottom: 20rpx;

			.applyStoreButton {
				width: 690rpx;
				height: 98rpx;
				display: flex;
				justify-content: space-between;
				align-items: center;

				// 门店信息
				.applyStoreConent {
					width: 184rpx;
					height: 38rpx;

					.applyStoreText {
						width: 128rpx;
						height: 38rpx;
						font-size: 32rpx;
						font-family: PingFang SC;
						font-weight: bold;
						line-height: 38rpx;
						color: rgba(51, 51, 51, 1);
					}

					.applyStoreNumber {
						width: 46rpx;
						height: 32rpx;
						font-size: 28rpx;
						font-family: PingFang SC;
						font-weight: 400;
						line-height: 32rpx;
						color: rgba(133, 133, 133, 1);
					}

				}

				// 更多图标
				.applyStoreImg {
					width: 9.68rpx;
					height: 17rpx;
				}
			}

			// 门店地图
			.applyStoreMap {
				width: 690rpx;
				height: 260rpx;
				background: rgba(0, 0, 0, 0);
				opacity: 1;
				border-radius: 12rpx;
			}

			// 门店地址
			.applyStoreCon {
				width: 690rpx;
				height: 136rpx;
				display: flex;
				justify-content: space-between;
				align-items: center;

				.applyStorePlace {
					width: 600rpx;
					height: 96rpx;
					display: flex;
					flex-direction: column;
					justify-content: space-around;

					// 店名
					.applyStoreName {
						width: 336rpx;
						height: 32rpx;
						font-size: 28rpx;
						font-family: PingFang SC;
						font-weight: bold;
						line-height: 32rpx;
						color: rgba(51, 51, 51, 1);

					}

					// 地址
					.applyStoreAddress {
						width: 520rpx;
						font-size: 24rpx;
						font-family: PingFang SC;
						font-weight: 400;
						line-height: 28rpx;
						color: rgba(133, 133, 133, 1);
						display: flex;
						justify-content: space-between;
						align-items: center;
					}
				}

				// 电话
				.applyStorePhone {
					width: 40rpx;
					height: 44.46rpx;
				}
			}

		}


		// 订单信息
		.orderNewContent {
			width: 744rpx;
			height: 370rpx;
			background: #FFFFFF;
			padding: 0 30rpx;

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
						line-height: 32rpx;
						color: rgba(51, 51, 51, 1);
					}
				}
			}
		}
		// 取消订单/去付款
		.orderNewsButton{
			width: 750rpx;
			height: 160rpx;
			display: flex;
			align-items: center;
			justify-content: space-between;
			// 取消订单
			.orderNewsCancel{
				width: 332rpx;
				height: 80rpx;
				border: 2rpx solid #24A7FF;
				border-radius:12rpx;
				color: #24A7FF;
				font-size: 28rpx;
				line-height: 80rpx;
			}
			// 待付款
			.orderNewsPay{
				width: 332rpx;
				height: 80rpx;
				background:rgba(255,47,47,1);
				border-radius:12rpx;
				color: #FFFFFF;
				line-height: 80rpx;
				display: flex;
				justify-content: space-around;
				.orderNewsPayMoney{
					width:116rpx;
					height:38rpx;
					font-size:32rpx;
					font-family:PingFang SC;
					font-weight:bold;
				}
				.orderNewsPayTo{
					width:84rpx;
					height:32rpx;
					font-size:28rpx;
					font-family:PingFang SC;
					font-weight:400;
					line-height:32rpx;
					font-size: 28rpx;
					line-height: 80rpx;
				}
			}
		}
	}
</style>

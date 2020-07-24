<!-- 订单详情-->
<template>
	<!-- 最外层 -->
	<view class="orderContainer">
		<!-- 待付款订单 -->
		<view class="noPay">
			<view class="noPayText">待付款订单</view>
			<couponMessage />
		</view>
		<!-- 适用门店 -->
		<view class="applyStore">
			<view class="applyStoreButton">
				<view class="applyStoreContent">
					<span class="applyStoreText">适用门店</span>
					<span class="applyStoreNumber">({{shopNumber}})</span>
				</view>
				<!-- 更多图标 -->
				<image class="applyStoreImg" src="@/static/images/iconfont/more.png"></image>
			</view>
			<!-- 地图 -->
			<image class="applyStoreMap" src="@/static/images/tabBarImage/orderDetailMap.png"></image>
			<!-- 位置 -->
			<view class="applyStoreCon">
				<view class="applyStorePlace">
					<view class="applyStoreName">{{shopName}}</view>
					<view class="applyStoreAddress">
						<view class="applyStoreDistance">距您{{distance}}m</view>
						<span>|</span>
						<view class="applyStoreDoorplate">{{shopPlace}}</view>
					</view>
				</view>
				<image class="applyStorePhone" src="@/static/images/iconfont/phone.png"></image>
			</view>
		</view>
		<!-- 订单信息-->
		<orderInformation />

		<!-- 取消订单按钮/去付款按钮 -->
		<view class="orderNewsButton" v-if="state===true">

			<button @click="open" @confirm="confirm" class="orderNewsCancel">
				取消订单
			</button>
			<button class="orderNewsPay">
				<span class="orderNewsPayMoney">￥{{orderNumPrice}}</span>
				<span class="orderNewsPayTo">待付款</span>
			</button>
		</view>
		<u-modal v-model="show" show-cancel-button="true" :content="content" :show-title="false" confirm-color="#007AFF"
		 cancel-color="#007AFF" :content-style="{color:'#000000',fontSize:'32rpx',fontWeight:'bold'}" @confirm="confirm" @cancel="cancel">
		</u-modal>
		<!-- 取消订单提示 -->
		<u-toast ref="uTips" />

	</view>
</template>

<script>
	import couponMessage from '../../../src/publicComponents/couponMessage.vue'
	import orderInformation from '../../../src/publicComponents/orderInformation.vue'
	export default {
		data() {
			return {
				show: false,
				content: '是否取消订单', // 取消订单模态框文本
				shopNumber: '10', //适用门店数量
				shopName: '韩国年糕料理（海岸城店）', // 店铺名称
				distance: '500', // 距离店铺多少米
				shopPlace: '文新思路34号海岸城西座F2座806', // 店铺地址
				orderNumPrice: '79.00', //订单总价
				state:true
			}
		},
		components: {
			couponMessage,
			orderInformation
		},
		methods: {
			confirm() {
				this.$refs.uTips.show({
					title: '订单已成功取消'
				});
				this.state=false
				
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
		height: 1680rpx;
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

		// 取消订单/去付款
		.orderNewsButton {
			width: 750rpx;
			height: 160rpx;
			display: flex;
			align-items: center;
			justify-content: space-between;

			// 取消订单
			.orderNewsCancel {
				width: 332rpx;
				height: 80rpx;
				border: 2rpx solid #24A7FF;
				border-radius: 12rpx;
				color: #24A7FF;
				font-size: 28rpx;
				line-height: 80rpx;
			}

			// 待付款
			.orderNewsPay {
				width: 332rpx;
				height: 80rpx;
				background: rgba(255, 47, 47, 1);
				border-radius: 12rpx;
				color: #FFFFFF;
				line-height: 80rpx;
				display: flex;
				justify-content: space-around;

				.orderNewsPayMoney {
					width: 116rpx;
					height: 38rpx;
					font-size: 32rpx;
					font-family: PingFang SC;
					font-weight: bold;
				}

				.orderNewsPayTo {
					width: 84rpx;
					height: 32rpx;
					font-size: 28rpx;
					font-family: PingFang SC;
					font-weight: 400;
					line-height: 32rpx;
					font-size: 28rpx;
					line-height: 80rpx;
				}
			}
		}
	}
</style>

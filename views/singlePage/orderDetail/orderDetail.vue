<!-- 订单详情——待付款订单 -->
<template>
	<!-- 最外层 -->
	<view class="orderContainer">
		<!-- 待付款订单 -->
		<view class="noPay">
			<view class="noPayText">待付款订单</view>
			<couponMessage />
		</view>
		<!-- 适用门店 -->
		<applyShop />
		
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
		 cancel-color="#007AFF" :content-style="{color:'#000000',fontSize:'32rpx',fontWeight:'bold'}" @confirm="confirm">
		</u-modal>
		<!-- 取消订单提示 -->
		<u-toast ref="uTips" />

	</view>
</template>

<script>
	import couponMessage from '../../../src/publicComponents/couponMessage.vue'         // 代金券信息
	import orderInformation from '../../../src/publicComponents/orderInformation.vue'   //订单信息
	import applyShop from '../../../src/publicComponents/applyShop.vue'     //适用门店
	export default {
		data() {
			return {
				show: false,
				content: '是否取消订单', // 取消订单模态框文本
				orderNumPrice: '79.00', //订单总价
				state:true
			}
		},
		components: {
			couponMessage,
			orderInformation,
			applyShop
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
		},
		onLoad(options) {
			console.log(options)
			console.log(options.id)
		}
	}
	
</script>

<style lang="less" scoped>
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

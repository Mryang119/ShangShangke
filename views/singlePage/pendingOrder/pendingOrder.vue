<!-- 待使用订单 -->
<!-- name:陈铄源 -->
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
			<navigator class="refundBtn" :url="applyRefund">申请退款</navigator>
		</view>	
		<!-- 出示二维码 -->
		<view class="codeModalContainer" v-if="isShow"  @click.stop.prevent="moveHandle">
			<view class="codeModal" >
				<view class="codeText">
					<view class="textCon">
						<view class="couponText">{{cashCoupon}}元代金券</view>
						<view class="timeText">有效期至：{{useTime}}</view>
					</view>
					<view class="useText">待使用</view>
				</view>
				<view class="code">
					<image src="../../../static/images/iconfont/erweima.png"></image>
					<view class="textUse">（请到店出示二维码使用）</view>
				</view>
				<view class="codeNumber">{{codeNumber}}</view>
				<view class="cancelCon"><view class="cancelIcon" @click="closeCodeModal"><image src="../../../static/images/iconfont/guanbiBtn.png"></image></view></view>
			</view>
		</view>
		
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
				cashCoupon:'100',  //代金券
				useTime:'2020-06-09',  // 有效期
				codeNumber:'74838273',   //二维码编号
				isShow:false,   //模态框默认隐藏
				applyRefund:'../../singlePage/applyRefund/applyRefund'  //跳转申请退款页面
			}
		},
		components: {
			couponMessage,
			applyShop,
			orderInformation
		},
		methods:{
			refundBtn(){
				this.isShow = true
			},
			moveHandle(){
				console.log('阻止底部页面滑动')
			},
			closeCodeModal(){
				this.isShow = false
			}
		}
	}
</script>

<style lang="less" scoped>
	.pendingOrderContainer {
		width: 750rpx;
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
	}
</style>

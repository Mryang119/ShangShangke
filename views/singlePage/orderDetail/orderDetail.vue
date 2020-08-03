<!-- 订单详情——待付款订单 -->
<!-- name:陈铄源 -->
<template>
	<!-- 最外层 -->
	<view class="orderContainer">
		<!-- 待付款订单 -->
		<view class="noPay">
			<view class="noPayText" v-if="type==='待付款'">待付款订单</view>
			<view class="noPayText" v-if="type==='待使用'">待使用订单</view>
			<view class="noPayText" v-if="type==='已完成'">已使用订单</view>
			<view class="noPayText" v-if="type==='已退款'">已退款</view>
			<couponMessage />
			<view class="showOrderCode" v-if="type==='待使用'">
				<view class="showOrderCodeBtn"  @click="refundBtn">出示订单券码</view>
			</view>
		</view>
		<!-- 出示二维码 -->
		<view class="codeModalContainer" v-if="isShow"  @click.stop.prevent="moveHandle">
			<view class="codeModal" >
				<view class="codeText">
					<view class="textCon">
						<view class="couponText">{{cashCoupon}}</view>
						<view class="timeText">{{useTime}}</view>
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
		<!-- 适用门店 -->
		<applyShop v-if="type!=='已退款'"  />
		
		<!-- 订单信息-->
		<orderInformation />

		<!-- 待付款——取消订单按钮/去付款按钮 -->
		<view class="orderNewsButton" v-if="state===true && type==='待付款'">

			<button @click="open" @confirm="confirm" class="orderNewsCancel">
				取消订单
			</button>
			<button class="orderNewsPay">
				<span class="orderNewsPayMoney">￥{{orderNumPrice}}</span>
				<span class="orderNewsPayTo">待付款</span>
			</button>
		</view>
		<!-- 待使用——申请退款— -->
		<view class="applyRefund" v-if="type==='待使用'">
			<navigator class="refundBtn" :url="applyRefund">申请退款</navigator>
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
				state:true,
				type:'' ,//我的订单传过来的字段
				isShow:false,   // 出示二维码状态，默认为false（不展示）
				cashCoupon:'100元代金券',  //二维码代金券
				useTime:'有效期至:2020-06-09',  // 二维码有效期
				codeNumber:'74838273',   //二维码编号
				applyRefund:'../../singlePage/applyRefund/applyRefund'  //跳转申请退款页面
			}
		},
		components: {
			couponMessage,
			orderInformation,
			applyShop
		},
		methods: {
			confirm() {         // 点击确认取消订单出现提示
				this.$refs.uTips.show({
					title: '订单已成功取消'
				});
				this.state=false
				
			},
			open() {          // 点击取消订单出现提示
				this.show = true;
			},
			refundBtn(){            // 出示二维码状态改变
				this.isShow = true
			},
			moveHandle(){
				console.log('阻止底部页面滑动')
			},
			closeCodeModal(){      // 点击关闭二维码模态框
				this.isShow = false
			}
		},
		onLoad(options) {
			this.type = options.type
			console.log(options)	
			
		}
	}
	
</script>

<style lang="less" scoped>
	// 最外层
	.orderContainer {
		padding-top: 20rpx;
		// height: 1680rpx;
		background: #F6F6F6;

		// 待付款订单
		.noPay {
			width: 750rpx;
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
			.showOrderCode {
				width: 690rpx;
				height: 88rpx;
				display: flex;
				justify-content: flex-end;
			
				.showOrderCodeBtn {
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
		
		// 模态框
		.codeModalContainer{
			width: 750rpx;
			height: 100%;
			position: fixed;
			left: 0;
			top: 0;
			background: rgba(0,0,0,.5);
			z-index: 99999;
			.codeModal{
				width: 576rpx;
				height: 638rpx;
				background: #FFFFFF;
				border-radius:12rpx;
				position: absolute;
				left: 0;
				right: 0;
				top: 0;
				bottom: 0;
				margin: auto;
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
				.cancelCon{
					width: 576rpx;
					height: 160rpx;
					text-align: center;
					line-height: 160rpx;
					background: rgba(0,0,0,0);
					margin-top: 50rpx;
					.cancelIcon{
						text-align: center;
						border-radius: 50%;
						image{
							width: 58rpx;
							height: 58rpx;
							z-index: 99999;
						}
					}
				}
			}
		}
		// 待付款——取消订单/去付款
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
		// 待使用——申请退款
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

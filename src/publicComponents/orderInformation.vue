<!-- 订单信息 -->
<!-- name:陈铄源 -->
<template>
	<view class="orderNewContent">
		<view class="orderNewsText">订单信息</view>
		<view class="orderNewsName">
			<span>订单数量</span>
			<span>{{orderNumber}}</span>
		</view>
		<view class="orderNewsName">
			<span>订单总价</span>
			<span>￥{{orderNumPrice}}</span>
		</view>
		<view class="orderNewsName">
			<span>订单编号</span>
			<view class="orderNewsSerial">
				<span>{{orderReference}}</span>
				<view class="orderNewsCopy">复制</view>
			</view>
		</view>
		<view class="orderNewsName">
			<span>下单时间</span>
			<span>{{orderTime}}</span>
		</view>
		
	</view>
</template>

<script>
	export default{
		props:{
			orderNumber:{       // 订单数量
				type:Number,
				default:1
			},
			orderNumPrice:{      //订单总价
				type:String,
				default:'79.00'
			},
			orderReference:{     // 订单编号
				type:String,
				default:'34828342376473'
			},
			orderTime:{           //下单时间
				type:String,
				default:'2020-09-09 12:30'
			}
		},
		data(){
			return{
				
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
					line-height: 32rpx;
					color: rgba(51, 51, 51, 1);
				}
			}
		}
	}
</style>

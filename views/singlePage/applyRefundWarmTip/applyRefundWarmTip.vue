<!-- 申请退款-温馨提示 -->
<template>
	<view class="container">
		<view class="tipContainer">
			<view class="tipText">温馨提示</view>
			<view class="text">原路退款时，若订单显示“已退款”，表示款项已经返回原支付方，距离到账时间3-10个工作日</view>
			<view class="backOrder">
				<navigator class="backOrderBtn" :url="backOrder">返回订单</navigator>
			</view>
		</view>
	</view>
</template>

<script>
	export default{
		data(){
			return{
				backOrder:'../../singlePage/myOrder/myOrder'
			}
		}
	}
</script>

<style lang="less" scoped>
	.container{
		width:750rpx;
		height:1380rpx;
		padding-top: 20rpx;
		background:rgba(246,246,246,1);
		.tipContainer{
			width: 750rpx;
			height: 1360rpx;
			background: #FFFFFF;
			padding: 0 30rpx;
			.tipText{
				width: 690rpx;
				height: 98rpx;
				font-size:32rpx;
				font-family:PingFang SC;
				font-weight:bold;
				line-height:98rpx;
				color:rgba(51,51,51,1);
			}
			.text{
				width: 690rpx;
				height: 108rpx;
				font-size:28rpx;
				font-family:PingFang SC;
				font-weight:400;
				color:rgba(51,51,51,1);
			}
			.backOrder{
				width: 690rpx;
				height: 180rpx;
				display: flex;
				align-items: center;
				.backOrderBtn{
					width: 690rpx;
					height: 80rpx;
					font-size:28rpx;
					background:rgba(36,167,255,1);
					font-family:PingFang SC;
					font-weight:400;
					line-height:80rpx;
					color:rgba(255,255,255,1);
					text-align: center;
					border-radius:12rpx;
				}
			}
		}
	}
</style>

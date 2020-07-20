<!-- 确认订单——选择优惠券 -->
<template>
	<!-- 最外层 -->
	<view class="container">
		<view class="useText">此单可用优惠券（2张）</view>
		<view class="useCoupon">
			
		</view>
	</view>
</template>

<script>
	export default{
		data(){
			return{
				
			}
		}
	}
</script>

<style lang="less">
	// 最外层
	.container{
		background:rgba(246,246,246,1);
		.useText{
			width: 750rpx;
			height: 92rpx;
			font-size:28rpx;
			font-family:PingFang SC;
			font-weight:bold;
			line-height:92rpx;
			color:rgba(51,51,51,1);
			padding-left: 30rpx;
		}
		.useCoupon{
			width: 750rpx;
			height: 262rpx;
			background: #FFFFFF;
		}
	}
</style>

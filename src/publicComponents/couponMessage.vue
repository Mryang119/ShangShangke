<!-- 优惠券信息 -->
<template>
	<view class="coupon">
		<!-- 商家店面图片 -->
		<image class="couponImg" :src="shopImg"></image>
		<view class="noPayRight">
			<view class="noPayRightCon">
				<view class="noPayCoupon">{{cashCoupon}}元代金券</view>
				<view class="noPayMoney">￥{{itemPrice}}</view>
			</view>
			<view class="noPayNumer">数量：{{itemNumber}}</view>
		</view>
	</view>
</template>

<script>
	export default{
		props:{
			cashCoupon:{
				type:Number,
				default:100
			},
			itemPrice:{
				type:Number,
				default:79.9
			},
			itemNumber:{
				type:Number,
				default:1
			}
		},
		data(){
			return{
				shopImg:'../../static/images/tabBarImage/myLoginHeader.png', // 商家头像
			}
		}
	}
</script>

<style lang="less">
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
</style>

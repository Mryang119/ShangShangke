<!-- 我的订单 -->
<template>
	<view>
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
				<view class="applyStoreText">适用门店（10）</view>
				<image class="myLoginEstimateImg" src="@/static/images/iconfont/more.png"></image>
				<!-- 地图 -->
				<image></image>
			</view>
			<!-- 位置 -->
			<view class="applyStoreCon">
				<!-- 店名 -->
				<view class="applyStorePlace">
					<view class="applyStoreName">韩国年糕料理（海岸城店）</view>
					<view class="applyStoreAddress">
						<!-- 距离 -->
						<view class="applyStoreDistance">距您500m</view>
						<!-- 门牌号 -->
						<view class="applyStoreDoorplate">文新思路34号海岸城西座F2座806</view>
					</view>
				</view>
				
				<!-- 拨打电话电话 -->
				<image class="applyStorePhone"></image>
			</view>
		</view>
		<!-- 订单信息 -->
		<view>
			111
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {

			}
		}
	}
</script>

<style lang="less">
	.noPay{
		width: 375px;
		height: 152px;
		margin: 10px 15px;
		.noPayText{
			width: 345px;
			height: 52px;
			margin: auto 0;
			display: flex;
			align-items: center;
			border-bottom: 1px solid rgba(243, 243, 243, 1);
		}
		.coupon{
			width: 345px;
			height: 100px;
			display: flex;
			justify-content: space-between;
			align-items: center;
			.couponImg{
				width:74px;
				height:73px;
				background:rgba(0,0,0,0);
				border-radius:6px;
			}
			.noPayRight{
				width: 262px;
				margin-bottom: 30px;
				.noPayRightCon{
					display: flex;
					justify-content: space-between;
					// 代金券
					.noPayCoupon{
						font-size:14px;
						font-family:PingFang SC;
						font-weight:bold;
						line-height:16px;
						color:rgba(51,51,51,1);
					}
					// 价格
					.noPayMoney{
						font-size:14px;
						font-family:PingFang SC;
						font-weight:bold;
						line-height:16px;
						color:rgba(255,47,47,1);
					}
				}
				.noPayNumer{
					font-size:12px;
					font-family:PingFang SC;
					font-weight:400;
					line-height:14px;
					color:rgba(133,133,133,1);
					margin-top: 8px;
				}
			}
		}
	}
	.applyStore{
		margin: 0 15px;
	}
</style>

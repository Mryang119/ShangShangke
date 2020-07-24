<template>
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
</template>

<script>
	export default{
		props:{
			shopNumber:{             //适用门店数量
				type:String,
				default:'10'
			},
			shopName:{             // 店铺名称
				type:String,
				default:'韩国年糕料理（海岸城店）'
			},
			distance:{                 // 距离店铺多少米
				type:String,
				default:'500'
			},
			shopPlace:{               // 店铺地址
				type:String,
				default:'文新思路34号海岸城西座F2座806'
			},
		},
		data(){
			return{
				
			}
		}
	}
</script>

<style lang="less">
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
</style>

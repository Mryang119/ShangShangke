<!-- 店铺地址和电话 -->
<template>
	<view class="applyStoreCon">
		<view class="applyStorePlace">
			<view class="applyStoreName">{{shopName}}</view>
			<view class="applyStoreAddress">
				<view class="applyStoreDistance">距您{{distance}}m</view>
				<span>|</span>
				<view class="applyStoreDoorplate">{{shopPlace}}</view>
			</view>
		</view>
		<view class="applyStoreCon" @click="takePhone">
			<image class="applyStorePhone" src="@/static/images/iconfont/phone.png" ></image>
		</view>
	</view>
</template>

<script>
	export default{
		props:{
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
		},
		methods:{
			takePhone(){
				// uni.request({
				// 	method:'GET',
				// 	url:'XXX',
				// 	success(res) {
				// 		uni.makePhoneCall({
				// 			
				// 		})
				// 	}
				// })
				console.log('拨打商家电话')
			}
		}
	}
</script>

<style lang="less">
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
		
		.applyStoreCon{
			width: 60rpx;
			height: 100rpx;
			line-height: 100rpx;
			// 电话
			.applyStorePhone {
				width: 40rpx;
				height: 44.46rpx;
			}
		}
		
	}
		
</style>

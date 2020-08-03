<!-- 适用门店 -->
<!-- name:陈铄源 -->
<template>
	<!-- 适用门店 -->
	<view class="applyStore" @click="toApplyStore">
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
		<shopAddressPhone />
	</view>
</template>

<script>
	import shopAddressPhone from '@/src/publicComponents/shopAddressPhone.vue'
	export default{
		props:{
			shopNumber:{  //适用门店数量
				type:String,
				default:'10'
			}
		},
		data(){
			return{
				
			}
		},
		methods:{
			toApplyStore(){
				uni.navigateTo({
					url:'/views/singlePage/applyStore/applyStore'
				})
			}
		},
		components:{
			shopAddressPhone
		}
	}
</script>

<style lang="less" scoped>
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
	
		
	}
</style>

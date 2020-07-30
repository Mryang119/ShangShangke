<!-- 适用门店 -->
<!-- 陈铄源  -->
<template>
	<view class="container">
		<view class="applyStoreAddress">
			<view class="storeAddress">
				<view class="addrImg"><image src="../../../static/images/iconfont/dingwei.png"></image></view>
				<view class="cityName">{{cityName}}市</view>
				<view class="iconImg"><image src="../../../static/images/iconfont/xiajiantoubig.png"></image></view>
			</view>
			<shopAddressPhone v-for="(item,index) in 5" :key="index" />
		</view>
	</view>
</template>

<script>
	import shopAddressPhone from '../../../src/publicComponents/shopAddressPhone'
	export default{
		data(){
			return{
				
			}
			
		},
		components:{
			shopAddressPhone
		},
		computed:{
			cityName(){
				return this.$store.state.global.globalData.cityName
			}
		}
	}
</script>

<style lang="less" scoped>
	.container{
		background:rgba(246,246,246,1);
		padding-top: 20rpx;
		.applyStoreAddress{
			width: 750rpx;
			height: 1360rpx;
			background: #FFFFFF;
			padding: 0 30rpx;
			.storeAddress{
				width: 690rpx;
				height: 118rpx;
				display: flex;
				align-items: center;
				.addrImg{
					width: 30.76rpx;
					height: 38.88rpx;
					image{
						width: 30.76rpx;
						height: 38.88rpx;
					}
				}
				.cityName{
					font-size:32rpx;
					font-family:PingFang SC;
					font-weight:bold;
					line-height:38rpx;
					color:rgba(51,51,51,1);
					margin: 0 16rpx;
				}
				.iconImg{
					image{
						width: 20.46rpx;
						height: 12.42rpx;
					}
				}
			}
		}
	}
</style>

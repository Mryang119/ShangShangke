<template>
	<view class="container">
		<view class="shopDetail">
			<oneShopDetail />
		</view>
		<view class="groupPeople">
			<view class="countDown">
				<u-count-down :timestamp="86400" separator="colon" separator-size="28" separator-color="#606266" font-size="24"
				 color="#FFFFFF" bg-color="#FE3B2B" :show-days="false"></u-count-down>
			</view>
			<view class="shortPeople">三人成团,还差<view class="num">1</view>人</view>
		</view>
	</view>
</template>

<script>
	import oneShopDetail from '../../../src/publicComponents/oneShopDetail.vue'
	export default{
		data(){
			return{
				
			}
		},
		components:{
			oneShopDetail
		}
	}
</script>

<style lang="less">
	.container{
		background:rgba(246,246,246,1);
		padding-top: 20rpx;
		.shopDetail{
			width: 750rpx;
			height: 240rpx;
			padding: 0 30rpx;
			background:#FFFFFF;
		}
		.groupPeople{
			width: 750rpx;
			height: 224rpx;
			display: flex;
			flex-direction: column;
			align-items: center;
			justify-content: center;
			background: #FFFFFF;
			.countDown{
				
			}
			.shortPeople{
				font-size:32rpx;
				font-family:PingFang SC;
				font-weight:bold;
				line-height:38rpx;
				color:rgba(51,51,51,1);
				.num{
					color: #FF2F2F;
					display: inline;
				}
			}
		}
	}
</style>

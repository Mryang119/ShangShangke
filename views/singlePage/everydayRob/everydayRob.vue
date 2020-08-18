<template>
	<view>
		<!-- 天天免费抢 -->
		<view class="s_everydayRob">
			<view class="topBanner">
				<image src="../../../static/images/Product/everydayRob.png" mode=""></image>
			</view>
			<view class="everyDayRob-container">
				<view class="everyDayRob-content">
					<view class="titleBar">
						<view class="line"></view>
						<view class="text"><text>超多商品免费领取</text></view>
						<view class="line"></view>
					</view>
					<!-- 列表项 -->
					<view class="everyDayRob-list-content">
						<view class="list-item" v-for="(item,index) in 10" :key="index">
							<daydayShopItem></daydayShopItem>
						</view>
					</view>
				</view>	
			</view>
		</view>
	</view>
</template>

<script>
	import daydayShopItem from '@/src/publicComponents/daydayShop.vue'
	export default {
		components:{
			daydayShopItem
		},
		data() {
			return {
				
			};
		}
	}
</script>

<style lang="less" scoped>
	.s_everydayRob {
		width: 750rpx;
		.topBanner {
			width: 750rpx;
			height: 310rpx;
			image {
				width: 750rpx;
				height: 310rpx;
			}
		}
		.everyDayRob-container {
			width: 750rpx;
			box-sizing: border-box;
			padding: 20rpx;
			text-align: center;
			.everyDayRob-content {
				width: 710rpx;
				padding: 30rpx 20rpx 20rpx 20rpx;
				background-color: #FAEAEA;
				text-align: center;
				border-radius:12rpx;
				.titleBar {
					display: flex;
					align-items: center;
					justify-content: center;
					.line {
						height: 2rpx;
						width: 73.52rpx;
						background-color: #FA3900;
					}
					.text {
						font-size: 32rpx;
						font-weight: bold;
						line-height: 38rpx;
						margin: 0 20rpx;
						color: #FA3900;
					}
				}
			}
		}
	}
</style>

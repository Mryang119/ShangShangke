<template>
	<!-- 温馨提示 -->
	<view class="warmTip">
		<view class="text">温馨提示</view>
		<!-- 有效期 -->
		<view class="content">
			<view class="use">有效期：</view>
			<view class="tipCon">
				<view class="circle"></view>
				<view class="tipName">购买一个月内有效</view>
			</view>
		</view>
		<!-- 使用规则 -->
		<view class="content">
			<view class="use">使用规则：</view>
			<view class="tipCon">
				<view class="circle"></view>
				<view class="tipName">无需预约，高峰调度可能需要等位</view>
			</view>
		</view>
		<!-- 购买须知 -->
		<view class="content">
			<view class="use">购买须知：</view>
			<view class="buyTipCon">
				<view class="circle"></view>
				<view class="tipName">限时秒杀不可与其他优惠叠加使用</view>
			</view>
			<view class="buyTipCon">
				<view class="circle"></view>
				<view class="tipName">不兑现、不找零</view>
			</view>
			<view class="buyTipCon">
				<view class="circle"></view>
				<view class="tipName">仅限堂食，不提供餐前外带</view>
			</view>
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
	// 温馨提示
	.warmTip {
		width: 750rpx;
		height: 524rpx;
		padding: 0 30rpx;
		background-color: #FFFFFF;
	
		// 温馨提示文字
		.text {
			height: 84rpx;
			font-size: 32rpx;
			font-family: PingFang SC;
			font-weight: bold;
			line-height: 84rpx;
			color: rgba(51, 51, 51, 1);
			padding-top: 16rpx;
		}
	
		.content {
			height: 110rpx;
			padding-top: 8rpx;
	
			// 有效期文字
			.use {
				font-size: 28rpx;
				font-family: PingFang SC;
				font-weight: 400;
				line-height: 32rpx;
				color: rgba(169, 169, 169, 1);
				margin-top: 14rpx;
				margin-bottom: 16rpx;
			}
	
			.tipCon {
				width: 666rpx;
				display: flex;
				align-items: center;
	
				.circle {
					width: 8rpx;
					height: 8rpx;
					background: rgba(51, 51, 51, 1);
					border-radius: 50%;
					margin-right: 14rpx;
				}
	
				.tipName {
					font-size: 28rpx;
					font-family: PingFang SC;
					font-weight: 400;
					line-height: 32rpx;
					color: rgba(51, 51, 51, 1);
				}
			}
	
			.buyTipCon {
				width: 666rpx;
				display: flex;
				align-items: center;
				padding-bottom: 10rpx;
	
				.circle {
					width: 8rpx;
					height: 8rpx;
					background: rgba(51, 51, 51, 1);
					border-radius: 50%;
					margin-right: 14rpx;
				}
	
				.tipName {
					font-size: 28rpx;
					font-family: PingFang SC;
					font-weight: 400;
					line-height: 32rpx;
					color: rgba(51, 51, 51, 1);
				}
			}
		}
	}
</style>

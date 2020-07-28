<!-- 我的收藏 -->
<template>
	<view class="container">
		<u-tabs class="tabs" :list="list" :bar-style="{backgroundImage: 'linear-gradient(to right,#92D0F9,#26A7FC)',height:6+'rpx'}"
		 :is-scroll="false" :bold='true' :current="current" @change="change" inactive-color="#000" active-color="#000"></u-tabs>
		
		<view class="shopDetailCon">
			<!-- 店铺 -->
			<!-- <view class="shopDetail" v-for="(item,index) in 3" :key="index">
				<view class="shopImg"><image src="@/static/images/Product/shangpintu.png"></image></view>
				<view class="detailCon">
					<view class="shopName">海底捞（海岸城店）</view>
					<view class="shopScore">
						<view class="score">评分:</view>
						<u-rate :count="5" v-model="value" disabled="true" size="24" active-color="#FFAE44"></u-rate>
						<view class="shopValue">{{value}}.0</view>
					</view>
					<view class="shopAddress">
						<view class="meter">500m</view>
						<view class="line">|</view>
						<view class="address">文新思路34号海岸城西座F2座806</view>
					</view>
				</view>
			</view> -->
			<!-- 商品 -->
			<view class="shopDetail" v-for="(item,index) in 3" :key="index">
				<view class="shopImg"><image src="@/static/images/Product/commodityItem.png"></image></view>
				<view class="detailCon">
					<view class="goodsName">九龙金玉雪顶奶茶</view>
					<view class="goodsPrice">￥1.00</view>
				</view>
			</view>
		</view>
		
		
	</view>
</template>

<script>
	export default {
		data() {
			return {
				list: [{
					name: '推荐'
				}, {
					name: '关注'
				}, {
					name: '粉丝'
				}],
				current: 0,
				value:5.0
			}
		},
		methods: {
			change(index) {
				this.current = index;
				console.log(this.current)
			}
		}
	}
</script>

<style lang="less" scoped>
	.container {
		width: 750rpx;
		height: 1284rpx;
		background: rgba(246, 246, 246, 1);
		.shopDetailCon{
			width: 750rpx;
			padding: 0 20rpx;
			.shopDetail{
				width: 710rpx;
				height: 178rpx;
				padding: 20rpx;
				background: #FFFFFF;
				display: flex;
				align-items: center;
				margin-top: 20rpx;
				.shopImg{
					width: 140rpx;
					height: 138rpx;
					margin-right: 20rpx;
					image{
						width: 140rpx;
						height: 138rpx;
						border-radius:8rpx;
					}
				}
				.detailCon{
					display: flex;
					flex-direction: column;
					justify-content: space-around;
					.shopName{
						font-size:28rpx;
						font-family:PingFang SC;
						font-weight:bold;
						color:rgba(39,39,39,1);
					}
					.shopScore{
						height: 28rpx;
						font-size:24rpx;
						font-family:PingFang SC;
						font-weight:400;
						line-height:28rpx;
						color:rgba(39,39,39,1);
						margin: 16rpx 0;
						display: flex;
						align-items: center;
						.score{
							margin-right: 4rpx;
						}
						.shopValue{
							font-size: 18rpx;
							color:rgba(255,174,68,1);
							margin-left: 2rpx;
						}
					}
					.shopAddress{
						height: 28rpx;
						font-size:24rpx;
						font-family:PingFang SC;
						font-weight:400;
						line-height:28rpx;
						color:rgba(133,133,133,1);
						display: flex;
						align-items: center;
						.line{
							font-size: 20rpx;
							margin: 0 20rpx;
						}
					}
					.goodsName{
						font-size:28rpx;
						font-family:PingFang SC;
						font-weight:bold;
						color:rgba(39,39,39,1);
					}
					.goodsPrice{
						margin-top: 48rpx;
						font-size:32rpx;
						font-family:PingFang SC;
						font-weight:bold;
						color:rgba(241,0,0,1);
					}
				}
			}
		}
	}
</style>
	
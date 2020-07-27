<!-- 每日一品商品详情 -->
<template>
	
	<!-- v-if="option.type==='oneDayEat || group'" -->
	<!-- progressCon进度条  v-if="option.type==='free'" -->
	<view class="dailyGoodsProductDetail">
		<view class="dailyGoodsPrice">
			<view class="priceCon">
				<view class="nowPrice">￥{{nowPrice}}</view>
				<view class="beforePrice">￥{{beforePrice}}</view>
			</view>
			<view class="sale">月售{{monthSale}}</view>
		</view>
		<view class="dailyGoodsText">{{goodsText}}</view>
		<view class="progressCon">
			<u-line-progress class="progress" :percent="hasRobbed" :show-percent="false"
				:round="true" :active-color="hasRobbed !==100 ?'#fb2b03' :'#ff9c9c'" height="14">
			</u-line-progress>
			<view class="hasRobbed" v-if="hasRobbed !==100">已抢{{hasRobbed}}%</view>
			<view class="hasRobbedFinish" v-else>已抢完</view>
		</view>
	</view>
	
</template>

<script>
	export default{
		name:'oneDayEatShopDetail',
		props:{
			nowPrice:{     // 现在的价格
				type:Number,
				default:299.00
			},
			beforePrice:{    //之前的价格
				type:String,
				default:'11.00'
			},
			monthSale:{     // 月售数量
				type:String,
				default:'2333'
			},
			goodsText:{     //商品描述
				type:String,
				default:'抹茶柚子千层 抹茶柚子千层 新鲜出炉'
			},
			hasRobbed:{    // 天天免费抢已抢进度
				type:String,
				default:'50'
			} 
		},
		data(){
			return{
				
			}
		}
	}
</script>

<style lang="less">
	// 每日一品-商品详情
	.dailyGoodsProductDetail {
		width: 750rpx;
		height: 200rpx;
		background: rgba(255, 255, 255, 1);
		padding: 0 30rpx;
		margin-bottom: 20rpx;
		padding-top: 30rpx;
	
		.dailyGoodsPrice {
			height: 52rpx;
			display: flex;
			align-items: center;
			margin-bottom: 20rpx;
			justify-content: space-between;
	
			.priceCon {
				display: flex;
	
				.nowPrice {
					font-size: 44rpx;
					font-family: PingFang SC;
					font-weight: bold;
					color: rgba(241, 0, 0, 1);
					margin-right: 20rpx;
				}
	
				.beforePrice {
					font-size: 24rpx;
					font-family: PingFang SC;
					font-weight: 400;
					color: rgba(169, 169, 169, 1);
					text-decoration: line-through;
					margin-top: 18rpx;
				}
			}
	
			.sale {
				font-size: 24rpx;
				font-family: PingFang SC;
				font-weight: 400;
				line-height: 28rpx;
				color: rgba(133, 133, 133, 1);
			}
		}
	
		.dailyGoodsText {
			height: 32rpx;
			font-size: 28rpx;
			font-family: PingFang SC;
			font-weight: bold;
			line-height: 32rpx;
			color: rgba(51, 51, 51, 1);
		}
	
		.progressCon {
			width: 690rpx;
			height: 44rpx;
			display: flex;
			align-items: center;
	
			.progress {
				width: 560rpx;
				margin-right: 30rpx;
			}
	
			.hasRobbed {
				font-size: 24rpx;
				font-family: PingFang SC;
				font-weight: 400;
				line-height: 28rpx;
				color: rgba(251, 43, 3, 1);
			}
			.hasRobbedFinish{
				font-size: 24rpx;
				font-family: PingFang SC;
				font-weight: 400;
				line-height: 28rpx;
				color: rgba(251, 43, 3, 1);
			}
		}
	}
	
</style>

<!-- 单个商品详情信息 -->
<template>
	<view class="goods">
		<view class="goodsImg">
			<image :src="goodsImg"></image>
		</view>
		<view class="content">
			<view class="text">{{goodsName}}</view>
			<view class="goodsType">{{goodsType}}</view>
			<view class="price">
				<view class="nowPrice">￥{{nowPrice}}</view>
				<view class="beforePrice">￥{{beforePrice}}</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default{
		name:'oneShopDetail',
		props:{
			goodsName:{
				type:String,
				default:'韩国年糕料理（海岸城店）' 
			},
			goodsType:{
				type:String,
				default:'两人芝士双拼套餐' 
			},
			nowPrice:{
				type:String,
				default:'1.00' 
			},
			beforePrice:{
				type:String,
				default:'11.00' 
			}
		},
		data(){
			return{
				goodsImg:'../../static/images/Product/shangpintu.png'
			}
		}
	}
</script>

<style lang="less">
	// 商品信息
	.goods{
		width: 690rpx;
		height: 240rpx;
		background:rgba(255,255,255,1);
		border-radius:12rpx;
		display: flex;
		align-items: center;
		border-bottom: 1px solid rgba(243,243,243,1);
		.goodsImg{
			width: 182rpx;
			height: 180rpx;
			margin-right: 20rpx;
			image{
				width: 182rpx;
				height: 180rpx;
				border-radius:6px;
			}
		}
		.content{
			height: 180rpx;
			display: flex;
			flex-direction: column;
			justify-content: space-around;
			.text{
				font-size:28rpx;
				font-family:PingFang SC;
				font-weight:bold;
				line-height:32rpx;
				color:rgba(51,51,51,1);
			}
			.goodsType{
				font-size:24rpx;
				font-family:PingFang SC;
				font-weight:400;
				line-height:28rpx;
				color:rgba(112,112,112,1);
				margin-bottom: 24rpx;
			}
			.price{
				height: 42rpx;
				display: flex;
				// justify-content: space-around;
				align-items: center;
				.nowPrice{
					font-size:36rpx;
					font-family:PingFang SC;
					font-weight:bold;
					line-height:42rpx;
					color:rgba(241,0,0,1);
					margin-right: 12rpx;
				}
				.beforePrice{
					font-size:24rpx;
					font-family:PingFang SC;
					font-weight:400;
					line-height:28rpx;
					color:rgba(169,169,169,1);
					text-decoration: line-through;
				}
			}
		}
	}
</style>

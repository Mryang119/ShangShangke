<!-- 支付页面 -->
<!-- name:陈铄源 -->
<template>
	<view class="payContainer">
		<!-- 商品信息和价格 -->
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
		<!-- 支付图标 -->
		<view class="iconType">
		    <icon type="success" color="#25A5FF" size="73"/>
		    <text class="text">支付成功</text>
		</view>
		<!-- 查看我的订单按钮 -->
		<navigator class="payBtn" :url="myOrder">查看我的订单</navigator>
	</view>
</template>

<script>
	export default{
		data(){
			return{
				goodsImg:'../../../static/images/Product/shangpintu.png',  //商品图片
				goodsName:'韩国年糕料理（海岸城店）'  ,   // 商品门店名字
				goodsType:'两人芝士双拼套餐',   // 商品类型
				nowPrice:'1.00',   // 现在的价格
				beforePrice:'11.00',  // 以前的价格
				myOrder:'../../singlePage/myOrder/myOrder' // 查看我的订单
			}
		}
	}
</script>

<style lang="less" scoped>
	.payContainer{
		height: 1448rpx;
		background:rgba(246,246,246,1);
		padding-top: 20rpx;
		// 商品信息
		.goods{
			width: 710rpx;
			height: 248rpx;
			background:rgba(255,255,255,1);
			border-radius:12rpx;
			display: flex;
			margin: 0 20rpx;
			padding: 20rpx;
			.goodsImg{
				width: 232rpx;
				height: 208rpx;
				margin-right: 20rpx;
				image{
					width: 232rpx;
					height: 208rpx;
					border-radius:6px;
				}
			}
			.content{
				height: 208rpx;
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
					margin-bottom: 50rpx;
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
		// 支付成功图标
		.iconType{
			width: 750rpx;
			height: 238rpx;
			display: flex;
			flex-direction: column;
			justify-content: space-between;
			align-items: center;
			margin: 68rpx 0;
			.text{
				font-size:40rpx;
				font-family:PingFang SC;
				font-weight:bold;
				line-height:48rpx;
				color:rgba(51,51,51,1);
			}
		}
		// 查看我的订单
		.payBtn{
			width:464rpx;
			height:80rpx;
			background:rgba(36,167,255,1);
			border-radius:12rpx;
			line-height: 80rpx;
			text-align: center;
			color: #FFFFFF;
			margin: 122rpx auto;
		}
	}
</style>

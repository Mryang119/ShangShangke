<!-- 我的拼团 -->
<template>
	<view class="mySpellGroup">
		<view class="spellInformation" v-for="(item,index) in 3" :key="index">
			<view class="spellGroupTime">
				<view class="Time">2020-06-31 18:03:21</view>
				<view class="text">已支付，待成团</view>
			</view>
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
			<view class="countDownTime">
				<view class="countDown">拼团倒计时：1天15:25:12</view>
				<view class="inviteBtn">邀请好友参团</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default{
		data(){
			return{
				goodsImg:'../../../static/images/Product/shangpintu.png',
				goodsName:'韩国年糕料理（海岸城店）',
				goodsType:'两人芝士双拼套餐',
				nowPrice:'1.00',
				beforePrice:'11.00'
			}
		}
	}
</script>

<style lang="less" scoped>
	.mySpellGroup{
		width: 750rpx;
		height: 1380rpx;
		background:rgba(246,246,246,1);
		padding-top: 20rpx;
		.spellInformation{
			width: 750rpx;
			height: 394rpx;
			margin-bottom: 20rpx;
			background:#FFFFFF;
			padding: 0 30rpx;
			.spellGroupTime{
				width: 690rpx;
				height: 98rpx;
				display: flex;
				justify-content: space-between;
				align-items: center;
				font-size:28rpx;
				font-family:PingFang SC;
				font-weight:400;
				border-bottom:1px solid rgba(243,243,243,1);
				.time{
					color:rgba(51,51,51,1);
				}
				.text{
					color:rgba(133,133,133,1);
				}
			}
			.goods{
				width: 690rpx;
				height: 220rpx;
				background:rgba(255,255,255,1);
				border-radius:12rpx;
				display: flex;
				padding-top: 30rpx;
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
			.countDownTime{
				width: 690rpx;
				height: 76rpx;
				display: flex;
				justify-content: space-between;
				align-items: center;
				font-size:28rpx;
				font-family:PingFang SC;
				font-weight:400;
				.countDown{
					color:rgba(51,51,51,1);
					margin-top: 20rpx;
				}
				.inviteBtn{
					width:218rpx;
					height:56rpx;
					border:2rpx solid rgba(36,167,255,1);
					border-radius:8rpx;
					color:rgba(36,167,255,1);
					line-height: 56rpx;
					text-align: center;
				}
			}
		}
	}
</style>

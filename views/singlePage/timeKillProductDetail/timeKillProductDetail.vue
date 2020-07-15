<!-- 限时秒杀—————商品详情 -->
<template>
	<view class="productDetail">
		<!-- 轮播图 -->
		<view class="swiperWrap">
			<u-swiper :list="list" mode="number" indicator-pos="bottomRight" class="swiper" height="550"></u-swiper>
		</view>
		<!-- 价格和活动倒计时 -->
		<view class="price">
			<view class="priceNum">
				<!-- 活动价格 -->
				<span class="priceMoney">
					<span class="priceMoneyIcon">￥</span>
					<span class="priceMoneyNum">299.00</span>
				</span>
				<!-- 活动前价格 -->
				<span class="priceDelete">￥11.00</span>
			</view>
			<view class="priceTime">
				<span class="priceText">距结束还剩</span>
				<!-- 倒数 -->
				<view class="priceReciprocal">
					<u-count-down :timestamp="86400" separator="colon" separator-size="28" separator-color="#606266" font-size="24"
					 color="#FFFFFF" bg-color="#FE3B2B" :show-days="showDays"></u-count-down>
				</view>
			</view>
		</view>
		<!-- 商品名称和简介 -->
		<view class="productName">抹茶柚子千层 抹茶柚子千层 新鲜出炉 抹茶柚子千层 抹茶柚子千层 新鲜出炉</view>
		<!-- 评分和进店逛逛 -->
		<view class="inShop">
			<view class="inShopContainer">

				<!-- 店家头像 -->
				<view class="inShopImg">
					<image src="@/static/images/tabBarImage/myLoginHeader.png"></image>
				</view>
				<!-- 店家名字和评分 -->
				<view class="inShopCon">
					<!-- 店家名字 -->
					<view class="inShopName">
						SEASONG
					</view>
					<!-- 店家评分 -->
					<view class="inShopGrade">
						<view class="inShopGradeText">评分:</view>
						<u-rate :count="count" v-model="value" size="20" active-color="#FFAE44" disabled="true"></u-rate>
						<view class="inShopRate">4.0</view>
					</view>
				</view>

			</view>
			<!-- 进店逛逛按钮 -->
			<view class="inShopBtn">
				<button type="default" plain="true">进店逛逛</button>
			</view>
		</view>
		<!-- 优惠券 -->
		<view class="discount">
			<!-- 优惠 -->
			<view class="discountMoney">
				<view class="discountText">优惠</view>
				<view class="discountCoupon">
					<view class="couponCon">
						<view class="coupon">满10减7</view>
						<view class="coupon">满35减10</view>
					</view>
					<view class="couponNum">2个优惠</view>
				</view>
				<view class="discountMore">
					<image src="@/static/images/iconfont/more.png"></image>
				</view>
			</view>
			<!-- 门店 -->
			<view class="discountPlace">
				<view class="discountText">门店</view>
				<!-- 店名和地理位置 -->
				<view class="shop">
					<view class="shopName">韩国年糕料理（海岸城店）</view>
					<view class="shopCon">
						<image class="shopImg" src="@/static/images/iconfont/position.png"></image>
						<view class="shopPlace">文新思路34号海岸城西座F2座806</view>
					</view>
				</view>
			</view>
			<!-- 使用 -->
			<view class="discountUse">
				<view class="discountText">使用</view>
				<view class="tip">线上购买后前往门店，餐前出示订单券码</view>
			</view>
		</view>
		<!-- 商品详情 -->
		<view class="goodDetail">
			<view class="text">商品详情</view>
			<view class="goods">
				<view class="circle">·</view>
				<view class="goodsCon">
					<view class="goodsName">限时新品双人冰爽餐</view>
					<view class="goodsMoney">￥100.00</view>
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
						image: '../../../static/images/iconfont/shopitem.png'
					},
					{
						image: '../../../static/images/iconfont/shopitem.png'
					},
					{
						image: '../../../static/images/iconfont/shopitem.png'
					}
				],
				showDays: false,
				count: 5,
				value: 4
			}
		}
	}
</script>

<style lang="less">
	.productDetail {
		width: 750rpx;
		height: 2584rpx;
		background-color: #F6F6F6;

		// 轮播图
		.swiperWrap {
			width: 750rpx;
			height: 550rpx;

			.swiper {
				width: 100%;
				height: 100%;

				image {
					width: 750rpx;
					height: 550rpx;
				}
			}
		}

		// 价格和活动倒计时
		.price {
			width: 750rpx;
			height: 128rpx;
			padding: 0 30rpx;
			background: url('@/static/images/Product/shangpinxiangqingbgd.png');
			background-size: 750rpx 128rpx;
			background-repeat: no-repeat;
			display: flex;
			justify-content: space-between;

			// 价格
			.priceNum {
				height: 128rpx;
				display: flex;
				flex-direction: column;
				justify-content: center;

				// 活动价格
				.priceMoney {
					margin-bottom: 8rpx;

					// ￥
					.priceMoneyIcon {
						font-size: 30rpx;
						font-family: PingFang SC;
						font-weight: bold;
						line-height: 36rpx;
						color: rgba(255, 255, 255, 1);
					}

					.priceMoneyNum {
						font-size: 44rpx;
						font-family: PingFang SC;
						font-weight: bold;
						line-height: 52rpx;
						color: rgba(255, 255, 255, 1);
					}

				}

				// 活动前价格
				.priceDelete {
					font-size: 24rpx;
					font-family: PingFang SC;
					font-weight: 400;
					line-height: 28rpx;
					color: rgba(255, 255, 255, 1);
					text-decoration: line-through;
				}
			}

			// 时间
			.priceTime {
				display: flex;
				flex-direction: column;
				justify-content: center;
				align-items: center;
				margin-right: 15rpx;

				// 距结束还剩
				.priceText {
					font-size: 12px;
					font-family: PingFang SC;
					font-weight: 400;
					line-height: 14px;
					color: rgba(255, 57, 44, 1);
					margin-bottom: 10rpx;
				}

				// 倒计时
				.priceReciprocal {}
			}
		}

		// 商品名称和简介
		.productName {
			width: 750rpx;
			height: 132rpx;
			font-size: 28rpx;
			font-family: PingFang SC;
			font-weight: bold;
			line-height: 40rpx;
			color: rgba(51, 51, 51, 1);
			background-color: #FFF;
			padding: 30rpx;
			margin-bottom: 20rpx;
		}

		// 商家评分和进店逛逛
		.inShop {
			width: 750rpx;
			height: 152rpx;
			background: rgba(255, 255, 255, 1);
			display: flex;
			align-items: center;
			padding: 0 30rpx;
			justify-content: space-between;
			margin-bottom: 20rpx;

			// 头像和评分
			.inShopContainer {
				width: 330rpx;
				display: flex;
				align-items: center;
				justify-content: space-between;

				// 头像
				.inShopImg {
					width: 92rpx;
					height: 92rpx;

					image {
						width: 92rpx;
						height: 92rpx;
					}
				}

				// 名字和评分
				.inShopCon {
					height: 100rpx;
					margin-top: 40rpx;

					// 名字
					.inShopName {
						font-size: 32rpx;
						font-family: PingFang SC;
						font-weight: bold;
						line-height: 38rpx;
						color: rgba(39, 39, 39, 1);
					}

					// 评分
					.inShopGrade {
						.inShopGradeText {
							font-size: 24rpx;
							font-family: PingFang SC;
							font-weight: 400;
							line-height: 28rpx;
							color: rgba(39, 39, 39, 1);
							display: inline;
						}

						.inShopRate {
							font-size: 9px;
							font-family: PingFang SC;
							font-weight: 400;
							line-height: 11px;
							color: rgba(255, 174, 68, 1);
							display: inline;
						}
					}
				}

			}

			// 进店
			.inShopBtn {
				width: 192rpx;
				height: 66rpx;
				opacity: 1;

				button {
					width: 192rpx;
					height: 66rpx;
					border: 2rpx solid rgba(36, 167, 255, 1);
					border-radius: 34rpx;
					font-size: 32rpx;
					font-family: PingFang SC;
					font-weight: 400;
					line-height: 66rpx;
					color: rgba(36, 167, 255, 1);
				}
			}
		}
		// 优惠券
		.discount{
			width: 750rpx;
			height: 300rpx;
			background-color: #FFFFFF;
			// 优惠
			.discountMoney{
				width: 750rpx;
				height: 80rpx;
				padding: 30rpx;
				display: flex;
				align-items: center;
				// 优惠
				.discountText{
					font-size:28rpx;
					font-family:PingFang SC;
					font-weight:400;
					line-height:32rpx;
					color:rgba(133,133,133,1);
					margin-right:40rpx ;
				}
				// 满减
				.discountCoupon{
					width: 576rpx;
					display: flex;
					align-items: center;
					justify-content: space-between;
					// 满减金额
					.couponCon{
						height:46rpx;
						display: flex;
						.coupon{
							width:124rpx;
							height:46rpx;
							background:rgba(255,239,239,1);
							border-radius:10rpx;
							color: rgba(251,43,3,1);
							font-size: 24rpx;
							text-align: center;
							line-height: 46rpx;
							margin-right: 20rpx;
						}
					}
					// 几个优惠
					.couponNum{
						font-size:12px;
						font-family:PingFang SC;
						font-weight:400;
						line-height:14px;
						color:rgba(133,133,133,1);
						
					}
				}
				// 更多
				.discountMore{
					margin-left: 10rpx;
					image{
						width: 8.5rpx;
						height: 16.94rpx;
					}
				}
			}
			// 门店位置
			.discountPlace{
				width: 750rpx;
				height: 124rpx;
				padding: 30rpx;
				display: flex;
				// 门店
				.discountText{
					height: 124rpx;
					font-size:28rpx;
					font-family:PingFang SC;
					font-weight:400;
					line-height:32rpx;
					color:rgba(133,133,133,1);
					margin-right:40rpx ;
				}
				// 店名和地理位置
				.shop{
					width: 594rpx;
					height: 124rpx;
					
					
					// 店名
					.shopName{
						font-size:32rpx;
						font-family:PingFang SC;
						font-weight:bold;
						line-height:38rpx;
						color:rgba(51,51,51,1);
						margin-bottom:12rpx ;
					}
					// 地理位置
					.shopCon{
						display: flex;
						align-items: center;
						// 地理图标
						.shopImg{
							width: 24.14rpx;
							height: 28rpx;
							margin-right:14rpx ;
						}
						// 详细地理位置
						.shopPlace{
							font-size:28rpx;
							font-family:PingFang SC;
							font-weight:400;
							line-height:32rpx;
							color:rgba(112,112,112,1);
						}
					}
				}
			}
			// 使用
			.discountUse{
				width: 750rpx;
				height: 76rpx;
				padding: 0 30rpx;
				display: flex;
				align-items: center;
				// 使用
				.discountText{
					height:76rpx ;
					font-size:28rpx;
					font-family:PingFang SC;
					font-weight:400;
					line-height:76rpx;
					color:rgba(133,133,133,1);
					margin-right:40rpx ;
				}
				.tip{
					font-size:28rpx;
					font-family:PingFang SC;
					font-weight:400;
					color:rgba(51,51,51,1);
				}
			}
		}
		// 商品详情
		.goodDetail{
			width: 750rpx;
			height: 146rpx;
			padding: 0 30rpx;
			display: flex;
			flex-direction: column;
			justify-content: center;
			// 商品详情文本
			.text{
				font-size:32rpx;
				font-family:PingFang SC;
				font-weight:bold;
				line-height:38rpx;
				color:rgba(51,51,51,1);
			}
			// 商品名称和价格
			.goods{
				display: flex;
				// 点
				.circle{}
				.goodsCon{
					display: flex;
					// 商品名字
					.goodsName{
						font-size:28rpx;
						font-family:PingFang SC;
						font-weight:400;
						line-height:32rpx;
						color:rgba(51,51,51,1);
					}
					// 商品价格
					.goodsMoney{
						font-size:28rpx;
						font-family:PingFang SC;
						font-weight:bold;
						line-height:32rpx;
						color:rgba(51,51,51,1);
					}
				}
			}
		}
	}
</style>

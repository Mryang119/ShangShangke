<!-- 限时秒杀—————商品详情 -->
<template>
	<view class="productDetail">
		<!-- 轮播图 -->
		<view class="swiperWrap">
			<u-swiper :list="imgList" mode="number" indicator-pos="bottomRight" class="swiper" height="550">

			</u-swiper>
		</view>
		<!-- 限时秒杀的商品详情 -->
		<!-- v-if="option.type==='timeKill'" -->
		<view class="timeKillProductDetail">
			<view class="price">
				<view class="priceNum">
					<span class="priceMoney">
						<span class="priceMoneyIcon">￥</span>
						<span class="priceMoneyNum">299.00</span>
					</span>
					<span class="priceDelete">￥11.00</span>
				</view>
				<view class="priceTime">
					<span class="priceText">距结束还剩</span>
					<view class="priceReciprocal">
						<u-count-down :timestamp="86400" separator="colon" separator-size="28" separator-color="#606266" font-size="24"
						 color="#FFFFFF" bg-color="#FE3B2B" :show-days="false"></u-count-down>
					</view>
				</view>
			</view>
			<view class="productName">抹茶柚子千层 抹茶柚子千层 新鲜出炉 抹茶柚子千层 抹茶柚子千层 新鲜出炉</view>
		</view>


		<!-- 每日一品的商品详情 -->
		<!-- <oneDayEatShopDetail /> -->

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
						<u-rate :count="5" v-model="3.5" size="20" active-color="#FFAE44" disabled="true"></u-rate>
						<view class="inShopRate">{{value}}</view>
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
			<view class="discountMoney" @click="isShow">
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

		<!-- 底部优惠券模态框 -->
		<u-popup v-model="show" mode="bottom" border-radius="52" closeable="true" safe-area-inset-bottom="true">
			<view class="modalBox">
				<view class="text">优惠</view>
				<!-- 优惠券点击领取 -->
				<shopDetailGetCoupon :distanceList='afterList' />
			</view>
		</u-popup>

		<!-- 拼团 -->
		<!-- <groupBooking /> -->


		<!-- 商品详情 -->
		<view class="goodDetail">
			<view class="text">商品详情</view>
			<view class="goods">
				<view class="circle"></view>
				<view class="goodsCon">
					<view class="goodsName">限时新品双人冰爽餐</view>
					<view class="goodsMoney">￥100.00</view>
				</view>
			</view>
		</view>

		<!-- 温馨提示 -->
		<warmTip />

		<!-- 商品导航 -->
		<view class="goodsNav">
			<!-- 客服/分享/收藏 -->
			<view class="navCon">
				<navigator class="NavIcon" :url="myService">
					<u-icon name="kefu-ermai" class="icon" size="44"></u-icon>
					<view class="text">客服</view>
				</navigator>
				<view class="NavIcon">
					<u-icon name="zhuanfa" class="icon" size="44"></u-icon>
					<view class="text">分享</view>
				</view>
				<view class="NavIcon">
					<u-icon :name="starName?'star':'star-fill' " class="icon" size="44" :color="starColor?'':'#FF8800'" @click="toggle"></u-icon>
					<view class="text">收藏</view>
				</view>
			</view>
			<!-- 立即购买 -->
			<navigator class="navBuy" :url="confirmOrder">
				<view class="buyNum">￥11.00</view>
				<view class="toBug">立即购买</view>
			</navigator>
		</view>
	</view>
</template>

<script>
	import shopDetailGetCoupon from '../../../src/publicComponents/shopDetailGetCoupon.vue'   // 商品详情点击领取优惠券
	import groupBooking from '../groupBooking/groupBooking.vue'   // 拼团
	import oneDayEatShopDetail from '../oneDayEatShopDetail/oneDayEatShopDetail.vue'  //每日一品
	import warmTip from '../../../src/publicComponents/warmTip.vue'  //温馨提示
	export default {
		data() {
			return {
				imgList: [{
						image: '../../../static/images/iconfont/shopitem.png'
					},
					{
						image: '../../../static/images/iconfont/shopitem.png'
					},
					{
						image: '../../../static/images/iconfont/shopitem.png'
					}
				],
				value: 4.5, //评分星星的值
				myService: '../../singlePage/myService/myService', // 跳转到我的客服页面
				confirmOrder: '../../singlePage/confirmOrder/confirmOrder', // 跳转到确认订单页面
				starColor: true, //收藏按钮星星颜色
				starName: true, // 收藏按钮星星名字
				type: 'timekill', //限时秒杀--详情页面--默认字段
				// 模态框数据
				show: false, // 控制模态框显示隐藏
				// hasRobbed:80,   // 已抢完
				afterList: [{
						state: 1,
						price: '100',
						fullPrice: '1000',
						useTime: '2020-06-28'
					},
					{
						state: 1,
						price: '200',
						fullPrice: '2000',
						useTime: '2020-06-28'
					}
				]
			}
		},
		components: {
			shopDetailGetCoupon,   // 商品详情点击领取优惠券
			groupBooking,         //拼团商品详情模块
			oneDayEatShopDetail,   //每日一品商品详情模块
			warmTip               //温馨提示
		},
		methods: {
			// 切换收藏样式
			toggle() {
				this.starColor = !this.starColor
				this.starName = !this.starName
			},
			// 控制模态框的显示隐藏
			isShow() {
				this.show = !this.show
			}
		},
		onLoad(option) {
			console.log(option) // killtime

		}
	}
</script>

<style lang="less" scoped>
	.productDetail {
		width: 750rpx;
		height: 2500rpx;
		background-color: #F6F6F6;
		position: relative;

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

		// 限时秒杀-商品详情
		.timeKillProductDetail {

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
		.discount {
			width: 750rpx;
			height: 300rpx;
			background-color: #FFFFFF;
			margin-bottom: 20rpx;

			// 优惠
			.discountMoney {
				width: 750rpx;
				height: 80rpx;
				padding: 30rpx;
				display: flex;
				align-items: center;

				// 优惠
				.discountText {
					font-size: 28rpx;
					font-family: PingFang SC;
					font-weight: 400;
					line-height: 32rpx;
					color: rgba(133, 133, 133, 1);
					margin-right: 40rpx;
				}

				// 满减
				.discountCoupon {
					width: 576rpx;
					display: flex;
					align-items: center;
					justify-content: space-between;

					// 满减金额
					.couponCon {
						height: 46rpx;
						display: flex;

						.coupon {
							width: 124rpx;
							height: 46rpx;
							background: rgba(255, 239, 239, 1);
							border-radius: 10rpx;
							color: rgba(251, 43, 3, 1);
							font-size: 24rpx;
							text-align: center;
							line-height: 46rpx;
							margin-right: 20rpx;
						}
					}

					// 几个优惠
					.couponNum {
						font-size: 12px;
						font-family: PingFang SC;
						font-weight: 400;
						line-height: 14px;
						color: rgba(133, 133, 133, 1);

					}
				}

				// 更多
				.discountMore {
					margin-left: 10rpx;
					padding-bottom: 5rpx;

					image {
						width: 8.5rpx;
						height: 16.94rpx;
					}
				}
			}

			// 门店位置
			.discountPlace {
				width: 750rpx;
				height: 124rpx;
				padding: 30rpx;
				display: flex;

				// 门店
				.discountText {
					height: 124rpx;
					font-size: 28rpx;
					font-family: PingFang SC;
					font-weight: 400;
					line-height: 32rpx;
					color: rgba(133, 133, 133, 1);
					margin-right: 40rpx;
				}

				// 店名和地理位置
				.shop {
					width: 594rpx;
					height: 124rpx;


					// 店名
					.shopName {
						font-size: 32rpx;
						font-family: PingFang SC;
						font-weight: bold;
						line-height: 38rpx;
						color: rgba(51, 51, 51, 1);
						margin-bottom: 12rpx;
					}

					// 地理位置
					.shopCon {
						display: flex;
						align-items: center;

						// 地理图标
						.shopImg {
							width: 24.14rpx;
							height: 28rpx;
							margin-right: 14rpx;
						}

						// 详细地理位置
						.shopPlace {
							font-size: 28rpx;
							font-family: PingFang SC;
							font-weight: 400;
							line-height: 32rpx;
							color: rgba(112, 112, 112, 1);
						}
					}
				}
			}

			// 使用
			.discountUse {
				width: 750rpx;
				height: 76rpx;
				padding: 0 30rpx;
				display: flex;
				align-items: center;

				// 使用
				.discountText {
					height: 76rpx;
					font-size: 28rpx;
					font-family: PingFang SC;
					font-weight: 400;
					line-height: 76rpx;
					color: rgba(133, 133, 133, 1);
					margin-right: 40rpx;
				}

				.tip {
					font-size: 28rpx;
					font-family: PingFang SC;
					font-weight: 400;
					color: rgba(51, 51, 51, 1);
				}
			}
		}

		// 底部优惠券模态框
		.modalBox {
			padding: 0 30rpx;

			.text {
				width: 690rpx;
				height: 102rpx;
				text-align: center;
				font-size: 36rpx;
				font-family: PingFang SC;
				font-weight: bold;
				line-height: 102rpx;
				color: rgba(51, 51, 51, 1);
			}

		}

		// 商品详情
		.goodDetail {
			width: 750rpx;
			height: 146rpx;
			padding: 0 30rpx;
			display: flex;
			flex-direction: column;
			justify-content: center;
			background-color: #FFFFFF;
			margin-bottom: 20rpx;

			// 商品详情文本
			.text {
				font-size: 32rpx;
				font-family: PingFang SC;
				font-weight: bold;
				line-height: 38rpx;
				color: rgba(51, 51, 51, 1);
			}

			// 商品名称和价格
			.goods {
				display: flex;
				margin-top: 16rpx;
				align-items: center;

				// 点
				.circle {
					width: 4px;
					height: 4px;
					background: rgba(51, 51, 51, 1);
					border-radius: 50%;
					margin-right: 14rpx;
				}

				.goodsCon {
					width: 666rpx;
					display: flex;
					justify-content: space-between;

					// 商品名字
					.goodsName {
						font-size: 28rpx;
						font-family: PingFang SC;
						font-weight: 400;
						line-height: 32rpx;
						color: rgba(51, 51, 51, 1);
					}

					// 商品价格
					.goodsMoney {
						font-size: 28rpx;
						font-family: PingFang SC;
						font-weight: bold;
						line-height: 32rpx;
						color: rgba(51, 51, 51, 1);
					}
				}
			}
		}

		// 商品导航
		.goodsNav {
			width: 750rpx;
			height: 98rpx;
			background: rgba(255, 255, 255, 1);
			position: fixed;
			bottom: 0;
			left: 0;
			display: flex;
			justify-content: space-between;

			.navCon {
				width: 374rpx;
				height: 98rpx;
				display: flex;
				justify-content: space-around;
				align-items: center;

				.NavIcon {
					height: 44rpx;
					height: 78rpx;
					display: flex;
					flex-direction: column;
					justify-content: space-between;
					align-items: center;

					.icon {
						width: 44rpx;
						height: 44rpx;
					}

					.text {
						font-size: 22rpx;
						font-family: PingFang SC;
						font-weight: 400;
						line-height: 26rpx;
						color: rgba(102, 102, 102, 1);
					}
				}
			}

			.navBuy {
				width: 376rpx;
				height: 98rpx;
				background: rgba(255, 47, 47, 1);
				font-size: 36rpx;
				font-family: PingFang SC;
				font-weight: bold;
				line-height: 42rpx;
				color: rgba(255, 255, 255, 1);
				display: flex;
				justify-content: space-around;
				align-items: center;
				text-align: center;

				.buyNum {
					margin-top: 2rpx;
				}
			}
			// 天天免费抢，去购买样式变化
			// .navBuyFinish{
			// 	width: 376rpx;
			// 	height: 98rpx;
			// 	background:rgba(255,156,156,1);
			// 	font-size: 36rpx;
			// 	font-family: PingFang SC;
			// 	font-weight: bold;
			// 	line-height: 42rpx;
			// 	color: rgba(255, 255, 255, 1);
			// 	display: flex;
			// 	justify-content: space-around;
			// 	align-items: center;
			// 	text-align: center;
				
			// 	.buyNum {
			// 		margin-top: 2rpx;
			// 	}
			// }
		}
	}
</style>

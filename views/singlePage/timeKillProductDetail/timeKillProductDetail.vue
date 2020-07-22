<!-- 限时秒杀—————商品详情 -->
<template>
	<view class="productDetail">
		<!-- 轮播图 -->
		<view class="swiperWrap">
			<u-swiper :list="list" mode="number" indicator-pos="bottomRight" class="swiper" height="550"></u-swiper>
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
						 color="#FFFFFF" bg-color="#FE3B2B" :show-days="showDays"></u-count-down>
					</view>
				</view>
			</view>
			<view class="productName">抹茶柚子千层 抹茶柚子千层 新鲜出炉 抹茶柚子千层 抹茶柚子千层 新鲜出炉</view>	
		</view>
		
		
		<!-- 每日一品的商品详情 -->
		<!-- v-else-if="option.type==='oneDayEat || group'" -->
		<!-- progressCon进度条  v-if="option.type==='free'" -->
		<!-- <view class="dailyGoodsProductDetail">
			<view class="dailyGoodsPrice">
				<view class="priceCon">
					<view class="nowPrice">￥299.00</view>
					<view class="beforePrice">￥11.00</view>
				</view>
				<view class="sale">月售2333</view>
			</view>
			<view class="dailyGoodsText">抹茶柚子千层 抹茶柚子千层 新鲜出炉</view>
			<view class="progressCon">
				<u-line-progress class="progress" :percent="hasRobbed" :show-percent="false"
					:round="true" active-color="#fb2b03" height="14">
				</u-line-progress>
				<view class="hasRobbed">已抢{{hasRobbed}}%</view>
			</view>
		</view> -->
		
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
		<view class="discount"  @click="isShow">
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
		
		<!-- 底部优惠券模态框 -->
		<u-popup v-model="show" mode="bottom" border-radius="52" closeable="true" safe-area-inset-bottom="true">
			<view class="modalBox">
				<view class="text">优惠</view>
				<orderCoupon />
			</view>
		</u-popup>
		
		<!-- 拼团 -->
		<!-- v-if="option.type==='group'" -->
		<!-- <view class="group">
			<view class="groupMore">
				<view class="people">10人正在拼团，可直接参与</view>
				<view class="more">
					<view class="text">查看更多</view>
					<image src="@/static/images/iconfont/more.png"></image>
				</view>
			</view>
			<view class="grouping">
				<view class="oneGroup"  v-for="(item,index) in 2" :key="index">
					<view class="userImg">
						<image src="@/static/images/tabBarImage/myLoginHeader.png"></image>
						<view class="userName">吴亦凡</view>
					</view>
					<view class="toGroupCon">
						<view class="shortCon">
							<view class="shortPeople">还差<view class="people">1人</view>拼成</view>
							<view class="shortTime"> 
								剩余<u-count-down :timestamp="timestamp" color="#5F5C5F" font-size="24" :show-days="false"></u-count-down>
							</view>
						</view>
						<view class="toGroupBtn">去拼团</view>
					</view>
								
				</view>
			</view>
		</view>
		 -->
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
				showDays: false, //倒计时隐藏天
				count: 5, // 评分星星的个数
				value: 4, //评分星星的值
				myService:'../../singlePage/myService/myService',  // 跳转到我的客服页面
				confirmOrder:'../../singlePage/confirmOrder/confirmOrder', // 跳转到确认订单页面
				starColor:true,  //收藏按钮星星颜色
				starName:true,  // 收藏按钮星星名字
				timestamp:86300,  //拼团倒计时时间
				type:'timekill', //限时秒杀--详情页面--默认字段
				hasRobbed:50,  // 天天免费抢已抢进度
				show: false, // 控制模态框显示隐藏
				
			}
		},
		methods: {
			toggle(){
				this.starColor = !this.starColor
				this.starName = !this.starName
			},
			// 控制模态框的显示隐藏
			isShow() {
				this.show = !this.show
			},
		},
		onLoad(option) {
			console.log(option.type) // killtime
			
		}
	}
</script>

<style lang="less">
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
		.timeKillProductDetail{
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
		
		// 每日一品-商品详情
		.dailyGoodsProductDetail{
			width: 750rpx;
			height: 164rpx;
			background:rgba(255,255,255,1);
			padding: 0 30rpx;
			margin-bottom: 20rpx;
			padding-top: 30rpx;
			.dailyGoodsPrice{
				height: 52rpx;
				display: flex;
				align-items: center;
				margin-bottom: 20rpx;
				justify-content: space-between;
				.priceCon{
					display: flex;
					.nowPrice{
						font-size:44rpx;
						font-family:PingFang SC;
						font-weight:bold;
						color:rgba(241,0,0,1);
						margin-right: 20rpx;
					}
					.beforePrice{
						font-size:24rpx;
						font-family:PingFang SC;
						font-weight:400;
						color:rgba(169,169,169,1);
						text-decoration: line-through;
						margin-top: 18rpx;
					}
				}
				.sale{
					font-size:24rpx;
					font-family:PingFang SC;
					font-weight:400;
					line-height:28rpx;
					color:rgba(133,133,133,1);
				}
			}
			.dailyGoodsText{
				height: 32rpx;
				font-size:28rpx;
				font-family:PingFang SC;
				font-weight:bold;
				line-height:32rpx;
				color:rgba(51,51,51,1);
			}
			.progressCon{
				width: 690rpx;
				height: 88rpx;
				display: flex;
				justify-content: space-between;
				.progress{
					width: 560rpx;
				}
				.hasRobbed{
					font-size:24rpx;
					font-family:PingFang SC;
					font-weight:400;
					line-height:28rpx;
					color:rgba(251,43,3,1);
				}
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
		
			// 优惠券
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
		
		// 拼团
		.group{
			width: 750rpx;
			height: 384rpx;
			background: #FFFFFF;
			margin-bottom: 20rpx;
			padding: 0 30rpx;
			// 拼团人数
			.groupMore{
				height: 92rpx;
				display: flex;
				justify-content: space-between;
				align-items: center;
				.people{
					font-size:28rpx;
					font-family:PingFang SC;
					font-weight:400;
					line-height:32rpx;
					color:rgba(51,51,51,1);
				}
				.more{
					display: flex;
					align-items: center;
					.text{
						font-size:24rpx;
						font-family:PingFang SC;
						font-weight:400;	
						line-height:28rpx;
						color:rgba(133,133,133,1);
					}
					image{
						width: 8.5rpx;
						height: 16.94rpx;
						margin-left: 10rpx;
					}
				}
			}
			// 拼团内容
			.grouping{
				width: 690rpx;
				height: 292rpx;
				.oneGroup{
					height: 146rpx;
					border-top: 2rpx solid rgba(243,243,243,1);
					display: flex;
					justify-content: space-between;
					align-items: center;
					.userImg{
						height: 146rpx;
						display: flex;
						align-items: center;
						image{
							width: 86rpx;
							height: 86rpx;
							border-radius: 50%;
							margin-right: 20rpx;
						}
						.userName{
							font-size:28rpx;
							font-family:PingFang SC;
							font-weight:400;
							line-height:32rpx;
							color:rgba(51,51,51,1);
							
						}
					}
					.toGroupCon{
						width: 308rpx;
						display: flex;
						.shortCon{
							text-align: right;
							.shortPeople{
								font-size:24rpx;
								font-family:PingFang SC;
								font-weight:400;
								line-height:28rpx;
								color:rgba(51,51,51,1);
								.people{
									color:rgba(246,54,57,1);
									display: inline;
								}
							}
							.shortTime{
								font-size:24rpx;
								font-family:PingFang SC;
								font-weight:400;
								line-height:28rpx;
								color:rgba(102,102,102,1);
							}
						}
						.toGroupBtn{
							width:110rpx;
							height:50rpx;
							background:rgba(255,47,47,1);
							border-radius:8rpx;
							font-size:24rpx;
							font-family:PingFang SC;
							font-weight:400;
							line-height:50rpx;
							color:rgba(255,255,255,1);
							text-align: center;
							margin-left: 22rpx;
						}
					}			
				}
			}
		}
		
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
			.navCon{
				width: 374rpx;
				height: 98rpx;
				display: flex;
				justify-content: space-around;
				align-items: center;
				.NavIcon{
					height: 44rpx;
					height: 78rpx;
					display: flex;
					flex-direction: column;
					justify-content: space-between;
					align-items: center;
					.icon{
						width: 44rpx;
						height: 44rpx;
					}
					.text{
						font-size:22rpx;
						font-family:PingFang SC;
						font-weight:400;
						line-height:26rpx;
						color:rgba(102,102,102,1);
					}
				}
			}
			.navBuy{
				width:376rpx;
				height:98rpx;
				background:rgba(255,47,47,1);
				font-size:36rpx;
				font-family:PingFang SC;
				font-weight:bold;
				line-height:42rpx;
				color:rgba(255,255,255,1);
				display: flex;
				justify-content: space-around;
				align-items: center;
				text-align: center;
				.buyNum{
					margin-top: 2rpx;
				}
			}
		}
	}
</style>

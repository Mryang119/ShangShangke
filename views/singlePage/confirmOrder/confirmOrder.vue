<!-- 限时秒杀——商品详情——确认订单 -->
<!-- name:陈铄源 -->
<template>
	<view class="orderContainer">
		<!-- 店名/商品/数量/券/优惠/金额 -->
		<view class="orderNews">
			<!-- 店名 -->
			<view class="shopName">{{shopName}}</view>
			<!-- 商品信息 -->
			<view class="goods">
				<!-- 商品头像图 -->
				<view class="Img">
					<image :src="shopImg"></image>
				</view>
				<!--  商品名字和价格-->
				<view class="shopCon">
					<view class="conName">{{shopType}}</view>
					<view class="priceCon">
						<view class="price">￥{{nowPrice}}</view>
						<view class="priceDelete">￥{{beforePrice}}</view>
					</view>
				</view>
			</view>
			<!-- 商品数量 -->
			<view class="goodsNum">
				<view class="text">购买数量</view>
				<view class="num">
					<u-number-box v-model="nowNumber" :input-width="80" :input-height="58" :min="1" :disabled-input="true" :bg-color="bgColor"></u-number-box>
				</view>
			</view>
			<!-- 平台优惠券 -->
			<view class="goodsCoupon" @click="toChooseCoupon">
				<view class="text">平台优惠券</view>
				<view class="couponCon">
					<!-- v-if="usableList.length===0" -->
					<!-- <view class="noUse">暂无可用</view> -->
					<!-- v-else -->
					<view class="usable">2个可用</view>   <!-- usableList.length -->
					<image src="@/static/images/iconfont/more.png"></image>
				</view>
			</view>
			<!-- 店铺优惠 -->
			<view class="goodsCoupon" @click="isShow">
				<view class="text">店铺优惠</view>
				<view class="couponCon">
					<!-- v-if="usableList.length===0" -->
					<view class="noUse">暂无可用</view>
					<!-- v-else -->
					<!-- <view class="usable">2个可用</view> -->
					<image src="@/static/images/iconfont/more.png"></image>
				</view>
			</view>
			<!-- 总金额 -->
			<view class="totalPrice">
				<view class="text">小计</view>
				<view class="price">￥{{sumPrice}}</view>
			</view>
		</view>
		<!-- 底部优惠券模态框 -->
		<u-popup v-model="show" mode="bottom" border-radius="52" closeable="true" safe-area-inset-bottom="true">
			<view class="modalBox">
				<view class="text">优惠</view>
				<orderCoupon />
			</view>
		</u-popup>
		<!-- 提示信息 -->
		<view class="orderTip">
			<image src="@/static/images/iconfont/tishi.png"></image>
			<view class="text" v-if="orderCountDownTime !== 0">本单即将
			<u-count-down :timestamp="orderCountDownTime" separator="zh" font-size="28" :autoplay="false" color="#24a7ff" separator-size="28" separator-color="#24a7ff" :show-hours="false" :show-minutes="false" :show-seconds="false"></u-count-down>
			后过期，请尽快使用！</view>
			<view class="text" v-else>本单已过期!</view>
		</view>
		<view class="toBuy" @click="toPay">
			<view class="toBuy">
				<view class="price">￥{{sumPrice}}</view>
				<view class="text">去付款</view>
			</view>
		</view>
	</view>
</template>

<script>
	import orderCoupon from '../../../src/publicComponents/orderCoupon.vue'
	export default {
		data() {
			return {
				bgColor: '#FFFFFF', // 商品数量步进器背景颜色
				chooseCoupon: '../../singlePage/chooseCoupon/chooseCoupon', // 平台优惠券跳转地址
				show: false, // 控制模态框显示隐藏
				shopName: '韩国年糕料理（海岸城店）', // 店名
				shopImg: '../../../static/images/Product/shangpintu.png', //商品图片
				shopType: '限时新品双人冰爽餐', // 商品类型
				nowPrice: '79.00', // 现在的价格
				beforePrice: '399.00', // 以前的价格
				nowNumber:1,     // 订单当前的选购数量起始为1 
				orderCountDownTime:604799     // 倒计时时间
			}
		},
		components: {
			orderCoupon
		},
		methods: {
			// 控制模态框的显示隐藏
			isShow() {
				this.show = !this.show
			},
			// 支付逻辑
			toPay() {
				uni.requestPayment({
					provider: 'wxpay',
					timeStamp: String(Date.now()),
					nonceStr: 'A1B2C3D4E5',
					package: 'prepay_id=wx20180101abcdefg',
					signType: 'MD5',
					paySign: 'MD5(appId=wxd678efh567hg6787&nonceStr=5K8264ILTKCH16CQ2502SI8ZNMTM67VS&package=prepay_id=wx2017033010242291fcfe0db70013231072&signType=MD5&timeStamp=1490840662&key=qazwsxedcrfvtgbyhnujmikolp111111) = 22D9B4E54AB1950F51E0649E8810ACD6',
					success: function(res) {
						console.log('success:' + JSON.stringify(res));
					},
					fail: function(err) {
						console.log('fail:' + JSON.stringify(err));
					}
				})
			},
			// 跳转到选择优惠券页面
			toChooseCoupon(){
				uni.navigateTo({
					url:`/views/singlePage/chooseCoupon/chooseCoupon?sumPrice=${this.sumPrice}`
				})
			}
		},
		computed:{
			sumPrice(){
				let countumPrice = this.nowNumber * this.nowPrice
				let sumPrice = parseFloat(countumPrice).toFixed(2)
				return sumPrice
			}
		},
		onLoad(options) {
			if(options.type){
				this.$refs.uCountDown.start();
			}
		}
	}
</script>

<style lang="less" scoped>
	.orderContainer {
		width: 750rpx;
		height: 1448rpx;
		background: #F6F6F6;
		padding-top: 20rpx;

		// 店名/商品/数量/券/优惠/金额
		.orderNews {
			width: 750rpx;
			height: 632rpx;
			background: #FFFFFF;
			padding: 0 30rpx;
			margin-bottom: 20rpx;

			// 店名
			.shopName {
				width: 690rpx;
				height: 98rpx;
				font-size: 32rpx;
				font-family: PingFang SC;
				font-weight: bold;
				line-height: 38rpx;
				color: rgba(51, 51, 51, 1);
				border-bottom: 1px solid rgba(243, 243, 243, 1);
				line-height: 98rpx;
			}

			// 商品信息
			.goods {
				width: 690rpx;
				height: 214rpx;
				display: flex;
				align-items: center;

				// 商品头像图
				.Img {
					width: 148rpx;
					height: 146rpx;
					background: rgba(255, 255, 255, 1);
					margin-right: 20rpx;

					image {
						width: 148rpx;
						height: 146rpx;
						border-radius: 6px;
					}
				}

				.shopCon {
					width: 552rpx;
					display: flex;
					justify-content: space-between;
					margin-bottom: 60rpx;

					.conName {
						font-size: 28rpx;
						font-family: PingFang SC;
						font-weight: bold;
						line-height: 32rpx;
						color: rgba(51, 51, 51, 1);
					}

					.priceCon {
						height: 70rpx;
						display: flex;
						flex-direction: column;
						justify-content: space-between;

						.price {
							width: 80rpx;
							height: 32rpx;
							font-size: 28rpx;
							font-family: PingFang SC;
							font-weight: bold;
							line-height: 32rpx;
							color: rgba(255, 47, 47, 1);
						}

						.priceDelete {
							font-size: 24rpx;
							font-family: PingFang SC;
							font-weight: 400;
							line-height: 28rpx;
							color: rgba(169, 169, 169, 1);
							text-decoration: line-through;

						}
					}
				}
			}

			// 购买数量
			.goodsNum {
				width: 690rpx;
				height: 58rpx;
				display: flex;
				justify-content: space-between;
				align-items: center;
				margin-bottom: 16rpx;

				.text {
					font-size: 28rpx;
					font-family: PingFang SC;
					font-weight: bold;
					line-height: 58rpx;
					color: rgba(51, 51, 51, 1);
				}

				.num {
					font-size: 26rpx;
					font-weight: bold;
					line-height: 58rpx;
					height: 58rpx;
					background: #F6F6F6;
					border: 2rpx solid rgba(232, 232, 232, 1);
					;
				}
			}

			// 平台优惠券 / 店铺优惠
			.goodsCoupon {
				width: 690rpx;
				height: 68rpx;
				display: flex;
				justify-content: space-between;
				align-items: center;
				margin-bottom: 10rpx;

				.text {
					font-size: 28rpx;
					font-family: PingFang SC;
					font-weight: bold;
					line-height: 32rpx;
					color: rgba(51, 51, 51, 1);
				}

				.couponCon {
					height: 68rpx;
					display: flex;
					align-items: center;

					.noUse {
						font-size: 28rpx;
						font-family: PingFang SC;
						font-weight: 400;
						line-height: 32rpx;
						color: rgba(112, 112, 112, 1);
						letter-spacing: 3rpx;
					}
					.usable{
						font-size:28rpx;
						font-family:PingFang SC;
						font-weight:540;
						line-height:32rpx;
						color:rgba(255,47,47,1);
						letter-spacing: 3rpx;
					}

					image {
						width: 8.5rpx;
						height: 16.94rpx;
						margin-left: 16rpx;
					}
				}
			}

			// 总金额
			.totalPrice {
				width: 690rpx;
				height: 68rpx;
				display: flex;
				justify-content: space-between;
				align-items: center;

				.text {
					font-size: 28rpx;
					font-family: PingFang SC;
					font-weight: bold;
					line-height: 32rpx;
					color: rgba(51, 51, 51, 1);
				}

				.price {
					font-size: 28rpx;
					font-family: PingFang SC;
					font-weight: bold;
					line-height: 32rpx;
					color: rgba(255, 47, 47, 1);
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

		// 提示
		.orderTip {
			width: 750rpx;
			height: 88rpx;
			padding-left: 30rpx;
			display: flex;
			align-items: center;
			background: #FFFFFF;
			margin-bottom: 60rpx;

			image {
				width: 34rpx;
				height: 34rpx;
				margin-right: 16rpx;
			}

			.text {
				font-size: 28rpx;
				font-family: PingFang SC;
				font-weight: 400;
				line-height: 32rpx;
				color: rgba(36, 167, 255, 1);
			}
		}

		// 去购买
		.toBuy {
			width: 690rpx;
			height: 80rpx;
			margin-left: 30rpx;
			background: rgba(255, 47, 47, 1);
			opacity: 1;
			border-radius: 12rpx;
			display: flex;
			align-items: center;
			justify-content: center;

			.price {
				font-size: 32rpx;
				font-family: PingFang SC;
				font-weight: bold;
				line-height: 38rpx;
				color: rgba(255, 255, 255, 1);
				margin-right: 16rpx;
			}

			.text {
				font-size: 28rpx;
				font-family: PingFang SC;
				font-weight: 400;
				line-height: 32rpx;
				color: rgba(255, 255, 255, 1);
			}
		}
	}
</style>

<!-- 限时秒杀——商品详情——确认订单 -->
<template>
	<view class="orderContainer">
		<!-- 店名/商品/数量/券/优惠/金额 -->
		<view class="orderNews">
			<!-- 店名 -->
			<view class="shopName">韩国年糕料理（海岸城店）</view>
			<!-- 商品信息 -->
			<view class="goods">
				<!-- 商品头像图 -->
				<view class="Img">
					<image src="@/static/images/Product/shangpintu.png"></image>
				</view>
				<!--  商品名字和价格-->
				<view class="shopCon">
					<view class="conName">限时新品双人冰爽餐</view>
					<view class="priceCon">
						<view class="price">￥1.00</view>
						<view class="priceDelete">￥399.00</view>
					</view>
				</view>
			</view>
			<!-- 商品数量 -->
			<view class="goodsNum">
				<view class="text">购买数量</view>
				<view class="num">
					<u-number-box :input-width="80" :input-height="58" :min="1" :disabled-input="true" :bg-color="bgColor"></u-number-box>
				</view>
			</view>
			<!-- 平台优惠券 -->
			<navigator class="goodsCoupon" :url="chooseCoupon">
				<view class="text">平台优惠券</view>
				<view class="couponCon">
					<view class="num">暂无可用</view>
					<image src="@/static/images/iconfont/more.png"></image>
				</view>

			</navigator>
			<!-- 店铺优惠 -->
			<view class="goodsCoupon" @click="isShow">
				<view class="text">店铺优惠</view>
				<view class="couponCon">
					<view class="num">暂无可用</view>
					<image src="@/static/images/iconfont/more.png"></image>
				</view>
			</view>
			<!-- 总金额 -->
			<view class="totalPrice">
				<view class="text">小计</view>
				<view class="price">￥1.00</view>
			</view>
		</view>
		<!-- 底部优惠券模态框 -->
		<u-popup v-model="show" mode="bottom" border-radius="52" closeable="true" safe-area-inset-bottom="true">
			<view class="modalBox">
				<view class="text">优惠</view>
				<view class="coupon" v-for="(item,index) in list" :key="index">
					<!-- ￥100 -->
					<view class="numCon">
						<view class="context">￥</view>
						<view class="num">100</view>
					</view>
					<!-- 满减/有效期/选中 -->
					<view class="chooseCoupon">
						<!-- 满减/有效期 -->
						<view class="fullDelete">
							<view class="full">满1000元可用</view>
							<view class="fullTime">有效期至：2020-06-31</view>
						</view>
						<view class="chooseCon">
							<u-icon :name="item.IconType ?'checkmark-circle-fill':'checkmark-circle'" color="#FF2F2F" size="38" @click="toggleIcon(item,index)"></u-icon>
						</view>
					</view>
					<!-- 左上角商品类型 -->
					<view class="goodsType">
						<view class="goodsText">全品类可用</view>
					</view>
				</view>
				
			</view>
		</u-popup>
		<!-- 提示信息 -->
		<view class="orderTip">
			<image src="@/static/images/iconfont/tishi.png"></image>
			<view class="text">本单即将7天后过期，请尽快使用！</view>
		</view>
		<view class="toBuy">
			<view class="price">￥79.00</view>
			<view class="text">去付款</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				bgColor: '#FFFFFF', // 商品数量步进器背景颜色
				chooseCoupon: '../../singlePage/chooseCoupon/chooseCoupon', // 平台优惠券跳转地址
				show:false, // 控制模态框显示隐藏
				IconType:false, // 店铺优惠券的选中的状态
				list:[{},{}] // 店铺优惠券
			}
		},
		methods:{
			// 控制店铺优惠券的选中状态
			toggleIcon(item,index){
				this.IconType = !this.IconType
				console.log(item,index)
				let list = this.list
				list.map(item=>{
					item.IconType = false
				})
				list[index].IconType = true
				this.list = list
				
			},
			// 控制模态框的显示隐藏
			isShow(){
				this.show = !this.show
			}
		}
	}
</script>

<style lang="less">
	.orderContainer {
		width: 750rpx;
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
					border:2rpx solid rgba(232,232,232,1);;
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

					.num {
						font-size: 14px;
						font-family: PingFang SC;
						font-weight: 400;
						line-height: 16px;
						color: rgba(112, 112, 112, 1);
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
		.modalBox{
			.text{
				width: 750rpx;
				height: 102rpx;
				text-align: center;
				font-size:36rpx;
				font-family:PingFang SC;
				font-weight:bold;
				line-height:102rpx;
				color:rgba(51,51,51,1);
			}
			// 优惠券
			.coupon{
				width: 690rpx;
				height: 146rpx;
				background:rgba(253,244,230,1);
				margin-left:30rpx;
				display: flex;
				margin-bottom: 20rpx;
				position: relative;
				// ￥100
				.numCon{
					width: 198rpx;
					height:146rpx ;
					display: flex;
					align-items: center;
					justify-content: center;
					
					.context{
						font-size:30rpx;
						font-family:PingFang SC;
						font-weight:bold;
						line-height:36rpx;
						color:rgba(255,47,47,1);
						padding-top: 14rpx;
					}
					.num{
						font-size:52rpx;
						font-family:PingFang SC;
						font-weight:bold;
						line-height:62rpx;
						color:rgba(255,47,47,1);
					}
				}
				// 满减/有效期/选中
				.chooseCoupon{
					width: 492rpx;
					height: 146rpx;
					display: flex;
					align-items: center;
					justify-content: space-between;
					padding-right: 30rpx;
					// 满减
					.fullDelete{
						height: 146rpx;
						width: 280rpx;
						display: flex;
						flex-direction: column;
						justify-content: center;
						.full{
							width: 280rpx;
							height: 32rpx;
							font-size:28rpx;
							font-family:PingFang SC;
							font-weight:bold;
							line-height:32rpx;
							color:rgba(51,51,51,1);
							margin-bottom: 18rpx;
						}
						.fullTime{
							width: 280rpx;
							height: 28rpx;
							font-size:24rpx;
							font-family:PingFang SC;
							font-weight:400;
							line-height:28rpx;
							color:rgba(51,51,51,1);
						}
					}
					// 选中
					
				}
				// 左上角定位商品类型
				.goodsType{
					width: 174rpx;
					height: 30rpx;
					background-image: url(../../../static/images/Product/youhuiquanTextBg.png);
					background-size: 174rpx 30rpx;
					background-repeat: no-repeat;
					position: absolute;
					left: 0;
					top: 0;
					.goodsText{
						font-size:20rpx;
						font-family:PingFang SC;
						font-weight:400;
						line-height:30rpx;
						color:rgba(157,73,0,1);
						text-align: center;
						
					}
				}
			}
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

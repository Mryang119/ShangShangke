<!-- 我的订单 -->
<template>
	<view class="myOrderContaniner">
		<view class="orderHeader">
			<!-- 搜索框 -->
			<navigator class="searchBar" :url="toSearch">
				<image src="@/static/images/iconfont/search.png"></image>
				<view class="fakerInput">搜索我的订单</view>
			</navigator>
			<u-tabs active-color='#000000' inactive-color="#000000" :list="list" :bold='true' :is-scroll="false" :current="current" @change="change" :bar-style="{backgroundImage: 'linear-gradient(to right,#92D0F9,#26A7FC)',height:6+'rpx'}"></u-tabs>
		</view>
		<view class="orderItem" v-for="(item,index) in 3" :key="index">
			<view class="shopCon">
				<view class="shopNameCon">
					<view class="shopName">韩国年糕料理（海岸城店）</view>
					<image src="../../../static/images/iconfont/more.png"></image>

				</view>
				<view class="text">待付款</view>
			</view>
			<view class="orderNews">
				<view class="orderInformation">
					<view class="shopImg">
						<image src="../../../static/images/Product/shangpintu.png"></image>
					</view>
					<view class="information">
						<view class="price">
							<view class="priceText">100元代金券</view>
							<view class="priceNumber">￥79.90</view>
						</view>
						<view class="orderTime">下单时间：2020-09-09 12:30</view>
						<view class="orderNumber">数量：1</view>
					</view>
				</view>
				<view class="toPlay">
					<navigator class="playBtn" :url="orderDetail">去付款</navigator>
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
					name: '全部'
				}, {
					name: '待付款'
				}, {
					name: '待使用'
				}, {
					name: '已完成'
				}],
				current: 0,
				orderDetail:'../../singlePage/orderDetail/orderDetail',  //跳转到待付款订单详情 
				toSearch:'../../singlePage/search/search'   // 跳转到搜索页面
				
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
	.myOrderContaniner {
		width: 750rpx;
		height: 1754rpx;
		background: rgba(246, 246, 246, 1);

		.orderHeader {
			width: 750rpx;
			height: 180rpx;
			background: #FFFFFF;
			padding: 0 30rpx;
			display: flex;
			flex-direction: column;
			justify-content: space-around;

			// 搜索框
			.searchBar {
				display: flex;
				width: 690rpx;
				height: 64rpx;
				background: rgba(246, 246, 246, 1);
				border-radius: 34rpx;
				align-items: center;

				image {
					width: 28.74rpx;
					height: 30.18rpx;
					margin-left: 24rpx;
					margin-right: 20rpx;
				}

				.fakerInput {
					font-size: 28rpx;
					font-weight: 400;
					line-height: 28rpx;
					color: rgba(172, 172, 172, 1);
				}
			}

		}

		.orderItem {
			width: 750rpx;
			height: 348rpx;
			background: #FFFFFF;
			margin-top: 20rpx;
			padding: 0 30rpx;

			.shopCon {
				width: 690rpx;
				height: 92rpx;
				display: flex;
				align-items: center;
				justify-content: space-between;
				border-bottom: 1px solid rgba(243, 243, 243, 1);

				.shopNameCon {
					width: 400rpx;
					height: 92rpx;
					display: flex;
					align-items: center;

					.shopName {
						font-size: 28rpx;
						font-family: PingFang SC;
						font-weight: bold;
						line-height: 32rpx;
						color: rgba(51, 51, 51, 1);
						margin-right: 8rpx;
					}

					image {
						width: 9.68rpx;
						height: 17rpx;
					}

				}

				.text {
					font-size: 28rpx;
					font-family: PingFang SC;
					font-weight: 400;
					line-height: 32rpx;
					color: rgba(102, 102, 102, 1);
				}
			}

			.orderNews {
				.orderInformation {
					width: 690rpx;
					height: 190rpx;
					display: flex;
					align-items: center;

					.shopImg {
						width: 148rpx;
						height: 146rpx;
						border-radius: 12rpx;
						margin-right: 20rpx;

						image {
							width: 148rpx;
							height: 146rpx;
						}
					}

					.information {
						width: 524rpx;
						height: 146rpx;
						display: flex;
						flex-direction: column;
						justify-content: space-around;

						.price {
							height: 32rpx;
							display: flex;
							justify-content: space-between;

							.priceText {
								font-size: 28rpx;
								font-family: PingFang SC;
								font-weight: bold;
								line-height: 32rpx;
								color: rgba(51, 51, 51, 1);
							}

							.priceNumber {
								font-size: 28rpx;
								font-family: PingFang SC;
								font-weight: bold;
								line-height: 32rpx;
								color: rgba(255, 47, 47, 1);
							}
						}

						// 下单时间
						.orderTime {
							font-size: 24rpx;
							font-family: PingFang SC;
							font-weight: 400;
							line-height: 28rpx;
							color: rgba(133, 133, 133, 1);
						}

						// 数量
						.orderNumber {
							font-size: 24rpx;
							font-family: PingFang SC;
							font-weight: 400;
							line-height: 28rpx;
							color: rgba(133, 133, 133, 1);
						}
					}
				}

				.toPlay {
					display: flex;
					justify-content: flex-end;

					.playBtn {
						width: 108rpx;
						height: 54rpx;
						border: 2rpx solid rgba(36, 167, 255, 1);
						opacity: 1;
						border-radius: 8rpx;
						line-height: 54rpx;
						text-align: center;
						color:rgba(36,167,255,1);
					}
				}
			}

		}

	}
</style>

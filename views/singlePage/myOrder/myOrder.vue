<!-- 我的订单 -->
<!-- name:陈铄源 -->
<template>
	<view class="myOrderContaniner">
		<view class="orderHeader">
			<!-- 搜索框 -->
			<view class="searchBar" @click="toSearch">
				<image src="@/static/images/iconfont/search.png"></image>
				<view class="fakerInput"><text>搜索我的订单</text></view>
			</view>
			<u-tabs active-color='#000000' inactive-color="#000000" :list="tabsList" :bold='true' :is-scroll="false" :current="current"
			 @change="change" :bar-style="{backgroundImage: 'linear-gradient(to right,#92D0F9,#26A7FC)',height:6+'rpx'}"></u-tabs>
		</view>
		<view class="orderBg" v-if="currentArr.length=== 0">
			<image src="@/static/images/iconfont/dingdanBg.png"></image>
			<view class="noOrder"><text>还没有相关订单</text></view>
		</view>
		<view class="orderItem" v-for="(item,index) in currentArr" :key="index" @click="goOrderDetail(item,index)" v-else>
			<view class="shopCon">
				<view class="shopNameCon">
					<view class="shopName"><text>{{item.shopName}}</text></view>
					<image src="/static/images/iconfont/more.png"></image>

				</view>
				<view class="text"><text>{{item.orderType}}</text></view>
			</view>
			<view class="orderNews">
				<view class="orderInformation">
					<view class="shopImg">
						<image src="../../../static/images/Product/shangpintu.png"></image>
					</view>
					<view class="information">
						<view class="price">
							<view class="priceText"><text>{{item.priceText}}</text></view>
							<view class="priceNumber"><text>￥{{item.priceNumber}}</text></view>
						</view>
						<view class="orderTime"><text>下单时间：{{item.orderTime}}</text></view>
						<view class="orderNumber"><text>数量：{{item.orderNumber}}</text></view>
					</view>
				</view>
				<view class="toPay">
					<view class="payBtnOne" v-if="item.orderType==='待付款'" @click.stop.prevent="toPay"><text>去付款</text></view>
					<view class="payBtnTwo" v-else-if="item.orderType!=='待使用'" @click.stop.prevent="toShopDetail"><text>再来一单</text></view>
				</view>
			</view>
		</view>

	</view>
</template>

<script>
	// 工具函数
	import {
		isLogin
	} from '@/src/utils/index.js'
	// api
	import {
		getCustOrderInfo
	} from '@/src/api/userApi/userApi.js'
	export default {
		data() {
			return {
				searchType:'orderSearch',
				tabsList: [{
					name: '全部'
				}, {
					name: '待付款'
				}, {
					name: '待使用'
				}, {
					name: '已完成'
				}],
				orderList: [{
					shopName: '韩国年糕料理（海岸城店）',
					priceText: '100元代金券',
					priceNumber: '79.90',
					orderTime: '2020-09-09 12:30',
					orderNumber: '1',
					orderType: '待付款'
				}, {
					shopName: '韩国年糕料理（海岸城店）',
					priceText: '100元代金券',
					priceNumber: '79.90',
					orderTime: '2020-09-09 12:30',
					orderNumber: '1',
					orderType: '待使用'
				}, {
					shopName: '韩国年糕料理（海岸城店）',
					priceText: '100元代金券',
					priceNumber: '79.90',
					orderTime: '2020-09-09 12:30',
					orderNumber: '1',
					orderType: '已完成'
				}, {
					shopName: '韩国年糕料理（海岸城店）',
					priceText: '100元代金券',
					priceNumber: '79.90',
					orderTime: '2020-09-09 12:30',
					orderNumber: '1',
					orderType: '待付款'
				}, {
					shopName: '韩国年糕料理（海岸城店）',
					priceText: '100元代金券',
					priceNumber: '79.90',
					orderTime: '2020-09-09 12:30',
					orderNumber: '1',
					orderType: '已退款'
				}],
				orderList: [{
					shopName: '韩国年糕料理（海岸城店）',
					priceText: '100元代金券',
					priceNumber: '79.90',
					orderTime: '2020-09-09 12:30',
					orderNumber: '1',
					orderType: '待付款'
				}, {
					shopName: '韩国年糕料理（海岸城店）',
					priceText: '100元代金券',
					priceNumber: '79.90',
					orderTime: '2020-09-09 12:30',
					orderNumber: '1',
					orderType: '待使用'
				}, {
					shopName: '韩国年糕料理（海岸城店）',
					priceText: '100元代金券',
					priceNumber: '79.90',
					orderTime: '2020-09-09 12:30',
					orderNumber: '1',
					orderType: '已完成'
				}, {
					shopName: '韩国年糕料理（海岸城店）',
					priceText: '100元代金券',
					priceNumber: '79.90',
					orderTime: '2020-09-09 12:30',
					orderNumber: '1',
					orderType: '待付款'
				}, {
					shopName: '韩国年糕料理（海岸城店）',
					priceText: '100元代金券',
					priceNumber: '79.90',
					orderTime: '2020-09-09 12:30',
					orderNumber: '1',
					orderType: '已退款'
				}],
				current: 0

			}
		},
		methods: {
			toSearch(){
				let searchType = this.searchType
				uni.navigateTo({
					url:`/views/singlePage/search/search?type=${this.searchType}` // 跳转到搜索页面
					// url:'/views/singlePage/search/search'+ searchType // 跳转到搜索页面
				})
			},
			change(index) {
				this.current = index;
				console.log(this.current)
			},
			// 跳转订单详情传参(传唯一标识)
			goOrderDetail(item, index) {
				let orderType = this.currentArr[index].orderType
				if (orderType) {
					uni.navigateTo({
						url: `/views/singlePage/orderDetail/orderDetail?type=${orderType}`
					})
				}
			},
			toShopDetail(){       //再来一单，跳转到商品详情
				uni.navigateTo({
					url:'/views/singlePage/timeKillProductDetail/timeKillProductDetail'
				})
			},
			toPay(){         // 去付款，跳转支付页面
				uni.requestPayment({
					
				})
				console.log('支付')
			}
		},
		computed: {
			currentArr() {
				switch (this.current) {
					case 1:
						const result1 = this.orderList.filter(item => item.orderType === '待付款')
						return result1
					case 2:
						const result2 = this.orderList.filter(item => item.orderType === '待使用')
						return result2
					case 3:
						const result3 = this.orderList.filter(item => item.orderType === '已完成')
						return result3
					default:
						return this.orderList
				}
			}
		},
		async onLoad() {
			if (isLogin()) {
				let res = await getCustOrderInfo({
					moblie: uni.getStorageSync('loginDatas').mobile,
					payStatus: 0,
					pageNum: 1,
					pageSize: 5
				})
				console.log(res)
			} else { //重定向
				uni.navigateTo({
					url: '../login/login'
				})
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
			margin-bottom: 20rpx;
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

		.orderBg {
			width: 370.5rpx;
			height: 420.02rpx;
			margin: 138rpx 190rpx 0 190rpx;

			image {
				width: 370.5rpx;
				height: 420.02rpx;
				margin-bottom: 42rpx;
			}

			.noOrder {
				font-size: 28rpx;
				font-family: PingFang SC;
				font-weight: 400;
				line-height: 32rpx;
				color: rgba(169, 169, 169, 1);
				text-align: center;
			}
		}

		.orderItem {
			width: 750rpx;
			height: 348rpx;
			background: #FFFFFF;
			margin-bottom: 20rpx;
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

				.toPay {
					display: flex;
					justify-content: flex-end;

					.payBtnOne {
						width: 108rpx;
						height: 54rpx;
						border: 2rpx solid rgba(36, 167, 255, 1);
						opacity: 1;
						border-radius: 8rpx;
						line-height: 54rpx;
						text-align: center;
						color: rgba(36, 167, 255, 1);
					}

					.payBtnTwo {
						width: 164rpx;
						height: 54rpx;
						border: 2rpx solid rgba(36, 167, 255, 1);
						opacity: 1;
						border-radius: 8rpx;
						line-height: 54rpx;
						text-align: center;
						color: rgba(36, 167, 255, 1);
					}
				}
			}

		}

	}
</style>

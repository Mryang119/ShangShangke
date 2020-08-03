<template>
	<!-- 秒杀商品详情页面 -->
	<view class="c_killDetail">
		<buyButton></buyButton>
		<!-- 轮播图区域 -->
		<view>团购详情1</view>
		<view class="swiper-content">
			<view class="swiper">
				<u-swiper :list="list" mode="number" indicator-pos="bottomRight" height="550"></u-swiper>
			</view>
		</view>
		<view class="product-message-content">
			<view class="price-container">
				<!-- 促销价 -->
				<view class="price-left-container">
					<view class="promotion-price">
						<text class="price" :style="{fontSize:30+'rpx'}">￥</text>
						<text>{{productDetais.basDuctList.salePrice||'233.00'}}</text>
					</view>
					<view class="old-price">￥11.00</view>
				</view>
				<!-- 月售 -->
				<view class="sla-count">
					月售{{productDetais.basDuctList.salCount||2333}}
				</view>
			</view>
			<!-- 商品名字 -->
			<view class="product-name">
				{{productDetais.basDuctList.productName||'抹茶柚子千层 抹茶柚子千层 新鲜出炉'}}
			</view>
		</view>
		<!-- 店铺标签 -->
		<view class="store-content">
			<storeTag></storeTag>
		</view>
		<!-- 活动详情以及规则 -->
		<view class="rule-content">
			<promotionRule></promotionRule>
		</view>
		<!-- 商品详情 -->
		<view class="product-content">
			<view class="text">商品详情</view>
			<uni-list :border="false">
				<uni-list-item title="• 限时新品双人冰爽餐">
					<view slot="right">
						￥100.00
					</view>
				</uni-list-item>
			</uni-list>
		</view>
		<!-- 拼团详情 -->
		<view class="group-content">
			<uni-list :border="false">
				<uni-list-item>
					<view slot="default">10人正在拼团，可直接参与</view>
					<view slot="right">
						<view class="context">
							<text>查看更多</text>
							<u-icon name="arrow-right"></u-icon>
						</view>
					</view>
				</uni-list-item>
				<view class="list-item" v-for="(item,index) in 2" :key="index">
					<listItem></listItem>
				</view>
			</uni-list>

		</view>
		<!-- 亚萨西提示 -->
		<view class="yasaxi-tips-content">
			<warmTip></warmTip>
		</view>
	</view>
</template>

<script>
	// 组件
	import storeTag from '@/src/publicComponents/storeTag.vue'
	import promotionRule from '@/src/publicComponents/promotionRule.vue'
	import buyButton from '@/src/publicComponents/buyButton.vue'
	import warmTip from '@/src/publicComponents/warmTip.vue'
	import listItem from './listItem.vue'
	// api
	import {
		getProductSkuList
	} from '@/src/api/productApi/productApi.js'
	export default {
		components: {
			storeTag,
			promotionRule,
			buyButton,
			warmTip,
			listItem
		},
		props: {
			pdcId: {
				type: [String, Number]
			}
		},
		data() {
			return {
				productDetais: null,
				list: [],
				list2: [],
				timestamp: 86400,
				price: 200
			}
		},
		async created() {
			let res = await getProductSkuList({
				productId: this.pdcId
			})
			console.log(res)
			this.productDetais = res.data.data
			// 模拟一份轮播图
			for (var i = 0; i <= 3; i++) {
				this.list.push({
					image: res.data.data.basDuctList.imageUrl
				})
				this.list2.push({
					image: res.data.data.basDuctList.imageUrl
				})
			}
		}
	}
</script>

<style lang="less" scoped>
	.c_killDetail {
		width: 750rpx;
		background-color: #F6F6F6;

		.swiper-content {
			width: 750rpx;
			height: 550rpx;
			display: flex;
			flex-direction: column;
			background-color: #FFF;
			margin-bottom: 20rpx;

			.swiper {
				height: 550rpx;
				width: 750rpx;
			}
		}

		.product-message-content {
			height: 164rpx;
			display: flex;
			flex-direction: column;
			justify-content: space-between;
			padding: 30rpx;
			background-color: #FFF;
			margin-bottom: 20rpx;

			.price-container {
				display: flex;
				align-items: flex-end;
				justify-content: space-between;

				.price-left-container {
					display: flex;
					align-items: flex-end;

					.promotion-price {
						font-size: 44rpx;
						font-weight: bold;
						color: #F10000;
						display: flex;
						align-items: flex-end;

						.price {}
					}

					.old-price {
						color: #A9A9A9;
						font-size: 24rpx;
						margin-left: 20rpx;
						margin-bottom: 6rpx;
					}

				}

				.sla-count {
					margin-top: 16rpx;
					font-size: 24rpx;
					color: #A9A9A9;
					margin-bottom: 6rpx;
				}
			}

			.product-name {
				font-size: 28rpx;
				color: #333333;
				font-weight: bold;
			}

		}

		.time-content {
			width: 100%;
			height: 128rpx;
			background: url(@/static/images/Product/shangpinxiangqingbgd.png);
			background-size: cover;
			display: flex;

			.time-container {
				width: 228rpx;
				height: 100%;
				display: flex;
				align-items: center;
				justify-content: center;
				flex-direction: column;

				.text {
					color: #FF392C;
					font-size: 24rpx;
					margin-bottom: 10rpx;
				}
			}

			.price-container {
				flex: 1;
				color: #FFF;
				font-size: 44rpx;
				display: flex;
				flex-direction: column;
				justify-content: center;
				box-sizing: border-box;
				padding-left: 28rpx;

				.price {
					font-weight: bold;
				}

				.old-price {
					text-decoration: line-through;
					font-size: 24rpx;
				}
			}
		}

		.product-name-content {
			width: 100%;
			font-size: 28rpx;
			color: #333333;
			font-weight: bold;
			padding: 30rpx;
			box-sizing: border-box;
			background-color: #FFF;
			margin-bottom: 20rpx;
		}

		.store-content {
			width: 100%;
			margin-bottom: 20rpx;
		}

		.rule-content {
			margin-bottom: 20rpx;
		}

		.product-content {
			background-color: #FFFFFF;
			box-sizing: border-box;
			padding-top: 30rpx;
			margin-bottom: 20rpx;

			.text {
				font-size: 32rpx;
				color: #333333;
				font-weight: bold;
				margin-left: 28rpx;
			}
		}

		.group-content {
			margin-bottom: 20rpx;
			.context {
				font-size: 24rpx;
				color: #858585;
			}
			.list-item {
				width: 100%;
				padding: 0 30rpx;
			}
		}

		.yasaxi-tips-content {}
	}
</style>

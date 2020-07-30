<template>
	<!-- 买赠页面 -->
	<view class="c_buyDetail">
		<!-- 轮播图区域 -->
		<view class="swiper-content">
			<view class="swiper">
				<u-swiper :list="list" mode="number" indicator-pos="bottomRight" height="550"></u-swiper>
			</view>
			<!-- 商品描述 -->
			<view class="product-message">
				<view class="price-container">
					<!-- 促销价 -->
					<view class="price-left-container">
						<view class="promotion-price">
							<text class="price" :style="{fontSize:30+'rpx'}">￥</text>
							<text>{{productDetais.basDuctList.salePrice}}</text>
						</view>
						<view class="old-price">￥11.00</view>
					</view>
					<!-- 月售 -->
					<view class="sla-count">
						月售{{productDetais.basDuctList.salCount}}
					</view>
				</view>
				<!-- 商品名字 -->
				<view class="product-name">
					{{productDetais.basDuctList.productName}}
				</view>
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
		<!-- 详情图 -->
		<view class="image-content">
			<view class="title">商品详情</view>
			<view class="image-container">
				<view class="image-item" v-for="(item,index) in list2" :key="index">
					<u-image height="550rpx" :lazy-load="false" :src="item.image"></u-image>
				</view>
			</view>
		</view>
		<view>{{cityName}}</view>
	</view>
</template>

<script>
	// 组件
	import storeTag from '@/src/publicComponents/storeTag.vue'
	import promotionRule from '@/src/publicComponents/promotionRule.vue'
	// api
	import {
		getProductSkuList
	} from '../../../../src/api/productApi/productApi.js'
	export default {
		components: {
			storeTag,
			promotionRule
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
				list2: []
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
	.c_buyDetail {
		width: 750rpx;
		background-color: #F6F6F6;

		.swiper-content {
			width: 750rpx;
			height: 714rpx;
			display: flex;
			flex-direction: column;
			background-color: #FFF;
			margin-bottom: 20rpx;

			.swiper {
				height: 550rpx;
				width: 750rpx;
			}

			.product-message {
				flex: 1;
				display: flex;
				flex-direction: column;
				justify-content: space-between;
				padding: 30rpx;

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
		}

		.store-content {
			width: 100%;
			margin-bottom: 20rpx;
		}

		.rule-content {
			margin-bottom: 20rpx;
		}

		.image-content {
			.title {
				padding: 30rpx;
				background-color: #FFF;
				font-size: 32rpx;
				font-weight: bold;
				color: #333333;
			}

			.image-container {
				.image-item {
					width: 750rpx;
					height: 550rpx;
					margin-bottom: 20rpx;
				}
			}
		}
	}
</style>

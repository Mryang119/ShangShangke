<template>
	<!-- 秒杀商品详情页面 -->
	<view class="c_killDetail">
		<!-- 轮播图区域 -->
		<view class="swiper-content">
			<view class="swiper">
				<u-swiper :list="list" mode="number" indicator-pos="bottomRight" height="550"></u-swiper>
			</view>
		</view>
		<!-- 倒计时与价格 -->
		<view class="time-content">
			<view class="price-container">
				<view class="price">
					<text :style="{'font-size':30+'rpx'}">￥</text>
					<text>{{price.toFixed(2)}}</text>
				</view>
				<view class="old-price">
					<text>￥11.00</text>
				</view>
			</view>
			<view class="time-container">
				<view class="text"><text>距离结束还剩</text></view>
				<u-count-down ref="uCountDown" bg-color="#F10000" separator-color="#F10000" color="#FFFFFF" :timestamp="timestamp"
				 :autoplay="true" font-size="30"></u-count-down>
			</view>
		</view>
		<!-- 商品名字 -->
		<view class="product-name-content">
			<text>{{'抹茶柚子千层 抹茶柚子千层 新鲜出炉 抹茶柚子千层 抹茶柚子千层 新鲜出炉'}}</text>
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
			<view class="text"><text>商品详情</text></view>
			<uni-list :border="false">
				<uni-list-item title="• 限时新品双人冰爽餐">
					<view slot="right">
						<text>￥100.00</text>
					</view>
				</uni-list-item>
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
	import warmTip from '@/src/publicComponents/warmTip.vue'
	// api
	import {
		getProductSkuList
	} from '@/src/api/productApi/productApi.js'
	export default {
		components: {
			storeTag,
			promotionRule,
			warmTip
		},
		props: {
			pdcId: {
				type: [String, Number]
			}
		},
		data() {
			return {
				productDetais: {},
				list: [],
				timestamp: 86400,
				price: 200
			}
		},
		async mounted () {
			let res = await getProductSkuList({
				productId: this.pdcId
			})
			console.log(res)
			this.productDetais = res.data.data
			// 模拟一份轮播图
			if(res.data.data.basDuctList.imageUrl) {
				for (var i = 0; i < 3; i++) {
					this.list.push({
						image: res.data.data.basDuctList.imageUrl
					})
				}
			} else {
				for (var i = 0; i < 3; i++) {
					console.log('不存在,默认')
					this.list.push({
						image: "https://aecpm.alicdn.com/simba/img/TB1XotJXQfb_uJkSnhJSuvdDVXa.jpg"
					})
				}
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

		.yasaxi-tips-content {}
	}
</style>

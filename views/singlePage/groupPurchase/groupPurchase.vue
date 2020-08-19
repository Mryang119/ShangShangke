<template>
	<view class="s_groupPurchase">
		<!-- 超值团购 -->
		<view class="top-title-content">
			<view class="image-content">
				<image class="image" src="@/static/images/Product/chaozhipingtuanbg.png" mode=""></image>
			</view>
			<view class="title-text-content">
				<view class="line"></view>
				<view class="text"><text>超值拼团</text></view>
				<view class="line"></view>
			</view>
			<view class="step-content">
				<!-- 小箭头 -->
				<view class="arrow-right-container">
					<u-icon name="arrow-right" color="#fff"></u-icon>
					<u-icon name="arrow-right" color="#fff"></u-icon>
					<u-icon name="arrow-right" color="#fff"></u-icon>
				</view>
				<view class="step-item">
					<view class="step-icon">
						<image class="img" src="@/static/images/iconfont/pay.png" mode=""></image>
					</view>
					<view class="text"><text>支付开团</text></view>
					<view class="text"><text>或者参团</text></view>
				</view>
				<view class="step-item">
					<view class="step-icon">
						<image class="img" src="@/static/images/iconfont/message.png" mode=""></image>
					</view>
					<view class="text"><text>邀请好</text></view>
					<view class="text"><text>友参团</text></view>
				</view>
				<view class="step-item">
					<view class="step-icon">
						<image class="img" src="@/static/images/iconfont/user.png" mode=""></image>
					</view>
					<view class="text"><text>达到拼</text></view>
					<view class="text"><text>团人数</text></view>
				</view>
				<view class="step-item">
					<view class="step-icon">
						<image class="img" src="@/static/images/iconfont/finish.png" mode=""></image>
					</view>
					<view class="text"><text>组团</text></view>
					<view class="text"><text>成功</text></view>
				</view>
			</view>
		</view>
		<!-- tabs -->
		<view class="tabs-content">
			<view class="line-container">
				<view class="line"></view>
				<view class="line"></view>
				<view class="line"></view>
				<view class="line"></view>
			</view>
			<u-tabs bg-color="#F6F6F6" :active-item-style="{fontSize:34+'rpx'}" :list="list" :is-scroll="false" :current="current"
			 @change="change"></u-tabs>
		</view>
		<!-- 组件展示 -->
		<view class="product-content">
			<view class="product-item" v-for="(item,index) in groups" :key="index">
				<groupPurchase :type="item.type" :productTitle="item.productTitle" :price="item.price" :oldPrice="item.oldPrice"
				 :distance="item.distance" :tag="item.tag"></groupPurchase>
			</view>
		</view>

	</view>
</template>

<script>
	import groupPurchase from '../../../src/publicComponents/groupShowItem.vue'
	import {
		groups
	} from '../../../src/utils/fakeData.js'
	export default {
		components: {
			groupPurchase
		},
		data() {
			return {
				list: [{
					name: '全部'
				}, {
					name: '美食'
				}, {
					name: '好物'
				}, {
					name: '娱乐'
				}, {
					name: '生活'
				}, ],
				current: 0,
				groups
			};
		},
		methods: {
			change(index) {
				this.current = index
			}
		}
	}
</script>

<style lang="less" scoped>
	.s_groupPurchase {
		width: 750rpx;

		.top-title-content {
			width: 750rpx;
			height: 660rpx;
			background: linear-gradient(180deg, rgba(227, 48, 48, 1) 0%, rgba(255, 79, 79, 1) 100%);
			overflow: hidden;
			padding: 0rpx 20rpx 0 20rpx;

			.image-content {

				.image {
					width: 710rpx;
					height: 310rpx;
				}
			}

			.title-text-content {
				display: flex;
				align-items: center;
				justify-content: center;
				font-size: 32rpx;
				font-weight: bold;
				color: #FFFFFF;
				margin-top: 40rpx;

				.line {
					width: 73.52rpx;
					height: 2rpx;
					background-color: #fff;
				}

				.text {
					margin: 0 20rpx;
				}
			}

			.step-content {
				display: flex;
				justify-content: space-around;
				position: relative;
				margin-top: 40rpx;

				.arrow-right-container {
					position: absolute;
					width: 423rpx;
					display: flex;
					justify-content: space-between;
					padding-left: 30rpx;
					top: 75%;
				}

				.step-item {
					display: flex;
					flex-direction: column;
					align-items: center;

					.step-icon {
						width: 94rpx;
						height: 94rpx;
						margin-bottom: 22rpx;

						.img {
							width: 100%;
							height: 100%;
						}
					}

					.text {
						color: #FFF;
						font-size: 28rpx;
					}
				}
			}

		}

		.tabs-content {
			width: 750rpx;
			padding: 20rpx 0;
			background-color: #F6F6F6;
			position: relative;

			.line-container {
				position: absolute;
				width: 458rpx;
				height: 80rpx;
				top: 50%;
				left: 50%;
				transform: translate(-50%,-50%);
				box-sizing: border-box;
				display: flex;
				justify-content: space-between;
				align-items: center;

				.line {
					width: 2rpx;
					height: 28rpx;
					background-color: #E4E4E4;
				}
			}
		}

		.product-content {
			background-color: #F6F6F6;
			padding: 10rpx;

			.product-item {
				margin-bottom: 20rpx;
			}
		}
	}
</style>

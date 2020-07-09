<template>
	<view class="root_index">
		<!-- 自定义导航栏 -->
		<uni-nav-bar :fixed="true" :status-bar="true" title="上上客" class="top_nvaBar_text" :shadow="false" background-color="#FFFFFF">
		</uni-nav-bar>
		<!-- 轮播图包含搜索条区域 -->
		<view class="swiper-container">
			<!-- 轮播图 -->
			<view class="uni-padding-wrap">
				<view class="page-section swiper">
					<view class="page-section-spacing">
						<swiper class="swiper" :indicator-dots="indicatorDots" :autoplay="autoplay" :interval="interval"
						 indicator-active-color="#FFFFFF" :duration="duration">
							<swiper-item v-for="(item,index) in 3" :key="index">
								<image class="swiperImage" src="../../../static/images/tabBarImage/未标题23232-2@2x.png" mode=""></image>
							</swiper-item>
						</swiper>
					</view>
				</view>
			</view>
			<!-- 搜索定位分类部分 -->
			<view class="topNav">
				<position :city="city"></position>
				<view class="searchBar">
					<image src="../../../static/images/iconfont/搜索.png" mode=""></image>
					<view class="fakerInput">搜索商家/商品</view>
				</view>
				<image class="classify" src="../../../static/images/iconfont/分类.png" mode=""></image>
			</view>
		</view>
		<!-- 下半部分主体 -->
		<view class="bottomContainer">
			<!-- 天天免费抢 -->
			<view class="everyDayBob">
				<view class="titleBar">
					<view class="daydayRob"></view>
					<view class="titleBar-title">
						数量有限 先到先得
					</view>
					<more></more>
				</view>
				<!-- 列表 -->
				<view class="list">
					<shopItem v-for="(item,index) in 4" :key="index"></shopItem>
				</view>
			</view>
			
		</view>
	</view>
</template>

<script>
	import uniNavBar from '../../../components/uni-nav-bar/uni-nav-bar.vue'
	import position from './components/position.vue'
	import more from './components/more.vue'
	import shopItem from './components/daydayShop.vue'
	export default {
		components: {
			uniNavBar,
			position,
			more,
			shopItem
		},
		data() {
			return {
				indicatorDots: true,
				autoplay: true,
				duration: 500,
				interval: 2000,
				city: '深圳'
			};
		},
		onLoad() {
			console.log(this.$store)
		}
	}
</script>

<style lang="less" scoped>
	@font:PingFang SC;
	.root_index {

		// 自定义标题栏
		.top_nvaBar_text {
			font-size: 36rpx;
			font-weight: bold;
			font-family: PingFang SC;
		}

		// 轮播图部分
		.swiper-container {
		
			width: 750rpx;
			height: 596rpx;
			position: relative;

			.swiper {
				width: 750rpx;
				height: 596rpx;

				image {
					width: 100%;
					height: 100%;
				}
			}

			.topNav {
				width: 100%;
				position: absolute;
				display: flex;
				align-items: center;
				top: 24rpx;

				.searchBar {
					display: flex;
					width: 488rpx;
					height: 62rpx;
					background: rgba(255, 255, 255, 1);
					opacity: 0.5;
					border-radius: 34rpx;
					align-items: center;
					margin-left: 24rpx;
					margin-right: 30rpx;

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

				.classify {
					width: 48rpx;
					height: 29rpx;
				}
			}
		}

		// 下半部分主体
		.bottomContainer {
			width: 100%;
			padding: 20rpx 20rpx;
			box-sizing: border-box;
			.everyDayBob {
				box-sizing: border-box;
				width: 710rpx;
				height: 1110rpx;
				background: rgba(255, 246, 231, 1);
				opacity: 1;
				border-radius: 12rpx;
				padding:30rpx 20rpx 20rpx 20rpx;
				.titleBar {
					height: 34rpx;
					display: flex;
					align-items: center;
					margin-bottom: 36rpx;
					.daydayRob {
						width: 205.86rpx;
						height: 33rpx;
						background: url(../../../static/images/iconfont/组%20657@2x.png) no-repeat;
						background-size: cover;
					}

					.titleBar-title {
						height: 34rpx;
						width: 210rpx;
						font-size: 20rpx;
						color: #FFFFFF;
						font-family: @font;
						background: url(../../../static/images/iconfont/矩形%20204@2x.png) no-repeat;
						background-size: cover;
						text-align: center;
						line-height: 34rpx;
						margin-left: 24rpx;
						margin-right: 165rpx;
					}
				}
			}
		}
	}
</style>

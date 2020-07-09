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
						<swiper class="swiper" :indicator-dots="indicatorDots" :autoplay="autoplay" :interval="interval" indicator-active-color="#FFFFFF" :duration="duration">
							<swiper-item v-for="(item,index) in 3" :key="index">
								<image class="swiperImage" src="../../../static/images/tabBarImage/未标题23232-2@2x.png" mode=""></image>
							</swiper-item>
						</swiper>
					</view>
				</view>
			</view>
			<!-- 搜索定位分类部分 -->
			<view class="topNav">
				<position></position>
			</view>
		</view>
	</view>
</template>

<script>
	import uniNavBar from '../../../components/uni-nav-bar/uni-nav-bar.vue'
	import position from './components/position.vue'
	export default {
		components: {
			uniNavBar,
			position
		},
		data() {
			return {
			indicatorDots:true,
			autoplay:true,
			duration:500,
			interval:2000
			};
		},
		onLoad() {
			console.log(this.$store)
		}
	}
</script>

<style lang="less" scoped>
	.root_index {
		.top_nvaBar_text {
			font-size: 36rpx;
			font-weight: bold;
			font-family: PingFang SC;
		}

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
				width: 596rpx;
			}
		}
	}
</style>

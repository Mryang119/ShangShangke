<template>
	<!-- 商城轮播图组件 -->
	<view class="store-swiper-root">
		<swiper class="swiper" :indicator-dots="true" :autoplay="true" :interval="2000" :duration="500">
			<swiper-item v-for="(item,index) in list" :key="index">
				<view class="swiper-item uni-bg-red" :style="{backgroundColor:item}">{{item}}</view>
			</swiper-item>
		</swiper>
	</view>
</template>

<script>
	export default {
		props: {
			list: {
				type: Array,
				required: true,
				default: function() {
					return [
						'red', 'green', 'blue'
					]
				}
			}
		}
	}
</script>

<style lang="less" scoped>
	.store-swiper-root {
		.swiper {
			width: 750rpx;
			height: 300rpx;

			.swiper-item {
				width: 750rpx;
				height: 300rpx;
			}
		}
	}
</style>

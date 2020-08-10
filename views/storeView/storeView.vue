<template>
	<!-- 店铺首页 -->
	<!-- name:杨大锐 -->
	<view class="store-index-root">
		<!-- 轮播图 -->
		<view class="store-modules-content" :style="{order:findPackType(4)}">
			<store-swiper></store-swiper>
		</view>
		<!-- 商户广告 -->
		<view class="store-modules-content" :style="{order:findPackType(5)}">
			<store-banner></store-banner>
		</view>
		<!-- 标签栏 -->
		<view class="store-modules-content" :style="{order:findPackType(3)}">
			<store-freedom-grid></store-freedom-grid>
		</view>
		<!-- 图文一大两小 -->
		<view class="store-modules-content" :style="{order:findPackType(10)}">
			<store-image-text></store-image-text>
		</view>
		<!-- 横向滚动展示商品组件 -->
		<view class="store-modules-content">
			<store-scroll-x></store-scroll-x>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				list: [{
					packType: 4, //轮播图
					index: 1
				}, {
					packType: 3, // 标签页,
					index: 2
				}, {
					packType: 10, // 图文一大两小
					index: 3
				}, {
					packType: 5, // 商户广告
					index: 4
				}]
			}
		},
		methods: {
			// 这个函数用于找到list数组当中的对应的对象成员
			// 主要作用是排序
			findPackType(type) {
				for (let i = 0; i < this.list.length; i++) {
					if (this.list[i].packType === type) {
						return this.list[i].index
					}
				}
			}
		}
	}
</script>

<style lang="less" scoped>
	.store-index-root {
		display: flex;
		flex-direction: column;

		.store-modules-content {
			margin-bottom: 20rpx;
			background-color: #FFF;
		}

	}
</style>

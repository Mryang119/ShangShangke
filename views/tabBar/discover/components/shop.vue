<template>
	<!-- name:杨大锐 -->
	<!-- 店铺页 -->
	<view class="c_shop">
		<!-- tabs部分 -->
		<view class="tabs-content">
			<u-tabs :list="list" :bar-style="{ 'background-image': 'linear-gradient(to right, #92D0F9, #26A7FC)'}"
			 :active-item-style="{'font-size':32+'rpx'}" active-color="#333333" font-size="28" inactive-color="#666666" :is-scroll="false"
			 :current="current" @change="change"></u-tabs>
		</view>
		<!-- 搜索分类部分 -->
		<view class="search-content">
			<view class="search-container">
				<u-search placeholder="发现店铺/商品" :show-action="false" v-model="keyword"></u-search>
			</view>
			<view class="class-container" v-if="current==0">
				<u-icon name="list-dot" size="50" color="#24a7ff"></u-icon>
			</view>
		</view>
		<view class="shopSonNearby-content" v-show="current==0">
			<shopSonNearby></shopSonNearby>
		</view>
		<view class="shopSonFocus-content" v-show="current==1">
			<shopSonFocus></shopSonFocus>
		</view>
	</view>
</template>

<script>
	// 店铺:附近,关注页面
	import shopSonFocus from './shopSonFocus.vue'
	import shopSonNearby from './shopSonNearby.vue'
	
	export default {
		components: {
			shopSonFocus,
			shopSonNearby
		},
		data() {
			return {
				current: 0,
				keyword: '',
				list: [{
						name: '附近'
					},
					{
						name: '关注'
					}
				]
			}
		},
		methods: {
			change(i) {
				this.current = i
			}
		}
	}
</script>

<style lang="less" scoped>
	.c_shop {
		width: 100%;

		.search-content {
			display: flex;
			padding-left: 20rpx;
			padding-right: 36rpx;
			margin-top: 30rpx;
			align-items: center;
			justify-content: space-between;
			margin-bottom: 20rpx;
			.search-container {
				flex: 1;
			}

			.class-container {
				width: 50rpx;
				height: 50rpx;
				display: flex;
				align-items: center;
				justify-content: flex-end;
				margin-left: 34rpx;
			}
		}

		.tabs-content {
			width: 100%;
			padding-left: 158rpx;
			padding-right: 168rpx;
		}
	}
</style>

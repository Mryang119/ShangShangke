<template>
	<view class="c_find">
		<!-- tabs栏 -->
		<view class="tabs-content">
			<u-tabs :list="list"  :is-scroll="false" :bar-style="style" :active-item-style="activeItemStyle"
			 font-size="28" active-color="#333333" inactive-color="#666666" :current="current" @change="change"></u-tabs>
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
		<!-- 附近 -->
		<view class="tabs-item-content" v-show="current===0">
			<findSonNearby></findSonNearby>
		</view>
		<view class="tabs-item-content" v-show="current===2">
			<findSonHot></findSonHot>
		</view>
	</view>
</template>

<script>
	import findSonNearby from './findSonNearby.vue'
	import findSonHot from './findSonHot.vue'
	export default {
		components:{
			findSonNearby,
			findSonHot
		},
		data() {
			return {
				list: [{
					name: '附近'
				}, {
					name: '关注'
				}, {
					name: '热门'
				}],
				current: 0,
				style:{
					'background-image': 'linear-gradient(to right, #92D0F9, #26A7FC)'
				},
				activeItemStyle:{
					'font-size':32+'rpx'
				},
				keyword:''
			};
		},
		methods: {
			change(i) {
				this.current = i
				this.$emit('now',i)
			}
		}
	}
</script>

<style lang="less" scoped>
	.tabs-content {
		width: 100%;
		box-sizing: border-box;
	}
	.search-content {
		display: flex;
		padding-left: 20rpx;
		padding-right: 36rpx;
		align-items: center;
		justify-content: space-between;
		height: 120rpx;
		background-color: #FFF;
		align-items: center;
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
</style>

<template>
	<!-- name:杨大锐 -->
	<!-- 店铺页 -->
	<view class="c_shop">
		<!-- tabs部分 -->
		<view class="tabs-content">
			<u-tabs :list="list" :bar-style="{ 'background-image': 'linear-gradient(to right, #92D0F9, #26A7FC)'}"
			 :active-item-style="{'font-size':32+'rpx',color:'#333333'}" font-size="28" inactive-color="#666666" :is-scroll="false"
			 :current="current" @change="change"></u-tabs>
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

		.tabs-content {
			width: 100%;
			padding-left: 155rpx;
			padding-right: 168rpx;
		}
	}
</style>

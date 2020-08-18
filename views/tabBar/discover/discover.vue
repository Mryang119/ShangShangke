<template>
	<!-- name:杨大锐 -->
	<!-- 发现 -->
	<view class="s_discover">
		<uniNavBar :fixed="true" :status-bar="true">
			<view class="tabs-content">
				<view class="tab-item" :class="{'active':current===0}" @click="current=0"><text>店铺</text></view>
				<view :class="{'active':current===1}" @click="current=1"><text>发现</text></view>
			</view>
		</uniNavBar>
		<view class="shop-content" v-show="current===0">
			<shop @now="now"></shop>
		</view>
		<view class="shop-content" v-if="current===1">
			<find @now="now"></find>
		</view>
	</view>
</template>

<script>
	import uniNavBar from "@/components/uni-nav-bar/uni-nav-bar.vue"
	// 店铺页
	import shop from './components/shop.vue'
	// 发现页
	import find from './components/find.vue'
	export default {
		components: {
			uniNavBar,
			shop,
			find
		},
		data() {
			return {
				current: 0,
				list: [{
					name: '关注'
				}, {
					name: '附近'
				}],
				sonCurrent: 0 // 子tabs的current
			}
		},
		methods: {
			now(i) {
				// this.sonCurrent = i
				console.log(i)
			}
		}
	}
</script>

<style lang="less" scoped>
	.s_discover {
		width: 750rpx;
		background-color: #FFF;
		.nav-bar {
			border-bottom: 4rpx solid #EDEDED;
		}

		.tabs-content {
			width: 92%;
			display: flex;
			align-items: center;
			justify-content: center;
			font-size: 36rpx;
			color: #333333;

			.tab-item {
				margin-right: 74rpx;
			}

			.active {
				font-weight: bold;
				color: #24A7FF;
			}
		}

		.shop-content {

			width: 750rpx;
		}
	}
</style>

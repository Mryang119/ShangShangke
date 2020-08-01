<template>
	<!-- name:杨大锐 -->
	<!-- 发现 -->
	<view class="s_discover">
		<view class="nav-bar">
			<uniNavBar :fixed="true" :status-bar="true">
				<view class="tabs-content">
					<view class="tab-item" :class="{'active':current===0}" @click="current=0">店铺</view>
					<view :class="{'active':current===1}" @click="current=1">发现</view>
				</view>
			</uniNavBar>
		</view>
		<view class="shop-content" v-if="current===0">
			<shop></shop>
		</view>
	</view>
</template>

<script>
	import uniNavBar from "@/components/uni-nav-bar/uni-nav-bar.vue"
	import shop from './components/shop.vue'
	export default {
		components: {
			uniNavBar,
			shop
		},
		data() {
			return {
				current: 0,
				current2:0,
				list:[
					{
						name:'关注'
					},{
						name:'附近'
					}
				]
			}
		},
		methods:{
			change(i){
				this.current2 = i
			}
		}
	}
</script>

<style lang="less" scoped>
	.s_discover {
		width: 750rpx;
		.nav-bar {
			height: auto;
			border-bottom: 4rpx solid #C0C4CC;
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

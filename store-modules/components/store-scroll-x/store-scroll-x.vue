<template>
	<view class="store-scroll-x-root">
		<view class="store-scroll-x-content">
			<view class="store-scroll-title" v-if="title">{{title}}</view>
			<scroll-view scroll-x="true" class="scroll-view-H">
				<view class="store-scroll-container" :style="{width:scrollwidth+'rpx'}">
					<view class="store-scroll-item-container" v-for="(item,index) in lists" :key="index">
						<product-container></product-container>
					</view>
				</view>
			</scroll-view>
		</view>
	</view>
</template>

<script>
	import productContainer from '@/src/publicComponents/productContainer.vue'
	import {
		ScrollWidth
	} from '@/src/utils/index.js'

	export default {
		components: {
			productContainer
		},
		props: {
			lists: {
				type: Array,
				default: () => ([{
					productName: "加高沙发电脑椅子休闲单人一balbalbal",
					price: 200
				}, {
					productName: "加高沙发电脑椅子休闲单人一balbalbal",
					price: 200
				}, {
					productName: "加高沙发电脑椅子休闲单人一balbalbal",
					price: 200
				}, {
					productName: "加高沙发电脑椅子休闲单人一balbalbal",
					price: 200
				}, {
					productName: "加高沙发电脑椅子休闲单人一balbalbal",
					price: 200
				}, ])
			},
			title:{
				type:String,
				default:"今日爆款"
			},
			
		},
		data() {
			return {

			};
		},
		computed: {
			scrollwidth: function() {
				return ScrollWidth(this.lists.length, 109, 8)
			}
		}
	}
</script>

<style lang="less" scoped>
	
	.scroll-view-H {
		height: auto;
	}
	.store-scroll-title {
		font-weight: bold;
		font-size: 32rpx;
		color: #333333;
		margin-bottom: 30rpx;
	}
	.store-scroll-x-content {
		padding: 30rpx 0 30rpx 30rpx;
	}
	.store-scroll-x-root {
		.store-scroll-x-content {
			.store-scroll-container {
				display: flex;
				.store-scroll-item-container {
					width: 218rpx;
					margin-right: 16rpx;
				}
			}
		}
	}
</style>

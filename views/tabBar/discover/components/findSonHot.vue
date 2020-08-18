<template>
	<view class="c_findSonHot">
		<!-- 瀑布流列表 -->
		<view class="waterfall">
			<view class="column-list">
				<view class="column-list-item" v-for="(item) in list1" :key="item.key">
					<waterfallItem :title="item.title" :imageUrl="item.image" :likeInfo="item.likeInfo" :userImage="item.userImage"
					 :siteDatas="item.siteDatas" :tags="item.tags"></waterfallItem>
				</view>
			</view>
			<view class="column-list">
				<view class="column-list-item" v-for="(item) in list2" :key="item.key">
					<waterfallItem :title="item.title" :imageUrl="item.image" :likeInfo="item.likeInfo" :userImage="item.userImage"
					 :siteDatas="item.siteDatas" :tags="item.tags"></waterfallItem>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	import mixin from '../mixin/mixin.js'
	import waterfallItem from '@/src/publicComponents/waterfallItem.vue'
	export default {
		components: {
			waterfallItem
		},
		mixins: [mixin]
	}
</script>

<style lang="less">
	.waterfall {
		width: 100%;
		display: flex;
		background-color: #F6F6F6;
		justify-content: space-between;
		padding: 0 20rpx;
		padding-top: 20rpx;

		.column-list {
			display: flex;
			flex-direction: column;
		}

		.column-list-item {
			width: 348rpx;
			border-radius: 12rpx;
			background-color: #FFF;
			height: auto;
			margin-bottom: 20rpx;
		}
	}
</style>

<template>
	<!-- 满就减组件 -->
	<view class="c_give">
		<view class="flex-item" v-for="(item,index) in showItemList" :key="index">
			<show :type="item"></show>
		</view>
	</view>
</template>

<script>
	import show from './show.vue'
	import uniLoadMore from "@/components/uni-load-more/uni-load-more.vue"
	export default {
		props:{
			showItemList:Array
		},
		components:{
			show,
			uniLoadMore
		},
		data() {
			return {}
		},
	}
</script>

<style lang="less">
	.c_give {
		column-count:2;
		.flex-item {
			width: 346rpx;
			break-inside:avoid;
			margin-bottom: 20rpx;
		}
	}
</style>

<template>
	<!-- 买就送 -->
	<view class="c_buy">
		<view v-for="(item,index) in dataList" :key="image">
			<view>{{item.price}}</view>
			<image :src="item.image" mode=""></image>
		</view>
	</view>
</template>
<script>
	import uniLoadMore from "@/components/uni-load-more/uni-load-more.vue"

	export default {
		components: {
			uniLoadMore
		},
		props:{
			dataList:Array
		},
		data() {
			return {
				more:'loading'
			}
		},
		methods: {
			moreList(){
				console.log('111')
			}
		}
	}
</script>
<style lang="less">
	.c_buy {
		image {
			width: 204rpx;
			height: 204rpx;
		}
	}
</style>

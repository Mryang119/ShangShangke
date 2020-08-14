<template>
	<!-- name:杨大锐 -->
	<view class="c_shopSonFocus">
		<!-- 关注页面 -->
		<view class="store-list-content">
			<view class="list-item" v-for="(item,index) in 5" :key="index">
				<storeListItem>
				</storeListItem>
			</view>
		</view>
	</view>
</template>

<script>
	import storeListItem from './storeListItem.vue'
	export default {
	components:{
		storeListItem
	}

	}
</script>

<style lang="less" scoped>
		
	.c_shopSonFocus {
		background-color: #F6F6F6;
		padding-top: 20rpx;
	}
	.list-item {
		width: 710rpx;
		height: 254rpx;
		margin: 0 auto;
		margin-bottom: 20rpx;
	}
</style>

<template>
	<!-- 更多组件 -->
	<view class="c_more">
		<navigator class="c-more-text" :url="url">更多</navigator>
		<image src="../../../../static/images/iconfont/更多@2x.png" mode=""></image>
	</view>
</template>

<script>
	export default {
		props:{
			url:{
				type:String,
				default:'../../singlePage/everydayRob/everydayRob'
			}
		},
		methods:{
			toMore(){
				console.log('1111')
				uni.navigateTo({
					url:'../../../singlePage/dailyGoods/dailyGoods'
				})
			}
		}
	}
</script>

<style lang="less">
	.c_more {
		display: flex;
		color: #666666;
		font-size: 24rpx;
		height: 28rpx;
		align-items: center;
		.c-more-text {
			margin-right: 12rpx;
		}
		image {
			width: 8.5rpx;
			height: 16.94rpx;
		}
	}
</style>

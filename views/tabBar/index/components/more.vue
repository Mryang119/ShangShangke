<template>
	<!-- 更多组件 -->
	<view class="c_more">
		<navigator class="c-more-text" :url="url">
			更多{{"  "}}
			<image src="@/static/images/iconfont/more.png" mode="" />
			</navigator>
		
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
		position: absolute;
		display: flex;
		color: #666666;
		font-size: 24rpx;
		height: 28rpx;
		align-items: center;
		top: 50%;
		transform: translateY(-50%);
		right: 0;
		image {
			width: 8.5rpx;
			height: 16.94rpx;
		}
	}
</style>

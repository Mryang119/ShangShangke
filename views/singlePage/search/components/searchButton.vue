<template>
	<view class="c_searchButton">
		<image v-if="isHot" src="@/static/images/iconfont/hotIcon.png" mode=""></image>
		<view class="text">{{text}}</view>
	</view>
</template>

<script>
	export default {
		props: {
			text: String,
			isHot: Boolean
		}
	}
</script>

<style lang="less">
	.c_searchButton {
		box-sizing: border-box;
		display: flex;
		align-items: cneter;
		justify-content: center;
		height: 64rpx;
		padding: 16rpx 36rpx 16rpx 30rpx;
		border-radius: 34rpx;
		background-color: #F3F3F3;
		overflow: hidden;
		
		image {
			width: 24.96rpx;
			margin-right: 16rpx;
			height: 32rpx;
		}

		.text {
			line-height: 30rpx;
		}
	}
</style>

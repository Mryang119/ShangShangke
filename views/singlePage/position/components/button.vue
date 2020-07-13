<template>
	<!-- 分存在icon和不存在icon类型 -->
	<view class="c_cityButton">
		<view class="content">
			<u-icon v-if="iconName!==''" color="#24A7FF" :name="iconName"></u-icon>

			<text>{{text}}</text>
		</view>
	</view>
</template>

<script>
	export default {
		props: {
			iconName: String,
			text: String
		}
	}
</script>

<style lang="less">
	.c_cityButton {
		width: 196rpx;
		height: 68rpx;
		background-color: #FFFFFF;	
		border-radius:8rpx;
		overflow: hidden;
		.content {
			font-size: 28rpx;
			color: #333333;
			line-height: 68rpx;
			text-align: center;
		}
	}
</style>

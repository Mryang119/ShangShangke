<template>
	<!-- 定位模块 -->
	<view class="c_position">
		<text>{{city}}</text>
		<image src="../../../../static/images/iconfont/下箭头.png" mode=""></image>
	</view>
</template>

<script>
	export default {
		props: {
			city: {
				type: String,
				default: "深圳"
			}
		}
	}
</script>

<style lang="less">
	.c_position {
		display: flex;
		justify-content: center;
		text{
			font-size: 32rpx;
			font-weight:bold;
		}
		image {
			width: 15.2rpx;
			height: 7.2rpx;
		}
	}
</style>

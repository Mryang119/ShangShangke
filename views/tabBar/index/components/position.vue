<template>
	<!-- 定位模块 -->
	<view class="c_position">
		<text class="city">{{city}}</text>
		<text class="iconfont myionfont icon-iconfonticonfonti2"></text>
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
		align-items: center;
		margin-left: 30rpx;
		.city {
			font-size: 32rpx;
			font-weight: bold;
		}
		.myionfont {
			margin-left: 12rpx;
			font-size: 24rpx;
		}
	}
</style>

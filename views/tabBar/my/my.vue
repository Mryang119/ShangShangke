<template>
	<view class="root_my">
		<!-- 自定义导航栏 -->
		<uni-nav-bar :fixed="true" :status-bar="true" title="我的" class="top_nvaBar_text" :shadow="false" background-color="#FFFFFF">
		</uni-nav-bar>
	</view>
</template>

<script>
	export default {
		data() {
			return {

			}
		},
		methods: {

		}
	}
</script>

<style lang="less">
	.root_my {
		.top_nvaBar_text {
			font-size: 36rpx;
			font-weight: bold;
			font-family: PingFang SC;
		}
	}
</style>

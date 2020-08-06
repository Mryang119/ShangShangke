<template>
	<!-- 广告组件 -->
	<!-- name:杨大锐 -->
	<view class="store-banner-root">
		<view class="store-banner-content" :style="{height:height+'rpx'}">
			<u-image :src="image" width="100%" :height="height">
			</u-image>
		</view>
	</view>
</template>

<script>
	export default {
		props: {
			height: {
				type: [Number, String],
				default: 176
			},
			image: {
				type: String,
				default: 'https://tse1-mm.cn.bing.net/th/id/OIP.LBNIVbKqwfYEnwUEem3U2AHaFm?w=272&h=205&c=7&o=5&dpr=1.25&pid=1.7'
			}
		},
		data() {
			return {

			};
		}
	}
</script>

<style lang="less">
	.store-banner-root {
		width: 750rpx;

		.store-banner-content {
			width: 100%;
		}
	}
</style>

<template>
	<!-- 广告组件 -->
	<!-- name:杨大锐 -->
	<view class="store-banner-root">
		<view class="store-banner-content" :style="{height:height+'rpx'}">
			<u-image :src="image" width="100%" :height="height" :border-radius="height">
			</u-image>
		</view>
	</view>
</template>

<script>
	// 组件两种模式 不带标题表现为ad广告，图形呈圆形
	// 带标题与不带标题
	
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

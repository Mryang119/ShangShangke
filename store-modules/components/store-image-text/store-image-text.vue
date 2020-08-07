<template>
	<!-- name:杨大锐 -->
	<!-- 图文：一大两小 -->
	<view class="store-image-text-root">
		<view class="store-image-text-content">
			<view class="store-left-big-container">
				<u-image width="100%" height="272.54rpx" class="store-left-big-image" :src="images[0]" mode=""></u-image>
			</view>
			<view class="store-right-mini-tow-container">
				<u-image :src="images[1]" width="100%" height="126rpx" class="store-right-mini-tow-image"></u-image>
				<u-image :src="images[2]" width="100%" height="126rpx" class="store-right-mini-tow-image"></u-image>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				images: [
					'https://img.alicdn.com/tfscom/i3/2459354798/TB2IyE5eUhnpuFjSZFpXXcpuXXa_!!2459354798.jpg_180x180xzq90.jpg_.webp',
					'https://img.alicdn.com/tfscom/i1/1581756766/TB2TF0ch0zJ8KJjSspkXXbF7VXa_!!1581756766.jpg_180x180xzq90.jpg_.webp',
					'https://img.alicdn.com/imgextra/i4/1980545515/TB2r2RUo3ZC2uNjSZFnXXaxZpXa_!!1980545515-0-beehive-scenes.jpg_180x180xzq90.jpg_.webp'
				]
			};
		}
	}
</script>

<style lang="less" scoped>
	.store-image-text-root {
		.store-image-text-content {
			width: 750rpx;
			height: 332rpx;
			display: flex;
			padding: 30rpx;
			box-sizing: border-box;
			justify-content: space-between;

			.store-left-big-container {
				width: 374rpx;
				height: 272.54rpx;

				.store-left-big-image {
					width: 100%;
					height: 100%;
				}
			}

			.store-right-mini-tow-container {
				width: 298rpx;
				height: 272.54rpx;
				display: flex;
				flex-direction: column;
				justify-content: space-between;

				.store-right-mini-tow-image {
					width: 298rpx;
					height: 126rpx;
				}
			}
		}
	}
</style>

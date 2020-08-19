<template>
	<!-- name:'杨大锐' -->
	<!-- 展示拼团列表组件 -->
	<view class="c_listItem">
		<view class="iamge-username-content">
			<u-image width="86rpx" height="86rpx" shape="circle" :src="imageUrl"></u-image>
			<view class="user-name"><text>{{userName}}</text></view>
		</view>
		<view class="time-button-content">
			<view class="time-text-container">
				<view class="population">
					<view><text>还差</text></view>
					<view :style="{color:'#FF2F2F'}"><text>{{population}}人</text></view>
					<view><text>拼成</text></view>
				</view>
				<view class="count-down">
					<text>剩余</text><u-count-down font-size="24" :autoplay="true" :show-days="false" :timestamp="time"></u-count-down>
				</view>
			</view>
			<view class="button-container">
				<text>去拼团</text>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		props: {
			imageUrl: { // 用户图像
				type: String,
				default:'http://tse3-mm.cn.bing.net/th/id/OIP.e1p3eMMrTH-j5SMtbJFKlQAAAA?pid=Api&rs=1'
			},
			userName: { // 用户名字
				type: String,
				default: '吴亦凡'
			},
			time: { // 毫秒数
				type: Number,
				default: 86300
			},
			population: { // 人数
				type: Number,
				default: 1
			}
		}
	}
</script>

<style lang="less" scoped>
	.c_listItem {
		width: 100%;
		padding: 30rpx 0;
		display: flex;
		justify-content: space-between;
		border-top: 2rpx solid #F3F3F3;
		.iamge-username-content {
			display: flex;
			align-items: center;

			.user-name {
				margin-left: 20rpx;
				font-size: 28rpx;
			}
		}

		.time-button-content {
			display: flex;
			align-items: center;
			.time-text-container {
				margin-right: 22rpx;
				display: flex;
				flex-direction: column;
				// justify-content: flex-end;
				align-items: flex-end;
				.population {
					display: flex;
					font-size: 24rpx;
					color: #333333;
				}

				.count-down {
					color: #666666;
					font-size: 24rpx;
				}
			}
			.button-container {
				width: 110rpx;
				height: 50rpx;
				color: #FFF;
				font-size: 24rpx;
				text-align: center;
				line-height: 50rpx;
				border-radius: 8rpx;
				background-color: #FF2F2F;
			}
		}
	}
</style>

<template>
	<view class="c_waterfallItem">
		<view class="waterfall-item-content">
			<!-- 组件封面 -->
			<view class="image-cell">
				<image :src="imageUrl" class="image" mode="widthFix"></image>
			</view>
			<!-- 组件标题 -->
			<view class="title-cell item-cell">
				<text>{{title}}</text>
			</view>
			<!-- 标签信息 -->
			<view class="tag-cell item-cell">
				<view class="tags-item" v-for="(item,index) in tags" :key="index">
					<u-icon name="tags" font-size="24" color="#666666"></u-icon>
					<text>{{item}}</text>
				</view>
			</view>
			<!-- 位置信息 -->
			<view class="site-cell item-cell">
				<view class="left-container">
					<u-icon name="map" font-size="24" color="#666666"></u-icon>
					<text>{{siteDatas.site}}</text>
				</view>
				<view class="right-container">
					<text>{{siteDatas.distance+'m'}}</text>
				</view>
			</view>
			<!-- 用户信息 -->
			<view class="user-cell item-cell">
				<view class="left-container">
					<u-image :src="userImage" width="34" height="34" border-radius="34"></u-image>
					<text>{{userName}}</text>
				</view>
				<view class="right-container">
					<u-icon :name="likeInfo.status === 0 ? 'thumb-up':'thumb-up-fill'" :color="likeInfo.status === 0 ? '#333333':'#24A7FF'"></u-icon>
					<text>{{likeInfo.like}}</text>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		props: {
			type: {
				type: Number // 组件类型:1是用户分享,2是商户分享
			},
			imageUrl: {
				type: String
			},
			title: {
				type: String
			},
			tags: {
				type: Array
			},
			siteDatas: {
				type: Object
			},
			userImage: {
				type: String
			},
			userName: {
				type: String
			},
			likeInfo: {
				type: Object
			}
		},
		data() {
			return {

			};
		}
	}
</script>

<style lang="less">
	.waterfall-item-content {
		padding-bottom: 20rpx;
	}

	.user-cell {
		font-size: 24rpx;
		color: #333333;
	}
	.right-container {
		display: flex;
		align-items: center;
	}
	.item-cell {
		padding: 0 20rpx;
		display: flex;
		align-items: center;
		flex-wrap: wrap;
		margin-top: 8rpx;
	}

	.image-cell {
		.image {
			width: 348rpx;
			border-radius: 12rpx 12rpx 0 0;
		}
	}

	.title-cell {
		font-size: 28rpx;
		font-weight: bold;
		color: #272727;
	}

	.site-cell {
		display: flex;
		justify-content: space-between;
		font-size: 24rpx;
		color: #666666;
	}

	.user-cell {
		display: flex;
		justify-content: space-between;
	}
</style>

<template>
	<view class="c_findSonUserArticle">
		<view class="up-cotainer">
			<!-- 用户信息区域 -->
			<view class="user-info-content">
				<image :src="userImage" mode="widthFix" class="image"></image>
				<view class="user-info">
					<text class="title">{{userName}}</text>
					<text>{{pubLishDate}}</text>
				</view>
			</view>
			<!-- 轮播图区域 -->
			<view class="swiper-content">
				<u-swiper :list="list" height="360" img-mode="widthFix"></u-swiper>
			</view>
			<!-- 定位信息 -->
			<view class="location-content">
				<u-icon name="map" color="#666666" font-size="24"></u-icon>
				<text>{{site}}</text>
			</view>
			<!-- 文章标题 -->
			<view class="article-content">
				<view class="title-container">
					<text class="title">{{title}}</text>
				</view>
				<text>{{article}}</text>
			</view>
			<!-- 点赞收藏评论 -->
			<view class="like-content">
				<view class="float-right">
					<!-- 评论 -->
					<view class="comment icon">
						<u-icon name="chat" size="32"></u-icon>
						<text class="count">{{comments.length}}</text>
					</view>
					<!-- 收藏 -->
					<view class="star icon">
						<u-icon size="32" :name="star.status?'star-fill':'star'" :color="star.status?'#ff8800':'#333333'"></u-icon>
						<text class="count">{{star.count}}</text>
					</view>
					<!-- 点赞 -->
					<view class="like icon">
						<u-icon size="32" :name="like.status?'thumb-up-fill':'thumb-up'" :color="star.status?'#24A7FF':'#333333'"></u-icon>
						<text class="count">{{like.count}}</text>
					</view>
				</view>
			</view>
		</view>
		<view class="down-cotainer">
			<!-- 评论区 -->
			<view class="comment-content">
				<view class="comment-item" v-for="(item,index) in comments" :key="index">
					<text class="blue">{{item.userName}}:</text>
					<text>{{item.comment}}</text>
				</view>
			</view>
			<!-- 文本输入框 -->
			<view class="input-content">
				<image :src="loginUserImage" :style="{width:'52rpx',height:'52rpx',borderRadius:'50%'}"></image>
				<view class="input">
					<u-search search-icon="" height="52" :show-action="false" shape="round" placeholder="写评论..." v-model="value"></u-search>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	import {
		mapState
	} from 'vuex'
	export default {
		props: {
			userImage: {
				type: String,
			},
			userName: {
				type: String
			},
			pubLishDate: {
				type: String
			},
			list: {
				type: Array
			},
			site: {
				type: String
			},
			like: {
				type: Object
			},
			star: {
				type: Object
			},
			comments: {
				type: Array
			},
			title: {
				type: String
			},
			article: {
				type: String
			}
		},
		data() {
			return {
				value: ''
			};
		},
		computed: {
			...mapState({
				loginUserImage: state => state.global.globalData.userImage
			})
		}
	}
</script>

<style lang="less">
	.title {
		color: #272727;
		font-size: 32rpx;
		font-weight: bold;
	}

	.blue {
		color: #24A7FF;
	}

	.user-info-content {
		display: flex;
		align-items: center;
		margin-bottom: 20rpx;

		.user-info {
			font-size: 24rpx;
			color: #999999;
			display: flex;
			flex-direction: column;
			justify-content: space-between;
			height: 82rpx;
			margin-left: 18rpx;
		}

		.image {
			width: 92rpx;
			border-radius: 50%;
		}
	}

	.swiper-content {
		margin-bottom: 20rpx;
	}

	.location-content {
		font-size: 24rpx;
		margin-bottom: 30rpx;
	}

	.article-content {
		margin-bottom: 18rpx;

		.title-container {
			margin-bottom: 12rpx;
		}
	}

	.like-content {
		font-size: 24rpx;
		color: #333333;
		display: flex;
		justify-content: flex-end;

		.float-right {
			display: flex;
		}

		.icon {
			margin-left: 58rpx;
		}

		.count {
			margin-left: 6rpx;
		}
	}

	.comment-content {
		font-size: 28rpx;

		.comment-item {
			line-height: 56rpx;
		}
	}

	.input-content {
		display: flex;
		margin-top: 8rpx;
		align-items: center;

		.input {
			width: 498rpx;
			height: 52rpx;
			margin-left: 20rpx;
		}
	}

	.c_findSonUserArticle {
		width: 100%;

		.up-cotainer {
			width: 100%;
			padding: 30rpx 30rpx 30rpx 30rpx;
			border-bottom: 2rpx solid rgba(243, 243, 243, 1);
		}

		.down-cotainer {
			width: 100%;
			padding: 30rpx;
		}
	}
</style>

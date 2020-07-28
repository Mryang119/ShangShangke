<!-- 我的关注 -->
<!-- 陈铄源 -->
<template>
	<view class="container">
		<view class="orderHeader">
			<!-- 搜索框 -->
			<navigator class="searchBar" :url="toSearch">
				<image src="@/static/images/iconfont/search.png"></image>
				<view class="fakerInput">搜索我的订单</view>
			</navigator>
			<u-tabs class="tabs" :list="list" :bar-style="{backgroundImage: 'linear-gradient(to right,#92D0F9,#26A7FC)',height:6+'rpx'}"
			 :is-scroll="false" :bold='true' :current="current" @change="change" inactive-color="#000" active-color="#000"></u-tabs>
		</view>
		<view class="userDetail">
			<view class="user">
				<view class="userImg">
					<image src="@/static/images/tabBarImage/myLoginHeader.png"></image>
				</view>
				<view class="userCon">
					<view class="userName">吴亦凡</view>
					<view class="userDescribe">吃吃喝喝玩玩乐乐大碗宽面</view>
				</view>
			</view>
			<view class="focusBtn">关注</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				list: [{
					name: '推荐'
				}, {
					name: '关注'
				}, {
					name: '粉丝'
				}],
				current: 0,
				toSearch: '../../singlePage/search/search' // 跳转到搜索页面
			}
		},
		methods: {
			change(index) {
				this.current = index;
				console.log(this.current)
			}
		}
	}
</script>

<style lang="less" scoped>
	.container {
		width: 750rpx;
		height: 1380rpx;
		background: rgba(246, 246, 246, 1);

		.orderHeader {
			width: 750rpx;
			height: 160rpx;
			background: #FFFFFF;
			padding: 0 30rpx;
			display: flex;
			flex-direction: column;
			justify-content: space-around;

			// 搜索框
			.searchBar {
				display: flex;
				width: 690rpx;
				height: 64rpx;
				background: rgba(246, 246, 246, 1);
				border-radius: 34rpx;
				align-items: center;

				image {
					width: 28.74rpx;
					height: 30.18rpx;
					margin-left: 24rpx;
					margin-right: 20rpx;
				}

				.fakerInput {
					font-size: 28rpx;
					font-weight: 400;
					line-height: 28rpx;
					color: rgba(172, 172, 172, 1);
				}
			}
		}

		.userDetail {
			width: 750rpx;
			height: 150rpx;
			display: flex;
			align-items: center;
			justify-content: space-between;
			padding: 0 30rpx;
			background: #FFFFFF;
			margin-top: 20rpx;

			.user {
				height: 150rpx;
				display: flex;
				align-items: center;

				.userImg {
					width: 90rpx;
					height: 90rpx;
					margin-right: 24rpx;
					line-height: 90rpx;

					image {
						width: 90rpx;
						height: 90rpx;
						border-radius: 50%;
					}
				}

				.userCon {
					height: 150rpx;
					display: flex;
					flex-direction: column;
					justify-content: center;
					font-family: PingFang SC;

					.userName {
						font-size: 28rpx;
						font-weight: bold;
						color: rgba(51, 51, 51, 1);
					}

					.userDescribe {
						font-size: 24rpx;
						margin-top: 12rpx;
						color: rgba(112, 112, 112, 1);
					}
				}
			}
		}
	}
</style>

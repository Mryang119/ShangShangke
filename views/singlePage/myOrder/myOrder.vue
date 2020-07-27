<!-- 我的订单 -->
<template>
	<view class="myOrderContaniner">
		<view class="orderHeader">
			<!-- 搜索框 -->
			<view class="searchBar">
				<image src="@/static/images/iconfont/search.png"></image>
				<view class="fakerInput">搜索我的订单</view>
			</view>
			<u-tabs :list="list" :is-scroll="false" :current="current" @change="change" inactive-color="#000" active-color="#000" ></u-tabs>
		</view>
		<view class="orderItem">
			<view class="shopCon"></view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				list: [{
					name: '全部'
				}, {
					name: '待付款'
				}, {
					name: '待使用'
				}, {
					name: '已完成'
				}],
				current: 0
			}
		},
		methods: {
			change(index) {
				this.current = index;
			}
		}
	}
</script>

<style lang="less" scoped>
	.myOrderContaniner {
		width: 750rpx;
		height: 1754rpx;
		background:rgba(246,246,246,1);
		.orderHeader {
			width: 750rpx;
			height: 180rpx;
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
		.orderItem{
			width: 750rpx;
			height: 348rpx;
			background: #FFFFFF;
			margin-top: 20rpx;
		}
	}
</style>

<template>
	<view class="root_my">
		<!-- 自定义导航栏 -->
		<!-- <uni-nav-bar :fixed="true" :status-bar="true" title="我的" class="top_nvaBar_text" :shadow="false" background-color="#FFFFFF">
		</uni-nav-bar> -->
		<!-- 点击登录 -->
		<view class="myLogin">
			<image class="myLoginHeader" src="@/static/images/tabBarImage/myLoginHeader.png"></image>
			<view class="myLoginRight">
				<span class="myLoginText">点击登录</span>
				<image class="myLoginMore" src="@/static/images/iconfont/more.png"></image>
			</view>
		</view>
		<!-- 订单/卡券/收藏/拼团 -->
		<view class="myLoginOrder">
			<view class="myLoginOrderCon">
				<view class="myLoginOrderLi">
					<navigator class="myLoginOrderTu" :url="orderUrl">
						<image class="myLoginOrderImg" src="@/static/images/iconfont/dingdan.png"></image>
					</navigator>
					<span class="myLoginOrderText">我的订单</span>
				</view>
				<view class="myLoginOrderLi">
					<navigator class="myLoginOrderTu" :url="couponUrl">
						<image class="myLoginOrderImg" src="@/static/images/iconfont/kaquan.png"></image>
					</navigator>
					<span class="myLoginOrderText">我的卡券</span>
				</view>
				<view class="myLoginOrderLi">
					<navigator class="myLoginOrderTu" :url="collectUrl">
						<image class="myLoginOrderImg" src="@/static/images/iconfont/shoucang.png"></image>
					</navigator>
					<span class="myLoginOrderText">我的收藏</span>
				</view>
				<view class="myLoginOrderLi">
					<navigator class="myLoginOrderTu" :url="spellGroupUrl">
						<image class="myLoginOrderImg" src="@/static/images/iconfont/pintuan.png"></image>
					</navigator>
					<span class="myLoginOrderText">我的拼团</span>
				</view>
			</view>
		</view>
		<!-- 评价-->
		<view class="myLoginEstimate">
			<view class="myLoginEstimateLi">
				<span class="myLoginEstimateText">我的评价</span>
				<image class="myLoginEstimateImg" src="@/static/images/iconfont/more.png"></image>
			</view>
			<view class="myLoginEstimateLi">
				<span class="myLoginEstimateText">我的足迹</span>
				<image class="myLoginEstimateImg" src="@/static/images/iconfont/more.png"></image>
			</view>
			<view class="myLoginEstimateLi">
				<span class="myLoginEstimateText">我的动态</span>
				<image class="myLoginEstimateImg" src="@/static/images/iconfont/more.png"></image>
			</view>
		</view>
		<!-- 客服/商家 -->
		<view class="myLoginService">
			<view class="myLoginServiceLi">
				<span class="myLoginServiceText">我的客服</span>
				<image class="myLoginServiceImg" src="@/static/images/iconfont/more.png"></image>
			</view>
			<view class="myLoginServiceLi">
				<span class="myLoginServiceText">商家加盟</span>
				<image class="myLoginServiceImg" src="@/static/images/iconfont/more.png"></image>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				orderUrl: '../../singlePage/order/order',
				couponUrl: '../../singlePage/coupon/coupon',
				collectUrl: '../../singlePage/collect/collect',
				spellGroupUrl: '../../singlePage/spellGroup/spellGroup'
			}
		},
		methods: {

		}
	}
</script>

<style lang="less">
	// 最外层
	.root_my {
		height: 88px;

		// 点击登录
		.myLogin {
			width: 375px;
			height: 88px;
			margin: 0 25px 0 25px;
			font-size: 0;
			display: flex;
			align-items: center;

			// 头像
			.myLoginHeader {
				width: 58px;
				height: 58px;
				background: rgba(0, 0, 0, 0);
				border-radius: 50%;
			}

			.myLoginRight {
				width: 252px;
				display: flex;
				justify-content: space-between;
				align-items: center;
				margin-left: 15px;

				// 点击登录文字
				.myLoginText {
					width: 64px;
					height: 19px;
					font-size: 16px;
					font-family: PingFang SC;
					font-weight: bold;
					line-height: 19px;
					color: rgba(51, 51, 51, 1);
				}

				// 更多
				.myLoginMore {
					width: 7.46px;
					height: 14.87px;
				}
			}
		}

		// <!-- 订单/卡券/收藏/拼团 -->
		.myLoginOrder {
			width: 345px;
			height: 111px;
			background: rgba(255, 255, 255, 1);
			box-shadow: 0px 0px 10px rgba(0, 19, 34, 0.09);
			opacity: 1;
			border-radius: 13px;
			margin: 0 auto;
			margin-bottom: 10px;

			.myLoginOrderCon {
				display: flex;
				justify-content: space-around;
				align-items: center;

				.myLoginOrderLi {
					height: 59px;
					display: flex;
					flex-direction: column;
					align-items: center;
					justify-content: space-between;

					.myLoginOrderTu {
						width: 37px;
						height: 37px;
						border-style: dashed;
						border-width: 1px;
						border-color: #001322;

						.myLoginOrderImg {
							width: 37px;
							height: 37px;
						}
					}

					.myLoginOrderText {
						width: 48px;
						height: 14px;
						font-size: 12px;
						font-family: PingFang SC;
						font-weight: 400;
						line-height: 14px;
						color: rgba(51, 51, 51, 1);
						opacity: 1;
					}
				}
			}
		}

		// // <!-- 评价 -->
		.myLoginEstimate {
			height: 162px;
			background-color: #FFFFFF;
			margin-bottom: 15px;

			.myLoginEstimateLi {
				width: 325px;
				height: 52px;
				margin: 0 auto;
				display: flex;
				justify-content: space-between;
				align-items: center;
				border-bottom: 1px solid rgba(243, 243, 243, 1);

				.myLoginEstimateText {
					width: 56px;
					height: 16px;
					font-size: 14px;
					font-family: PingFang SC;
					font-weight: 400;
					line-height: 16px;
					color: rgba(39, 39, 39, 1);
					opacity: 1;
				}

				.myLoginEstimateImg {
					width: 4.25px;
					height: 8.75px;
				}
			}
		}

		// <!-- 客服/商家 -->
		.myLoginService {
			height: 108px;
			background-color: #FFFFFF;

			.myLoginServiceLi {
				width: 325px;
				height: 52px;
				margin: 0 auto;
				display: flex;
				justify-content: space-between;
				align-items: center;
				border-bottom: 1px solid rgba(243, 243, 243, 1);

				.myLoginServiceText {
					width: 56px;
					height: 16px;
					font-size: 14px;
					font-family: PingFang SC;
					font-weight: 400;
					line-height: 16px;
					color: rgba(39, 39, 39, 1);
					opacity: 1;
				}

				.myLoginServiceImg {
					width: 4.25px;
					height: 8.75px;
				}
			}
		}
	}
</style>

<!-- 底部导航我的页面 -->
<!-- name:陈铄源 -->
<template>
	<view class="root_my">
		<!-- 自定义导航栏 -->
		<uni-nav-bar :fixed="true" :status-bar="true" title="我的" class="top_nvaBar_text" :shadow="false" background-color="#FFFFFF">
		</uni-nav-bar>
		<view class="content">
			<view class="loginContent">
				<!-- 点击登录 -->
				<!-- 未登录 -->
				<view class="myLogin" @click="toLogin" v-if="!loginStatus">
					<image class="myLoginHeader" src="@/static/images/tabBarImage/myLoginHeader.png"></image>
					<view class="myLoginRight">
						<span class="myLoginText">点击登录</span>
						<image class="myLoginMore" src="@/static/images/iconfont/more.png"></image>
					</view>
				</view>
				<!-- 已登录 -->
				<view class="top-login-message" @click="toUserEdit" v-else>
					<!-- 头像 -->
					<view class="user-img">
						<image class="img" :src="userImgUrl"></image>
					</view>
					<!-- 用户名与粉丝关注 -->
					<view class="user-name-and-follow">
						<view class="user-name">
							{{userName}}
						</view>
						<view class="user-follow">
							<view>{{'粉丝:'+userFans}}</view>
							<view class="line"></view>
							<view>{{'关注:'+userFocus}}</view>
						</view>
					</view>
					<!--右箭头 -->
					<view class="right-more">
						<image class="more" src="@/static/images/iconfont/more.png" mode=""></image>
					</view>
				</view>
				<!-- 订单/卡券/收藏/拼团 -->
				<view class="myLoginOrder">
					<view class="myLoginOrderCon">
						<view class="myLoginOrderLi" @click="navigateTo('../../singlePage/myOrder/myOrder')">
							<view class="myLoginOrderTu">
								<image class="myLoginOrderImg" src="@/static/images/iconfont/dingdan.png"></image>
							</view>
							<span class="myLoginOrderText">我的订单</span>
						</view>
						<view class="myLoginOrderLi" @click="navigateTo('../../singlePage/myCoupon/myCoupon')">
							<view class="myLoginOrderTu">
								<image class="myLoginOrderImg" src="@/static/images/iconfont/kaquan.png"></image>
							</view>
							<span class="myLoginOrderText">我的卡券</span>
						</view>
						<view class="myLoginOrderLi" @click="navigateTo('../../singlePage/myCollect/myCollect')">
							<view class="myLoginOrderTu">
								<image class="myLoginOrderImg" src="@/static/images/iconfont/shoucang.png"></image>
							</view>
							<span class="myLoginOrderText">我的收藏</span>
						</view>
						<view class="myLoginOrderLi" @click="navigateTo('../../singlePage/mySpellGroup/mySpellGroup')">
							<view class="myLoginOrderTu">
								<image class="myLoginOrderImg" src="@/static/images/iconfont/pintuan.png"></image>
							</view>
							<span class="myLoginOrderText">我的拼团</span>
						</view>
					</view>
				</view>

			</view>
			<!-- 评价-->
			<view class="myLoginEstimate">
				<view class="myLoginEstimateLi">
					<span class="myLoginEstimateText">我的评价</span>
					<image class="myLoginEstimateImg" src="@/static/images/iconfont/more.png"></image>
				</view>
				<u-line color="#F3F3F3" length="325rpx" margin="0 26rpx" />
				<view class="myLoginEstimateLi">
					<span class="myLoginEstimateText">我的足迹</span>
					<image class="myLoginEstimateImg" src="@/static/images/iconfont/more.png"></image>
				</view>
				<u-line color="#F3F3F3" length="325rpx" margin="0 26rpx" />
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
				<u-line color="#F3F3F3" length="325rpx" margin="0 26rpx" />
				<view class="myLoginServiceLi">
					<span class="myLoginServiceText">商家加盟</span>
					<image class="myLoginServiceImg" src="@/static/images/iconfont/more.png"></image>
				</view>
			</view>
		</view>
		<u-modal v-model="show" :show-cancel-button="true" :content="content" @confirm="confirm" @cancel="cancel"></u-modal>
	</view>
</template>

<script>
	import {
		isLogin
	} from '../../../src/utils/index.js'
	import {
		getUserInfo
	} from '@/src/api/userApi/userApi.js'
	export default {
		data() {
			return {
				orderUrl: '../../singlePage/myOrder/myOrder',
				couponUrl: '../../singlePage/myCoupon/myCoupon',
				collectUrl: '../../singlePage/myCollect/myCollect',
				spellGroupUrl: '../../singlePage/mySpellGroup/mySpellGroup',
				userName: "",
				userFans: 0, // 粉丝
				userFocus: 0, // 关注
				userImgUrl: '',
				loginStatus: false,
				show: false,
				content: "您还未登录是否去登录"
			}
		},
		methods: {
			toLogin() {
				uni.navigateTo({
					url: '../../singlePage/login/login'
				})
			},
			// 去编辑页
			toUserEdit() {
				uni.navigateTo({
					url: '../../singlePage/setting/setting'
				})
			},
			// 跳转
			navigateTo(url) {
				if (isLogin()) {
					uni.navigateTo({
						url: url
					})
				} else {
					this.show = true
				}
			},
			confirm() {
				this.show = false
				uni.navigateTo({
					url: '../../singlePage/login/login'
				})
			},
			cancel() {
				this.show = false
			}
		},
		async onShow() {
			if (isLogin()) { // 登录了
				this.loginStatus = true
				const loginDatas = uni.getStorageSync('loginDatas').putCustomer
				this.userName = loginDatas.custName
				this.userImgUrl = loginDatas.imgAddr
				// // 判断缓存有否
				// let userDatas = uni.getStorageSync('userDatas')
				// if (userDatas && JSON.stringify(userDatas) != '{}') { // 缓存取
				// 	this.userName = userDatas.userName
				// 	this.userImgUrl = userDatas.userImgUrl
				// } else {
				// 	// 请求取
				// 	try {
				// 		let res = await getUserInfo({
				// 			mobile: loginDatas.mobile
				// 		})
				// 		this.userName = res.data.data.pntCust.custName
				// 		this.userImgUrl = res.data.data.pntCust.imgAddr
				// 		uni.setStorageSync('userDatas', {
				// 			userName: res.data.data.pntCust.custName || "",
				// 			userImgUrl: res.data.data.pntCust.imgAddr || ""
				// 		})
				// 	} catch (e) {
				// 		console.log('获取个人信息失败')
				// 	}
				// }
			} else {
				console.log('未登录')
				this.loginStatus = false
				this.userName = ''
				this.userImgUrl = ''
			}
		}
	}
</script>

<style lang="less" scoped>
	.root_my {
		width: 750rpx;
		background: #F6F6F6;
		box-sizing: border-box;
		overflow-x: hidden;

		// 最外层
		.content {
			box-sizing: border-box;

			.loginContent {
				background: #FFFFFF;
				padding-bottom: 10rpx;


				.top-login-message {
					width: 750rpx;
					height: 176rpx;
					display: flex;
					align-items: center;
					padding: 0 50rpx;

					// 杨大锐
					.user-img {
						width: 116rpx;
						height: 116rpx;
						overflow: hidden;
						border-radius: 50%;

						.img {
							width: 100%;
							height: 100%;
							border-radius: 50%;
						}
					}

					.user-name-and-follow {
						height: 88rpx;
						display: flex;
						flex-direction: column;
						justify-content: space-between;
						margin-left: 30rpx;

						.user-name {
							font-size: 32rpx;
							font-weight: bold;
						}

						.user-follow {
							display: flex;
							color: #666666;
							font-size: 28rpx;
							align-items: center;

							.line {
								width: 2rpx;
								height: 26rpx;
								background-color: #DFDFDF;
								margin: 0 22rpx;
							}
						}
					}

					.right-more {
						flex: 1;

						.more {
							width: 14.92rpx;
							height: 29.74rpx;
							float: right;
						}
					}
				}

				// 点击登录
				.myLogin {
					width: 750rpx;
					height: 176rpx;
					box-sizing: border-box;
					font-size: 0;
					display: flex;
					align-items: center;
					margin-bottom: 38rpx;
					padding-left: 50rpx;


					// 头像
					.myLoginHeader {
						width: 116rpx;
						height: 116rpx;
						background: rgba(0, 0, 0, 0);
						border-radius: 50%;
					}

					.myLoginRight {
						width: 504rpx;
						display: flex;
						justify-content: space-between;
						align-items: center;
						margin-left: 30rpx;

						// 点击登录文字
						.myLoginText {
							width: 128rpx;
							height: 38rpx;
							font-size: 32rpx;
							font-family: PingFang SC;
							font-weight: bold;
							line-height: 38rpx;
							color: rgba(51, 51, 51, 1);
						}

						// 更多
						.myLoginMore {
							width: 14.92rpx;
							height: 29.74rpx;
						}
					}
				}

				// <!-- 订单/卡券/收藏/拼团 -->
				.myLoginOrder {
					width: 690rpx;
					height: 222rpx;
					background: rgba(255, 255, 255, 1);
					box-shadow: 0rpx 0rpx 20rpx rgba(0, 19, 34, 0.09);
					opacity: 1;
					border-radius: 26rpx;
					margin: 0 auto;
					margin-bottom: 10rpx;

					.myLoginOrderCon {
						display: flex;
						justify-content: space-around;
						align-items: center;
						height: 222rpx;

						.myLoginOrderLi {
							height: 118rpx;
							display: flex;
							flex-direction: column;
							align-items: center;
							justify-content: space-between;

							.myLoginOrderTu {
								width: 74rpx;
								height: 74rpx;

								.myLoginOrderImg {
									width: 74rpx;
									height: 74rpx;
								}
							}

							.myLoginOrderText {
								width: 96rpx;
								height: 28rpx;
								font-size: 24rpx;
								font-family: PingFang SC;
								font-weight: 400;
								line-height: 28rpx;
								color: rgba(51, 51, 51, 1);
								opacity: 1;
							}
						}
					}
				}

			}

			// // <!-- 评价 -->
			.myLoginEstimate {
				height: 324rpx;
				background-color: #FFFFFF;

				.myLoginEstimateLi {
					width: 650rpx;
					height: 104rpx;
					margin: 0 auto;
					display: flex;
					justify-content: space-between;
					align-items: center;

					.myLoginEstimateText {
						width: 112rpx;
						height: 32rpx;
						font-size: 28rpx;
						font-family: PingFang SC;
						font-weight: 400;
						line-height: 32rpx;
						color: rgba(39, 39, 39, 1);
						opacity: 1;
					}

					.myLoginEstimateImg {
						width: 8.5rpx;
						height: 17.5rpx;
					}
				}
			}

			// <!-- 客服/商家 -->
			.myLoginService {
				height: 216rpx;
				margin-top: 20rpx;
				background-color: #FFFFFF;

				.myLoginServiceLi {
					width: 650rpx;
					height: 104rpx;
					margin: 0 auto;
					display: flex;
					justify-content: space-between;
					align-items: center;

					.myLoginServiceText {
						width: 112rpx;
						height: 32rpx;
						font-size: 28rpx;
						font-family: PingFang SC;
						font-weight: 400;
						line-height: 32rpx;
						color: rgba(39, 39, 39, 1);
						opacity: 1;
					}

					.myLoginServiceImg {
						width: 8.5rpx;
						height: 17.5rpx;
					}
				}
			}

		}

	}
</style>

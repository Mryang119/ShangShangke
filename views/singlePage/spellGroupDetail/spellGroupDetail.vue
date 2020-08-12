<!-- 拼团详情 -->
<!-- name:陈铄源 -->
<template>
	<view class="container">
		<!-- 商品详情  -->
		<view class="shopDetail">
			<oneShopDetail />
		</view>
		<!-- 拼团成功和待成功 -->
		<view class="spellGroupSuccessCon" v-if="type==='已支付，待成团' || type==='组团成功'">
			<!-- 还差几人成团 -->
			<view class="groupPeople" v-if="type === '已支付，待成团'">
				<!-- 正在拼团中 -->
				<!-- v-if="" -->
				<view class="groupping">
					<view class="countDown">
						<u-count-down :timestamp="timestamp" separator="colon" separator-size="42" separator-color="#FE3B2B" font-size="32"
						 color="#FFFFFF" bg-color="#FE3B2B" :show-days="false"></u-count-down>
					</view>
					<view class="shortPeople">3人成团,还差<view class="num">{{num}}</view>人</view>
				</view>
			</view>
			<!-- 拼团成功 -->
			<view class="groupSuccess" v-else>拼团成功！</view>
			<!-- 用户个人信息 -->
			<view class="groupUser">
				<view class="oneGroupUser" v-for="(item,index) in userList" :key="index">
					<view class="userImg">
						<image :src="item.withInviteImg"></image>
					</view>
					<view class="userName">{{item.userName}}</view>
				</view>
			</view>
			<!-- 邀请好友拼团 -->
			<view class="inviteFriends" v-if="type === '已支付，待成团' ">
				<button class="inviteBtn" @click="inviteBtn" open-type="share">邀请好友拼团</button>
			</view>
			<!-- 查看我的拼团 -->
			<view class="inviteFriends" v-else @click="checkMySpellGroup">
				<view class="inviteBtn">查看我的拼团</view>
			</view>
		</view>
		<!-- 拼团失败 -->
		<view class="spellGroupFailCon" v-if="type==='组团失败，已回归'">
			<view class="orderType">
				<view class="text">订单状态:</view>
				<view class="type">{{groupType}}</view>
			</view>
			<view class="orderType">
				<view class="text">订单编号:</view>
				<view class="type">{{orderNumber}}</view>
			</view>
			<view class="orderType">
				<view class="text">订单金额:</view>
				<view class="type">￥{{orderPrice}}</view>
			</view>
			<view class="orderType">
				<view class="text">订单方式:</view>
				<view class="type">{{payWay}}</view>
			</view>
		</view>
	</view>
</template>

<script>
	import oneShopDetail from '../../../src/publicComponents/oneShopDetail.vue'
	export default {
		data() {
			return {
				timestamp: '86400', // 倒计时时间
				num: '1', //还差几人
				userList: [{ // 用户列表		
					withInviteImg: '../../../static/images/tabBarImage/myLoginHeader.png', //带邀请用户头像
					userName: '上官婉儿', // 用户名
				}, {
					withInviteImg: '../../../static/images/tabBarImage/myLoginHeader.png', //带邀请用户头像
					userName: '鲁班大师', // 用户名
				}, {
					withInviteImg: '../../../static/images/iconfont/weizhitouxiang.png', //带邀请用户头像
					userName: '待邀请...', // 用户名
				}],
				groupType: '拼团失败', //拼团状态
				orderNumber: '293247384734', // 订单编号
				orderPrice: '66.66', //订单金额
				payWay: '支付宝', // 支付方式
				type: '' //从我的拼团传过来的字段
			}
		},
		methods: {
			checkMySpellGroup() {
				uni.navigateBack({
					url: '/views/singlePage/mySpellGroup/mySpellGroup'
				})
			},
			inviteBtn() {
				console.log('邀请好友')
				uni.share({
				    provider: "weixin",
				    scene: "WXSceneSession",
				    type: 5,
				    title: "一起来拼团呀~",
				    summary: "一起来拼图，描述summary",
				    imageUrl: "https://img-cdn-qiniu.dcloud.net.cn/uniapp/images/uni@2x.png",
				    success: function (res) {
				        console.log("success:" + JSON.stringify(res));
				    },
				    fail: function (err) {
				        console.log("fail:" + JSON.stringify(err));
				    }
				});
			}
		},
		components: {
			oneShopDetail
		},
		computed: {

		},
		onLoad(options) {
			this.type = options.type
		}
	}
</script>

<style lang="less" scoped>
	.container {
		background: rgba(246, 246, 246, 1);
		padding-top: 20rpx;

		.shopDetail {
			width: 750rpx;
			height: 240rpx;
			padding: 0 30rpx;
			background: #FFFFFF;
		}

		// 拼团成功
		.spellGroupSuccessCon {
			.groupPeople {
				width: 750rpx;
				height: 224rpx;
				display: flex;
				flex-direction: column;
				align-items: center;
				justify-content: center;
				background: #FFFFFF;

				.groupping {
					text-align: center;

					.countDown {
						margin-bottom: 44rpx;
					}

					.shortPeople {
						font-size: 32rpx;
						font-family: PingFang SC;
						font-weight: bold;
						line-height: 38rpx;
						color: rgba(51, 51, 51, 1);

						.num {
							color: #FF2F2F;
							display: inline;
						}
					}
				}
			}

			.groupSuccess {
				width: 750rpx;
				height: 224rpx;
				font-size: 40rpx;
				background: #FFFFFF;
				font-family: PingFang SC;
				font-weight: bold;
				line-height: 224rpx;
				color: rgba(51, 51, 51, 1);
				text-align: center;
			}

			.groupUser {
				width: 750rpx;
				height: 202rpx;
				display: flex;
				align-items: center;
				justify-content: center;
				background: #FFFFFF;

				.oneGroupUser {
					width: 110rpx;
					display: flex;
					flex-direction: column;
					align-items: center;
					justify-content: center;
					margin: 0 35rpx;

					.userImg {
						margin-bottom: 12rpx;

						image {
							width: 98rpx;
							height: 98rpx;
							border-radius: 50%;
						}
					}

					.userName {
						width: 108rpx;
						height: 32rpx;
						font-size: 28rpx;
						font-family: PingFang SC;
						font-weight: 400;
						line-height: 32rpx;
						color: rgba(51, 51, 51, 1);
						overflow: hidden;
						white-space: nowrap;
						text-overflow: ellipsis;

					}
				}
			}

			.inviteFriends {
				width: 750rpx;
				height: 82rpx;
				background: #FFFFFF;
				padding-top: 20rpx;

				.inviteBtn {
					background: rgba(36, 167, 255, 1);
					margin: 0 30rpx;
					width: 690rpx;
					height: 82rpx;
					font-size: 32rpx;
					font-family: PingFang SC;
					font-weight: bold;
					line-height: 82rpx;
					color: rgba(255, 255, 255, 1);
					text-align: center;
					border-radius: 12rpx;
				}
			}
		}

		// 拼团失败
		.spellGroupFailCon {
			background: #FFFFFF;
			padding: 0 30rpx;

			.orderType {
				width: 690rpx;
				height: 68rpx;
				display: flex;
				justify-content: space-between;
				align-items: center;
				font-size: 28rpx;
				font-family: PingFang SC;
				font-weight: 400;

				.text {
					color: rgba(133, 133, 133, 1);
				}

				.type {
					color: rgba(51, 51, 51, 1);
				}
			}
		}
	}
</style>

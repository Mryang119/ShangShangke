<!-- 我的拼团 -->
<!-- name:陈铄源 -->
<template>
	<view class="mySpellGroup">
		<view class="mySpellGroup" v-if="userList.length=== 0">
			<image src="@/static/images/iconfont/mySpellGroupBg.png"></image>
			<view class="noSpellGroup">还没有拼团~</view>
		</view>
		<view class="spellInformation" v-for="(item,index) in userList" :key="index" @click="toSpellGroupDetail(item,index)">
			<view class="spellGroupTime">
				<view class="Time">{{item.spellGroupTime}}</view>
				<view class="text">{{item.spellGroupType}}</view>
			</view>
			<view class="goods">
				<view class="goodsImg">
					<image :src="item.goodsImg"></image>
				</view>
				<view class="content">
					<view class="text">{{item.goodsName}}</view>
					<view class="goodsType">{{item.goodsType}}</view>
					<view class="price">
						<view class="nowPrice">￥{{item.nowPrice}}</view>
						<view class="beforePrice">￥{{item.beforePrice}}</view>
					</view>
				</view>
			</view>
			<view class="countDownTime">
				<view class="countDown">
					拼团倒计时:
					<u-count-down :timestamp="item.spellGroupCountDown" separator="colon" separator-size="28" separator-color="#333333"></u-count-down>
				</view>
				<view class="inviteBtn" v-if="item.spellGroupType==='已支付，待成团'" @click.stop="inviteFriends">邀请好友参团</view>
				<view class="inviteBtn" v-if="item.spellGroupType==='组团失败，已回归'" @click.stop="againInvite">再次发起拼团</view>
				<view class="inviteBtnTo" v-if="item.spellGroupType==='组团成功'" @click.stop="toUse">进店使用</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				userList: [
					{
						goodsImg: '../../../static/images/Product/shangpintu.png',
						goodsName: '韩国年糕料理（海岸城店）',
						goodsType: '两人芝士双拼套餐',
						nowPrice: '1.00',
						beforePrice: '11.00',
						spellGroupTime: '2020-06-31 18:03:21',
						spellGroupType: '已支付，待成团',
						spellGroupCountDown: '983272'
					},
					{
						goodsImg: '../../../static/images/Product/shangpintu.png',
						goodsName: '韩国年糕料理（海岸城店）',
						goodsType: '两人芝士双拼套餐',
						nowPrice: '1.00',
						beforePrice: '11.00',
						spellGroupTime: '2020-06-31 18:03:21',
						spellGroupType: '组团失败，已回归',
						spellGroupCountDown: '983272'
					},
					{
						goodsImg: '../../../static/images/Product/shangpintu.png',
						goodsName: '韩国年糕料理（海岸城店）',
						goodsType: '两人芝士双拼套餐',
						nowPrice: '1.00',
						beforePrice: '11.00',
						spellGroupTime: '2020-06-31 18:03:21',
						spellGroupType: '组团成功',
						spellGroupCountDown: '983272'
					}
				]
			}
		},
		methods: {
			// 邀请好友参团
			inviteFriends() {
				console.log('邀请好友参团')
			},
			// 再次发起拼团
			againInvite() {
				console.log('再次发起拼团')
			},
			// 进店使用
			toUse() {
				console.log('进店使用')
			},
			// 跳转拼团详情
			toSpellGroupDetail(item, index) {
				let spellGroupType = this.userList[index].spellGroupType
				if (spellGroupType) {
					uni.navigateTo({
						url: `/views/singlePage/spellGroupDetail/spellGroupDetail?type=${spellGroupType}`
					})
				}
				console.log(spellGroupType)
			}

		}
	}
</script>

<style lang="less" scoped>
	.mySpellGroup {
		width: 750rpx;
		height: 1380rpx;
		background: rgba(246, 246, 246, 1);
		padding-top: 20rpx;

		.mySpellGroup {
			width: 370.5rpx;
			height: 420.02rpx;
			margin: 138rpx 190rpx 0 190rpx;

			image {
				width: 370.5rpx;
				height: 420.02rpx;
				margin-bottom: 42rpx;
			}

			.noSpellGroup {
				font-size: 28rpx;
				font-family: PingFang SC;
				font-weight: 400;
				line-height: 32rpx;
				color: rgba(169, 169, 169, 1);
				text-align: center;
			}
		}

		.spellInformation {
			width: 750rpx;
			height: 394rpx;
			margin-bottom: 20rpx;
			background: #FFFFFF;
			padding: 0 30rpx;

			.spellGroupTime {
				width: 690rpx;
				height: 98rpx;
				display: flex;
				justify-content: space-between;
				align-items: center;
				font-size: 28rpx;
				font-family: PingFang SC;
				font-weight: 400;
				border-bottom: 1px solid rgba(243, 243, 243, 1);

				.time {
					color: rgba(51, 51, 51, 1);
				}

				.text {
					color: rgba(133, 133, 133, 1);
				}
			}

			.goods {
				width: 690rpx;
				height: 220rpx;
				background: rgba(255, 255, 255, 1);
				border-radius: 12rpx;
				display: flex;
				padding-top: 30rpx;

				.goodsImg {
					width: 182rpx;
					height: 180rpx;
					margin-right: 20rpx;

					image {
						width: 182rpx;
						height: 180rpx;
						border-radius: 6px;
					}
				}

				.content {
					height: 180rpx;
					display: flex;
					flex-direction: column;
					justify-content: space-around;

					.text {
						font-size: 28rpx;
						font-family: PingFang SC;
						font-weight: bold;
						line-height: 32rpx;
						color: rgba(51, 51, 51, 1);
					}

					.goodsType {
						font-size: 24rpx;
						font-family: PingFang SC;
						font-weight: 400;
						line-height: 28rpx;
						color: rgba(112, 112, 112, 1);
						margin-bottom: 24rpx;
					}

					.price {
						height: 42rpx;
						display: flex;
						// justify-content: space-around;
						align-items: center;

						.nowPrice {
							font-size: 36rpx;
							font-family: PingFang SC;
							font-weight: bold;
							line-height: 42rpx;
							color: rgba(241, 0, 0, 1);
							margin-right: 12rpx;
						}

						.beforePrice {
							font-size: 24rpx;
							font-family: PingFang SC;
							font-weight: 400;
							line-height: 28rpx;
							color: rgba(169, 169, 169, 1);
							text-decoration: line-through;
						}
					}
				}
			}

			.countDownTime {
				width: 690rpx;
				height: 76rpx;
				display: flex;
				justify-content: space-between;
				align-items: center;
				font-size: 28rpx;
				font-family: PingFang SC;
				font-weight: 400;

				.countDown {
					color: rgba(51, 51, 51, 1);
					margin-top: 20rpx;
				}

				.inviteBtn {
					width: 218rpx;
					height: 56rpx;
					border: 2rpx solid rgba(36, 167, 255, 1);
					border-radius: 8rpx;
					color: rgba(36, 167, 255, 1);
					line-height: 56rpx;
					text-align: center;
				}

				.inviteBtnTo {
					width: 160rpx;
					height: 56rpx;
					border: 2rpx solid rgba(36, 167, 255, 1);
					border-radius: 8rpx;
					color: rgba(36, 167, 255, 1);
					line-height: 56rpx;
					text-align: center;
				}
			}
		}
	}
</style>

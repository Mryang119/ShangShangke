<template>
	<view class="myTidingsContainer">
		<u-tabs active-color='#000000' inactive-color="#000000" :list="tabsList" :bold='true' :is-scroll="false" :current="current"
		 @change="change" :bar-style="{backgroundImage: 'linear-gradient(to right,#92D0F9,#26A7FC)',height:6+'rpx'}"></u-tabs>
		<view class="listContainer">
			<view class="tidingsBg" v-if="newShopList.length=== 0">
				<image src="@/static/images/iconfont/myTidingsBg.png"></image>
				<view class="noTidings"><text>还没有发布相关动态~</text></view>
			</view>
			<view class="bothList" v-for="(item,index) in newShopList" :key="index">
				<view class="shopImg">
					<image :src="item.shopImg"></image>
				</view>
				<view class="shopEvaluateCon">
					<view class="shopEvaluate"><text>{{item.shopEvaluate}}</text></view>
					<view class="userInfo">
						<view class="user">
							<view class="userImg">
								<image :src="item.userImg"></image>
							</view>
							<view class="userName"><text>{{item.userName}}</text></view>
						</view>
						<view class="giveLike">
							<u-icon :name="item.likeState?'thumb-up-fill':'thumb-up'" size="28" color="#24A7FF" @click="likeBtn(item,index)"></u-icon>
							<view class="likeNumber"><text>{{item.likeNumber}}</text></view>
						</view>
					</view>
				</view>
				<view class="videoIcon" v-if="item.videoIconState===true" @click="playVideo">
					<image src="@/static/images/iconfont/bofang.png"></image>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				tabsList: [{ // 导航栏列表
					name: '全部'
				}, {
					name: '视频'
				}, {
					name: '图文'
				}],
				current: 0, // 导航栏索引
				src: '', // 视频
				shopList: [{ // 商品列表
						shopImg: '../../../static/images/iconfont/shopitem.png', //商品图片
						userImg: '../../../static/images/tabBarImage/myLoginHeader.png', // 用户头像
						shopEvaluate: '深圳最好吃的火锅！', // 商品评价
						userName: '彭于晏', // 用户名
						likeNumber: '123', // 点赞数
						likeState: false, // 点赞图标状态，默认为false
						videoIconState: true, // 视频按钮标识
						videoState: false // 视频状态   默认隐藏
					},
					{ // 商品列表
						shopImg: '../../../static/images/iconfont/shopitem.png', //商品图片
						userImg: '../../../static/images/tabBarImage/myLoginHeader.png', // 用户头像
						shopEvaluate: '深圳最好吃的火锅！', // 商品评价
						userName: '彭于晏', // 用户名
						likeNumber: '123', // 点赞数
						likeState: false, // 点赞图标状态，默认为false
						videoIconState: true, // 视频按钮标识
						videoState: false // 视频状态   默认隐藏
					},
					{ // 商品列表
						shopImg: '../../../static/images/iconfont/shopitem.png', //商品图片
						userImg: '../../../static/images/tabBarImage/myLoginHeader.png', // 用户头像
						shopEvaluate: '深圳最好吃的火锅！', // 商品评价
						userName: '彭于晏', // 用户名
						likeNumber: '123', // 点赞数
						likeState: false, // 点赞图标状态，默认为false
						videoIconState: false // 视频按钮标识
					},
					{ // 商品列表
						shopImg: '../../../static/images/iconfont/shopitem.png', //商品图片
						userImg: '../../../static/images/tabBarImage/myLoginHeader.png', // 用户头像
						shopEvaluate: '深圳最好吃的火锅！', // 商品评价
						userName: '彭于晏', // 用户名
						likeNumber: '123', // 点赞数
						likeState: false, // 点赞图标状态，默认为false
						videoIconState: false // 视频按钮标识
					}
				]
			}
		},
		methods: {
			change(index) {     // 导航点击索引值
				this.current = index;
				console.log(this.current)
			},
			likeBtn(item, index) {       //点赞
				this.likeState = !this.likeState
				let newShopList = this.newShopList
				if (newShopList[index].likeState) {
					newShopList[index].likeState = false
					item.likeNumber--
				} else {
					newShopList[index].likeState = true
					item.likeNumber++
				}
			},
			playVideo() {    // 视频
				console.log('点击出现视频')
			}
		},
		computed: {	
			newShopList() {
				switch (this.current) {
					case 1:
						const videoResult = this.shopList.filter(item => item.videoIconState === true)
						return videoResult
					case 2:
						const pictureResult = this.shopList.filter(item => item.videoIconState === false)
						return pictureResult
					default:
						return this.shopList
				}
			}
		}
	}
</script>

<style lang="less" scoped>
	.myTidingsContainer {
		width: 750rpx;
		background: rgba(246, 246, 246, 1);

		.listContainer {
			width: 750rpx;
			padding: 0 20rpx;
			margin-top: 20rpx;
			display: flex;
			justify-content: space-between;
			flex-wrap: wrap;

			.tidingsBg {
				width: 370.5rpx;
				height: 420.02rpx;
				margin: 138rpx 190rpx 0 190rpx;

				image {
					width: 370.5rpx;
					height: 420.02rpx;
					margin-bottom: 42rpx;
				}

				.noTidings {
					font-size: 28rpx;
					font-family: PingFang SC;
					font-weight: 400;
					line-height: 32rpx;
					color: rgba(169, 169, 169, 1);
					text-align: center;
				}
			}

			.bothList {
				width: 348rpx;
				height: 504rpx;
				background: #FFFFFF;
				margin-bottom: 20rpx;
				position: relative;

				.shopImg {
					width: 348rpx;
					height: 378rpx;

					image {
						width: 348rpx;
						height: 378rpx;
						border-radius: 6px 6px 0px 0px;
					}
				}

				.shopEvaluateCon {
					width: 348rpx;
					height: 126rpx;
					padding: 0 20rpx;

					.shopEvaluate {
						height: 72rpx;
						font-size: 28rpx;
						font-family: PingFang SC;
						font-weight: bold;
						line-height: 72rpx;
						color: rgba(39, 39, 39, 1);
					}

					.userInfo {
						display: flex;
						justify-content: space-between;
						align-items: center;

						.user {
							display: flex;
							align-items: center;

							.userImg {
								width: 34rpx;
								height: 34rpx;
								margin-right: 12rpx;

								image {
									width: 34rpx;
									height: 34rpx;
									border-radius: 50%;
								}
							}

							.userName {
								font-size: 24rpx;
								font-family: PingFang SC;
								font-weight: 400;
								line-height: 28rpx;
								color: rgba(39, 39, 39, 1);
							}
						}

						.giveLike {
							display: flex;
							align-items: center;

							.likeNumber {
								font-size: 24rpx;
								font-family: PingFang SC;
								font-weight: 400;
								line-height: 28rpx;
								color: rgba(51, 51, 51, 1);
								margin-left: 10rpx;
								margin-top: 3rpx;
							}
						}
					}
				}

				.videoIcon {
					position: absolute;
					top: 16rpx;
					right: 18rpx;

					image {
						width: 36rpx;
						height: 36rpx;
					}
				}
			}
		}
	}
</style>

<!-- 我的关注 -->
<!-- name:陈铄源 -->
<template>
	<view class="container">
		<view class="orderHeader">
			<!-- 搜索框 -->
			<navigator class="searchBar" :url="toSearch">
				<image src="@/static/images/iconfont/search.png"></image>
				<view class="fakerInput">搜索我的订单</view>
			</navigator>
			<u-tabs class="tabs" :list="tabsList" :bar-style="{backgroundImage: 'linear-gradient(to right,#92D0F9,#26A7FC)',height:6+'rpx'}"
			 :is-scroll="false" :bold='true' :current="current" @change="change" inactive-color="#000" active-color="#000"></u-tabs>
		</view>
		<!-- 未关注列表 -->
		<view class="myFocusBg" v-if="userList.length=== 0">
			<image src="@/static/images/iconfont/myFocusBg.png"></image>
			<view class="noFocus">还没有相关数据~</view>
		</view>
		<view class="userDetail" v-for="(item,index) in userList" :key="index">
			<view class="user">
				<view class="userImg">
					<image :src="item.userImg"></image>
				</view>
				<view class="userCon">
					<view class="userName">{{item.userName}}</view>
					<view class="userDescribe">{{item.userDescribe}}</view>
				</view>
			</view>
			<view :class="item.state ?'focusBtn':'cancelFocusBtn'" @click="focusUser(index)">{{item.state ? '关注' :'已关注'}}</view>
		</view>
		<u-modal v-model="show" show-cancel-button="true" :content="content" :show-title="false" confirm-color="#007AFF"
		 cancel-color="#007AFF" :content-style="{color:'#000000',fontSize:'32rpx',fontWeight:'bold'}" @confirm="confirm">
		</u-modal>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				tabsList: [{
					name: '推荐'
				}, {
					name: '关注'
				}, {
					name: '粉丝'
				}],
				current: 0, //tabs导航索引
				state: true, //样式文字状态默认为true
				content: '是否取消关注', // 取消关注模态框文本
				show: false, //控制模态框弹出，默认为false
				toSearch: '../../singlePage/search/search', // 跳转到搜索页面
				userList: [{
						userImg: '/static/images/tabBarImage/myLoginHeader.png', // 用户头像
						userName: '吴亦凡', //用户名字
						userDescribe: '吃吃喝喝玩玩乐乐大碗宽面', // 用户介绍
						state: true // 默认得状态（样式/按钮）
					},
					{
						userImg: '/static/images/tabBarImage/myLoginHeader.png', // 用户头像
						userName: '吴亦凡', //用户名字
						userDescribe: '吃吃喝喝玩玩乐乐大碗宽面', // 用户介绍
						state: true // 默认得状态（样式/按钮）
					},
					{
						userImg: '/static/images/tabBarImage/myLoginHeader.png', // 用户头像
						userName: '吴亦凡', //用户名字
						userDescribe: '吃吃喝喝玩玩乐乐大碗宽面', // 用户介绍
						state: true // 默认得状态（样式/按钮）
					}
				],
				userList: [{
						userImg: '/static/images/tabBarImage/myLoginHeader.png', // 用户头像
						userName: '吴亦凡', //用户名字
						userDescribe: '吃吃喝喝玩玩乐乐大碗宽面', // 用户介绍
						state: true // 默认得状态（样式/按钮）
					},
					{
						userImg: '/static/images/tabBarImage/myLoginHeader.png', // 用户头像
						userName: '吴亦凡', //用户名字
						userDescribe: '吃吃喝喝玩玩乐乐大碗宽面', // 用户介绍
						state: true // 默认得状态（样式/按钮）
					},
					{
						userImg: '/static/images/tabBarImage/myLoginHeader.png', // 用户头像
						userName: '吴亦凡', //用户名字
						userDescribe: '吃吃喝喝玩玩乐乐大碗宽面', // 用户介绍
						state: true // 默认得状态（样式/按钮）
					},
				]
			}
		},
		methods: {
			change(index) {
				this.current = index;
				console.log(this.current)
				// 参数为三种状态 0推荐 1关注 2粉丝  
				// userId 假字段 pageSize 是页数 pageNo 是页码
				// this.reqNavData({state:this.current,usedId:1,pageSize:10,pageNo:1})
			},
			// 获取导航数据接口
			// reqNavData(data){ // data就是外面的传参的参数
			// 	req(data).then(res=>{
			// 		if(res.code===0){
			// 			// 对后台数据进行操作 最后才更新 
			// 			this.$set(this,'userList',res.data.list) // 等同于this.userList = res.data.list 防止请求数据太慢了 数据更新了页面没渲染
			// 		}
			// 	})
			// },

			focusUser(index) {
				let that = this
				if (that.userList[index].state) {
					that.userList[index].state = false
				} else {
					uni.showModal({
						content: '是否取消关注',
						success: function(res) {
							if (res.confirm) {
								that.userList[index].state = true
							}
						}
					});
				}
			},
			// 确认取消调用的函数
			confirm() {
				this.state = !this.state
			}
		},
		onLoad() {
			// 本页面一进来就发送请求
			// 拿到导航列表对应的状态
			// this.reqNavData({state:0,usedId:1,pageSize:10,pageNo:1})

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

		.myFocusBg {
			width: 370.5rpx;
			height: 420.02rpx;
			margin: 138rpx 190rpx 0 190rpx;

			image {
				width: 370.5rpx;
				height: 420.02rpx;
				margin-bottom: 42rpx;
			}

			.noFocus {
				font-size: 28rpx;
				font-family: PingFang SC;
				font-weight: 400;
				line-height: 32rpx;
				color: rgba(169, 169, 169, 1);
				text-align: center;
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

			.focusBtn {
				width: 106rpx;
				height: 48rpx;
				border: 2rpx solid rgba(36, 167, 255, 1);
				border-radius: 6rpx;
				font-size: 24rpx;
				font-family: PingFang SC;
				font-weight: 400;
				line-height: 40rpx;
				color: rgba(36, 167, 255);
				text-align: center;
			}

			.cancelFocusBtn {
				width: 106rpx;
				height: 48rpx;
				border: 2rpx solid rgba(211, 211, 211, 1);
				border-radius: 6rpx;
				font-size: 24rpx;
				font-family: PingFang SC;
				font-weight: 400;
				line-height: 40rpx;
				color: rgba(186, 186, 186, 1);
				text-align: center;
			}
		}
	}
</style>

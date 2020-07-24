<!-- 拼团详情 -->
<template>
	<view class="container">
		<!-- 商品详情  -->
		<view class="shopDetail">
			<oneShopDetail />
		</view>
		<!-- 还差几人成团 -->
		<view class="groupPeople">
			<!-- 正在拼团中 -->
			<!-- v-if="" -->
			<view class="groupping">
				<view class="countDown">
					<u-count-down :timestamp="86400" separator="colon" separator-size="42" separator-color="#FE3B2B" font-size="32"
					 color="#FFFFFF" bg-color="#FE3B2B" :show-days="false"></u-count-down>
				</view>
				<view class="shortPeople">3人成团,还差<view class="num">{{num}}</view>人</view>
			</view>
			<!-- 拼团失败 -->
			<!-- <view class="groupFail">拼团成功！</view> -->
		</view>
		<!-- 用户个人信息 -->	
		<view class="groupUser">
			<view class="oneGroupUser" v-for="(item,index) in userList" :key="index">
				<view class="userImg">
					<image :src="withInviteImg"></image>
				</view>
				<view class="userName">{{userName}}</view>
			</view>
		</view>
		<!-- 邀请好友拼团 -->
		<view class="inviteFriends">
			<view class="inviteBtn">邀请好友拼团</view>
		</view>
	</view>
</template>

<script>
	import oneShopDetail from '../../../src/publicComponents/oneShopDetail.vue'
	export default{
		data(){
			return{
				num:'1',  //还差几人
				userList:[{},{},{}],  // 用户列表
				withInviteImg:'../../../static/images/iconfont/weizhitouxiang.png',  //带邀请用户头像
				userName:'待邀请...',  // 用户名
				
			}
		},
		components:{
			oneShopDetail
		},
		computed:{
			
		}
	}
</script>

<style lang="less">
	.container{
		background:rgba(246,246,246,1);
		padding-top: 20rpx;
		.shopDetail{
			width: 750rpx;
			height: 240rpx;
			padding: 0 30rpx;
			background:#FFFFFF;
		}
		.groupPeople{
			width: 750rpx;
			height: 224rpx;
			display: flex;
			flex-direction: column;
			align-items: center;
			justify-content: center;
			background: #FFFFFF;
			.groupping{
				text-align: center;
				.countDown{
					margin-bottom: 44rpx;
				}
				.shortPeople{
					font-size:32rpx;
					font-family:PingFang SC;
					font-weight:bold;
					line-height:38rpx;
					color:rgba(51,51,51,1);
					.num{
						color: #FF2F2F;
						display: inline;
					}
				}
			}
			.groupFail{
				font-size:40rpx;
				font-family:PingFang SC;
				font-weight:bold;
				line-height:48rpx;
				color:rgba(51,51,51,1);
			}
		}
		.groupUser{
			width: 750rpx;
			height: 202rpx;
			display: flex;
			align-items: center;
			justify-content: center;
			background: #FFFFFF;
			.oneGroupUser{
				width: 110rpx;
				display: flex;
				flex-direction: column;
				align-items: center;
				justify-content: center;
				margin: 0 35rpx;
				.userImg{
					margin-bottom: 12rpx;
					image{
						width: 98rpx;
						height: 98rpx;
						border-radius: 50%;
					}
				}
				.userName{
					width: 108rpx;
					height: 32rpx;
					font-size:28rpx;
					font-family:PingFang SC;
					font-weight:400;
					line-height:32rpx;
					color:rgba(51,51,51,1);
					overflow: hidden;
					white-space: nowrap;
					text-overflow: ellipsis;
					
				}
			}
		}
		.inviteFriends{
			width: 750rpx;
			height: 82rpx;
			background: #FFFFFF;
			padding-top: 20rpx;
			.inviteBtn{
				background:rgba(36,167,255,1);
				margin: 0 30rpx;
				width: 690rpx;
				height: 82rpx;
				font-size:32rpx;
				font-family:PingFang SC;
				font-weight:bold;
				line-height:82rpx;
				color:rgba(255,255,255,1);
				text-align: center;
				border-radius: 12rpx;
			}
		}
	}
</style>

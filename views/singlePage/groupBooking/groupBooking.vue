<!-- 拼团 -->
<template>
	<!-- v-if="option.type==='group'" -->
	<view class="group">
		<view class="groupMore">
			<view class="people">{{groupPeople}}人正在拼团，可直接参与</view>
			<view class="more">
				<view class="text">查看更多</view>
				<image src="@/static/images/iconfont/more.png"></image>
			</view>
		</view>
		<view class="grouping">
			<view class="oneGroup"  v-for="(item,index) in 2" :key="index">
				<view class="userImg">
					<image src="@/static/images/tabBarImage/myLoginHeader.png"></image>
					<view class="userName">{{groupName}}</view>
				</view>
				<view class="toGroupCon">
					<view class="shortCon">
						<view class="shortPeople">还差<view class="people">{{shortPeople}}人</view>拼成</view>
						<view class="shortTime"> 
							剩余<u-count-down :timestamp="timestamp" color="#5F5C5F" font-size="24" :show-days="false"></u-count-down>
						</view>
					</view>
					<view class="toGroupBtn">去拼团</view>
				</view>
							
			</view>
		</view>
	</view>
	
</template>

<script>
	export default{
		name:'groupBooking',
		props:{
			groupPeople:{      //拼团人数
				type:Number,
				default:10
			},
			groupName:{
				type:String,
				default:'吴亦凡'
			},
			shortPeople:{
				type:Number,
				default:1
			},
			timestamp:{       //拼团倒计时时间
				type:Number,
				default:86300
			}
		},
		data(){
			return{
				
			}
		}
	}
</script>

<style lang="less">
	// 拼团
	.group {
		width: 750rpx;
		height: 384rpx;
		background: #FFFFFF;
		margin-bottom: 20rpx;
		padding: 0 30rpx;
	
		// 拼团人数
		.groupMore {
			height: 92rpx;
			display: flex;
			justify-content: space-between;
			align-items: center;
	
			.people {
				font-size: 28rpx;
				font-family: PingFang SC;
				font-weight: 400;
				line-height: 32rpx;
				color: rgba(51, 51, 51, 1);
			}
	
			.more {
				display: flex;
				align-items: center;
	
				.text {
					font-size: 24rpx;
					font-family: PingFang SC;
					font-weight: 400;
					line-height: 28rpx;
					color: rgba(133, 133, 133, 1);
				}
	
				image {
					width: 8.5rpx;
					height: 16.94rpx;
					margin-left: 10rpx;
				}
			}
		}
	
		// 拼团内容
		.grouping {
			width: 690rpx;
			height: 292rpx;
	
			.oneGroup {
				height: 146rpx;
				border-top: 2rpx solid rgba(243, 243, 243, 1);
				display: flex;
				justify-content: space-between;
				align-items: center;
	
				.userImg {
					height: 146rpx;
					display: flex;
					align-items: center;
	
					image {
						width: 86rpx;
						height: 86rpx;
						border-radius: 50%;
						margin-right: 20rpx;
					}
	
					.userName {
						font-size: 28rpx;
						font-family: PingFang SC;
						font-weight: 400;
						line-height: 32rpx;
						color: rgba(51, 51, 51, 1);
	
					}
				}
	
				.toGroupCon {
					width: 308rpx;
					display: flex;
	
					.shortCon {
						text-align: right;
	
						.shortPeople {
							font-size: 24rpx;
							font-family: PingFang SC;
							font-weight: 400;
							line-height: 28rpx;
							color: rgba(51, 51, 51, 1);
	
							.people {
								color: rgba(246, 54, 57, 1);
								display: inline;
							}
						}
	
						.shortTime {
							font-size: 24rpx;
							font-family: PingFang SC;
							font-weight: 400;
							line-height: 28rpx;
							color: rgba(102, 102, 102, 1);
						}
					}
	
					.toGroupBtn {
						width: 110rpx;
						height: 50rpx;
						background: rgba(255, 47, 47, 1);
						border-radius: 8rpx;
						font-size: 24rpx;
						font-family: PingFang SC;
						font-weight: 400;
						line-height: 50rpx;
						color: rgba(255, 255, 255, 1);
						text-align: center;
						margin-left: 22rpx;
					}
				}
			}
		}
	}
</style>

<!-- 我的卡券 -->
<template>
	<view class="container">
		<view class="tab">
			<u-tabs active-color='#000000' inactive-color="#000000" :list="tabList" :bold='true' :is-scroll="false" :current="current" @change="change" :bar-style="{backgroundImage: 'linear-gradient(to right,#92D0F9,#26A7FC)',height:6+'rpx'}"></u-tabs>
		</view>
		<view class="couponBg" v-if="currentArr.length=== 0">
			<image src="@/static/images/iconfont/couponBg.png"></image>
			<view class="noCoupon">还没有卡券~</view>
		</view>
		<view class="useCoupon" v-for="(item,index) in couponList" :key="index">
			<view class="couponHeader">
				<view class="headerImg">
					<image src="@/static/images/Product/shangpintu.png"></image>
				</view>
				<view class="headerText">{{item.shopName}}</view>
			</view>
			<view class="coupon">
				<!-- ￥100 -->
				<view class="numCon">
					<view class="context">￥</view>
					<view class="num">{{item.couponNumber}}</view>
				</view>
				<!-- 满减/有效期/选中 -->
				<view class="chooseCoupon">
					<!-- 满减/有效期 -->
					<view class="fullDelete">
						<view class="full">{{item.fullNumber}}</view>
						<view class="fullTime">有效期至：{{item.fullTime}}</view>
					</view>
					<!-- 去使用 -->
					<navigator class="toUse" :url="timeKillProductDetail">去使用</navigator>
				</view>
				<!-- 左上角商品类型 -->
				<view class="goodsType">
					<view class="goodsText">{{item.couponType}}</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default{
		data(){
			return{
				tabList: [{
					name: '全部'
				}, {
					name: '未使用'
				}, {
					name: '已使用'
				}, {
					name: '已过期'
				}],
				current: 0,   // tabs的索引
				timeKillProductDetail:'../../singlePage/timeKillProductDetail/timeKillProductDetail',  // 点击去使用跳到商品详情
				couponList:[{
					shopName:'海底捞沃尔玛蓝山店',
					couponNumber:'100',
					fullNumber:'满1000元可用',
					fullTime:'2020-06-31',
					couponType:'全品类可用'
				},{
					shopName:'海底捞沃尔玛蓝山店',
					couponNumber:'100',
					fullNumber:'满1000元可用',
					fullTime:'2020-06-31',
					couponType:'全品类可用'
				},{
					shopName:'海底捞沃尔玛蓝山店',
					couponNumber:'100',
					fullNumber:'满1000元可用',
					fullTime:'2020-06-31',
					couponType:'全品类可用'
				},{
					shopName:'海底捞沃尔玛蓝山店',
					couponNumber:'100',
					fullNumber:'满1000元可用',
					fullTime:'2020-06-31',
					couponType:'全品类可用'
				}]
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
	.container{
		width: 750rpx;
		height: 1380rpx;
		background:rgba(246,246,246,1);
		.tab{
			font-family:PingFang SC;
			color:rgba(51,51,51,1);
		}
		.couponBg{
			width: 370.5rpx;
			height: 420.02rpx;
			margin: 138rpx 190rpx 0 190rpx;
			image{
				width: 370.5rpx;
				height: 420.02rpx;
				margin-bottom: 42rpx;
			}
			.noCoupon{
				font-size:28rpx;
				font-family:PingFang SC;
				font-weight:400;
				line-height:32rpx;
				color:rgba(169,169,169,1);
				text-align: center;
			}
		}
		.useCoupon {
			width: 750rpx;
			height: 262rpx;
			background: #FFFFFF;
			padding: 0 30rpx;
			margin-top: 20rpx;
			
			.couponHeader {
				height: 96rpx;
				display: flex;
				align-items: center;
		
				.headerImg {
					width: 54rpx;
					height: 54rpx;
					margin-right: 20rpx;
		
					image {
						width: 54rpx;
						height: 54rpx;
						border-radius: 102rpx;
					}
				}
		
				.headerText {
					font-size: 28rpx;
					font-family: PingFang SC;
					font-weight: bold;
					line-height: 32rpx;
					color: rgba(51, 51, 51, 1);
				}
			}
		
			// 优惠券
			.coupon {
				width: 690rpx;
				height: 146rpx;
				background: rgba(253, 244, 230, 1);
				display: flex;
				position: relative;
		
				// ￥100
				.numCon {
					width: 198rpx;
					height: 146rpx;
					display: flex;
					align-items: center;
					justify-content: center;
		
					.context {
						font-size: 30rpx;
						font-family: PingFang SC;
						font-weight: bold;
						line-height: 36rpx;
						color: rgba(255, 47, 47, 1);
						padding-top: 14rpx;
					}
		
					.num {
						font-size: 52rpx;
						font-family: PingFang SC;
						font-weight: bold;
						line-height: 62rpx;
						color: rgba(255, 47, 47, 1);
					}
				}
		
				// 满减/有效期/选中
				.chooseCoupon {
					width: 492rpx;
					height: 146rpx;
					display: flex;
					align-items: center;
					justify-content: space-between;
					padding-right: 30rpx;
		
					// 满减
					.fullDelete {
						height: 146rpx;
						width: 280rpx;
						display: flex;
						flex-direction: column;
						justify-content: center;
		
						.full {
							width: 280rpx;
							height: 32rpx;
							font-size: 28rpx;
							font-family: PingFang SC;
							font-weight: bold;
							line-height: 32rpx;
							color: rgba(51, 51, 51, 1);
							margin-bottom: 18rpx;
						}
		
						.fullTime {
							width: 280rpx;
							height: 28rpx;
							font-size: 24rpx;
							font-family: PingFang SC;
							font-weight: 400;
							line-height: 28rpx;
							color: rgba(51, 51, 51, 1);
						}
					}
		
					// 选中
					// 去使用
					.toUse{
						width:112rpx;
						height:60rpx;
						border:2rpx solid rgba(255,47,47,1);
						border-radius:32rpx;
						line-height: 60rpx;
						text-align: center;
						color:rgba(255,47,47,1);
					}
				}
		
				// 左上角定位商品类型
				.goodsType {
					width: 174rpx;
					height: 30rpx;
					background-image: url(../../../static/images/Product/youhuiquanTextBg.png);
					background-size: 174rpx 30rpx;
					background-repeat: no-repeat;
					position: absolute;
					left: 0;
					top: 0;
		
					.goodsText {
						font-size: 20rpx;
						font-family: PingFang SC;
						font-weight: 400;
						line-height: 30rpx;
						color: rgba(157, 73, 0, 1);
						text-align: center;
		
					}
				}
			}
			
		}
		// .useCoupon:nth-child(2){
		// 	margin-bottom: 20rpx;
		// }
		
	}
</style>
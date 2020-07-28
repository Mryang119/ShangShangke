<!-- 我的卡券 -->
<template>
	<view class="container">
		<view class="tab">
			<u-tabs class="tabs" :list="couponList" :is-scroll="false" :current="current" @change="change" inactive-color="#333333"></u-tabs>
		</view>
		<view class="useCoupon" v-for="(item,index) in 4" :key="index">
			<view class="couponHeader">
				<view class="headerImg">
					<image src="@/static/images/Product/shangpintu.png"></image>
				</view>
				<view class="headerText">海底捞沃尔玛蓝山店</view>
			</view>
			<view class="coupon">
				<!-- ￥100 -->
				<view class="numCon">
					<view class="context">￥</view>
					<view class="num">100</view>
				</view>
				<!-- 满减/有效期/选中 -->
				<view class="chooseCoupon">
					<!-- 满减/有效期 -->
					<view class="fullDelete">
						<view class="full">满1000元可用</view>
						<view class="fullTime">有效期至：2020-06-31</view>
					</view>
					<!-- <view class="chooseCon">
						<u-icon :name="item.IconType ?'checkmark-circle-fill':'checkmark-circle'" color="#FF2F2F" size="38" @click="toggleIcon(item,index)"></u-icon>
					</view> -->
					<!-- 去使用 -->
					<navigator class="toUse" :url="timeKillProductDetail">去使用</navigator>
				</view>
				<!-- 左上角商品类型 -->
				<view class="goodsType">
					<view class="goodsText">全品类可用</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default{
		data(){
			return{
				couponList: [{
					name: '全部'
				}, {
					name: '未使用'
				}, {
					name: '已使用'
				}, {
					name: '已过期'
				}],
				current: 0,
				IconType: false, // 店铺优惠券的选中的状态
				list: [{}, {}], // 店铺优惠券
				timeKillProductDetail:'../../singlePage/timeKillProductDetail/timeKillProductDetail'
			}
		},
		methods: {
			change(index) {
				this.current = index;
				console.log(this.current)
			},
			// 控制店铺优惠券的选中状态
			toggleIcon(item, index) {
				this.IconType = !this.IconType
				console.log(item, index)
				let list = this.list
				list.forEach(item => {
					item.IconType = false
				})
				list[index].IconType = true
				this.list = list
			
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
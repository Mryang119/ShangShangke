<!-- 确认订单——选择优惠券 -->
<!-- name:陈铄源 -->
<template>
	<!-- 最外层 -->
	<view class="container">
		<view class="useText">此单可用优惠券（{{usableList.length}}张）</view>
		<view class="useCoupon" v-for="(item,index) in usableList" :key="index">
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
					<view class="num">{{item.couponPrice}}</view>
				</view>
				<!-- 满减/有效期/选中 -->
				<view class="chooseCoupon">
					<!-- 满减/有效期 -->
					<view class="fullDelete">
						<view class="full">{{item.fullPrice}}</view>
						<view class="fullTime">{{item.usefulLife}}</view>
					</view>
					<view class="chooseCon">
						<u-icon :name="item.IconType ?'checkmark-circle-fill':'checkmark-circle'" color="#FF2F2F" size="38" @click="toggleIcon(item,index)"></u-icon>
					</view>
				</view>
				<!-- 左上角商品类型 -->
				<view class="goodsType">
					<view class="goodsText">{{item.useType}}</view>
				</view>
			</view>
		</view>
		<view class="noUseText">此单不可用优惠券（{{unusableList.length}}张）</view>
		<view class="useCoupon" v-for="(item,index) in unusableList" :key="index">
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
					<view class="num">{{item.couponPrice}}</view>
				</view>
				<!-- 满减/有效期/选中 -->
				<view class="chooseCoupon">
					<!-- 满减/有效期 -->
					<view class="fullDelete">
						<view class="full">{{item.fullPrice}}</view>
						<view class="fullTime">{{item.usefulLife}}</view>
					</view>
				</view>
				<!-- 左上角商品类型 -->
				<view class="goodsType">
					<view class="goodsText">{{item.useType}}</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				IconType: false, // 店铺优惠券的选中的状态
				usableList: [{       // 店铺可用优惠券数组
					shopName:'海底捞沃尔玛蓝山店',   // 店铺名字
					couponPrice:'100',    //代金券价格
					fullPrice:'满1000元可用',     //满1000才能用
					usefulLife:'有效期至:2020-06-31',   // 优惠券有效期
					useType:'全品类可用'    //可用类型
				}, {
					shopName:'海底捞沃尔玛蓝山店',   // 店铺名字
					couponPrice:'100',    //代金券价格
					fullPrice:'满1000元可用',     //满1000才能用
					usefulLife:'有效期至:2020-06-31',   // 优惠券有效期
					useType:'全品类可用'    //可用类型
				}],
				unusableList: [{          // 店铺不可用优惠券	数组
					shopName:'海底捞沃尔玛蓝山店',   // 店铺名字
					couponPrice:'100',    //代金券价格
					fullPrice:'满1000元可用',     //满1000才能用
					usefulLife:'有效期至:2020-06-31',   // 优惠券有效期
					useType:'折扣商品不可用'    //不可用类型
				}, {
					shopName:'海底捞沃尔玛蓝山店',   // 店铺名字
					couponPrice:'100',    //代金券价格
					fullPrice:'满1000元可用',     //满1000才能用
					usefulLife:'有效期至:2020-06-31',   // 优惠券有效期
					useType:'折扣商品不可用'    //不可用类型
				}]
			}
		},
		methods: {
			// 控制店铺优惠券的选中状态
			toggleIcon(item, index) {
				this.IconType = !this.IconType
				let usableList = this.usableList
				if(usableList[index].IconType){
					usableList[index].IconType = false
				}else{
					usableList.forEach(item => {
						item.IconType = false
					})
					usableList[index].IconType = true
				}
				this.usableList = usableList

			}
		},
		onLoad(options) {
			console.log(options)
		}
	}
</script>

<style lang="less" scoped>
	// 最外层
	.container {
		height: 1448rpx;
		background: rgba(246, 246, 246, 1);
		// 此单可以用券
		.useText {
			width: 750rpx;
			height: 92rpx;
			font-size: 28rpx;
			font-family: PingFang SC;
			font-weight: bold;
			line-height: 92rpx;
			color: rgba(51, 51, 51, 1);
			padding-left: 30rpx;
		}
		// 优惠券
		.useCoupon {
			width: 750rpx;
			height: 262rpx;
			background: #FFFFFF;
			padding: 0 30rpx;
			
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
		.useCoupon:nth-child(2){
			margin-bottom: 20rpx;
		}
		// 此单不可用券
		.noUseText {
			width: 750rpx;
			height: 92rpx;
			font-size: 28rpx;
			font-family: PingFang SC;
			font-weight: bold;
			line-height: 92rpx;
			color: rgba(51, 51, 51, 1);
			padding-left: 30rpx;
		}
	}
</style>

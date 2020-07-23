<template>
	<view>
		<view :class="item.state===1 ? 'coupon':'hasCoupon'" v-for="(item,index) in afterList" :key="index">
			<!-- ￥100 -->
			<view class="numCon">
				<view class="context">￥</view>
				<view class="num">{{item.price}}</view>
			</view>
			<!-- 满减/有效期/选中 -->
			<view class="chooseCoupon">
				<!-- 满减/有效期 -->
				<view class="fullDelete">
					<view class="full">满{{item.fullPrice}}元可用</view>
					<view class="fullTime">有效期至：{{item.useTime}}</view>
				</view>
				<!-- 立即领取 -->
				<view class="chooseCon" @click="toggleBg(item,index)" v-if="item.state===1">立即领取</view>
			</view>
			<!-- 左上角商品类型 -->
			<view class="goodsType">
				<view class="goodsText">{{useType}}</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		name: 'shopDetailGetCoupon',
		props: {
			useType: { // 适用类型
				type: String,
				default: '全商品可用'
			},
			distanceList:{
				type:Array,
				default:()=>{return []}
			}
		},
		data() {
			return {
				afterList:this.distanceList
			}
		},
		methods: {
			// 切换领取后的样式
			toggleBg(item, index) {
				this.$set(this.afterList[index], 'state', 2)
			}
		}
	}
</script>

<style lang="less">
	// 优惠券
	.coupon {
		width: 690rpx;
		height: 146rpx;
		background: rgba(253, 244, 230, 1);
		display: flex;
		margin-bottom: 20rpx;
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

			// 选中领取
			.chooseCon {
				width: 136rpx;
				height: 60rpx;
				background: linear-gradient(90deg, rgba(254, 99, 60, 1) 0%, rgba(250, 40, 0, 1) 100%);
				border-radius: 32rpx;
				font-size: 24rpx;
				font-family: PingFang SC;
				font-weight: 400;
				line-height: 60rpx;
				color: rgba(255, 255, 255, 1);
				text-align: center;
			}

		}

		// 左上角定位商品类型
		.goodsType {
			width: 174rpx;
			height: 30rpx;
			background-image: url(../../static/images/Product/youhuiquanTextBg.png);
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

	// 已领取优惠券
	.hasCoupon {
		width: 690rpx;
		height: 146rpx;
		background-image: url(../../static/images/iconfont/yilingquBg.png);
		background-repeat: no-repeat;
		background-size: 690rpx 146rpx;
		display: flex;
		margin-bottom: 20rpx;
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

			// 选中领取
			.chooseCon {
				width: 136rpx;
				height: 60rpx;
				background: linear-gradient(90deg, rgba(254, 99, 60, 1) 0%, rgba(250, 40, 0, 1) 100%);
				border-radius: 32rpx;
				font-size: 24rpx;
				font-family: PingFang SC;
				font-weight: 400;
				line-height: 60rpx;
				color: rgba(255, 255, 255, 1);
				text-align: center;
			}

		}

		// 左上角定位商品类型
		.goodsType {
			width: 174rpx;
			height: 30rpx;
			background-image: url(../../static/images/Product/youhuiquanTextBg.png);
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
</style>

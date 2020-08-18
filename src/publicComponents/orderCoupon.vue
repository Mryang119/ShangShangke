<!-- 确认订单——商品优惠券 -->
<!-- name:陈铄源 -->
<template>
	<view>
		<view class="coupon" v-for="(item,index) in usableList" :key="index">
			<!-- ￥100 -->
			<view class="numCon">
				<view class="context"><text>￥</text></view>
				<view class="num"><text>{{couponPrice}}</text></view>
			</view>
			<!-- 满减/有效期/选中 -->
			<view class="chooseCoupon">
				<!-- 满减/有效期 -->
				<view class="fullDelete">
					<view class="full"><text>满{{fullPrice}}元可用</text></view>
					<view class="fullTime"><text>有效期至：{{usefulTime}}</text></view>
				</view>
				<view class="chooseCon" @click="toggleIcon(item,index)">
					<u-icon v-if="item.IconType" name="checkmark-circle-fill" color="#FF2F2F" size="38"></u-icon>
					<u-icon v-else name="checkmark-circle" color="#FF2F2F" size="38"></u-icon>
				</view>
			</view>
			<!-- 左上角商品类型 -->
			<view class="goodsType">
				<view class="goodsText"><text>{{useType}}</text></view>
			</view>
		</view>

	</view>
</template>

<script>
	export default {
		name: 'orderCoupon',
		props: {
			couponPrice: { // 金额
				type: Number,
				default: 100
			},
			fullPrice: { // 满减金额
				type: Number,
				default: 1000
			},
			usefulTime: { // 有效期时间
				type: String,
				default: '2020-06-31'
			},
			useType: { // 能用的类型
				type: String,
				default: '全品类可用'
			}
		},
		data() {
			return {
				IconType: false,   //优惠券是否选中，默认为不选中
				usableList:[{},{}]
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
		}
	}
</script>

<style lang="less" scoped>
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

			// 选中

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

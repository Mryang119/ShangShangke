<template>
	<!-- 优惠券 -->
	<view class="c_coupon">
		<view class="scorll-item"  :class="{'scorll-item-active':status!==0}">
			<view class="scorll-item-son radiusBox">
				<image class="image" :src="logo" mode=""></image>
			</view>
			<view class="scorll-item-son priceTextBox">
				<text :style="{fontSize:'28rpx',color:'#624118'}">￥</text>
				<text :style="{fontSize:'44rpx',lineHeight:'38rpx',color:'#624118'}">20</text>
				<br />
				<text :style="{fontSize:'20rpx',color:'#624118'}">{{labelName}}</text>
				<br />
				<text :style="{fontSize:'20rpx',color:'#624118'}">{{company}}</text>
			</view>
			<view class="scorll-item-son lijilingqu" v-if="status===0">
				<text :style="{fontSize:'24rpx'}">立即</text>
				<br />
				<text :style="{fontSize:'24rpx'}">领取</text>
			</view>
			<view class="scorll-item-son yilingqu" v-else @click="toUse(index)">
				<text :style="{fontSize:'24rpx'}">去使用</text>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		props: {
			company: {
				type: String
			},
			labelName: {
				type: String
			},
			status: {
				type: Number,
				default: 0
			},
			logo: {
				type: String
			}

		},
		data() {
			return {
				temp: []
			}
		},
		methods: {
			// 立即领取
			toUse(i) {
				console.log('使用')
			}
		}
	}
</script>

<style lang="less" scoped>
	.c_coupon {
		.scorll-item {
			width: 364rpx;
			height: 124rpx;
			background: url(@/static/images/Product/youhuiquanlijilingqu.png);
			margin-right: 20rpx;
			background-size: cover;
			padding: 14rpx;
			box-sizing: border-box;
			position: relative;
			line-height: 24rpx;

			.scorll-item-son {
				position: absolute;
				top: 50%;
				transform: translateY(-50%);
			}

			.priceTextBox {
				left: 124rpx;
			}

			.radiusBox {
				width: 96rpx;
				height: 96rpx;
				line-height: 96rpx;

				.image {
					width: 100%;
					height: 100%;
					border-radius: 50%;
				}
			}

			.yilingqu {
				color: #621818;
				left: 266rpx;
				font-weight: bold;
			}

			.lijilingqu {
				color: #624118;
				line-height: 26rpx;
				left: 276rpx;
				font-weight: bold;

			}
		}

		.scorll-item-active {
			width: 364rpx;
			height: 124rpx;
			margin-right: 20rpx;
			background: url(@/static/images/Product/youhuiquanyilingqu.png);
			background-size: cover;
		}
	}
</style>

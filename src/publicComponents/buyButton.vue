<template>
	<!-- name:杨大锐 -->
	<!-- 商品详情购买按钮 -->
	<view class="c_buyButton">
		<view class="icon-content">
			<view class="icon-item" v-for="(item,index) in icons" :key="index">
				<u-icon label-pos="bottom" color="#686868" :name="item.name" size="44" :label="item.text" font-size="22"></u-icon>
			</view>
			<view class="icon-item" @click="changeStatus">
				<u-icon label-pos="bottom" color="#686868" name="star" size="44" label="收藏" font-size="22" v-if="status==0"></u-icon>
				<u-icon label-pos="bottom" color="#ff8800" name="star-fill" size="44" label="收藏" font-size="22" v-else></u-icon>
			</view>
		</view>
		<view class="buy-button">
			<view class="price-container">
				<text>￥</text>
				<text class="price">{{price.toFixed(2)}}</text>
			</view>
			<view class="text">
				立即购买
			</view>
		</view>
	</view>
</template>

<script>
	/**
	 * @method:changeStatus
	 * @description 
	 */
	export default {
		props: {
			price: {
				type: Number,
				default: 1
			},
			pdcId: {
				type: String,
				default: '12312312321'
			},
			status: {
				type: Number,
				default: 1
			}
		},
		data() {
			return {
				icons: [{
					name: 'kefu-ermai',
					text: '客服'
				}, {
					name: 'zhuanfa',
					text: '转发'
				}],

			}
		},
		methods: {
			changeStatus() {
				let e = this.status == 1 ? 0 : 1
				this.$emit('changeStatus', e)
			}
		}
	}
</script>

<style lang="less" scoped>
	.c_buyButton {
		height: 98rpx;
		width: 750rpx;
		position: fixed;
		bottom: 0;
		left: 0;
		display: flex;
		z-index: 99;
		background-color: #FFF;

		.icon-content {
			flex: 1;
			display: flex;
			justify-content: space-around;
			align-items: center;

			.icon-item {}
		}

		.buy-button {
			width: 376rpx;
			height: 98rpx;
			background-color: #FF2F2F;
			display: flex;
			justify-content: space-around;
			font-size: 36rpx;
			color: #FFFFFF;
			align-items: center;
			font-weight: bold;
		}
	}
</style>

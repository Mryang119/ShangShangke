<template>
	<!-- 领好券 -->
	<view class="s_getCoupon">
		<view class="topBakcGround-content">
			<image class="image" src="@/static/images/Product/linghaoquan2.png" mode=""></image>
		</view>
		<view class="tabs-content">
			<view class="line-content">
				<view class="line" v-for="(item,index) in 4"></view>
			</view>
			<u-tabs :list="list" :current="current" :active-item-style="{'font-size':33+'rpx'}" :is-scroll="false" @change="change"></u-tabs>
		</view>
		<view class="coupon-content">
			<discountCoupon></discountCoupon>
		</view>
	</view>
</template>

<script>
	import discountCoupon from '@/src/publicComponents/discountCoupon.vue'
	export default {
		components:{
			discountCoupon
		},
		data() {
			return {
				list: [{
					name: '全部'
				}, {
					name: '美食'
				}, {
					name: '好物'
				}, {
					name: '娱乐'
				}, {
					name: '生活'
				}, ],
				current: 0
			};
		},
		methods: {
			change(index) {
				this.current = index;
			}
		}
	}
</script>

<style lang="less" scoped>
	.s_getCoupon {
		width: 750rpx;
		max-width: 750rpx;

		.topBakcGround-content {
			width: 750rpx;

			.image {
				width: 750rpx;
				height: 310rpx;
			}
		}

		.tabs-content {
			height: 80rpx;
			position: relative;

			.line-content {
				position: absolute;
				width: 458rpx;
				height: 80rpx;
				top: 0;
				left: 50%;
				transform: translateX(-50%);
				box-sizing: border-box;
				display: flex;
				justify-content: space-between;
				align-items: center;

				.line {
					width: 2rpx;
					height: 28rpx;
					background-color: #E4E4E4;
				}
			}
		}
	}
</style>

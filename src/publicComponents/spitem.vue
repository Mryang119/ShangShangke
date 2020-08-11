<template>
	<!-- name:杨大锐 -->
	<!-- 横向滚动列表商品展示组件 -->
	<view class="c_spitem">
		<view class="eventContainer">
			<!-- 图片区域 -->
			<view class="sp-item-img">
				<image class="image" :src="imgUrl" mode=""></image>
			</view>
			<!-- 商品标题 -->
			<view class="sp-item-title">
				<text>{{title}}</text>
			</view>
			<!-- 价格区域 -->
			<view class="sp-item-price">
				<text class="sp-item-price-red">￥{{price+' '}}</text>
				<text class="sp-item-oldprice-delet">￥{{oldPrice}}</text>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		props: {
			title: {
				type: String,
				default: '庞氏(POND)洗手液balabla'
			},
			price: {
				type: Number,
				default: 140
			},
			oldPrice: {
				type: Number,
				default: 160
			},
			pdcId:{
				type:String,
				default:'test'
			},
			imgUrl:{
				type:String,
				default:'/static/images/Product/shangpingtu.png'
			}
		},
		methods:{
		}
	}
</script>

<style lang="less">
	.c_spitem {
		width: 204rpx;

		.sp-item-img {
			.image {
				width: 204rpx;
				height: 204rpx;
			}
		}

		.sp-item-title {
			width: 204rpx;
			font-size: 24rpx;
			color: #333333;
			overflow: hidden;
			text-overflow: ellipsis;
			white-space: nowrap;
			font-weight: bold;
		}

		.sp-item-price {
			.sp-item-price-red {
				font-size: 14px;
				font-weight: bold;
				color: #FF2F2F;
			}

			.sp-item-oldprice-delet {
				text-decoration: line-through;
				color: #A9A9A9;
				font-size: 22rpx;
			}
		}
	}
</style>

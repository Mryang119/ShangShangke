<template>
	<!-- name:杨大锐 -->
	<!-- 店铺模块专用 横向滚动 动态商品展示组件 -->
	<view class="c_productContainer">
		<view class="product-content">
			<view class="image-container">
				<u-image :width="imageWidth*2" :height="imageHeight*2" class="image" :src="imageUrl"></u-image>
			</view>
			<view class="product-name">
				{{productName}}
			</view>
			<view class="product-price">
				{{price}}
			</view>
		</view>
	</view>
</template>


<script>
	export default {
		props: {
			imageUrl: {
				type: String,
				default: "https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=3189280854,1391148297&fm=26&gp=0.jpg"
			},
			imageWidth: {
				type: [Number, String],
				default: 109
			},
			imageHeight: {
				type: [Number, String],
				default: 109
			},
			productName: {
				type: String,
				default: '加高沙发电脑椅子休闲单人一体多功能休闲'
			},
			price: {
				type: [Number, String],
				default: "￥289.00"
			}
		},

	}
</script>

<style lang="less">
	.c_productContainer {
		font-size: 28rpx;
		.product-content {
			width: 100%;
			height: 100%;
			display: flex;
			flex-direction: column;
			
		}

		.text-container {
			width: 100%;
		}

		.product-name {
			width: 90%;
			margin-bottom: 16rpx;
			word-break: break-all;
			overflow: hidden;
			text-overflow: ellipsis;
			display: -webkit-box;
			-webkit-line-clamp: 2;
			-webkit-box-orient: vertical;
		}
		.product-price {
			color: #FF4848;
			font-weight: bold;
		}
	}
</style>

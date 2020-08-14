<template>
	<!-- 买就送满就减商品展示 -->
	<view class="c_show">
		<view class="show-item-container" @click="toDetail">
			<image class="image" :src="imgUrl" mode=""></image>
			<view class="show-item-textContent">
				<view class="show-item-title">
					<text>{{title}}</text>
				</view>
				<!-- 赠品不显示价格 -->
				<view v-if="type!==8" class="show-item-price">
					<text>￥{{price.toFixed(2)}}</text>
				</view>
				<view class="show-item-message">
					<text>{{message}}</text>
				</view>
				<text class="show-item-store">
					<text>{{store}}</text>
				</text>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		props: {
			type: {
				type: Number,
				default: 3 // 3 满减 4 买赠 8 满赠 满赠不显示价格不等于8
			},
			title: {
				type: String,
				default: "满200元赠商品巴拉巴拉巴拉"
			},
			message: {
				type: String,
				default: "买满200元赠送asdasdasdsadasddsa"
			},
			store: {
				type: String,
				default: "海底捞"
			},
			price: {
				type: Number,
				default: 188
			},
			imgUrl: {
				type: String,
				default: '../../../../static/images/Product/shangpingtu.png'
			},
			pdcId:{ // 商品id
				type:[Number,String],
				required:true
			}
		},
		methods:{
			toDetail(){
				uni.navigateTo({
					url:`../../../singlePage/timeKillProductDetail/timeKillProductDetail?pdcId=${this.pdcId}&pdcType=${this.type}`
				})
			}
		}
	}
</script>

<style lang="less">
	.c_show {
		width: 346rpx;
		background-color: #FFF;
		border-radius: 16rpx;
		overflow: hidden;

		.show-item-container {
			.image {
				width: 346rpx;
				height: 326rpx;
				border-radius:16rpx 16rpx 0px 0px;
			}
			.show-item-textContent {
				padding: 14rpx 34rpx 20rpx 20rpx;
				display: flex;
				flex-direction: column;
				.show-item-title {
					font-size: 28rpx;
					color: #272727;
					font-weight: bold;
					width: 292rpx;
					overflow: hidden;
					text-overflow: ellipsis;
					white-space: nowrap;
				}

				.show-item-message {
					width: 284rpx;
					color: #FD8F3A;
					font-size: 24rpx;
					margin-bottom: 6rpx;
				}

				.show-item-store {
					font-size: 24rpx;
					color: #666666;
				}

				.show-item-price {
					font-size: 32rpx;
					font-weight: bold;
					color: #FF2F2F;
					margin-bottom: 6rpx;
				}
			}
		}
	}
</style>

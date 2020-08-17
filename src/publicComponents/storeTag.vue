<template>
	<!-- name:杨大锐 -->
	<!-- 店铺标签 -->
	<view class="c_storeTag">
		<view class="left-content">
			<image class="image" :src="logo"></image>
		</view>
		<view class="center-content">
			<view class="store-name">{{storeName}}</view>
			<view class="rate">
				<text :style="{fontSize:24+'rpx',color:'#272727'}">评分:</text>
				<u-rate size="22" active-color="#FFAE44" :count="5" :disabled="true" :current="current"></u-rate>
				<text :style="{fontSize:18+'rpx',color:'#FFAE44'}">{{current.toFixed(1)}}</text>
			</view>
		</view>
		<view class="right-content" @click="toSotreDetail">
			<view class="button">
				进店逛逛
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		props: {
			logo: {
				type: String
			},
			rate: {
				type: [Number, String]
			},
			storeName: {
				type: String,
				default: "SEASONG"
			},
			current: {
				type: Number,
				default: 4
			}
		},
		data() {
			return {
			}
		},
		methods:{
			toSotreDetail() {
				uni.navigateTo({
					url:'/views/storeView/storeView'
				})
			}
		}
	}
</script>

<style lang="less" scoped>
	.c_storeTag {
		width: 100%;
		height: 152rpx;
		box-sizing: border-box;
		padding: 30rpx;
		display: flex;
		align-items: center;
		background-color: #FFF;

		.left-content {
			width: 92rpx;
			height: 92rpx;
			background-color: red;
			margin-right: 26rpx;
			.image {
				width: 100%;
				height: 100%;
			}
		}

		.center-content {
			display: flex;
			flex-direction: column;

			.store-name {
				font-size: 32rpx;
				color: #272727;
				margin-bottom: 12rpx;
			}
		}

		.right-content {
			
			flex: 1;
			display: flex;
			justify-content: flex-end;
			
			.button {
				width: 192rpx;
				height: 66rpx;
				box-sizing: border-box;
				border: 2rpx solid #24A7FF;
				color: #24A7FF;
				text-align: center;
				line-height: 66rpx;
				font-size: 32rpx;
				border-radius: 66rpx;
			}
		}
	}
</style>

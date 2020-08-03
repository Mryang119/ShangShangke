<template>
	<!-- name:杨大锐 -->
	<!-- 商家优先展示三款产品组件 -->
	<view class="c_searchNearbyShowItem">
		<!-- 标题log部分 -->
		<view class="top-container">
			<view class="left-store-img">
				海底捞
			</view>
			<view class="right-store-messages">
				<view class="storeTitle">
					{{title}}
				</view>
				<view class="score">
					评分:<u-rate :disabled="true" size="24" :current="score" active-color="#FFAE44"></u-rate>
					<text :style="{color:'#FFAE44',fontSize:'18rpx'}">{{''+score.toFixed(1)+''}}</text>
				</view>
				<view class="location">
					<u-icon name="map"></u-icon>
					<view class="text">{{location}}</view>
					<view class="flot-right">
						<u-icon size="16" name="arrow-right"></u-icon>
					</view>
				</view>
			</view>
		</view>
		<!-- 商家优先展示列表部分 -->
		<view class="bottom-container">
			<view class="bottom-list-item" v-for="(item,index) in commodityList" :key="index">
				<view class="img-box">
					<u-image border-radius="8" :src="item.imgUrl" height="160" width="210" mode=""></u-image>
				</view>
				<view class="bottom-list-item-title">{{item.title}}</view>
				<view class="bottom-list-item-price">{{item.price}}</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		props: {
			title: {
				type: String,
				default: "海底捞（海岸城店)"
			},
			score: {
				type: Number,
				default: 5.0
			},
			location: {
				type: String,
				default: "广东省深圳市南山区软件基地1C"
			},
			commodityList: {
				type: Array,
				default: function() {
					return [{
						title: '酱香大杂烩酱香个啥么玩意凑个溢出隐藏',
						price: '￥79.90',
						imgUrl: 'https://tse1-mm.cn.bing.net/th/id/OIP.CkoDSf-wcofF42nJxu9rgQHaE6?w=240&h=180&c=7&o=5&dpr=1.25&pid=1.7'
					}, {
						title: '酱香大杂烩酱香个啥么玩意凑个溢出隐藏',
						price: '￥79.90',
						imgUrl: 'https://tse2-mm.cn.bing.net/th/id/OIP.J0fdE1wuKQwLYvHTs3UkRAHaE8?w=239&h=180&c=7&o=5&dpr=1.25&pid=1.7'
					}, {
						title: '酱香大杂烩酱香个啥么玩意凑个溢出隐藏',
						price: '￥79.90',
						imgUrl: 'https://tse1-mm.cn.bing.net/th/id/OIP.xonlg8nocMk6irmOyPlNOQHaE8?w=257&h=180&c=7&o=5&dpr=1.25&pid=1.7'
					}]
				}
			}
		}
		
	}
</script>

<style lang="less">
	.c_searchNearbyShowItem {
		width: 710rpx;
		height: 446rpx;
		box-sizing: border-box;
		padding: 20rpx 30rpx 20rpx 30rpx;
		background-color: #FFF;
		border-radius: 12rpx;
		overflow: hidden;
		.bottom-container {
			margin-top: 22rpx;
			display: flex;
			justify-content: space-between;
			.bottom-list-item {
				width: 210rpx;
				
				.img-box {
					
				}
				.bottom-list-item-title {
					width: 188rpx;
					font-size: 24rpx;
					color: #272727;
					overflow: hidden;
					text-overflow: ellipsis;
					white-space: nowrap;
					margin-bottom: 12rpx;
					font-weight: bold;
				}
				.bottom-list-item-price {
					font-size: 24rpx;
					color: #FF2F2F;
					font-weight: bold;
				}
			}
		}
		.top-container {
			width: 100%;
			height: 138rpx;
			display: flex;
			justify-content: space-between;
			
			.left-store-img {
				height: 138rpx;
				width: 140rpx;
				background-color: #E70012;
				line-height: 138rpx;
				text-align: center;
				font-size: 32rpx;
				font-weight: bold;
				border-radius: 8rpx;
				color: #FFFFFF;
				margin-right: 20rpx;
			}

			.right-store-messages {
				display: flex;
				flex-direction: column;
				// align-content: space-between;
				justify-content: space-around;
				.storeTitle {
					font-size: 28rpx;
					color: #272727;
					font-weight: bold;
				}
				.score{
					font-size: 24rpx;
				}
				.location {
					color: #666666;
					display: flex;
					font-size: 24rpx;
					.text {
						width: 340rpx;
						overflow: hidden;
						text-overflow: ellipsis;
						white-space: nowrap;
						margin-right: 100rpx;
					}
					.flot-right {
						display: flex;
						align-items: center;
					}
				}
			}
		}
	}
</style>

<template>
	<!-- 商铺列表组件 -->
	<!-- name:杨大锐 -->
	<view class="c_storeListItem">
		<view class="store-list-item-content">
			<!-- 左侧商铺头像 -->
			<view class="store-image-container">
				<u-image :src="storeImage" width="94" height="94"></u-image>
			</view>
			<!-- 右侧商铺图文详情 -->
			<view class="store-text-image-container">
				<view class="store-title">
					<text>{{title}}</text>
				</view>
				<view class="store-rate">
					<text>评分:</text>
					<u-rate v-model="rate" size="24" active-color="#FFAE44"></u-rate>
					<text :style="{color:'#FFAE44',fontSize:'20rpx'}">{{rate.toFixed(1)}}</text>
				</view>
				<view class="store-products">
					<view class="store-product-item" :key="index" v-for="(item,index) in storeProducts">
						<u-image :src="item.imgUrl" width="112" height="86"></u-image>
					</view>
					<view class="right-arrow">
						<image src="/static/images/iconfont/more.png" :style="{width:'8.5rpx',height:'17rpx'}" mode="heightFix"></image>
					</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		props: {
			storeImage: {
				type: String,
				default: 'https://t7.baidu.com/it/u=376135710,3559663217&fm=75&app=84&f=JPG?w=246&h=246&s=26D5A87E4E166FD4548B03ED0300701E'
			},
			title: {
				type: String,
				default: "海底捞（海岸城店）"
			},
			rate: {
				type: [Number, String],
				default: 5
			},
			storeProducts: {
				type: Array,
				default: () => ([{
					title: '酱香大杂烩酱香个啥么玩意凑个溢出隐藏',
					price: '￥79.90',
					imgUrl: 'https://tse1-mm.cn.bing.net/th/id/OIP.CkoDSf-wcofF42nJxu9rgQHaE6?w=240&h=180&c=7&o=5&dpr=1.25&pid=1.7'
				}, {
					title: '酱香大杂烩酱香个啥么玩意凑个溢出隐藏',
					price: '￥79.90',
					imgUrl: 'https://tse2-mm.cn.bing.net/th/id/OIP.J0fdE1wuKQwLYvHTs3UkRAHaE8?w=239&h=180&c=7&o=5&dpr=1.25&pid=1.7'
				},{
					title: '酱香大杂烩酱香个啥么玩意凑个溢出隐藏',
					price: '￥79.90',
					imgUrl: 'https://tse2-mm.cn.bing.net/th/id/OIP.J0fdE1wuKQwLYvHTs3UkRAHaE8?w=239&h=180&c=7&o=5&dpr=1.25&pid=1.7'
				}, {
					title: '酱香大杂烩酱香个啥么玩意凑个溢出隐藏',
					price: '￥79.90',
					imgUrl: 'https://tse1-mm.cn.bing.net/th/id/OIP.xonlg8nocMk6irmOyPlNOQHaE8?w=257&h=180&c=7&o=5&dpr=1.25&pid=1.7'
				}])
			}
		},
		data() {
			return {

			};
		}
	}
</script>

<style lang="less">
	.c_storeListItem {
		background-color: #FFF;
		width: 100%;
		height: 100%;
		border-radius: 12rpx;
		.store-list-item-content {
			width: 100%;
			height: 100%;
			display: flex;
			box-sizing: border-box;
			padding: 30rpx;
			.store-text-image-container {
				margin-left: 20rpx;
				display: flex;
				flex:1;
				flex-direction: column;
				justify-content: space-between;
				.store-title {
					font-size: 28rpx;
					color: #272727;
					font-weight: bold;
				}
				.store-rate {
					font-size: 24rpx;
					color: #272727;
				}
				.store-products {
					display: flex;
					width: 100%;
					align-items: center;
					.store-product-item {
						margin-right: 16rpx;
					}
					.right-arrow {
						flex: 1;
						display: flex;
						justify-content: flex-end;
						
					}
				}
			}
		}
	}
</style>

<template>
	<!-- 分类 -->
	<view class="s_classify">
		<!-- 搜索条 -->
		<view class="searchBar">
			<u-search placeholder="发现店铺/商品" :show-action="false"></u-search>
		</view>
		<!-- 右侧tab栏 -->
		<view class="Tab-container">
			<scroll-view scroll-y="true" :height="classifyList.length*60*2+'rpx'" class="scroll-cotainer">
				<view class="tab-item-container" v-for="(item,index) in classifyList" :key="index">
					<view class="tab-item">{{item.title}}</view>
				</view>
			</scroll-view>
			<scroll-view scroll-y="true" class="scroll-cotainer-right">
				<view class="classify-item-container" v-for="(item,index) in classifyList" :key="index">
					<view class="classify-item">
						<view class="item-className">
							{{item.title}}
						</view>
						<view class="item-button-container">
							<view class="item-button" v-for="(item1,index1) in item.children" :key="index">
								{{item1}}
							</view>
						</view>
					</view>
				</view>
			</scroll-view>
		</view>
	</view>
</template>

<script>
	import {
		classifyList
	} from '../../../src/utils/fakeData.js'
	export default {
		data() {
			return {
				classifyList,
				selectIndex: 0,
				buttonStyle: {

				}
			};
		}
	}
</script>

<style lang="less" scoped>
	.s_classify {
		width: 100%;
		height: 100%;

		.searchBar {
			box-sizing: border-box;

			height: 6.63vh;
			padding: 0 4vw;
			border-bottom: 1px solid #F3F3F3;
		}

		.Tab-container {
			height: 92.14vh;
			width: 100vw;
			margin-top: 1.23vh;
			display: flex;

			.scroll-cotainer {
				width: 202rpx;
				height: 100%;
				background-color: red;

				.tab-item-container {
					height: 120rpx;
					width: 202rpx;
					box-sizing: border-box;
					border-bottom: 1px solid #CCCCCC;
					background-color: #F5F5F5;
					.tab-item {
						font-size: 28rpx;
						line-height: 120rpx;
						padding-left: 46rpx;
					}
				}
			}

			//右侧容器
			.scroll-cotainer-right {
				width: 548rpx;
				// 右侧分类
				height: 100%;
				box-sizing: border-box;
				padding: 30rpx 36rpx 30rpx 34rpx;

				.classify-item-container {
					.classify-item {
						.item-className {
							margin-bottom: 30rpx;
							font-size: 28rpx;
							font-weight: bold;
							color: #333333;
						}

					}

					margin-top: 50rpx;
					width: 100%;

					.item-button-container {
						display: flex;
						flex-wrap: wrap;
						justify-content: space-between;

						.item-button {
							margin-bottom: 14rpx;
							background-color: #F5F5F5;
							color: #858585;
							width: 150rpx;
							height: 60rpx;
							border-radius: 6rpx;
							font-size: 24rpx;
							text-align: center;
							line-height: 60rpx;
						}
					}
				}
			}



		}
	}
</style>

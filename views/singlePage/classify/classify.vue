<template>
	<!-- 分类 -->
	<view class="s_classify">
		<!-- 搜索条 -->
		<view class="searbar-content">
			<u-search placeholder="发现店铺/商品" :show-action="false"></u-search>
		</view>
		<!-- 左侧tab栏 -->
		<view class="tab-content">
			<scroll-view scroll-y="true" :height="classifyList.length*60*2+'rpx'" class="scroll-cotainer">
				<view class="tab-item-container" @click="toggleSelect(index)" :class="{'tab-item-active':index===selectIndex}"
				 v-for="(item,index) in classifyList" :key="index">
					<view class="line" v-show="selectIndex===index"></view>
					<view class="tab-item"><text>{{item.title}}</text></view>
				</view>
			</scroll-view>
			<!-- 左侧分类栏 -->
			<scroll-view scroll-y="true" class="scroll-cotainer-right" @scroll="calssScroll" :scroll-top="scrollTop"
			 scroll-with-animation="true" :scroll-into-view="classfiyItemId">
				<!-- 广告 -->
				<view class="bannerAd">
					<image src="@/static/images/Product/fenleiBanner.png" mode=""></image>
				</view>
				<view class="classify-item-container" v-for="(item,index) in classifyList" :key="index" :id="'classItemId'+index">
					<view class="classify-item">
						<view class="item-className">
							<text>{{item.title}}</text>
						</view>
						<view class="item-button-container">
							<navigator class="item-button" hover-class="hover-button" v-for="(item1,index1) in item.children" :key="index1"
							 :url="'../classifyDetail/classifyDetail?className='+item1">
								<text>{{item1}}</text>
							</navigator>
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

				},
				scrollTop: 0,
				classScrollHeight: 0,
				classfiyItemId: '',
				isScroll: false,
				time: null
			};
		},
		methods: {
			toggleSelect(index) {
				this.selectIndex = index
				this.classfiyItemId = 'classItemId' + index
				this.isScroll = true
				clearTimeout(this.time)
				this.time = setTimeout(() => {
					this.isScroll = false
				}, 800)
			},
			calssScroll(e) {
				if (this.isScroll) return
				let scrollHeight = e.detail.scrollHeight // 总高度
				let scrollTop = e.detail.scrollTop // 滚动高度
				let usableScrollTop = (scrollHeight - 100) / 1.60 // 可滚动高度
				let nodeHeight = 133 // 节点高度
				let computedIndex = Math.floor(scrollTop / usableScrollTop * 10)
				this.selectIndex = computedIndex
			},
			// 跳转分类详情页
			// toClassifyDetail(value) {
			// 	uni.navigateTo({
			// 		url: `../classifyDetail/classifyDetail?className=${value}`
			// 	})
			// }
		}
	}
</script>

<style lang="less" scoped>
	.s_classify {
		width: 100%;
		height: 100%;
		background-color: #FFF;

		.searbar-content {
			box-sizing: border-box;

			height: 6.63vh;
			padding: 0 4vw;
			border-bottom: 1px solid #F3F3F3;
		}

		.tab-content {
			height: 92.14vh;
			width: 100vw;
			margin-top: 1.23vh;
			display: flex;

			.scroll-cotainer {
				width: 202rpx;
				height: 100%;
				background-color: #F5F5F5;

				.tab-item-container {
					height: 120rpx;
					width: 202rpx;
					box-sizing: border-box;
					background-color: #F5F5F5;
					position: relative;

					.tab-item {
						font-size: 28rpx;
						position: absolute;
						top: 50%;
						transform: translateY(-50%);
						left: 46rpx;
					}
				}

				// 选中样式
				.tab-item-active {
					background-color: #FFF;
					position: relative;
				}

				.line {
					width: 8rpx;
					height: 50rpx;
					background-color: #24A7FF;
					position: absolute;
					top: 50%;
					transform: translateY(-50%);
				}
			}

			//右侧容器
			.scroll-cotainer-right {
				width: 548rpx;
				// 右侧分类
				height: 100%;
				box-sizing: border-box;
				padding: 30rpx 15rpx 30rpx 34rpx;

				// 广告区域
				.bannerAd {
					width: 478rpx;
					height: 200rpx;

					image {
						width: 478rpx;
						height: 200rpx;
					}
				}

				.classify-item-container {
					.classify-item {
						.item-className {
							background-color: #fff;
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
							margin-right: 13rpx;
						}

						.hover-button {
							background-color: #24A7FF;
							color: #FFFFFF;
						}
					}
				}
			}



		}
	}
</style>

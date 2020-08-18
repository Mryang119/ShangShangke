<template>
	<!-- 分类筛选 -->
	<view class="c_classification">
		<!-- 左侧tab栏 -->
		<scroll-view scroll-y="true" class="left-tab-container">
			<view class="left-tab">
				<view class="tab-item" :class="{'active-tab-item' :selectIndex===index}" v-for="(item,index) in classifyList"
				 @click="postionClass(index)" :key="index">
					<text>{{item.title}}</text>
				</view>
			</view>
		</scroll-view>
		<!-- 右侧分类栏 -->
		<scroll-view scroll-y="true" scroll-with-animation="true" class="right-classify-container" :scroll-into-view="rightClassify">
			<view class="right-classify" v-for="(item,index) in classifyList" :id="'right-classify'+index" :key="index">
				<view class="classify-title">
					<text>{{item.title}}</text>
				</view>
				<view class="item-flex-box">
					<view class="flex-item" v-for="(item1,index1) in item.children" :key="index1" :class="{'active-flex-item':classPersons===index+''+index1}"
					 @click="classPerson(index,index1,item1)">
						<text>{{item1}}</text>
					</view>
				</view>
			</view>
		</scroll-view>
	</view>
</template>

<script>
	// 假数据
	import {
		classifyList
	} from '../../../../src/utils/fakeData.js'
	export default {
		data() {
			return {
				classifyList: classifyList,
				rightClassify: 'right-classify0',
				selectIndex: 0,
				classPersons: '00'
			}
		},
		methods: {
			postionClass(i) {
				this.selectIndex = i
				this.rightClassify = 'right-classify' + i
				console.log(this.rightClassify)
			},
			classPerson(fatherIndex, currentIndex, value) {

				if (`${fatherIndex}${currentIndex}` == this.classPersons) {
					this.classPersons = ''
					this.$store.commit('saveSelectDatas', {
						type: 'className',
						value: '无'
					})
				} else {
					this.$store.commit('saveSelectDatas', {
						type: 'className',
						value: value
					})
					this.classPersons = `${fatherIndex}${currentIndex}`
				}

			}
		}
	}
</script>

<style lang="less" scoped>
	.c_classification {
		box-sizing: border-box;
		width: 750rpx;
		height: 726rpx;
		background-color: #FFFFFF;
		display: flex;

		// tab栏
		.left-tab-container {
			width: 202rpx;
			height: 726rpx;

			.left-tab {
				width: 202rpx;

				.tab-item {
					text-align: center;
					line-height: 82rpx;
					height: 82rpx;
					background-color: #F5F5F5;
				}

				.active-tab-item {
					background-color: #FFFFFF;
					color: #24A7FF;
				}
			}
		}

		// 分类栏
		.right-classify-container {
			width: 548rpx;
			height: 726rpx;

			.right-classify {
				width: 100%;
				box-sizing: border-box;
				padding: 30rpx 36rpx 30rpx 34rpx;

				.classify-title {
					font-weight: bold;
					font-size: 28rpx;
					color: #333333;
					margin-bottom: 30rpx;
				}

				.item-flex-box {
					width: 100%;
					display: flex;
					flex-wrap: wrap;
					box-sizing: border-box;
					overflow: hidden;
					justify-content: space-between;

					.flex-item {
						width: 150rpx;
						height: 60rpx;
						line-height: 60rpx;
						text-align: center;
						color: #858585;
						font-size: 24rpx;
						background-color: #F5F5F5;
						margin-bottom: 14rpx;
						border-radius: 6rpx;
					}

					.active-flex-item {
						background-color: #24A7FF;
						color: #FFFFFF;
					}
				}

				.item-flex-box:after {
					content: "";
					height: 0;
					width: 150rpx;
				}
			}
		}
	}
</style>

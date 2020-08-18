<template>
	<view class="c_findSonNearby">
		<view class="new-stores-content">
			<scroll-view class="new-stores-scroll-H" scroll-x="true">
				<view class="new-stores-scroll-H-contianer" :style="{width: newStoreScrollWidth+'rpx'}">
					<view class="new-stores-item" v-for="(item,index) in newStores" :key="index">
						<u-image width="292rpx" height="194rpx" :src="item.image"></u-image>
					</view>
				</view>
			</scroll-view>
		</view>
		<!-- 分类按钮 -->
		<view class="class-button-content">
			<scroll-view class="class-button-scroll-H" scroll-x="true">
				<view class="class-button-H-contianer" :style="{width: classScrollWidth+'rpx'}">
					<view class="class-button-item" v-for="(item,index) in classifyList" :key="index" :class="{'class-button-item-active':classSelectIndex===index}"
					 @click="select(index)">
						{{item.title}}
					</view>
				</view>
			</scroll-view>
		</view>
		<!-- 瀑布流列表 -->
		<view class="waterfall">
			<view class="column-list">
				<view class="column-list-item" v-for="(item) in list1" :key="item.key">
					<waterfallItem
					:title="item.title"
					:imageUrl="item.image"
					:likeInfo="item.likeInfo"
					:userImage="item.userImage"
					:siteDatas="item.siteDatas"
					:tags="item.tags"
					></waterfallItem>
				</view>
			</view>
			<view class="column-list">
				<view class="column-list-item" v-for="(item) in list2" :key="item.key">
					<waterfallItem
					:title="item.title"
					:imageUrl="item.image"
					:likeInfo="item.likeInfo"
					:userImage="item.userImage"
					:siteDatas="item.siteDatas"
					:tags="item.tags"
					></waterfallItem>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	// 工具函数
	import {
		ScrollWidth
	} from '@/src/utils/index.js'
	// 假数据
	import {
		classifyList,
		waterfallList
	} from '@/src/utils/fakeData.js'
	// 组件
	import waterfallItem from '@/src/publicComponents/waterfallItem.vue'
	export default {
		components:{
			waterfallItem
		},
		data() {
			return {
				newStores: [{
					message1: '新店开张',
					image: "https://s1.ax1x.com/2020/07/31/al1xPg.png"
				}, {
					message1: '新店开张',
					image: "https://s1.ax1x.com/2020/07/31/al1xPg.png"
				}, {
					message1: '新店开张',
					image: "https://s1.ax1x.com/2020/07/31/al1xPg.png"
				}, {
					message1: '新店开张',
					image: "https://s1.ax1x.com/2020/07/31/al1xPg.png"
				}, {
					message1: '新店开张',
					image: "https://s1.ax1x.com/2020/07/31/al1xPg.png"
				}],
				classifyList,
				classSelectIndex: 0,
				waterfallList,
				list1: [],
				list2: []
			};
		},
		created() {
			this.oddList()
		},
		methods: {
			select(i) {
				this.classSelectIndex = i
			},
			oddList() {
				this.waterfallList.map((item, index) => {
					if (index % 2 != 0) {
						this.list1.push(item)
					} else {
						this.list2.push(item)
					}
				})
			}
		},
		computed: {
			// 新店scroll容器宽度计算
			newStoreScrollWidth: function() {
				return ScrollWidth(this.newStores.length, 146, 10)
			},
			// 分类scroll容器宽度计算
			classScrollWidth: function() {
				return ScrollWidth(this.classifyList.length, 54, 15)
			}
		}
	}
</script>

<style lang="less">
	.waterfall {
		width: 100%;
		display: flex;
		background-color: #F6F6F6;
		justify-content: space-between;
		padding: 0 20rpx;
		padding-top: 20rpx;
		.column-list {
			display: flex;
			flex-direction: column;
		}
		.column-list-item {
			width: 348rpx;
			border-radius: 12rpx;
			background-color: #FFF;
			height: auto;
			margin-bottom: 20rpx;
		}
	}

	.new-stores-content {
		height: 194rpx;
		padding-left: 20rpx;

		.new-stores-scroll-H {
			width: 100%;
			height: 194rpx;

			.new-stores-scroll-H-contianer {
				display: flex;

				.new-stores-item {
					width: 292rpx;
					height: 194rpx;
					display: flex;
					flex-direction: column;
					align-items: center;
					justify-content: center;
					margin-right: 20rpx;

					.image {
						width: 100%;
						height: 100%;
					}
				}
			}

		}
	}

	.class-button-content {
		height: 98rpx;
		display: flex;
		align-items: center;
		overflow: hidden;

		.class-button-scroll-H {
			padding-left: 20rpx;

			.class-button-H-contianer {
				display: flex;

				.class-button-item {
					width: 108rpx;
					height: 48rpx;
					color: #666666;
					font-size: 28rpx;
					text-align: center;
					line-height: 48rpx;
					background-color: #EBEBEB;
					border-radius: 6rpx;
					margin-right: 30rpx;
				}

				.class-button-item-active {
					background-color: #24A7FF;
					color: #fff;
				}
			}
		}
	}
</style>

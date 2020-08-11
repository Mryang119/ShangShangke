<template>
	<!-- 买就送 -->
	<view class="c_buy">
		<view class="flexBox">
			<view class="block-content">
				<view class="block" v-for="(item2) in list2" :key="item2.logo">
					<view class="incident" @click="toDetail(item2.basPntMoreVOS[0].pdcId,item2.campaignType)">
						<show :type="item2.campaignType" :title="item2.basPntMoreVOS[0].pdcName" :pdcId="item2.basPntMoreVOS[0].pdcId"
						 :imgUrl="item2.logo" :store="item2.company" :price="item2.basPntMoreVOS[0].promotionPrice"></show>
					</view>
				</view>
			</view>
			<view class="block-content">
				<view class="block" v-for="(item1) in list1 " :key="item1.logo">
					<view class="incident" @click="toDetail(item1.basPntMoreVOS[0].pdcId,item1.campaignType)">
						<show :type="item1.campaignType" :title="item1.basPntMoreVOS[0].pdcName" :pdcId="item1.basPntMoreVOS[0].pdcId"
						 :imgUrl="item1.logo" :store="item1.company" :price="item1.basPntMoreVOS[0].promotionPrice"></show>
					</view>
				</view>
			</view>
		</view>
		<uni-load-more :status="status"></uni-load-more>
	</view>
</template>
<script>
	import show from './show.vue'
	export default {
		components: {
			show
		},
		data() {
			return {
				more: 'loading',
				list1: [],
				list2: [],
				cloneList: []
			}
		},
		props: {
			showItemList: Array,
			status: {
				type: String,
				default: 'loading'
			}
		},

		created() {
			this.computedList()
		},
		methods: {
			computedList() {
				// 切割数组
				// 计算奇数列偶数列解决位置变换问题
				const cloneList = JSON.parse(JSON.stringify(this.showItemList))
				for (let i = 0; i < cloneList.length; i++) {
					if (i % 2 !== 0) {
						this.list1.push(cloneList[i])
					} else {
						this.list2.push(cloneList[i])
					}
				}
			},
			// 去详情页
			toDetail(id, campaignType) {
				uni.navigateTo({
					url: `../../singlePage/productDetail/productDetail?pdcId=${id}&campaignType=${campaignType}`
				})
			}
		},
		watch: {
			showItemList: function() {
				this.computedList()
			}
		}
	}
</script>
<style lang="less">
	.c_buy {
		box-sizing: border-box;

		.flexBox {
			display: flex;
			justify-content: space-between;
			width: 710rpx;
			box-sizing: border-box;

			.block-content {
				display: flex;
				flex-direction: column;

				.block {
					margin-bottom: 20rpx;
					overflow: hidden;
					backface-visibility: hidden;
					transform: translate3d(0, 0, 0);
				}
			}
		}

	}
</style>

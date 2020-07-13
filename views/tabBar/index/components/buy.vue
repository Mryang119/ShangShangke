<template>
	<!-- 买就送 -->
	<view class="c_buy">
		<!-- 	<view class="flex-item" v-for="(item,index) in showItemList" :key="index">
			<show :type="item"></show>
		</view> -->
		<view class="flexBox">
			<view class="block-content">
				<view class="block" v-for="item1 in list1 " :key="item1">
					<show :type="item1"></show>
				</view>
			</view>
			<view class="block-content">
				<view class="block" v-for="item2 in list2" :key="item2">
					<show :type="item2"></show>
				</view>
			</view>
		</view>
		<uni-load-more :status="status"></uni-load-more>
	</view>
</template>
<script>
	import uniLoadMore from "@/components/uni-load-more/uni-load-more.vue"
	import show from './show.vue'
	import fengflow from "@/components/feng-flow/feng-flow.vue"
	export default {
		components: {
			uniLoadMore,
			show,
			fengflow
		},
		props: {
			showItemList: Array,
			status: {
				type: String,
				default: 'loading'
			}
		},
		data() {
			return {
				more: 'loading',
				list1: [],
				list2: []
			}
		},
		created() {
			this.computedList()
		},
		methods: {
			// 计算数组位置
			computedList() {
				// 切割数组
				//计算起始位置和结束位
				// let length = this.showItemList.length
				// let list1End = Math.floor(length / 2)
				// console.log(list1End)
				// let list2End = length
				// console.log(list2End)
				// this.list1 = this.showItemList.slice(0, list1End)
				// this.list2 = this.showItemList.slice(list1End, list2End)
				// 计算奇数列偶数列解决位置变换问题
				for (let i = 0; i < this.showItemList.length; i++) {
					if (i % 2 !== 0) {
						this.list1.push(this.showItemList[i])
					} else {
						this.list2.push(this.showItemList[i])
					}
				}
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
				}
			}
		}

	}
</style>

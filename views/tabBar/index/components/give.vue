<template>
	<!-- 满就减组件 -->
	<view class="c_give">
		<view class="flexBox">
			<view class="block-content">
				<view class="block" v-for="item1 in list1 " :key="item1.image">
					<show :type="item1.type" :url="item1.image"></show>
				</view>
			</view>
			<view class="block-content">
				<view class="block" v-for="item2 in list2" :key="item2.image">
					<show :type="item2.type" :url="item2.image"></show>
				</view>
			</view>
		</view>
		<uni-load-more :status="status"></uni-load-more>
	</view>
</template>

<script>
	import show from './show.vue'
	import uniLoadMore from "@/components/uni-load-more/uni-load-more.vue"
	export default {
		props: {
			showItemList: Array,
			status: {
				type: String,
				default: 'loading'
			}
		},
		components: {
			show,
			uniLoadMore
		},
		data() {
			return {
				list1: [],
				list2: [],
				cloneList: []
			}
		},
		created() {
			this.computedList()
		},
		methods: {
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
				this.cloneList = JSON.parse(JSON.stringify(this.showItemList))
				for (let i = 0; i < this.cloneList.length; i++) {
					if (i % 2 !== 0) {
						this.list1.push(this.cloneList[i])
					} else {
						this.list2.push(this.cloneList[i])
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
	.c_give {
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

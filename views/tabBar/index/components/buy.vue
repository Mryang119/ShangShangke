<template>
	<!-- 买就送 -->
	<view class="c_buy">
		<!-- 	<view class="flex-item" v-for="(item,index) in showItemList" :key="index">
			<show :type="item"></show>
		</view> -->
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
	import uniLoadMore from "@/components/uni-load-more/uni-load-more.vue"
	import show from './show.vue'
	export default {
		components: {
			uniLoadMore,
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
				this.cloneList = JSON.parse(JSON.stringify(this.showItemList))
				console.log(this.cloneList)
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

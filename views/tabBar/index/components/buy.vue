<template>
	<!-- 买就送 -->
	<view class="c_buy">
		<!-- 	<view class="flex-item" v-for="(item,index) in showItemList" :key="index">
			<show :type="item"></show>
		</view> -->
		
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
			showItemList: Array
		},
		data() {
			return {
				more: 'loading',
				list1:[],
				list2:[]
			}
		},
		created(){
			// 切割数组
			//计算起始位置和结束位
			let length = this.showItemList.length
			let list1End = Math.floor(length/2)
			console.log(list1End)
			let list2End = length
			this.list1 = this.showItemList.slice(0,list1End)
			this.list2 = this.showItemList.slice(list1End+1,list2End)
			console.log("list1",this.list1)
			console.log("list2",this.list2)
		},
		methods: {
			moreList() {
				console.log('111')
			}
		}
	}
</script>
<style lang="less">
	.c_buy {}
</style>

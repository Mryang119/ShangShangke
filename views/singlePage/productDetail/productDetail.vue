<template>
	<!-- name:杨大锐 -->
	<!-- 商品详情页 -->
	<view class="s_productDetail">
		<buyButton @changeStatus="changeStatus" :status="status"></buyButton>
		<!-- 买赠 -->
		<view class="buy-content" v-if="campaignType==4">
			<buyDetail :pdcId="pdcId"></buyDetail>
		</view>
		<view class="killDetail-content" v-else-if="campaignType==1">
			<killDetail :pdcID="pdcId"></killDetail>
		</view>
		<view class="groupDetail-content" v-else-if="campaignType==2">
			<groupDetail :pdcID="pdcId"></groupDetail>
		</view>
		<view class="robDetail-content" v-else-if="campaignType==99">
			<robDetail :pdcID="pdcId"></robDetail>
		</view>
		<view class="robDetail-content" v-else-if="campaignType==98">
			<everydayDetail :pdcID="pdcId"></everydayDetail>
		</view>
		<view class="hieght" :style="{height:98+'rpx'}"></view>
	</view>
</template>

<script>
	// 组件
	import buyDetail from './components/buyDetail.vue'
	import killDetail from './components/killDetail.vue'
	import groupDetail from './components/groupDetail.vue'
	import robDetail from './components/robDetail.vue'
	import everydayDetail from './components/everydayDetail.vue'
	import buyButton from '@/src/publicComponents/buyButton.vue'
	// api
	import {
		getProductSkuList
	} from '../../../src/api/productApi/productApi.js'
	export default {
		components: {
			buyDetail,
			killDetail,
			groupDetail,
			robDetail,
			everydayDetail,
			buyButton
		},
		data() {
			return {
				campaignType: 0,
				pdcId: 0,
				status:1
			};
		},
		methods:{
			changeStatus(e) {
				console.log(e)
				this.status = e
				console.log(this.status)
			}
		},
		onLoad(e) {
			console.log(e)
			this.campaignType = e.campaignType
			this.pdcId = e.pdcId
		}
	}
</script>

<style lang="less">
	.s_productDetail {
	}
</style>

<template>
	<!-- name:杨大锐 -->
	<!-- 商品详情页 -->
	<view class="s_productDetail">
		<!-- 买赠 -->
		<view class="buy-content" v-if="campaignType==4">
			<buyDetail :pdcId="pdcId"></buyDetail>
		</view>
	</view>
</template>

<script>
	// 组件
	import buyDetail from './components/buyDetail.vue'
	// api
	import {
		getProductSkuList
	} from '../../../src/api/productApi/productApi.js'
	export default {
		components: {
			buyDetail
		},
		data() {
			return {
				campaignType: 0,
				pdcId: 0
			};
		},
		onLoad(e) {
			this.campaignType = e.campaignType
			this.pdcId = e.pdcId
		}
	}
</script>

<style lang="less">

</style>

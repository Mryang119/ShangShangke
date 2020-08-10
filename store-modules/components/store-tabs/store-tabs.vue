<template>
	<view class="store-tabs-root">
		<view class="store-tabs-content">
			<u-sticky :offsetTop="0">
				<view class="store-tabs-contianer">
					<u-tabs :list="list" :is-scroll="true" font-size="28" bar-width="54" active-color="#333333" :current="current"
					 @change="change"></u-tabs>
				</view>
			</u-sticky>
			<view class="store-tabs-product-contaienr">
				<view class="store-tabs-product-item" v-for="(item,index) in 6" :key="index">
					<productContainer :imageWidth="167" :imageHeight="167"></productContainer>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	import productContainer from '@/src/publicComponents/productContainer.vue'

	export default {

		components: {
			productContainer
		},
		props: {
			list: {
				type: Array,
				default: () => ([{
						name: '护肤品'
					},
					{
						name: '日用品'
					}, {
						name: '服装'
					}, {
						name: '生鲜'
					},
					{
						name: '家电'
					}
				])
			}
		},
		data() {
			return {
				current: 0
			}
		},
		methods: {
			change(i) {
				this.current = i
			}
		}
	}
</script>

<style lang="less">
	.store-tabs-product-contaienr {
		display: flex;
		flex-wrap: wrap;
		justify-content: space-between;
		padding: 30rpx;
	}
	.store-tabs-product-item {
		width: 334rpx;
	}
</style>

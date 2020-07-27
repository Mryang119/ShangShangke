D
<!-- 申请退款 -->
<template>
	<view class="Refundontainer">
		<view class="container">
			<view class="refundText">请选择退款原因</view>
			<view class="refundList">
				<!-- <u-checkbox-group @change="checkboxGroupChange" wrap="fasle" shape="square" active-color="#24A7FF">
					<u-checkbox @change="checkboxChange" v-model="item.checked" v-for="(item, index) in list" :key="index" 
					:name="item.name">{{item.name}}</u-checkbox>
				</u-checkbox-group> -->
				<checkbox-group @change="checkboxChange">
					<label class="uni-list-cell uni-list-cell-pd" v-for="item in items" :key="item.value">
						<view>{{item.name}}</view>
						<view>
							<checkbox :value="item.value" :checked="item.checked" />
						</view>
					</label>
				</checkbox-group>
			</view>
			<navigator class="applyRefundBtn" :url="applyRefundWarmTip">申请退款</navigator>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				items: [{
						value: '商家营业但不接待',
						name: '商家营业但不接待'
					},
					{
						value: '去过了，不太满意',
						name: '去过了，不太满意',
						checked: 'true'
					},
					{
						value: '后悔了，不想要了',
						name: '后悔了，不想要了'
					},
					{
						value: '商家装修/转让',
						name: '商家装修/转让'
					},
					{
						value: '商家营业但不接待',
						name: '商家营业但不接待'
					},
					{
						value: '去过了，不太满意',
						name: '去过了，不太满意',
						checked: 'true'
					},
					{
						value: '后悔了，不想要了',
						name: '后悔了，不想要了'
					},
					{
						value: '商家装修/转让',
						name: '商家装修/转让'
					}
				],
				current: 1,
				applyRefundWarmTip:'../../singlePage/applyRefundWarmTip/applyRefundWarmTip'

			}
		},
		methods: {
			checkboxChange: function(e) {
				var items = this.items,
					values = e.detail.value;
				for (var i = 0, lenI = items.length; i < lenI; ++i) {
					const item = items[i]
					if (values.includes(item.value)) {
						this.$set(item, 'checked', true)
					} else {
						this.$set(item, 'checked', false)
					}
				}
			}
		}

	}
</script>

<style lang="less">
	.Refundontainer {
		width: 750rpx;
		height: 1380rpx;
		padding-top: 20rpx;
		background: #F6F6F6;
		overflow-y: hidden;

		.container {
			width: 750rpx;
			height: 1360rpx;
			background: #FFFFFF;
			padding: 0 30rpx;

			.refundText {
				width: 690rpx;
				height: 92rpx;
				line-height: 92rpx;
				font-size: 28rpx;
				font-family: PingFang SC;
				font-weight: 400;
				color: rgba(112, 112, 112, 1);
				border-bottom: 1px solid rgba(243, 243, 243, 1);
			}

			.refundList {
				width: 690rpx;
				height: 712rpx;

				.uni-list-cell {
					width: 690rpx;
					height: 96rpx;
					display: flex;
					justify-content: space-between;
					align-items: center;
					font-size: 28rpx;
					font-family: PingFang SC;
					font-weight: 400;
					color: rgba(51, 51, 51, 1);
				}
			}


			.applyRefundBtn {
				margin-top: 80rpx;
				width: 690rpx;
				height: 80rpx;
				background: rgba(36, 167, 255, 1);
				border-radius: 12rpx;
				line-height: 80rpx;
				text-align: center;
				font-size:28rpx;
				font-family:PingFang SC;
				font-weight:400;
				color:rgba(255,255,255,1);
			}

		}
	}
</style>

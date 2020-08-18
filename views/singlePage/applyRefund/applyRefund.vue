<!-- 申请退款 -->
<!-- name:陈铄源 -->
<template>
	<view class="Refundontainer">
		<view class="container">
			<view class="refundText"><text>请选择退款原因</text></view>
			<label class="uni-list-cell uni-list-cell-pd " v-for="(item, index) in resultList" :key="index" @click="isAcativy(index)">
				<view class="resultText"><text>{{item.name}}</text></view>
				<view>
					<radio class="arc" :value="item.value" color='#24A7FF' :checked="item.checked" />
				</view>
			</label>
			<view class="applyRefundBtn" @click="refundBtn"><text>申请退款</text></view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				resultList: [{
						value: '1',
						name: '商家营业但不接待',
						checked: false,
					},
					{
						value: '2',
						name: '去过了不太满意',
						checked: false
					},
					{
						value: '3',
						name: '后悔了不想要了',
						checked: false,
					},
					{
						value: '4',
						name: '商家装修/装让',
						checked: false,
					},
					{
						value: '5',
						name: '商家营业但不接待',
						checked: false,
					},
					{
						value: '6',
						name: '去过了，不太满意',
						checked: false
					},
					{
						value: '7',
						name: '后悔了，不想要了',
						checked: false,
					},
					{
						value: '8',
						name: '商家装修/转让',
						checked: false,
					}
				]
			}
		},
		methods: {
			isAcativy(index) {
				this.resultList[index].checked = !this.resultList[index].checked
				console.log(index)
			},
			refundBtn() {
				let list = [...this.resultList]
				let list1 = list.filter((item, index) => {
					return item.checked
				})
				console.log(list1)
				uni.redirectTo({
					url:'../../singlePage/applyRefundWarmTip/applyRefundWarmTip'
				})
			}
		}

	}
</script>

<style lang="less" scoped>
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
				.resultText{
					font-size:28rpx;
					font-family:PingFang SC;
					font-weight:400;
					line-height:96rpx;
					color:rgba(51,51,51,1);
				}
				.arc{
					transform: scale(0.8);
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
				font-size: 28rpx;
				font-family: PingFang SC;
				font-weight: 400;
				color: rgba(255, 255, 255, 1);
			}

		}
	}
</style>

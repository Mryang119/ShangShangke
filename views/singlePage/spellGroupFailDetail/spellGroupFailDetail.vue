<!-- 拼团失败详情页面-待接跳转 -->
<template>
	<view class="container">
		<view class="spellGroupFailDetail">
			<oneShopDetail />
			<view class="information">
				<view class="orderType">
					<view class="text">订单状态:</view>
					<view class="type">拼团失败</view>
				</view>
				<view class="orderType">
					<view class="text">订单编号:</view>
					<view class="type">293247384734</view>
				</view>
				<view class="orderType">
					<view class="text">订单金额:</view>
					<view class="type">￥66.66</view>
				</view>
				<view class="orderType">
					<view class="text">订单方式:</view>
					<view class="type">支付宝</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	import oneShopDetail from '../../../src/publicComponents/oneShopDetail.vue'
	export default{
		data(){
			return{
				
			}
		},
		components:{
			oneShopDetail
		}
	}
</script>

<style lang="less">
	.container{
		background:rgba(246,246,246,1);
		padding-top: 20rpx;
		.spellGroupFailDetail{
			width: 750rpx;
			height: 1360rpx;
			background: #FFFFFF;
			padding: 0 30rpx;
			.information{
				margin-top: 12rpx;
				.orderType{
					width: 690rpx;
					height: 68rpx;
					display: flex;
					justify-content: space-between;
					align-items: center;
					font-size:28rpx;
					font-family:PingFang SC;
					font-weight:400;
					.text{
						color:rgba(133,133,133,1);
					}
					.type{
						color:rgba(51,51,51,1);
					}
				}
			}
		}
	}
</style>

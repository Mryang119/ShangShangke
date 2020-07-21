<template>
	<!-- 限时秒杀 -->
	<view class="s_timekillDetail">
		<view class="top-title-contianer">
			<view class="img-container">
				<image src="@/static/images/Product/xianshimiaosha.png" mode="" class="img"></image>
			</view>
			<scroll-view scroll-x="true" class="time-list">
				<view class="time-list-title">
					限时
					<br/>
					热抢
				</view>
			</scroll-view>
		</view>
	</view>
</template>

<script>
	import {getSeckillMoreInfo} from '../../../src/api/homeApi/homeApi.js'
	export default {
		data() {
			return {
				timeList:[
					{time:'10:00'},
					{time:'14:00'}
				],
			};
		},
		methods:{
			// 拿到分类请求数据
			
		},
		async onLoad(){
			await getSeckillMoreInfo({
				circs:this.$store.state.globalData.circs,
				killType:1,
				pageNum:1,
				pageSize:5
			})
		}
	}
</script>

<style lang="less" scoped>
	.s_timekillDetail {
		position: relative;
		width: 750rpx;
		.top-title-contianer {
			width: 750rpx;
			position: absolute;
			height: 580rpx;
			background:rgba(254,76,79,1);
			border-radius: 0 0 54rpx 54rpx;
			.img-container {
				width: 710rpx;
				height: 310rpx;
				margin: 12rpx auto;
				.img {
					height: 100%;
					width: 100%;
				}
			}
		}
	}
</style>

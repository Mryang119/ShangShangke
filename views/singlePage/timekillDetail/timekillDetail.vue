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
					<br />
					热抢
				</view>
				<view class="timestamp" v-for="(item,index) in timeList" :key="item">
					<view class="time">{{item.time}}</view>
					<view class="status">{{item.now?'抢购中':'即将开始'}}</view>
				</view>
			</scroll-view>
		</view>
	</view>
</template>

<script>
	import {
		getSeckillMoreInfo
	} from '../../../src/api/homeApi/homeApi.js'
	export default {
		data() {
			return {
				timeList: [],
			};
		},
		methods: {
			// 模拟一份时间段请求数据
			getFakeDates() {
				//  每一个小时等于3600000毫秒
				// 	获取当前时间戳往后计算 剩余整点时间段
				//  先计算当前时间戳离24小时间隔小时数
				let hoursMili = 3600000
				let date = new Date()
				let h = date.getHours()
				// 当前时间
				let nowDate = Number(Date.now())
				let j = 0 // 校准小时
				for (let i = h; i < 24; i++) {
					if (i === h) {
						this.timeList.push({
							time: `${i}:00`,
							now: true,
							millisecond:nowDate+j*hoursMili
						})
					} else {
						this.timeList.push({
							time: `${i}:00`,
							now: false,
							millisecond:nowDate+j*hoursMili
						})
					}
					j++
				}
			}

		},
		async onLoad() {
			// await getSeckillMoreInfo({
			// 	circs: this.$store.state.globalData.circs,
			// 	killType: 1,
			// 	pageNum: 1,
			// 	pageSize: 5
			// })
			this.getFakeDates()
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
			background: rgba(254, 76, 79, 1);
			border-radius: 0 0 54rpx 54rpx;
			.time-list {
				display: flex;
				.timestamp {
					width: 90rpx;
					
				}
			}
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

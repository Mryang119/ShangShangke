<template>
	<!-- name:杨大锐 -->
	<!-- 限时秒杀 -->
	<view class="s_timekillDetail" :style="{height:fatherHeight*2+'rpx'}">
		<view class="top-title-content">
			<view class="img-container">
				<image src="@/static/images/Product/xianshimiaosha.png" mode="" class="img"></image>
			</view>
			<scroll-view scroll-x="true" class="time-list">
				<view class="scroll-H" :style="{width:length*73*2+160+'rpx',height:50*2+'rpx'}">
					<view class="time-list-title">
						限时
						<br />
						热抢
					</view>
					<view class="timestamp" :class="{'upcoming-status':item.now===false}" v-for="(item,index) in timeList" :key="item">
						<view class="time">{{item.time}}</view>
						<view class="status">{{item.now?'抢购中':'即将开始'}}</view>
					</view>
				</view>
				<view class="residue-time-container">
					<text :style="{marginRight:'12rpx'}">剩余</text>
					<u-count-down separator-color="#FFF" font-size="28" :show-days="false" color="#FFF" :timestamp="residueTime"
					 bg-color="rgba(255,255,255,0)" :autoplay="true"></u-count-down>
				</view>
			</scroll-view>
		</view>
		<view class="commodity-content">
			<view class="commodity-item" v-for="(item,index) in 4" :key="index">
				<timeKillCommodity></timeKillCommodity>
			</view>
		</view>
		<view class="tabs-content">
			<view class="line-container">
				<view class="line" v-for="(item,index) in 4" :key="index"></view>
			</view>
			<u-tabs name="name" bg-color="#F6F6F6" :list="list" :is-scroll="false" :current="current" @change="change"></u-tabs>
		</view>
		<view class="commodity-box">
			<view class="commodity-contianer" v-for="(item,index) in 4" :key="index">
				<timeKillRobItem></timeKillRobItem>
			</view>
		</view>
	</view>
</template>

<script>
	import {
		getSeckillMoreInfo
	} from '../../../src/api/homeApi/homeApi.js'
	import timeKillCommodity from './components/timeKillCommodity.vue'
	import timeKillRobItem from './components/timeKillRobItem.vue'
	export default {
		components: {
			timeKillCommodity,
			timeKillRobItem
		},
		data() {
			return {
				timeList: [],
				length: 0,
				list: [{
					name: '全部'
				}, {
					name: '美食'
				}, {
					name: '好物'
				}, {
					name: '娱乐'
				}, {
					name: '生活'
				}, ],
				current: 0,
				fatherHeight: 0,
				residueTime: 0
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
							time: `${i}:00`, // 用于展示
							now: true, // 用于状态
							millisecond: nowDate + j * hoursMili // 转化毫秒数给后端
						})
					} else {
						this.timeList.push({
							time: `${i}:00`,
							now: false,
							millisecond: nowDate + j * hoursMili
						})
					}
					j++
				}
				this.length = this.timeList.length
			},
			change(index) {
				this.current = index;
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
			const query = uni.createSelectorQuery().in(this);
			query.select('.commodity-box').boundingClientRect(data => {
				this.fatherHeight = data.top + data.height
			}).exec();
		},
		onShow() {
			// 1 分(分钟)=60000 毫秒
			// 1 秒=1000 毫秒
			let date = new Date()
			let m = date.getMinutes() // 当前分钟
			// let s = date.getSeconds() // 当前秒
			let hoursMili = (60 - m)
			this.residueTime = hoursMili * 60
			console.log(hoursMili)
		}
	}
</script>

<style lang="less" scoped>
	.s_timekillDetail {
		position: relative;
		width: 750rpx;
		background-color: #F6F6F6;

		.top-title-content {
			width: 750rpx;
			position: absolute;
			height: 580rpx;
			// background: rgba(254, 76, 79, 1);
			background-image: linear-gradient(to bottom, #E33030, #FF4F4F);
			border-radius: 0 0 54rpx 54rpx;

			.time-list-title {
				width: 64rpx;
				font-size: 32rpx;
				font-weight: bold;
				color: #FFFFFF;
				margin-left: 30rpx;
				margin-right: 40rpx;
			}

			.time-list {
				display: flex;

				.scroll-H {
					display: flex;
				}

				.timestamp {
					width: 90rpx;
					margin-right: 56rpx;
					text-align: center;

					.time {
						font-size: 32rpx;
						color: #FFFFFF;
					}

					.status {
						width: 90rpx;
						height: 36rpx;
						background: rgba(255, 255, 255, 1);
						opacity: 1;
						border-radius: 22rpx;
						color: #FF2F2F;
						font-size: 22rpx;
						line-height: 36rpx;
						text-align: center;
						font-weight: bold;
					}
				}

				.residue-time-container {
					display: flex;
					color: #FFF;
					font-size: 28rpx;
					font-weight: bold;
					align-items: center;
					justify-content: center;
					margin-top: 20rpx;
				}

				.upcoming-status {

					.time {
						font-size: 32rpx;
						color: rgb(250, 162, 157);
					}

					.status {
						width: 90rpx;
						height: 36rpx;
						background-color: #FF4F4F;
						border-radius: 22rpx;
						color: rgb(250, 162, 157);
						font-size: 22rpx;
						line-height: 36rpx;
						text-align: center;
					}
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

		.commodity-content {
			position: absolute;
			top: 538rpx;
			z-index: 99;
			width: 750rpx;
			box-sizing: border-box;
			display: flex;
			flex-wrap: wrap;
			justify-content: space-between;
			padding: 0 20rpx;

			.commodity-item {
				margin-bottom: 20rpx;
			}
		}

		.tabs-content {
			position: absolute;
			top: 1438rpx;
			width: 750rpx;
			background-color: #F6F6F6;

			.line-container {
				position: absolute;
				width: 458rpx;
				height: 80rpx;
				top: 50%;
				left: 50%;
				transform: translate(-50%, -50%);
				box-sizing: border-box;
				display: flex;
				justify-content: space-between;
				align-items: center;

				.line {
					width: 2rpx;
					height: 28rpx;
					background-color: #E4E4E4;
				}
			}
		}

		.commodity-box {
			padding: 0 20rpx;
			position: absolute;
			top: 1540rpx;

			.commodity-contianer {
				margin-bottom: 20rpx;
				border-radius: 12rpx;
				overflow: hidden;
			}
		}

	}
</style>

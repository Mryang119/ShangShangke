<template>
	<view class="root_index">
		<!-- 自定义导航栏 -->
		<uni-nav-bar :fixed="true" :status-bar="true" title="上上客" class="top_nvaBar_text" :shadow="false" background-color="#FFFFFF">
		</uni-nav-bar>
		<!-- 轮播图包含搜索条区域 -->
		<view class="swiper-container">
			<!-- 轮播图 -->
			<u-swiper :list="CarouselImg" height="596" border-radius="0" img-mode="scaleToFill"></u-swiper>
			<!-- 搜索定位分类部分 -->
			<view class="topNav">
				<navigator url="../../singlePage/position/position" class="position">
					<position :cityName="cityName"></position>
				</navigator>
				<view class="searchBar" @click="toSearch">
					<image src="@/static/images/iconfont/search.png" mode=""></image>
					<view class="fakerInput"><text>搜索商家/商品</text></view>
				</view>
				<navigator class="classify" url="../../singlePage/classify/classify">
					<image class="image" src="@/static/images/iconfont/fenlei.png" mode="aspectFill"></image>
				</navigator>
			</view>
		</view>
		<!-- 下半部分主体 -->
		<view class="bottom-container">
			<!-- 天天免费抢 -->
			<view class="every-ady-rob-content">
				<view class="titleBar">
					<view class="daydayRob"></view>
					<view class="titleBar-title">
						<text>数量有限 先到先得</text>
					</view>
					<more></more>
				</view>
				<!-- 列表 -->
				<view class="list">
					<view class="bindContainer" v-for="(item,index) in 4" :key="index" @click="toDtail(index)">
						<shopItem></shopItem>
					</view>
				</view>
			</view>
			<!-- 每日一品 -->
			<view class="dayil-taste-content">
				<image class="meiriyipin son" src="@/static/images/Product/meiriyipin.png" mode=""></image>
				<view class="meiriyipin-text son" mode="">
					<text>每日一品</text>
				</view>
			</view>
			<!-- 领好券 -->
			<view class="getcoupon-content">
				<!-- 标题部分 -->
				<view class="getCoupon-titleBar">
					<text class="getCoupon-titleBar-item linghaoquan">领好券</text>
					<view class="textBg getCoupon-titleBar-item">
						<text>抢大额优惠券</text>
					</view>
					<more url='../../singlePage/getCoupon/getCoupon'></more>
				</view>
				<!-- 横向滚动部分 -->
				<scroll-view scroll-x="true" class="scorll-H">
					<view class="scorll-H-container" :style="{width:scrollWidth+'rpx'}">
						<view class="scorll-item" v-for="(item,index) in couponHome" :key="item.mktCoupons[0].labelName" @click="changeStatus(index)">
							<coupon :company="item.company" :labelName="item.mktCoupons[0].labelName" :status="item.status" :logo="item.logo"></coupon>
						</view>
					</view>
				</scroll-view>
			</view>
			<!-- 广告位 -->
			<view class="banner-content">
				<image src="@/static/images/Product/banner4@2x.png" mode=""></image>
			</view>
			<!-- 秒杀 -->

			<view class="timeKill-content">
				<view class="timeKill-titleBar">
					<view class="title-item title-text"><text>限时秒杀</text></view>
					<view class="title-item time">
						<u-count-down ref="uCountDown" bg-color="#F10000" separator-color="#F10000" color="#FFFFFF" :timestamp="86400"
						 :autoplay="true"></u-count-down>
					</view>
					<more url="../../singlePage/timekillDetail/timekillDetail"></more>
				</view>
				<scroll-view scroll-x="true" class="scorll-H-S">
					<!-- 宽度 商品数量*组件宽度+总边距 -->
					<view class="scorll-H-S-container" :style="{width:killWidth+'rpx'}">
						<view class="scorll-H-S-container-item" @click="toDtail(item.pdcId,item.campaignType)" v-for="(item,index) in seckillHome"
						 :key="index">
							<spitem :pdcId="item.pdcId" :imgUrl="item.imageAddr" :price="item.promotionPrice"></spitem>
						</view>
					</view>
				</scroll-view>
			</view>
			<!-- 超值拼团 -->
			<view class="groupPurchase-content">
				<view class="groupPurchase-titleBar">
					<view class="groupPurchase-titleBar-text"><text>超值拼团</text></view>
					<more url="../../singlePage/groupPurchase/groupPurchase"></more>
					<!-- <moduleTitle title="超值拼团" url="../../singlePage/groupPurchase/groupPurchase"></moduleTitle> -->
				</view>
				<scroll-view scroll-x="true" class="scorll-H-S">
					<!-- 宽度 商品数量*组件宽度+总边距 -->
					<view class="scorll-H-S-container">
						<view class="scorll-H-S-container-item" v-for="(item,index) in 10" :key="index">
							<spitem></spitem>
						</view>
					</view>
				</scroll-view>
			</view>
			<!-- 买就送满就减 -->
			<view class="buyGive-content">
				<view class="button-container">
					<view class="toggle-button" @click="toggl('buy')" :class="{'toogle-button-yes':cp==='buy'}">
						<text class="not-text">买就送</text>
						<br />
						<text class="not-mini-text">买就送商品</text>
						<br />
						<image v-if="cp==='buy'" src="@/static/images/iconfont/selectBg.png" mode=""></image>
					</view>
					<view class="line"></view>
					<view class="toggle-button" @click="toggl('give')" :class="{'toogle-button-yes':cp==='give'}">
						<text class="not-text">满就减</text>
						<br />
						<text class="not-mini-text">满额立即减</text>
						<br />
						<image v-if="cp==='give'" src="@/static/images/iconfont/selectBg.png" mode=""></image>
					</view>
				</view>
			</view>
			<view class="vShowbox" v-show="cp==='buy'">
				<buy :status="status1" :showItemList="showItemList1"></buy>
			</view>
			<view class="vShowbox" v-show="cp==='give'">
				<give :status="status2" :showItemList="showItemList2"></give>
			</view>
		</view>
	</view>
</template>

<script>
	// 组件
	import position from './components/position.vue'
	import more from './components/more.vue'
	import shopItem from '@/src/publicComponents/daydayShop.vue'
	import spitem from '@/src/publicComponents/spitem.vue'
	import buy from './components/buy.vue'
	import give from './components/give.vue'
	import coupon from './components/coupon.vue'
	// import moduleTitle from './components/moduleTitle.vue'
	import {
		dataList,
		showItemList
	} from '@/src/utils/fakeData.js'
	// 工具函数
	import {
		ScrollWidth,
		getLocations
	} from '@/src/utils/index.js'
	import {
		mapState
	} from 'vuex'
	// api
	import {
		getCityList,
		getHomeModuleMessages,
		getCircList,
		getCircCampaignInfo,
		getCouponList
	} from '../../../src/api/homeApi/homeApi.js'
	export default {
		components: {
			position,
			more,
			shopItem,
			spitem,
			buy,
			give,
			coupon,
			// moduleTitle
		},
		data() {
			return {
				temp: [],
				time: null,
				cp: 'buy',
				ajaxList: showItemList, // 
				showItemList1: [], // 买赠列表
				startPage1: 1, // 买赠起始页
				buylength: 0, // 买赠数据长度

				showItemList2: [], // 数满列表
				startPage2: 1, // 满减起始页
				givelength: 0, // 满减数据长度

				status1: 'loading',
				status2: 'loading',

				// 首页模块数据⬇
				circs: "", // 商圈id
				couponHome: [], //优惠券
				newExclusiveHome: [], //新人专享
				seckillHome: [], //秒杀
				groupHome: [], //团购
				fullDiscountHome: [], //满减
				buyGiftHome: [], //买赠
				fullGiftHome: [], //满赠
				CarouselImg: [] //轮播图
				// 首页模块数据⬆
			}
		},
		methods: {

			// 去使用
			changeStatus(i) {
				this.couponHome[i].status = 1
			},
			// 立即领取的切换类名
			toggl(e) {
				console.log(e)
				this.cp = e
			},

			// 跳转搜索
			toSearch() {
				uni.navigateTo({
					url: '../../singlePage/search/search?type=index'
				})
			},

			// 跳转商品详情
			toDtail(id, campaignType) {
				uni.navigateTo({
					url: `../../singlePage/productDetail/productDetail?pdcId=${id}&campaignType=${campaignType}`
				})
			},
			// 获取城市列表存入仓库
			async getCity() {
				let res = await getCityList({
					sysAccount: 'SYSTEM'
				})
				this.$store.state.global.globalData.cityList = res.data.data
				return Promise.resolve(res)
			},
			// 获取商圈信息
			async getCirc() {
				let res = await getCircList({
					mobile: '15501876709',
					city: this.cityName,
					lat: this.latitude,
					lon: this.longitude
				})
				this.circs = res.data.data
				this.$store.commit('saveGlobal', {
					key: 'circs',
					value: res.data.data
				})
				return Promise.resolve(res)
			},
			// 获取首页模块相关数据
			async getHomeModule() {
				let res = await getHomeModuleMessages({
					circs: this.circs
				})
				console.log(res.data.data.CarouselImg)
				let datas = ['couponHome',
					'newExclusiveHome',
					'seckillHome',
					'groupHome',
					'fullDiscountHome',
					'buyGiftHome',
					'fullGiftHome'
				]
				// 处理轮播图的数据适配uviewui
				Object.keys(res.data.data.CarouselImg).forEach((key, index) => {
					this.CarouselImg.push({
						image: res.data.data.CarouselImg[key]
					})
				})

				datas.forEach(item => {
					this[item] = res.data.data[item]
				})
				// 给优惠券列表添加一个status
				this.couponHome.map(item => {
					this.$set(item, 'status', 0)
				})
				return Promise.resolve(res)
			},
			// 获取更多活动
			async getCircInfo() {
				let res1 = await getCircCampaignInfo({
					circs: this.circs,
					campaignType: 4,
					pageNum: this.startPage1,
					pageSize: 10
				})
				this.showItemList1 = res1.data.data
				return Promise.resolve(res1)
			},
			async getCouponLists() {
				let res = await getCouponList({})
				console.log(res)
				return Promise.resolve(res)
			}
		},

		async onLoad() {
			uni.showLoading({
				title: '数据加载中',
				duration: 3000,
				icon: 'loading',
				mask: true
			})
			// 获取位置
			try {
				await getLocations(this)()
			} catch (e) {
				console.log(e)
			} finally {
				// await this.getLocation()
				// 获取城市列表
				await this.getCity()
				// 获取商圈
				await this.getCirc()
				// 获取优惠券
				await this.getCouponLists()
				// 获取首页相关模块
				await this.getHomeModule()
				// 获取优惠券
				await getCouponList()
				// 获取更多活动信息
				await this.getCircInfo()
				uni.hideLoading()
			}

		},
		onReady() {

		},
		computed: {
			// 仓库键
			...mapState({
				cityName: state => state.global.globalData.cityName,
				latitude: state => state.global.globalData.latitude,
				longitude: state => state.global.globalData.longitude
			}),
			// 计算优惠券x轴容器宽度
			scrollWidth: function() {
				let len = Math.ceil(this.couponHome.length / 2)
				return ScrollWidth(len, 182, 20)
			},
			killWidth: function() {
				return ScrollWidth(this.seckillHome.length, 102, 16)
			}
		},
		// 触碰底部懒加载
		onReachBottom: async function() {
			// 模拟请求数据
			// 请求回来的数据长度小于十代表已经无了
			if (this.cp === 'buy' && this.buylength >= 10) {
				this.startPage1++
				let res = await getCircCampaignInfo({
					circs: this.circs,
					campaignType: 4,
					pageNum: this.startPage1,
					pageSize: 10
				})
				this.buylength = res.data.data.length

				this.showItemList1 = this.showItemList1.concat(res.data.data)
			} else {
				this.status1 = 'noMore'
			}
			if (this.cp === 'give' && this.givelength >= 10) {
				this.startPage2++
				let res = await getCircCampaignInfo({
					circs: this.circs,
					campaignType: 3,
					pageNum: this.startPage2,
					pageSize: 10
				})
				this.givelength = res.data.data.length
				this.showItemList2 = this.showItemList1.concat(res.data.data)
			} else {
				this.status2 = 'noMore'
			}
		}
	}
</script>

<style lang="less" scoped>
	@font: PingFang SC;

	.image {
		width: 100%;
		height: 100%;
	}

	.root_index {

		// 自定义标题栏
		.top_nvaBar_text {
			font-size: 36rpx;
			font-weight: bold;
			font-family: @font;
		}

		// 轮播图部分
		.swiper-container {

			width: 750rpx;
			height: 596rpx;
			position: relative;


			.topNav {
				width: 100%;
				position: absolute;
				display: flex;
				align-items: center;
				top: 24rpx;
				justify-content: space-between;
				box-sizing: border-box;
				padding-right: 30rpx;

				.searchBar {
					display: flex;
					width: 488rpx;
					height: 62rpx;
					background: rgba(255, 255, 255, 1);
					opacity: 0.5;
					border-radius: 34rpx;
					align-items: center;

					image {
						width: 28.74rpx;
						height: 30.18rpx;
						margin-left: 24rpx;
						margin-right: 20rpx;
					}

					.fakerInput {
						font-size: 28rpx;
						font-weight: 400;
						line-height: 28rpx;
						color: rgba(172, 172, 172, 1);
					}
				}

				.classify {
					width: 48rpx;
					height: 29rpx;
				}
			}
		}

		// 下半部分主体
		.bottom-container {
			width: 100%;
			padding: 20rpx 20rpx;
			box-sizing: border-box;
			background-image: linear-gradient(to bottom, #FFFFFF, #F6F6F6) !important;

			// 天天免费抢
			.every-ady-rob-content {
				box-sizing: border-box;
				width: 710rpx;
				height: 1110rpx;
				background: rgba(255, 246, 231, 1);
				opacity: 1;
				border-radius: 12rpx;
				padding: 30rpx 20rpx 20rpx 20rpx;

				.titleBar {
					height: 34rpx;
					display: flex;
					align-items: center;
					margin-bottom: 30rpx;
					position: relative;

					.daydayRob {
						width: 164rpx;
						height: 33.12rpx;
						background: url(@/static/images/iconfont/tiantianmianfeiqiang.png) no-repeat;
						background-size: cover;
					}

					.titleBar-title {
						height: 34rpx;
						width: 210rpx;
						font-size: 20rpx;
						color: #FFFFFF;
						font-family: @font;
						background: url(@/static/images/iconfont/textBackground.png) no-repeat;
						background-size: cover;
						text-align: center;
						line-height: 34rpx;
						margin-left: 24rpx;
						margin-right: 204rpx;
					}
				}
			}

			// 每日一品
			.dayil-taste-content {
				width: 710rpx;
				height: 404rpx;
				margin-top: 20rpx;
				position: relative;

				.meiriyipin {
					width: 100%;
					height: 100%;
				}

				.son {
					position: absolute;

				}

				.meiriyipin-text {
					width: 170rpx;
					height: 58rpx;
					color: #FFFFFF;
					font-size: 32rpx;
					font-weight: bold;
					top: 20rpx;
					left: 0;
					z-index: 1;
					background: url(@/static/images/Product/meiriyipinText.png);
					background-size: cover;
					text-align: center;
					line-height: 58rpx;
				}
			}

			// 领好券
			.getcoupon-content {
				width: 710rpx;
				height: 386rpx;
				margin-top: 20rpx;
				padding: 36rpx 0 20rpx 20rpx;
				box-sizing: border-box;
				background-color: #FFF;
				border-radius: 6px;

				.getCoupon-titleBar {
					position: relative;
					height: 42rpx;
					width: 98%;
					padding-right: 10rpx;
					box-sizing: border-box;

					.getCoupon-titleBar-item {
						position: absolute;
						top: 50%;
						transform: translateY(-50%);
						left: 14rpx;
					}

					.linghaoquan {
						font-size: 36rpx;
						font-weight: bold;
						line-height: 42rpx;
						color: rgba(51, 51, 51, 1);
						opacity: 1;
					}

					.textBg {
						width: 160rpx;
						height: 32rpx;
						background: url(@/static/images/Product/linghaoquanTextBg.png);
						background-size: cover;
						left: 144rpx;
						font-size: 20rpx;
						color: #624118;
						line-height: 32rpx;
						text-align: center;
					}
				}

				.scorll-H {
					width: 100%;
					height: 268rpx;
					margin-top: 20rpx;

					.scorll-H-container {
						height: 268rpx;
						display: flex;
						flex-wrap: wrap;
						// margin-left: -20rpx;
						align-content: space-between;

						.scorll-item {
							width: 364rpx;
							height: 124rpx;
							margin-right: 20rpx;
						}

						.scorll-item-active {
							width: 364rpx;
							height: 124rpx;
							margin-right: 20rpx;
							background: url(@/static/images/Product/youhuiquanyilingqu.png);
							background-size: cover;
						}

					}

				}

			}

			// 广告位
			.banner-content {
				width: 710rpx;
				height: 232rpx;
				margin-top: 20rpx;

				image {
					width: 100%;
					height: 100%;
				}
			}

			// 秒杀模块
			.timeKill-content {
				width: 710rpx;
				height: 414rpx;
				margin-top: 20rpx;
				padding: 30rpx 0 20rpx 20rpx;
				box-sizing: border-box;
				background-color: #FFF;
				border-radius: 6px;
				overflow: hidden;

				.timeKill-titleBar {
					position: relative;
					width: 98%;
					font-size: 36rpx;
					color: #333333;
					height: 48rpx;
					margin-bottom: 30rpx;

					.title-text {
						font-weight: bold;
					}

					.title-item {
						position: absolute;
						top: 50%;
						transform: translateY(-50%);
					}

					.time {
						width: 148rpx;
						height: 36rpx;
						background-size: cover;
						left: 158rpx;
						font-size: 24rpx;
						color: #FFFFFF;
						display: flex;
						justify-content: space-between;
					}
				}
			}

			// 两个差不多模块的公用类名
			.scorll-H-S {
				width: 100%;

				.scorll-H-S-container {
					height: 285.6rpx;
					display: flex;
					justify-content: space-between;

					.scorll-H-S-container-item {
						width: 204rpx;
						height: 285.6rpx;
						margin-right: 16rpx;
					}
				}
			}

			// 超值拼团
			.groupPurchase-content {
				margin-top: 20rpx;
				width: 710rpx;
				height: 414rpx;
				background: rgba(255, 255, 255, 1);
				opacity: 1;
				border-radius: 12rpx;
				padding: 30rpx 0 20rpx 20rpx;
				box-sizing: border-box;

				.groupPurchase-titleBar {
					width: 98%;
					position: relative;
					height: 42rpx;
					margin-bottom: 30rpx;

					.groupPurchase-titleBar-text {
						position: absolute;
						font-size: 36rpx;
						font-weight: bold;
						color: #333333;
						top: 0;
					}
				}
			}

			// 买就送满就减
			.buyGive-content {
				width: 710rpx;
				margin-top: 24rpx;

				.button-container {
					display: flex;
					align-items: center;
					height: 131rpx;

					// 未选中
					.toggle-button {
						flex: 1;
						text-align: center;
						height: 131rpx;

						image {
							width: 42.56rpx;
							height: 14.68rpx;
						}

						.not-text {
							font-size: 36rpx;
							color: #333333;
							font-weight: bold;
						}

						.not-mini-text {
							font-size: 24rpx;
							color: #A9A9A9;
						}
					}

					.line {
						width: 2rpx;
						height: 38rpx;
						background-color: #ccc;
					}

					// 选中
					.toogle-button-yes {
						.not-text {
							font-size: 36rpx;
							color: #FA2901;
							font-weight: bold;
						}

						.not-mini-text {
							font-size: 24rpx;
							color: #FA2901;
						}
					}
				}
			}
		}
	}
</style>

<template>
	<!-- 搜索页面 -->
	<!-- name:杨大锐 -->
	<view class="s_search" :class="{indexClass:pageType==='index',discoverClass:pageType==='discover'}">
		<u-toast ref="uToast" />
		<u-modal v-model="show" :show-cancel-button="true" @confirm="confirm" @cancel="cancel" :content="content"></u-modal>

		<view class="searchBar">
			<u-search @search="search" :placeholder="searchType==='orderSearch'?'搜索我的订单':'日照香炉生紫烟'" v-model="keyword"></u-search>
		</view>
		<view class="search-container">
			<!-- 热门搜索 -->
			<view class="hotSearchi-title">
				<text>{{searchType==='orderSearch'?'历史搜索':'热门搜索'}}</text>
			</view>
			<view class="searchButton-container">
				<view class="flex-box">
					<view class="flex-item" v-for="(item,index) in hotList" :key="index">
						<searchButton :text="item.text" :isHot="item.isHot"></searchButton>
					</view>
				</view>
			</view>
			<!-- 历史记录 -->
			<view class="history-title">
				<view class="text">
					<text>{{searchType==='orderSearch'?'分类搜索':'历史记录'}}</text>
				</view>
				<view class="img" @click="open">
					<image src="@/static/images/iconfont/deletIcon.png" mode=""></image>
				</view>
			</view>
			<view class="searchBar-container">
				<view class="flex-box">
					<view class="flex-item" v-for="(item,index) in historyList" :key="index">
						<searchButton :text="item.text" :isHot="item.isHot"></searchButton>
					</view>
					<!-- 展开 -->
					<!-- 收起 -->
				</view>
			</view>
		</view>
		<!-- 附近商户列表 -->
		<view class="nearby-container" v-if="pageType==='index'">
			<view class="nearby-title">
				<text>附近</text>
			</view>
			<view class="list-container" v-for="(item,index) in 4" :key="index">
				<searchNearbyShowItem></searchNearbyShowItem>
			</view>
		</view>

	</view>
</template>

<script>
	import searchButton from './components/searchButton.vue'
	import searchNearbyShowItem from '@/src/publicComponents/searchNearbyShowItem.vue'
	export default {
		components: {
			searchButton,
			searchNearbyShowItem
		},
		data() {
			return {
				keyword: '',
				show: false,
				content: '确定清除历史记录吗',
				hotList: [{
					text: '五一假期哪里玩',
					isHot: true
				}, {
					text: '家常菜',
					isHot: false
				}, {
					text: '旅游住宿',
					isHot: false
				}, {
					text: '家常菜',
					isHot: false
				}, {
					text: '旅游住宿',
					isHot: false
				}],
				// 历史记录
				historyList: [{
					text: '五一假期哪里玩',
					isHot: false
				}, {
					text: '家常菜',
					isHot: false
				}, {
					text: '旅游住宿',
					isHot: false
				}, {
					text: '家常菜',
					isHot: false
				}, {
					text: '旅游住宿',
					isHot: false
				}],
				pageType: 'index',
				searchType:''  // 订单页面参数
			};
		},
		methods: {
			confirm() {
				this.historyList = []
				this.show = false
			},
			cancel() {
				this.show = false
			},
			open() {
				if (this.historyList.length === 0) {
					this.$refs.uToast.show({
						title: '无历史记录',
						type: 'warning'
					})
				} else {
					this.show = true
				}
			},
			search() {
				this.keyword = this.keyword.trim()
				if (this.keyword === '') {
					this.$refs.uToast.show({
						title: '不能搜索空内容',
						type: 'error'
					})
				} else {
					this.historyList.unshift({
						text: this.keyword,
						isHot: false
					})
					this.keyword = ''
				}

			}
		},
		onLoad(option) {
			this.pageType = option.type
			// 取首页进来的缓存
			// if(this.pageType==='index') {
			// 	let res = uni.getStorageSync('historyList');
			// 	if(res==undefined) {
			// 		uni.setStorageSync('historyList', []);
			// 	}else {
			// 		this.historyList = res
			// 	}
			// } else if(this.pageType === 'discover') {
			// 	let res = uni.getStorageSync('discoverHistoryList');
			// 	if(res==undefined) {
			// 		uni.setStorageSync('discoverHistoryList', []);
			// 	}else {
			// 		this.historyList = res
			// 	}
			// }
			
			// 订单页面传过来得参数
			this.searchType = option.searchType
		}
	}
</script>

<style lang="less" scoped>
	.s_search {
		width: 750rpx;
		height: 100%;
		.nearby-container {
			margin-left: 20rpx;

			.nearby-title {
				font-size: 32rpx;
				color: #333333;
				font-weight: bold;
				margin-bottom: 30rpx;
			}

			.list-container {
				margin-bottom: 20rpx;
			}
		}

		.searchBar {
			box-sizing: border-box;
			width: 750rpx;
			border-bottom: 2rpx solid #F3F3F3;
			padding: 20rpx 30rpx 20rpx 30rpx;
		}

		.search-container {
			width: 750rpx;
			padding: 30rpx 30rpx 0 30rpx;

			.hotSearchi-title {
				font-size: 32rpx;
				line-height: 38rpx;
				color: #333333;
				margin-bottom: 30rpx;
			}

			.flex-box {
				display: flex;
				flex-wrap: wrap;

				.flex-item {
					margin-bottom: 30rpx;
					margin-right: 20rpx;
				}
			}

			.searchButton-container {}

			.history-title {
				display: flex;
				align-items: center;
				margin-bottom: 30rpx;

				.text {
					font-size: 32rpx;
					color: #333333;
				}

				.img {
					flex: 1;
					text-align: right;

					image {
						width: 32.3rpx;
						height: 32.3rpx;
					}
				}
			}

		}
	}

	.indexClass {
		background: linear-gradient(180deg, rgba(255, 255, 255, 1) 0%, rgba(246, 246, 246, 1) 82%, rgba(246, 246, 246, 1) 100%);
	}

	.discoverClass {
		background-color: #FFF;
	}
</style>

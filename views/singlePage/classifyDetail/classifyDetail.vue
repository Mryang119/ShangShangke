<template>
	<!-- name:杨大锐 -->
	<!-- 分类页面 -->
	<view class="s_classifyDetail">
		<view class="search">
			<u-search placeholder="发现店铺/商品"></u-search>
		</view>
		<view class="banner-cotent">
			<image class="img" src="@/static/images/Product/fenleiBanner.png" mode=""></image>
		</view>
		<!-- 筛选条 -->
		<u-sticky :offset-top="0">
			<view class="filter-container">
				<view class="filter-box">
					<view class="filter-line">
						<view class="filter-item className" @click="dipatch('className','classification')" :class="{'active':isActiveForm.className}">
							<view class="filter-item-icon">
								<text>分类</text>
								<image :src="!isActiveForm.className? '/static/images/iconfont/arrow-down.png' : '/static/images/iconfont/arrow-up.png'"
								 class="image-icon" mode="widthFix"></image>
								<!-- <image src="@/static/images/iconfont/arrow-up.png" class="image-icon" mode="widthFix"></image>
								<u-icon name="arrow-down" v-if="!isActiveForm.className"></u-icon>
								<u-icon name="arrow-up" v-else></u-icon> -->
							</view>
						</view>
						<view class="filter-item nearbys" @click="dipatch('nearbys','nearbys')" :class="{'active':isActiveForm.nearbys}">
							<view class="filter-item-icon">
								<text>附近</text>
								<image :src="!isActiveForm.nearbys? '/static/images/iconfont/arrow-down.png' : '/static/images/iconfont/arrow-up.png'"
								 class="image-icon" mode="widthFix"></image>
							</view>
						</view>
						<view class="filter-item smartSort" @click="dipatch('smartSort','smartSort')" :class="{'active':isActiveForm.smartSort}">
							<view class="filter-item-icon">
								<text>智能排序</text>
								<image :src="!isActiveForm.smartSort? '/static/images/iconfont/arrow-down.png' : '/static/images/iconfont/arrow-up.png'"
								 class="image-icon" mode="widthFix"></image>
							</view>
						</view>
						<view class="filter-item filters" @click="dipatch('filters','filters')" :class="{'active':isActiveForm.filters}">
							<view class="filter-item-icon">
								<text>筛选</text>
								<image :src="!isActiveForm.filters? '/static/images/iconfont/arrow-down.png' : '/static/images/iconfont/arrow-up.png'"
								 class="image-icon" mode="widthFix"></image>
							</view>
						</view>
					</view>
				</view>
			</view>
		</u-sticky>
		<!-- Popup -->
		<popup :show="show" v-on:input="show = $event" :elScrollTop="elScrollTop" @reset="reset" @finish="finish">
			<classification v-if="currentComponent==='classification'"></classification>
			<nearby v-else-if="currentComponent==='nearbys'"></nearby>
			<smartSort v-else-if="currentComponent==='smartSort'"></smartSort>
			<filters v-else-if="currentComponent==='filters'"></filters>
		</popup>
		<view :style="{height:20000+'rpx'}"></view>
	</view>

</template>

<script>
	// 组件
	import popup from './components/popup.vue'
	import classification from './components/classification.vue'
	import nearby from './components/nearby.vue'
	import smartSort from './components/smartSort.vue'
	import filters from './components/filters.vue'
	// 函数复用
	// import mixin from '@/src/mixin/mixin.js'
	export default {
		// mixins: [mixin],
		components: {
			popup,
			classification,
			nearby,
			smartSort,
			filters
		},
		data() {
			return {
				isActiveForm: this.$store.state.filter.isActiveForm,
				show: false,
				elScrollTop: 0,
				classifySelectIndex: '',
				currentComponent: ''
			};
		},
		onLoad(option) {},
		methods: {
			// 重置
			reset(){
				console.log('重置')
				this.$store.commit('resetSelectFrom')
				this.$store.commit('testActive', {
					type: 'className'
				})
				this.show = false
			},
			// 确认
			finish(){
				this.show = false
			},
			// 处理筛选条高亮
			dipatch(type, currentCp) {
				this.currentComponent = currentCp
				this.show = true
				this.$store.commit('testActive')
				this.$store.commit('active', {
					type
				})
			},
			classifyNow(i) {
				this.classifySelectIndex = i
			},
			// 获取筛选条距离顶部和自身高度
			getElTop() {
				const that = this
				const query = uni.createSelectorQuery().in(this);
				query.select('.filter-container').boundingClientRect(data => {
					that.elScrollTop = data.top + data.height
				}).exec();
			}
		},
		mounted() {
			this.$store.commit('testActive', {
				type: 'className'
			})
			this.getElTop()
		},
		onPageScroll(e) {
			this.getElTop()
		},
		watch: {
			// popup关闭
			show: function(newValue, oldValue) {
				if (!newValue) {
					this.$store.commit('testActive', {
						type: 'className'
					})
				}
			}
		},
		onLoad(e) {
			console.log(e)
		}
	}
</script>

<style lang="less">
	.popup-content {}

	.image-icon {
		width: 20.46rpx;
		height: 12.42rpx;
		margin-left: 8rpx;
	}
	.filter-item-icon {
		display: flex;
		align-items: center;
	}
	.s_classifyDetail {
		box-sizing: border-box;

		position: relative;

		.search {
			box-sizing: border-box;
			padding-left: 30rpx;
			padding-right: 30rpx;
			margin-top: 20rpx;
			margin-bottom: 20rpx;
		}

		.banner-cotent {
			width: 750rpx;
			height: 400rpx;

			.img {
				width: 750rpx;
				height: 400rpx;
			}
		}

		.filter-container {
			width: 750rpx;
			box-sizing: border-box;
			position: relative;
			height: 92rpx;
			padding-top: 30rpx;
			padding-bottom: 30rpx;
			background-color: #FFFFFF;
			z-index: 999;

			.filter-box {
				width: 100%;
				box-sizing: border-box;

				.filter-line {
					width: 100%;
					font-size: 28rpx;
					display: flex;
					align-items: center;
					justify-content: space-between;
					box-sizing: border-box;
					padding-left: 30rpx;
					padding-right: 26rpx;

					.active {
						color: #24A7FF;
					}
				}
			}
		}

		.slot-wrap {
			display: flex;
			align-items: center;
		}
	}
</style>

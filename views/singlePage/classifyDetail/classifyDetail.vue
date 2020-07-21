<template>
	<view class="s_classifyDetail">
		<view class="search">
			<u-search :input-style="{width:530+'rpx'}"></u-search>
		</view>
		<view class="filter-container">
			<view class="filter-box">
				<view class="filter-line">
					<view class="filter-item className" @click="dipatch('className','classification')" :class="{'active':isActiveForm.className}">
						<view>分类
							<u-icon name="arrow-down" v-if="!isActiveForm.className"></u-icon>
							<u-icon name="arrow-up" v-else></u-icon>
						</view>
					</view>
					<view class="filter-item nearbys" @click="dipatch('nearbys','nearbys')" :class="{'active':isActiveForm.nearbys}">
						<view>附近
							<u-icon name="arrow-down" v-if="!isActiveForm.nearbys"></u-icon>
							<u-icon name="arrow-up" v-else></u-icon>
						</view>
					</view>
					<view class="filter-item smartSort" @click="dipatch('smartSort','smartSort')" :class="{'active':isActiveForm.smartSort}">
						<view>智能排序
							<u-icon name="arrow-down" v-if="!isActiveForm.smartSort"></u-icon>
							<u-icon name="arrow-up" v-else></u-icon>
						</view>
					</view>
					<view class="filter-item filters" @click="dipatch('filters','filters')" :class="{'active':isActiveForm.filters}">
						<view>筛选
							<u-icon name="arrow-down" v-if="!isActiveForm.filters"></u-icon>
							<u-icon name="arrow-up" v-else></u-icon>
						</view>
					</view>
				</view>
				<!-- Popup -->
				<popup :show="show" v-on:input="show = $event" :top="92" :elScrollTop="elScrollTop">
					<classification v-if="currentComponent==='classification'"></classification>
					<nearby v-else-if="currentComponent==='nearbys'"></nearby>
					<smartSort v-else-if="currentComponent==='smartSort'"></smartSort>
					<filters v-else-if="currentComponent==='filters'"></filters>
				</popup>
			</view>
			<!-- 模态框 -->

		</view>
	</view>
</template>

<script>
	import popup from './components/popup.vue'
	import classification from './components/classification.vue'
	import nearby from './components/nearby.vue'
	import smartSort from './components/smartSort.vue'
	import filters from './components/filters.vue'
	export default {
		components: {
			popup,
			classification,
			nearby,
			smartSort,
			filters
		},
		data() {
			return {
				isActiveForm: this.$store.state.isActiveForm,
				show: false,
				elScrollTop: 0,
				classifySelectIndex: '',
				currentComponent: ''
			};
		},
		onLoad(option) {},
		methods: {

			// 处理筛选条高亮
			dipatch(type, currentCp) {
				this.currentComponent = currentCp
				console.log(this.currentComponent)
				this.show = true
				this.$store.commit('testActive')
				this.$store.commit('active', {
					type
				})
			},
			classifyNow(i) {
				this.classifySelectIndex = i
			}
		},
		mounted() {
			const that = this
			const query = uni.createSelectorQuery().in(this);
			query.select('.filter-container').boundingClientRect(data => {
				console.log(data)
				that.elScrollTop = data.top + data.height
			}).exec();
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
		}
	}
</script>

<style lang="less">
	.s_classifyDetail {
		box-sizing: border-box;

		position: relative;

		.search {
			width: 750rpx;
			display: flex;
			align-items: center;
			box-sizing: border-box;
			padding-left: 30rpx;
			padding-right: 30rpx;
			margin-top: 20rpx;
			margin-bottom: 20rpx;
		}



		.filter-container {
			width: 750rpx;
			box-sizing: border-box;
			position: relative;
			height: 92rpx;
			padding-top: 30rpx;
			padding-bottom: 30rpx;
			background-color: #FFFFFF;

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

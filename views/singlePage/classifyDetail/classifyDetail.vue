<template>
	<view class="s_classifyDetail">
		<view class="search">
			<u-search :show-action='false'></u-search>
		</view>
		<view class="filter-container">
			<view class="filter-box">
				<view class="filter-line">
					<view class="filter-item className" @click="dipatch('className')" :class="{'active':isActiveForm.className}">
						<view>分类
						 <u-icon name="arrow-down" v-if="!isActiveForm.className"></u-icon>
						 <u-icon name="arrow-up" v-else></u-icon>
						</view>
					</view>
					<view class="filter-item nearbys" @click="dipatch('nearbys')" :class="{'active':isActiveForm.nearbys}">
						<view>附近
						<u-icon name="arrow-down" v-if="!isActiveForm.nearbys"></u-icon>
						<u-icon name="arrow-up" v-else></u-icon>
						</view>
					</view>
					<view class="filter-item smartSort" @click="dipatch('smartSort')" :class="{'active':isActiveForm.smartSort}">
						<view>智能排序
						<u-icon name="arrow-down" v-if="!isActiveForm.smartSort"></u-icon>
						<u-icon name="arrow-up" v-else></u-icon>
						</view>
					</view>
					<view class="filter-item filters" @click="dipatch('filters')" :class="{'active':isActiveForm.filters}">
						<view>筛选
						<u-icon name="arrow-down" v-if="!isActiveForm.filters"></u-icon>
						<u-icon name="arrow-up" v-else></u-icon>
						</view>
					</view>
				</view>
				<!-- Popup -->
				<popup :show="show" v-on:input="show = $event" :top="92" :elScrollTop="elScrollTop">
					父亲内容
				</popup>
			</view>
			<!-- 模态框 -->

		</view>
	</view>
</template>

<script>
	import popup from './components/popup.vue'
	export default {
		components: {
			popup
		},
		data() {
			return {
				isActiveForm: this.$store.state.isActiveForm,
				show: false,
				elScrollTop:0
			};
		},
		onLoad(option) {},
		methods: {
			// 处理筛选条高亮
			dipatch(type) {
				this.show = true
				this.$store.commit('active', {
					type
				})
			}
		},
		mounted() {
			const that = this
			const query = uni.createSelectorQuery().in(this);
			query.select('.filter-container').boundingClientRect(data => {
				console.log(data)
				that.elScrollTop = data.top+data.height
			}).exec();
		}
	}
</script>

<style lang="less">
	.s_classifyDetail {
		box-sizing: border-box;

		position: relative;

		.search {
			width: 460rpx;
			display: flex;
			align-items: center;
		}



		.filter-container {
			width: 750rpx;
			box-sizing: border-box;
			position: relative;
			height: 92rpx;
			padding-top: 30rpx;
			padding-bottom: 30rpx;
			background-color: #CCC;

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

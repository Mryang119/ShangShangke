<template>
	<view class="s_classifyDetail">
		<u-navbar back-icon-size="35" :is-back="true">
			<view class="search">
				<u-search :show-action='false' :height="56"></u-search>
			</view>
		</u-navbar>
		<view class="filter-container">
			<view class="filter-box">
				<view class="filter-line">
					<view class="filter-item className" @click="dipatch('className')" :class="{'active':isActiveForm.className}">
						<text>分类</text>
					</view>
					<view class="filter-item nearbys" @click="dipatch('nearbys')" :class="{'active':isActiveForm.nearbys}">
						<text>附近</text>
					</view>
					<view class="filter-item smartSort" @click="dipatch('smartSort')" :class="{'active':isActiveForm.smartSort}">
						<text>智能排序</text>
					</view>
					<view class="filter-item filters" @click="dipatch('filters')" :class="{'active':isActiveForm.filters}">
						<text>筛选</text>
					</view>
				</view>
			</view>
			<!-- 模态框 -->
				<view class="box"></view>

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
				show: true
			};
		},
		onLoad(option) {},
		methods: {
			// 处理筛选条高亮
			dipatch(type) {
				this.$store.commit('active', {
					type
				})
			}
		},
		mounted() {
			
		}
	}
</script>

<style lang="less">
	.s_classifyDetail {
		box-sizing: border-box;
		
		position: relative;

		.search {
			width: 460rpx;
			height: 56rpx;
			display: flex;
			align-items: center;
		}
		.box {
			height: 85vh;
			background-color: red;
		}
		.filter-container {
			width: 750rpx;
			box-sizing: border-box;
			position: relative;


			.filter-box {
				width: 100%;
				box-sizing: border-box;

				.filter-line {
					width: 100%;
					background-color: #C8C7CC;
					height: 90rpx;
					font-size: 28rpx;
					display: flex;
					align-items: center;
					justify-content: space-between;
					box-sizing: border-box;
					padding-left: 30rpx;
					padding-right: 26rpx;

					.active {
						color: red;
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

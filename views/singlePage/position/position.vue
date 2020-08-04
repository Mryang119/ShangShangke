<template>
	<!-- name:杨大锐 -->
	<!-- s -->
	<view class="s_position">
		<!-- 选择定位 -->
		<view class="searchBar">
			<u-search placeholder="搜索城市名" v-model="keyword"></u-search>
		</view>
		<!-- 当前 -->
		<view class="now-city">
			当前:{{cityName}}
		</view>
		<!-- 历史定位and热门城市 -->
		<view class="hotCity-oldCity">
			<view class="oldCity-content">
				<view class="text">定位/最近访问</view>
			</view>
			<!-- 历史定位 -->
			<view class="oldCity-contianer">
				<view class="oldButton" v-for="(item,index) in oldCity" :key="index">
					<cbutton :text="item.cityName" :iconName="item.iconName"></cbutton>
				</view>
			</view>
			<view class="hotCity-content">
				<view class="text">热门城市</view>
			</view>
			<view class="hotCity-container">
				<view class="oldButton" v-for="(item,index) in hotCity" :key="index">
					<cbutton :text="item.cityName" :iconName="item.iconName"></cbutton>
				</view>
			</view>
		</view>
		<!-- 城市列表 -->
		<view class="cityList-container">
			<cityList></cityList>
		</view>
	</view>
</template>

<script>
	import cbutton from './components/button.vue'
	import cityList from './components/cityList.vue'
	export default {
		components: {
			cbutton,
			cityList
		},
		data() {
			return {
				keyword: '',
				oldCity: [{
						cityName: '深圳',
						iconName: 'map-fill'
					},
					{
						cityName: '上海',
						iconName: 'map-fill'
					},
					{
						cityName: '广州',
						iconName: 'map-fill'
					},
					{
						cityName: '北京',
						iconName: 'map-fill'
					}
				],
				hotCity: [{
					cityName: '北京'
				}, {
					cityName: '上海'
				}, {
					cityName: '广州'
				}, {
					cityName: '深圳'
				} ]
			};
		},
		computed:{
			cityName:function(){
				return this.$store.state.global.globalData.cityName
			}
		}
	}
</script>

<style lang="less">
	.s_position {
		.searchBar {
			margin-top: 20rpx;
			box-sizing: border-box;
			padding: 0 30rpx;
			margin-bottom: 20rpx;
		}

		.now-city {
			border-top: 1px solid #F3F3F3;
			box-sizing: border-box;
			height: 92rpx;
			font-size: 28rpx;
			color: #333333;
			font-weight: bold;
			line-height: 92rpx;
			padding-left: 30rpx;
		}

		.hotCity-oldCity {
			background-color: #F6F6F6;
			padding: 30rpx 30rpx 0 30rpx;
			box-sizing: border-box;

			.oldCity-content {
				.text {
					color: #A9A9A9;
					margin-bottom: 30rpx;
				}
			}

			.hotCity-content {
				.text {
					color: #A9A9A9;
					margin-bottom: 30rpx;
				}
			}

			.oldCity-contianer {
				display: flex;
				flex-wrap: wrap;
				justify-content: space-between;

			}

			.oldButton {
				margin-bottom: 30rpx;

			}

			.hotCity-container {
				display: flex;
				flex-wrap: wrap;
				justify-content: space-between;
			}
		}
	}
</style>

<template>
	<!-- 定位模块 -->
	<view class="c_position">
		<view class="postiton-event">
			<text class="city">{{cityName}}</text>
			<text v-if="cityName!=='未定位'" class="iconfont myionfont icon-iconfonticonfonti2"></text>
		</view>
	</view>
</template>

<script>
	export default {

		computed: {
			cityName: function() {
				return this.$store.state.global.globalData.cityName
			}
		}
	}
</script>

<style lang="less">
	.c_position {
		display: flex;
		justify-content: center;
		align-items: center;
		margin-left: 30rpx;

		.city {
			font-size: 32rpx;
			font-weight: bold;
		}

		.myionfont {
			margin-left: 12rpx;
			font-size: 24rpx;
		}
	}
</style>

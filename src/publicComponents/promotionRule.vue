<template>
	<!-- name:杨大锐 -->
	<!-- 商品活动信息和地址规则组件 -->
	<view class="c_promotionRule">
		<!-- 活动标签 -->
		<view class="tag-content">
			<view class="tag-item-container">
				<view class="tabel">优惠</view>
				<view class="tag-item" v-for="item in tags" :key="item">
					<text>{{item}}</text>
				</view>
			</view>
			<view class="more-container">
				<view class="more"><text>{{tags.length}}个优惠</text></view>
			</view>
		</view>
		<!-- 门店 -->
		<view class="location-content">
			<view class="tabel"><text>门店</text></view>
			<view class="store-name-loaction">
				<view class="store-name"><text>{{storeName}}</text></view>
				<view class="store-loaction">
					<u-icon color="#707070" name="map"></u-icon>
					<text>{{loaction}}</text>
				</view>
			</view>
		</view>
		<!-- 规则说明 -->
		<view class="rule-content">
			<view class="tabel"><text>使用</text></view>
			<view class="rile-text"><text>{{rule}}</text></view>
		</view>
		
	</view>
</template>

<script>
	export default {
		props: {
			tags: {
				type: Array,
				default: function() {
					return [
						'满10减7',
						'满10减35'
					]
				}
			},
			storeName: {
				type: String,
				default: '韩国年糕料理（海岸城店）'
			},
			rule: {
				type: String,
				default: '购买后30天内有效'
			},
			loaction: {
				type: String,
				default: '文新思路34号海岸城西座F2座806'
			}
		},
		created() {
			console.log(this.tags)
		}
	}
</script>

<style lang="less" scoped>
	.c_promotionRule {
		width: 750rpx;
		height: 300rpx;
		background-color: #FFF;
		box-sizing: border-box;
		padding: 36rpx 30rpx;
		display: flex;
		flex-direction: column;
		justify-content: space-between;
		.tabel {
			color: #858585;
			font-size: 28rpx;
			margin-right: 40rpx;
		}

		.tag-content {
			display: flex;
			align-items: center;

			.tag-item-container {
				display: flex;

				.tag-item {
					width: 124rpx;
					height: 46rpx;
					background-color: #FFEFEF;
					color: #FB2B03;
					line-height: 46rpx;
					text-align: center;
					margin-right: 20rpx;
					border-radius: 10rpx;
					font-size: 24rpx;
				}
			}

			.more-container {
				flex: 1;
				display: flex;
				justify-content: flex-end;

				.more {
					font-size: 24rpx;
					color: #858585;
				}
			}
		}

		.location-content {
			display: flex;
			.store-name-loaction {
				display: flex;
				flex-direction: column;
				justify-content: space-between;

				.store-name {
					font-size: 32rpx;
					font-weight: bold;
					color: #333333;
					margin-bottom: 9rpx;
				}

				.store-loaction {
					color: #707070;
					font-size: 28rpx;
				}
			}
		}
		.rule-content {
			display: flex;
			.rule-text {
				font-size: 28rpx;
				color: #333333;
			}
		}
	}
</style>

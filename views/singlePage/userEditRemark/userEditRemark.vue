<template>
	<view class="s_userEditRemark">
		<view class="input-content">
			<u-input type="textarea" height="494" v-model="value" placeholder="填写简介让大家更了解你~" maxlength="100"></u-input>
			<view class="count" :class="{'red':value.length>=100}">
				<text>{{value.length}}/100</text>
			</view>
		</view>
		<view class="save-button button-contnent">
			<text>保存</text>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				value: '',

			};
		},
		watch: {

		}
	}
</script>

<style lang="less">
	.s_userEditRemark {

		.input-content {
			background-color: #FFF;
			padding: 40rpx 30rpx;
			position: relative;

			.count {
				position: absolute;
				bottom: 20rpx;
				right: 20rpx;
				color: #24A7FF;
				font-size: 24rpx;
			}

			.red {
				color: red;
			}
		}

		.button-contnent {
			margin: 20rpx auto;
		}
	}
</style>

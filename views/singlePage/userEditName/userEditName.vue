<template>
	<!-- name:杨大锐 -->
	<!-- 编辑用户名字 -->
	<view class="s_userEditName">
		<view class="input-content">
			<u-input value="吴亦凡"></u-input>
		</view>
		<view class="save-button button-content">
			保存
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				
			};
		}
	}
</script>

<style lang="less" scoped>
.s_userEditName {
	.input-content {
		margin-top: 20rpx;
		background-color: #FFF;
		padding: 20rpx 30rpx;
		
	}
	.button-content {
		margin: 50rpx auto;
	}
}
</style>

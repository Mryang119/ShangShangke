<template>
	<!-- 登录页 -->
	<view class="s_login">
		<view class="logo">
			<image class="image" src="@/static/images/Product/logo.png" mode=""></image>
		</view>
		<view class="title-h">
			您还未登录
		</view>
		<view class="message">
			请登录后咋再进行操作
		</view>
		<button type="default"></button>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				toUrl: ''
			};
		},
		onLoad(option) {
			if (option.url !== undefined || option.url === '') {
				this.toUrl = option.url
			}
			return
		}
	}
</script>

<style lang="less">

</style>

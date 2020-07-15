<template>
	<view class="s_classifyDetail">
		<u-navbar back-icon-size="35" :is-back="true" >
			<view class="search">
				<u-search :show-action='false' :height="56"></u-search>
			</view>
		</u-navbar>
	</view>
</template>

<script>
	export default {
		data() {
			return {

			};
		},
		onLoad(option) {
			console.log(option.className)
		}
	}
</script>

<style lang="less">
	.s_classifyDetail {
				.search {
					width: 460rpx;
					height: 56rpx;
					display: flex;
					align-items: center;
					
					
				}
		.slot-wrap {
				display: flex;
				align-items: center;
				/* 如果您想让slot内容占满整个导航栏的宽度 */
				/* flex: 1; */
				/* 如果您想让slot内容与导航栏左右有空隙 */
				/* padding: 0 30rpx; */
			}
	}
</style>

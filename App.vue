<script>
	export default {
		onLaunch: function() {
			console.log('App Launch');
		},
		onShow: function() {
			console.log('App Show');
		},
		onHide: function() {
			console.log('App Hide');
		}
	}
</script>

<style lang="scss">
	/* @import '@/uview-ui/index.scss'; */
	@import "uview-ui/index.scss";
	.save-button {
		width: 690rpx;
		height: 82rpx;
		border-radius:12rpx;
		background-color: #24A7FF;
		text-align: center;
		line-height: 82rpx;
		color: #FFF;
		font-weight: bold;
		font-size: 32rpx;
	}
	page {
		background-color: #F6F6F6;
		// background-image: linear-gradient(to bottom, #FFFFFF, #F6F6F6) !important;
	}

	.uni-navbar {
		.uni-navbar--border.uni-navbar--border.data-v-4afea59e {
			border-color: #FFFFFF !important;
		}
	}

	.u-progress {
		border: 2rpx solid #FB2B03 !important;
	}

	.c_cityList {
		.u-index-bar {
			.u-index-bar__sidebar {
				.u-index-bar__index {
					padding: 8rpx 4rpx;
				}
			}
		}
	}
</style>

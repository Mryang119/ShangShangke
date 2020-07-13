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

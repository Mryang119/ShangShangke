<template>
	<!-- name:杨大锐 -->
	<!-- 设置页 -->
	<view class="s_setting">
		<view class="list-content">
			<uni-list :border="false">
				<uni-list-item title="资料编辑" link @click="toEdit">

				</uni-list-item>
			</uni-list>
		</view>
		<view @click="outLogin" class="out-button-content">
			退出登录
		</view>
		<u-modal v-model="show" :show-cancel-button="true" @confirm="confirm" @cancel="cancel" content="您确定要退出登录吗"></u-modal>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				show: false
			};
		},
		methods: {
			outLogin() {
				this.show = true
			},
			confirm() {
				this.show = false
				try {
					uni.removeStorageSync('loginDatas');
					uni.removeStorageSync('userDatas');
					uni.switchTab({
						url: '../../tabBar/my/my'
					})
				} catch (e) {
					console.log('失败', e)
				}
			},
			cancel() {
				this.show = false
			},
			toEdit(){
				uni.navigateTo({
					url:'../userEdit/userEdit'
				})
			}
		}
	}
</script>

<style lang="less" scoped>
	.s_setting {
		background-color: #F6F6F6;
		position: absolute;
		top: 0;
		bottom: 0;
		left: 0;
		right: 0;

		.list-content {
			margin-top: 20rpx;
		}

		.out-button-content {
			position: fixed;
			bottom: 60rpx;
			left: 50%;
			transform: translateX(-50%);
			width: 690rpx;
			height: 80rpx;
			background-color: #24A7FF;
			text-align: center;
			line-height: 80rpx;
			color: #FFF;
			border-radius: 12rpx;
			font-weight: bold;
			font-size: 16px;
		}
	}
</style>

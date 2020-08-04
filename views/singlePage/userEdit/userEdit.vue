<template>
	<!-- 编辑页 -->
	<!-- name:杨大锐 -->
	<view class="s_userEdit">
		<view class="head-content">
			<u-image shape="circle" width="156" height="156" src="https://dss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=2949404657,2698831741&fm=26&gp=0.jpg"></u-image>
			<view class="change-head">
				更改头像
			</view>
		</view>
		<view class="not-change-content">
			<uni-list>
				<uni-list-item :showArrow="false" title="注册时间">
					<view slot="right" class="right-text">
						{{date||'2020-04-28'}}
					</view>
				</uni-list-item>
				<uni-list-item :showArrow="false" title="注册手机号">
					<view slot="right" class="right-text">
						{{moblie||'13222223333'}}
					</view>
				</uni-list-item>
			</uni-list>
		</view>
		<view class="user-edit-content">
			<uni-list>
				<uni-list-item title="昵称" link @click="toUserEdit('userEditName')">
					<view slot="right" class="right-text-black">
						吴亦凡
					</view>
				</uni-list-item>
				<uni-list-item title="性别" link>
					<view slot="right" class="right-text-black">
						男
					</view>
				</uni-list-item>
				<uni-list-item title="生日" link>
					<view slot="right" class="right-text-black" :class="{'right-text':birthday===''}">
						请输入生日
					</view>
				</uni-list-item>
				<uni-list-item title="个人简介" link @click="toUserEdit('userEditRemark')">
					<view slot="right" class="right-text-black" :class="{'right-text':userRemark===''}">
						{{userRemark!==''?'已填写':'未填写'}}
					</view>
				</uni-list-item>
			</uni-list>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				date: '',
				moblie: '',
				birthday: '',
				userRemark: '1123'
			};
		},
		methods: {
			toUserEdit(page) {
				uni.navigateTo({
					url: `../${page}/${page}`
				})
			}
		}
	}
</script>

<style lang="less" scoped>
	.s_userEdit {
		width: 750rpx;


		.right-text-black {
			color: #000000;
			font-size: 28rpx;
		}

		.right-text {
			color: #707070;
			font-size: 28rpx;
		}

		.head-content {
			height: 330rpx;
			width: 100%;
			background-color: #FFF;
			display: flex;
			flex-direction: column;
			align-items: center;
			justify-content: center;
			box-sizing: border-box;
			margin-bottom: 20rpx;

			.change-head {
				width: 150rpx;
				height: 56rpx;
				box-sizing: border-box;
				border: 2rpx solid #24A7FF;
				color: #24A7FF;
				background-color: #FFF;
				font-size: 28rpx;
				text-align: center;
				line-height: 56rpx;
				margin-top: 30rpx;
				border-radius: 8rpx;
			}
		}

		.user-edit-content {
			margin-top: 20rpx;
		}
	}
</style>

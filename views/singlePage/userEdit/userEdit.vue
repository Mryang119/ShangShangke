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
				<uni-list-item title="性别" link @click="changeSex">
					<view slot="right" class="sex-selcet right-text-black">
						{{sex}}
						<!-- 选择男女框 -->
						<view class="select-content" v-if="sexSelectBox">
							<view class="select-item" @click.stop="changeSexItem('男')">
								男<u-icon name="checkmark" v-if="sex==='男'"></u-icon>
							</view>
							<view class="line"></view>
							<view class="select-item" @click.stop="changeSexItem('女')">
								女<u-icon name="checkmark" v-if="sex==='女'"></u-icon>
							</view>
						</view>
					</view>
				</uni-list-item>
				<uni-list-item title="生日" link @click="changeBirthday">
					<view slot="right" class="right-text-black" :class="{'right-text':birthday===''}">
						{{birthday!==''? birthday:'请输入生日'}}
					</view>
				</uni-list-item>
				<uni-list-item title="个人简介" link @click="toUserEdit('userEditRemark')">
					<view slot="right" class="right-text-black" :class="{'right-text':userRemark===''}">
						{{userRemark!==''?'已填写':'未填写'}}
					</view>
				</uni-list-item>
			</uni-list>
		</view>
		<u-picker v-model="show" mode="time" @confirm="birthdaYconfirm" @cancel="birthdaYcancel"></u-picker>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				date: '', // 注册时间
				moblie: '', // 手机号码
				birthday: '', // 生日
				userRemark: '1123', // 个人简介
				imageUrl: '',
				sex: "男",
				show: false,
				sexSelectBox: false
			};
		},
		onShow() {

		},
		methods: {
			toUserEdit(page) {
				uni.navigateTo({
					url: `../${page}/${page}`
				})
			},
			// 修改生日
			changeBirthday() {
				this.show = true
			},
			birthdaYconfirm(e) {
				console.log(e)
				this.show = false
				this.birthday = `${e.year}-${e.month}-${e.day}`
			},
			birthdaYcancel() {
				this.show = false
			},
			// 更改性别
			changeSex() {
				this.sexSelectBox = true
			},
			changeSexItem(v) {
				this.sexSelectBox = false
				this.sex = v
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

			.sex-selcet {
				position: relative;



				.select-content {
					position: absolute;
					width: 156rpx;
					height: 152rpx;
					background: url(@/static/images/iconfont/sexSelectbg.png);
					background-size: cover;
					right: -30rpx;
					bottom: -150rpx;
					opacity: 1;
					color: #FFF;
					font-size: 28rpx;
					display: flex;
					flex-direction: column;
					justify-content: space-between;
					align-items: center;
					padding: 34rpx 18rpx 20rpx;
					z-index: 99;

					.line {
						width: 118rpx;
						height: 2rpx;
						background-color: #FFF;
					}

				}
			}
		}
	}
</style>

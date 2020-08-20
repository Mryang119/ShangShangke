<template>
	<!-- 登录页 -->
	<!--name:杨大锐 -->
	<view class="s_login">
		<view class="logo">
			<image class="image" src="@/static/images/Product/logo.png" mode=""></image>
		</view>
		<view class="title-h">
			<text>{{message1}}</text>
		</view>
		<view class="message">
			<text>{{message2}}</text>
		</view>
		<view class="button-content">
			<view class="button wxlogin" v-if="loginStatus" @click="toggleStatus"><text>微信登录</text></view>
			<view class="button wxlogin" v-if="loginStatus" @click="houmen"><text>后门登录</text></view>
			<view class="button notlogin" v-if="loginStatus"><text>暂不登录</text></view>
			<button class="button wxlogin" open-type="getPhoneNumber" @getphonenumber="getPhoneNumber" v-else type="default"><text>确认授权</text></button>

		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				toUrl: '',
				message1: '您还未登录',
				message2: '请登录后咋再进行操作',
				loginStatus: true,
				openid: '',
				session_key: ''
			};
		},
		methods: {
			toggleStatus() {
				this.loginStatus = false
				this.message1 = '上上客申请获取以下权限'
				this.message2 = '获得您的手机号码'
			},
			// 获取code信息换取openid
			getCode() {
				return new Promise((resolve, reject) => {
					uni.login({
						provider: 'weixin',
						success(e) {
							let code = e.code
							resolve(code)
						}
					})
				})
			},
			// 走后门进入登录页
			houmen() {
				uni.navigateTo({
					url: '../register/register'
				})
			},
			// 获取手机号
			async getPhoneNumber(e) {
				if (e.detail.errMsg !== 'getUserInfo:fail auth deny') { // 允许授权
					console.log(e)
					let code = await this.getCode()
					let res = await this.getOpenid(code)
					this.$store.state.global.globalData.openid = res.data.openid
					this.$store.state.global.globalData.session_key = res.data.session_key
					uni.navigateTo({
						url: '../register/register'
					})
				} else {
					return
				}
			},
			// 获取openid
			getOpenid(code) {
				return new Promise((resolve, reject) => {
					uni.request({
						url: 'https://api.weixin.qq.com/sns/jscode2session?appid=APPID&secret=SECRET&js_code=JSCODE&grant_type=authorization_code',
						method: 'get',
						data: {
							appid: 'wxe89e1d2db3a1255a',
							secret: '670565d582ca7844a261220320835d74',
							js_code: code,
							grant_type: 'authorization_code'
						},
						success(res) {
							console.log(res)
							resolve(res)
						},
						fail(err) {
							reject(err)
						}
					})
				})
			}
		},
		onLoad(option) {

		}
	}
</script>

<style lang="less">
	.s_login {
		.logo {
			width: 142rpx;
			height: 142rpx;
			margin: 148rpx auto 34rpx auto;

			.image {
				width: 100%;
				height: 100%;
			}
		}

		.title-h {
			font-size: 36rpx;
			text-align: center;
			font-weight: bold;
			margin: 0 auto;
			margin-bottom: 20rpx;
		}

		.message {
			text-align: center;
			font-size: 28rpx;
		}

		.button-content {
			width: 590rpx;
			margin: 0 auto;
			margin-top: 172rpx;

			.button {
				width: 100%;
				height: 82rpx;
				text-align: center;
				line-height: 82rpx;
				border-radius: 12rpx;
				font-size: 32rpx;
			}

			.wxlogin {
				color: #fff;
				background-color: #24A7FF;
				margin-bottom: 40rpx;
			}

			.notlogin {
				border: 2rpx solid #24A7FF;
				box-sizing: border-box;
				color: #24A7FF;
			}
		}
	}
</style>

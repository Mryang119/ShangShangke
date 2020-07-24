<template>
	<view class="s_register">
		<view class="login-centent">
			<view class="border login-input">
				<u-input placeholder="请输入手机号" v-model="mobile" :custom-style="inputStyle"></u-input>
			</view>
			<view class="border login-input">
				<u-input placeholder="请输入密码" type="password" v-model="password" :custom-style="inputStyle"></u-input>
			</view>
			<view class="border login-code">
				<u-input placeholder="请输入验证码" v-model="vcode" :custom-style="inputStyle"></u-input>
				<view class="vcode" v-if="vcodeStatus" @click="getVcode">获取验证码</view>
				<view class="vcode" v-else>{{count+'s'}}</view>
			</view>
		</view>
		<view class="login-button-content">
			<button class="usable-button button" v-if="verify" @click="register">注册</button>
			<view class="forbidden-button button" v-else>注册</view>
		</view>
	</view>
</template>

<script>
	import {
		registerCustomer,
		registerCust,
		loginByMobile
	} from '../../../src/api/userApi/userApi.js'
	export default {
		data() {
			return {
				inputStyle: {
					'font-size': 38 + 'rpx'
				},
				vcodeStatus: true,
				count: 59,
				time: null,
				mobile: '15501876709',
				vcode: '',
				password:'',
				buttonStatus: false
			};
		},
		methods: {
			// 获取验证码
			async getVcode() {
				let res = await registerCustomer({
					mobile: this.mobile,
					sysAccount: "SYSTEM"
				})
				console.log(res)
				this.vcodeStatus = false
				this.time = setInterval(() => {
					if (this.count == 0) {
						this.vcodeStatus = true
						this.count = 59
						clearInterval(this.time)
					}
					this.count--
				}, 100)
			},
			// 注册
			async register() {
				let res = await registerCust({
					mobile:this.mobile,
					sysAccount:"SYSTEM",
					pwd:this.password,
					code:this.vcode
				})
				console.log(res)
			}
		},
		onLoad() {},
		computed: {
			// 校验手机格式
			verify: function() {
				let reg = /^1(3|4|5|6|7|8|9)\d{9}$/
				let mobileTrue = reg.test(this.mobile)
				let vcodeTrue = this.vcode.length == 6 ? true : false
				let passwordTrue = this.password.length == 6 ? true : false
				return mobileTrue && vcodeTrue && passwordTrue
			}
		}
	}
</script>

<style lang="less">
	.s_register {
		width: 750rpx;

		.login-centent {
			margin-top: 118rpx;
			width: 750rpx;
			box-sizing: border-box;
			padding: 0 80rpx;

			font-size: 38rpx !important;

			.login-code {
				position: relative;
			}

			.border {
				border-bottom: 2rpx solid #E6E6E6;
				padding-bottom: 6rpx;
				margin-bottom: 48rpx;
			}

			.vcode {
				position: absolute;
				right: 0;
				color: #24A7FF;
				font-size: 28rpx;
				bottom: 20rpx;
				z-index: 99;
			}
		}

		.login-button-content {
			width: 590rpx;
			height: 82rpx;
			opacity: 1;
			overflow: hidden;
			border-radius: 12rpx;
			color: #FFF;
			margin: 54rpx auto;

			.button {
				width: 100%;
				height: 100%;
				text-align: center;
				line-height: 82rpx;
			}

			.usable-button {
				background-color: #24A7FF;
				color: #FFF;
				font-size: 32rpx;
			}

			.forbidden-button {
				background-color: #A6DBFF;
				font-size: 32rpx;
			}
		}
	}
</style>


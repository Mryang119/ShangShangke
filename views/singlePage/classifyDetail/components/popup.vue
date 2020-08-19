<template>
	<!-- 这个popup只会在父下方弹出 -->
	<view class="c_popup" :style="{display:show===true? 'block':'none'}">
		<view class="mask-content">
			<view class="popup-mask" :style="{top:elScrollTop+'px'}" @click="close">

			</view>

			<view class="popup-container" :style="{top:elScrollTop+'px'}">
				<slot><text>默认内容</text></slot>
				<view class="reset-finish">
					<view class="reset reset-finish-item" @click="reset">重置</view>
					<view class="finish reset-finish-item" @click="finish">确认</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	/**
	 * @method 
	 * @param{elScrollTop,show,height}
	 * @description : 这个组件接受三个个重要参数,elScrollTop: 父元素距离顶部位置,这个单位可以是px,需要父组件在生命周期函数实时控制,
	 * show: 控制遮罩层的打开和收起,
	 * 这个必须使用组件v-model形式更改,
	 * height: 内容高度,单位是rpx,
	 * 父组件内容主体使用slot接受
	 * @callback reset: 重置函数
	 * @callback finish: 确认函数
	 */
	export default {
		props: {
			show: {
				type: Boolean,
				default: false
			},
			elScrollTop: {
				type: Number,
				required: true
			},
			top: {
				type: Number,
				default: 0
			},
			height: {
				type: Number,
				default: 200
			}
		},
		methods: {
			close() {
				console.log('测试是否执行')
				this.$emit('input', false)
			},
			//  重置
			reset() {
				this.$emit('reset')
			},
			//  确认
			finish() {
				this.$emit('finish')
			}
		},
		created() {
			console.log(this.show)
		},

	}
</script>

<style lang="less">
	@button-border:1px solid #E3E0E0;
	.reset-finish {
		width: 100%;
		display: flex;
		height: 92rpx;
		.reset {
			color: #999999;
			border-right: @button-border;
		}
		.finish {
			color: #24A7FF;
		}
		&-item {
			flex: 1;
			display: flex;
			align-items: center;
			justify-content: center;
			font-size: 32rpx;
			border-top: @button-border;
			border-bottom: @button-border;
		}
	}
	.c_popup {
		transition: all 0.3s linear;

		// position: fixed;
		// top: 0;
		// bottom: 0;
		// left: 0;
		// right: 0;
		.popup-mask {
			position: fixed;
			bottom: 0;
			left: 0;
			right: 0;
			// top: 0;
			background: rgba(0, 0, 0, 1);
			opacity: 0.5;
			z-index: 98;
		}

		.popup-container {
			width: 750rpx;
			background-color: #fff;
			position: fixed;
			top: 0;
			z-index: 99;

		}
	}
</style>

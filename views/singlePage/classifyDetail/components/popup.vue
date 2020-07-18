<template>
	<!-- 这个popup只会在父下方弹出 -->
	<view class="c_popup" :style="{display:show===true? 'block':'none'}">
		<view class="mask-content">
			<view class="popup-mask"  :style="{top:elScrollTop+'px'}" @click="close">

			</view>
			<view class="popup-container"  :style="{height:height+'rpx',top:top+'rpx'}">
				<slot>默认内容</slot>
			</view>
		</view>
	</view>
</template>

<script>
	// 这个组件接受三个个重要参数
	// elScrollTop: 元素距离顶部位置,这个单位可以是px,需要父组件在生命周期函数实时控制
	// show: 控制遮罩层的打开和收起,这个必须使用组件v-model形式更改
	// top: 用于定位在父组件下方位置的参数,单位是rpx
	// height: 内容高度,单位是rpx
	// 父组件内容主题使用slot接受
	export default {
		props: {
			show: {
				type: Boolean,
				default:false
			},
			elScrollTop:{
				type:Number,
				required:true
			},
			top: {
				type: Number,
				required: true
			},
			height:{
				type:Number,
				default:200
			}
		},
		methods: {
			close(){
				console.log('测试是否执行')
				this.$emit('input',false)
			}
		},
		created(){
			console.log(this.show)
		}
	}
</script>

<style lang="less">
	.c_popup {
		transition: all 0.3s linear;
		.popup-mask {
			position: fixed;
			bottom: 0;
			left: 0;
			right: 0;
			// top: 0;
			background:rgba(0,0,0,1);
			opacity:0.5;
		}
		.popup-container {
			width: 750rpx;
			background-color: #fff;
			position: absolute;
			top: 0;
			z-index: 99;
			
		}
	}
</style>

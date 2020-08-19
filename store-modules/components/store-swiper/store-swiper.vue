<template>
	<!-- 商城轮播图组件 -->
	<!-- name:杨大锐 -->
	<view class="store-swiper-root">
		<u-swiper :list="list" @click="toDetail"></u-swiper>
	</view>
</template>

<script>
	import mixin from '../../libs/mixin.js'
	export default {
		mixins:[mixin],
		props: {
			list: {
				type: Array,
				// required: true,
				default: function() {
					return [{
							image: 'https://tse1-mm.cn.bing.net/th/id/OIP.4rApcfYm_6jCLIjnilPijAHaFm?w=275&h=208&c=7&o=5&dpr=1.25&pid=1.7',
							title: '昨夜星辰昨夜风，画楼西畔桂堂东'
						},
						{
							image: 'https://tse4-mm.cn.bing.net/th/id/OIP.ex_lH4yE1ZFHFMTvyVDt6AFUC3?w=340&h=183&c=7&o=5&dpr=1.25&pid=1.7',
							title: '身无彩凤双飞翼，心有灵犀一点通'
						},
						{
							image: 'https://tse3-mm.cn.bing.net/th/id/OIP.GRODwVbALIOjHKHdvlUjdwHaFj?w=257&h=193&c=7&o=5&dpr=1.25&pid=1.7',
							title: '谁念西风独自凉，萧萧黄叶闭疏窗，沉思往事立残阳'
						}
					]
				}
			}
		}
	}
</script>

<style lang="less" scoped>
	.store-swiper-root {}
</style>

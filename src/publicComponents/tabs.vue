<template>
	<view class="c-tabs">
		
	</view>
</template>

<script>
	export default {
		props:{
			list:{
				type:Array,
				default:()=>([
					{
						name:'附近'
					},{
						name:'关注'
					},{
						name:'热门'
					}
				])
			}
		}
	}
</script>

<style lang="less">

</style>

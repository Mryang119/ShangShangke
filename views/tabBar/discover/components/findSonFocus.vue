<template>
	<view class="c_findSonFocus">
		<view class="card-content" v-for="(item,index) in userArticleList" :key="item.key">
			<findSonUserArticle
			:userName="item.userName"
			:userImage="item.userImage"
			:pubLishDate="item.publishDate"
			:list="item.list"
			:article="item.article"
			:site="item.site"
			:comments="item.comments"
			:like="item.like"
			:star="item.star"
			:title="item.title"
			></findSonUserArticle>
		</view>
	</view>
</template>

<script>
	// 假数据
	import {
		userArticleList
	} from '@/src/utils/fakeData.js'
	// 组件
	import findSonUserArticle from './findSonUserArticle.vue'
	export default {
		components: {
			findSonUserArticle
		},
		data() {
			return {
				userArticleList
			};
		}
	}
</script>

<style lang="less">
	.c_findSonFocus {
		width: 100%;
		padding-top: 20rpx;
		background-color: #F6F6F6;
	}
	.card-content {
		margin-bottom: 20rpx;
		background-color: #FFFFFF;
	}
</style>

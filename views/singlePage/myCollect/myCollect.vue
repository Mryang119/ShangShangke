<!-- 我的收藏 -->
<!-- name:陈铄源 -->
<template>
	<view class="container">
		<u-tabs class="tabs" :list="list" :bar-style="{backgroundImage: 'linear-gradient(to right,#92D0F9,#26A7FC)',height:6+'rpx'}"
		 :is-scroll="false" :bold='true' :current="current" @change="change" inactive-color="#000" active-color="#000"></u-tabs>
		
		<view class="myCollectBg" v-if="isShowImg">
			<image src="@/static/images/iconfont/myCollectBg.png"></image>
			<view class="noCollect">还没有相关收藏~</view>
		</view>
		<view class="shopDetailCon">
			<!-- 店铺 -->
			<view class="shopDetail" v-for="(item,index) in shopList" :key="index" v-if="current===0" @click="toCollectShop(item,index)">
				<view class="shopImg"><image :src="item.shopImg"></image></view>
				<view class="detailCon">
					<view class="shopName">{{item.shopName}}</view>
					<view class="shopScore">
						<view class="score">评分:</view>
						<uni-rate class="shopRate" allow-half :value="item.value" size="12" activeColor="#FFAE44" :margin="3"/>
						<view class="shopValue">{{item.value}}</view>
					</view>
					<view class="shopAddress">
						<view class="meter">{{item.shopMeter}}</view>
						<view class="line">|</view>
						<view class="address">{{item.shopAddress}}</view>
					</view>
				</view>
			</view>
			<!-- 商品 -->
			<view class="shopDetail" v-for="(item,index) in productList" :key="index"  v-if="current===1" @click="toCollectShopDetail(item,index)">
				<view class="shopImg"><image :src="item.productImg"></image></view>
				<view class="detailCon">
					<view class="goodsName">{{item.productName}}</view>
					<view class="goodsPrice">￥{{item.productPrice}}</view>
				</view>
			</view>
			<!-- 作品 -->
			<view class="shopWorks" v-if="current===2">
				
			</view>
		</view>
		
		
	</view>
</template>

<script>
	export default {
		data() {
			return {
				list: [{
					name: '店铺'
				}, {
					name: '商品'
				}, {
					name: '作品'
				}],
				current: 0,  //tabs 当前索引值
				isShow:false,
				shopList:[
					{
					shopImg:'../../../static/images/Product/shangpintu.png',  //商家头像
					shopName:'海底捞（海岸城店）',  //商家名字
					value:'3.5',        //商家评分
					shopMeter:'500m',        //商家距离
					shopAddress:'文新思路34号海岸城西座F2座806'  //商家地址
				},{
					shopImg:'../../../static/images/Product/shangpintu.png',  //商家头像
					shopName:'海底捞（海岸城店）',  //商家名字
					value:'5.0',        //商家评分
					shopMeter:'500m',        //商家距离
					shopAddress:'文新思路34号海岸城西座F2座806'  //商家地址
				},{
					shopImg:'../../../static/images/Product/shangpintu.png',  //商家头像
					shopName:'海底捞（海岸城店）',  //商家名字
					value:'5.0',        //商家评分
					shopMeter:'500m',        //商家距离
					shopAddress:'文新思路34号海岸城西座F2座806'  //商家地址
				}
				],
				productList:[
					{
					productImg:'../../../static/images/Product/commodityItem.png',  //商品头像
					productName:'九龙金玉雪顶奶茶',  // 商品名字
					productPrice:'1.00'  // 商品价格
				},{
					productImg:'../../../static/images/Product/commodityItem.png',  //商品头像
					productName:'九龙金玉雪顶奶茶',  // 商品名字
					productPrice:'1.00'  // 商品价格
				},{
					productImg:'../../../static/images/Product/commodityItem.png',  //商品头像
					productName:'九龙金玉雪顶奶茶',  // 商品名字
					productPrice:'1.00'  // 商品价格
				}
				]
			}
		},
		methods: {
			change(index) {            // 点击导航跳转对应的收藏
				this.current = index;
				console.log(this.current)
				// if(this.current===0){
				// 	uni.request({
				// 		method:'GET',
				// 		url:'xxx',
				// 		success(res) {
				// 			this.shopList = res.data
							
				// 		}
				// 	})
				// }else if(this.current===1){
				// 	uni.request({
				// 		method:'GET',
				// 		url:'xxx',
				// 		success(res) {
				// 			this.productList = res.data
							
				// 		}
				// 	})
				// }else{
				// 	uni.request({
				// 		method:'GET',
				// 		url:'xxx',
				// 		success(res) {
				// 			this.XXXList = res.data
							
				// 		}
				// 	})
				// }
				
			},
			toCollectShop(item,index){      // 跳转到收藏的商家主页
				// 接口
			},
			toCollectShopDetail(item,index){        // 跳转到收藏的单品
				// 接口
			}
			
		},
		computed:{
			isShowImg(){
				// this.current
				if(this.current===0){
					if(this.shopList.length===0){
						return true
					}else{
						return false
					}
				}else if(this.current===1){
					if(this.productList.length===0){
						return true
					}else{
						return false
					}
				}else{
					return true
				}
			}
		},
		// onLoad(res) {
		// 	uni.request({
		// 		method:'GET',
		// 		url:'xxx',
		// 		success(res) {
		// 			this.shopList = res.data
					
		// 		}
		// 	})
		// }
		
	}
</script>

<style lang="less" scoped>
	.container {
		width: 750rpx;
		height: 1284rpx;
		background: rgba(246, 246, 246, 1);
		.myCollectBg{
			width: 370.5rpx;
			height: 420.02rpx;
			margin: 138rpx 190rpx 0 190rpx;
			image{
				width: 370.5rpx;
				height: 420.02rpx;
				margin-bottom: 42rpx;
			}
			.noCollect{
				font-size:28rpx;
				font-family:PingFang SC;
				font-weight:400;
				line-height:32rpx;
				color:rgba(169,169,169,1);
				text-align: center;
			}
		}
		.shopDetailCon{
			width: 750rpx;
			padding: 0 20rpx;
			.shopDetail{
				width: 710rpx;
				height: 178rpx;
				padding: 20rpx;
				background: #FFFFFF;
				display: flex;
				align-items: center;
				margin-top: 20rpx;
				.shopImg{
					width: 140rpx;
					height: 138rpx;
					margin-right: 20rpx;
					image{
						width: 140rpx;
						height: 138rpx;
						border-radius:8rpx;
					}
				}
				.detailCon{
					display: flex;
					flex-direction: column;
					justify-content: space-around;
					.shopName{
						font-size:28rpx;
						font-family:PingFang SC;
						font-weight:bold;
						color:rgba(39,39,39,1);
					}
					.shopScore{
						height: 28rpx;
						font-size:24rpx;
						font-family:PingFang SC;
						font-weight:400;
						line-height:28rpx;
						color:rgba(39,39,39,1);
						margin: 16rpx 0;
						display: flex;
						align-items: center;
						.score{
							margin-right: 4rpx;
						}
						.shopRate{
							height: 0;
						}
						.shopValue{
							font-size: 18rpx;
							color:rgba(255,174,68,1);
							margin-left: 10rpx;
						}
					}
					.shopAddress{
						height: 28rpx;
						font-size:24rpx;
						font-family:PingFang SC;
						font-weight:400;
						line-height:28rpx;
						color:rgba(133,133,133,1);
						display: flex;
						align-items: center;
						.line{
							font-size: 20rpx;
							margin: 0 20rpx;
						}
					}
					.goodsName{
						font-size:28rpx;
						font-family:PingFang SC;
						font-weight:bold;
						color:rgba(39,39,39,1);
					}
					.goodsPrice{
						margin-top: 48rpx;
						font-size:32rpx;
						font-family:PingFang SC;
						font-weight:bold;
						color:rgba(241,0,0,1);
					}
				}
			}
		}
	}
</style>
	
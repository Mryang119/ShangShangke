<template>
	<view>
		<view class="feng_flow">
			<view class="flow_block">
				<view class="flow_item" v-for="(item, i1) in lists1" :key="i1">
					<image :src="item.pic" mode="widthFix" style="width: 100%;"></image>
					<view class="flow_item_con">
						<view class="flow_item_title">￥{{ item.price }}</view>
						<view class="flow_item_des">{{ item.id }}{{ item.yishujia }}</view>
						<view class="flow_item_des">{{ item.timu }}</view>
						<view class="flow_item_des">{{ item.nianfen }}</view>
						<view class="flow_item_des">{{ item.caizhi }}</view>
						<view class="flow_item_des">{{ item.chicun }}</view>
					</view>
				</view>
			</view>
			<view class="flow_block">
				<view class="flow_item" v-for="(item2, i2) in lists2" :key="i2">
					<image :src="item2.pic" mode="widthFix" style="width: 100%;"></image>
					<view class="flow_item_con">
						<view class="flow_item_title">￥{{ item2.price }}</view>
						<view class="flow_item_des">{{ item2.id }}{{ item2.yishujia }}</view>
						<view class="flow_item_des">{{ item2.timu }}</view>
						<view class="flow_item_des">{{ item2.nianfen }}</view>
						<view class="flow_item_des">{{ item2.caizhi }}</view>
						<view class="flow_item_des">{{ item2.chicun }}</view>
					</view>
					
				</view>
			</view>
		</view>
		<view class="feng_flow" style="display: none;">
			<view class="flow_block">
				<view class="flow_item" v-for="(data,da_i) in dataLists" :key="da_i">
					<image :src="data.pic" @error="imgError" @load="imgLoad" :id="da_i" mode="widthFix" style="width:100%;"></image>
				</view>
			</view>
			<view class="flow_block"></view>
		</view>
	</view>
</template>

<script>
export default {
	name: 'fengFlow',
	props: {
		dataLists: {
			default: []
		}
	},
	data() {
		return {
			
			lists1: [],
			lists2: [],
			list1Height:0,
			list2Height:0,
			tmp_data:[],
			loaded:[], //图片加载成功数组
			loadErr:[], //图片加载失败数组
			showLoad:false
		};
	},
	methods: {
		//处理数据
		refresData(){
			this.hideLoadFlag()
			if(this.loaded.length + this.loadErr.length < this.tmp_data.length) return;
			const that = this
			this.tmp_data.map((da,di)=>{
				if(that.list1Height > that.list2Height){
					that.list2Height += da.img_height
					that.lists2.push(da)
				}else{
					that.list1Height += da.img_height
					that.lists1.push(da)
				}
				
			})
		},
		//图片加载完成补齐数据
		imgLoad(e){
			this.loaded.push(e.target.id)
			//存储数据
			this.tmp_data[e.target.id]['img_width'] = e.detail.width
			this.tmp_data[e.target.id]['img_height'] = e.detail.height
			
		},
		//图片未加载成功触发
		imgError(e){
			console.log(e)
			this.loadErr.push(e.target.id)
		},
		showLoadFlag(){
			if(!this.showLoad){
				this.showLoad = true
				uni.showLoading({
					title:'loading...',
					mask:'none'
				})
			}
		},
		hideLoadFlag(){
			if(this.showLoad) {
				uni.hideLoading();
				this.showLoad = false;
			}
		}
	},
	mounted() {
		const that = this
		that.tmp_data = that.dataLists
		that.showLoadFlag()
	},
	watch: {
		dataLists() {
			console.log('数据变了触发');
			this.loaded = []
			this.loadErr = []
			this.tmp_data = this.dataLists
			this.showLoadFlag()
		},
		loaded(){
			console.log('加载标记变化')
			//最后一个加载完成负责刷新数据
			this.refresData()
		},
		loadErr(){
			//最后一个加载完成负责刷新数据
			this.refresData()
		}
	}
};
</script>

<style>
.feng_flow {
	display: flex;
	padding:15upx;
}
.flow_block {
	display: flex;
	flex: 1;
	flex-direction: column;
}
.flow_item {
	margin:15upx;
	border-radius: 20upx;
	background:#f4f4f4;
	overflow: hidden;
}
.flow_item_con{padding:10upx 20upx 20upx;}
.flow_item_title{position: relative;font-size:32upx;font-weight: 700;margin-bottom:5upx;}
.flow_item_des{font-size:24upx;}
</style>

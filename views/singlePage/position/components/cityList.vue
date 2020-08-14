<template>
	<view class="c_cityList">
		<u-modal v-model="show" :content="content" :show-cancel-button="true" @cancel="cancel" @confirm="confirm"></u-modal>
		<u-index-list :scrollTop="scrollTop">
			<view v-for="(item, index) in indexList" :key="item.key">
				<u-index-anchor :index="item.key" />
				<view class="list-cell" v-for="(item1,index1) in item.children" :key="item1.name" @click="save(item1.name,item1.lat,item1.lng)">
					{{item1.name}}
				</view>
			</view>
		</u-index-list>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				scrollTop: 0,
				indexList: [],
				show: false,
				content: '',
				lat:this.$store.state.global.globalData.latitude,
				lng:this.$store.state.global.globalData.longitude,
				cityName:this.$store.state.global.globalData.cityName
			}
		},
		methods: {
			onPageScroll(e) {
				this.scrollTop = e.scrollTop;
			}
		},
		methods: {
			save(cityName, lat, lng) {
				this.content = `确认要切换到当前:${cityName}吗?`
				this.show = true
				this.lat = lat
				this.lng = lng
				this.cityName = cityName
			},
			// 确认事件 
			confirm() {
				this.show = false
				this.$store.commit('saveGlobal', {
					key: 'latitude',
					value: this.lat
				})
				this.$store.commit('saveGlobal', {
					key: 'longitude',
					value: this.lng
				})
				this.$store.commit('saveGlobal',{
					key:'cityName',
					value:this.cityName
				})
			},
			// 取消事件
			cancel(){
				this.show = false
			}
		},
		created() {
			// 转化数据格式方便渲染
			const cityList = this.$store.state.global.globalData.cityList
			cityList.forEach((item, index) => {
				Object.keys(item).forEach((k) => {
					this.indexList.push({
						key: k,
						children: cityList[index][k]
					})
				})
			})
		}
	}
</script>

<style lang="less">
	.c_cityList {


		width: 750rpx;

		.list-cell {
			display: flex;
			box-sizing: border-box;
			width: 100%;
			padding: 10px 24rpx;
			overflow: hidden;
			color: #323233;
			font-size: 14px;
			line-height: 24px;
			background-color: #fff;
			border-bottom: 1px solid #F3F3F3;
		}
	}
</style>

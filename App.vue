<script>
export default {
  onLaunch: function () {
    console.log("App Launch");
  },
  onShow: function () {
    console.log("App Show");
		try {
			this.$store.commit('saveGlobal',{
				key:'userImage',
				value:uni.getStorageSync('loginDatas').putCustomer.imgAddr
			})
			console.log('登录存储头像成功')
		} catch(e) {
			console.log('未登录',e)
		}
  },
  onHide: function () {
    console.log("App Hide");
  },
};
</script>

<style lang="scss">
/* @import '@/uview-ui/index.scss'; */
@import "uview-ui/index.scss";
@import "@/style/iconfont.css";
// 溢出隐藏省略号
.shenglue {
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.save-button {
  width: 690rpx;
  height: 82rpx;
  border-radius: 12rpx;
  background-color: #24a7ff;
  text-align: center;
  line-height: 82rpx;
  color: #fff;
  font-weight: bold;
  font-size: 32rpx;
}

// 页面背景颜色
page {
  background-color: #f6f6f6;
  // background-image: linear-gradient(to bottom, #FFFFFF, #F6F6F6) !important;
}

// 吸顶类名
.sticky {
  position: fixed !important;
  top: 0;
  left: 0;
  z-index: 999;
}

.uni-navbar {
  .uni-navbar--border.uni-navbar--border.data-v-4afea59e {
    border-color: #ffffff !important;
  }
}

.u-progress {
  border: 2rpx solid #fb2b03 !important;
}

.c_cityList {
  .u-index-bar {
    .u-index-bar__sidebar {
      .u-index-bar__index {
        padding: 8rpx 4rpx;
      }
    }
  }
}
</style>

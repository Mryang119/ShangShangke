<template>
  <view class="c_moduleTitle">
    <view class="left-content">
      <text v-if="title!==''">{{title}}</text>
      <slot name="custom-title"></slot>
      <slot name="custom-extra"><slot>
    </view>
    <view class="right-content">
      <navigator :url="url"   class="navigator" hover-class="className">
        <text>更多</text>
        <image class="image" src="/static/images/iconfont/more.png" mode="widthFix" />
      </navigator>
    </view>
  </view>
</template>

<script>

export default {
/**
 * @method 
 * @param{ title }
 * @description 
 * @return 
 */
  props:{
    title:{
      type:String,
      default:''
    },
    url:{
      type:String
    }
  }
}
</script>

<style lang="less" scoped>
  .image {
    width: 8.5rpx;
    height: 16.94rpx;
  }
  .navigator {
    color: #666666;
    font-size: 24rpx;
  }
  .c_moduleTitle {
    display: flex;
    align-items: center;
    .left-content {
      display: flex;
      align-items: center;
      font-size: 36rpx;
      color: #333333;
      font-weight: bold;
    }
    .right-content {
      flex: 1;
      justify-content:  flex-end;
      display: flex;
      align-items: center;
      
    }
  }
</style>
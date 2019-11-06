<template>
	<view id="mine-address">
		<view class="hreder">
			<span class="iconfont icon-2fanhui" @click="returni"></span>
			<view class="text">地址列表</view>
			<span class="iconfont icon-jia" @click="jiao"></span>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {

			}
		},
		methods: {
			//返回上一层
			returni() {
				uni.navigateBack({
					delta: 1
				})
			},
			//跳转编辑地址页面
			jiao(){
				uni.navigateTo({
					url:"/pages/mine/address/edit?id=1"
				})
			}
		}
	}
</script>

<style lang="scss">
	.hreder {
		height: 100rpx;
		line-height: 100rpx;
		display:flex;
		justify-content: space-between;

		.icon-2fanhui {
			font-size: 40rpx;
			text-indent: 25rpx;
			// margin-right: 250rpx;
		}

		.text {
			margin: auto;
			text-align: center;
		}

		.icon-jia {
			margin-right: 30rpx;
            font-size: 50rpx;
		}
	}
</style>

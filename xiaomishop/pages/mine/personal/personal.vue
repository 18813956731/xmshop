<template>
	<view id="mine-personal">
		<view class="hreder">
			<span class="iconfont icon-2fanhui" @click="returni"></span>
			<view class="text">修改资料</view>
		</view>
		<view class="hr"></view>
		<view class="headportrait fexi">
			<view>头像</view>
			<view class="img">
				<img src="/static/images/demo/demo6.jpg" mode="widthFix" />
			</view>
		</view>
		<view class="naxil fexi">
			<view>姓名</view>
			<view class="text">
				厨师
				<span class="iconfont icon-you"></span>
			</view>
		</view>
		<view class="naxil fexi">
			<view>性别</view>
			<span class="iconfont icon-you"></span>
		</view>
		<view class="naxil fexi">
			<view>生日</view>
			<span class="iconfont icon-you"></span>
		</view>
		<view class="hr"></view>
		<view class="naxil fexi" @tap="psod">
			<view>修改密码</view>
			<span class="iconfont icon-you"></span>
		</view>
		<view class="naxil fexi">
			<view>密保手机</view>
			<span class="iconfont icon-you"></span>
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
			returni() {
				uni.navigateBack({
					delta:1
				})
			},
			psod(){
				uni.navigateTo({
					url:"/pages/mine/personal/psword?id=1"
				})
			}
		}
	}
</script>

<style lang="scss">
	.hreder {
		height: 100rpx;
		line-height: 100rpx;
		display: inline-flex;

		.icon-2fanhui {
			font-size: 40rpx;
			text-indent: 25rpx;
			margin-right: 250rpx;
		}

		.text {
			margin: auto;
			text-align: center;
		}
	}

	.hr {
		border: 10rpx solid #F1F1F1;
		background-color: #F1F1F1;
	}

	.fexi {
		display: flex;
		justify-content: space-between;
		padding: 20rpx 30rpx 20rpx 30rpx;
		border-bottom: 1rpx solid #F1F1F1;
	}

	.headportrait {
		height: 140rpx;
		line-height: 140rpx;

		.img {
			width: 120rpx;
			height: 120rpx;
			border-radius: 50%;

			img {
				border-radius: 50%;
				width: 100%;
				height: 100%;
			}
		}
	}

	.icon-you {
		font-size: 37rpx;
		color: #8F8F94;
		margin-left: 15rpx;
	}

	.naxili {
		line-height: 100rpx;
		height: 100rpx;

	}

	.naxil {
		height: 80rpx;
		line-height: 80rpx;
	}
	
</style>

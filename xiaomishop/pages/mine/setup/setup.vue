<template>
	<view id="mine-setup">
		<view class="hreder-i">
			<span class="iconfont icon-2fanhui" @click="returni"></span>
			<view class="text">设置</view>
		</view>
		<view class="hreder-j">账号管理</view>
		<view class="btn bt" @click="personal">
			<text>个人资料</text>
			<span class="iconfont icon-you"></span>
		</view>
		<view class="btn bt" @click="receiving">
			<text>收货地址</text>
			<span class="iconfont icon-you"></span>
		</view>
		<view class="hreder-j">关于</view>
		<view v-for="(item,index) in datas" class="btn bt" @click="navTop(index)">
			<text>{{item}}</text>
			<span class="iconfont icon-you"></span>
		</view>
		<view class="footer">
			<view class="text" @click="sign">退出登录</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				datas: ["关于商城", "意见反馈", "协议规则", "资质证件", "用户协议", "隐私政策"]
			}
		},
		methods: {
			returni(){
			uni.navigateBack({
				delta:1
			})
			},
			//个人资料
			personal() {
				uni.navigateTo({
					url: "../personal/personal?id=1"
				})
			},
			//收货地址
			receiving() {
				uni.navigateTo({
					url:"../address/address?id=1"
				})
			},
			sign(){
			uni.showToast({
				title: '点击协',
				icon: 'none'
			})
			},
			navTop(index) {
				switch (index) {
					case 0: //关于商城
						uni.navigateTo({
							url: "/pages/mine/article/article?id=1"
						})
						break;
					case 1: //意见反馈
						uni.navigateTo({
							url: "/pages/mine/feedback/feedback?id=1"
						})
						break;
					case 2: //协议规则
						uni.showToast({
							title: '点击协议规则',
							icon: 'none'
						})
						break;
					case 3: //资质证件
						uni.showToast({
							title: '点击资质证件',
							icon: 'none'
						})
						break;
					case 4: //用户协议
						uni.showToast({
							title: '点击用户协议',
							icon: 'none'
						})
						break;
					case 5: //隐私政策
						uni.showToast({
							title: '点击隐私政策',
							icon: 'none'
						})
						break;
					default:
						break;
				}
			},
		}
	}
</script>

<style lang="scss">
	.hreder-i{
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
	.hreder-j{
		font-size: 34rpx;
		text-indent: 25rpx;
		color: #555555;
		height: 100rpx;
		line-height: 100rpx;
		background-color: #F1F1F1;
	}

	.btn {
		height: 100rpx;
		line-height: 100rpx;
		font-size: 36rpx;
		text-indent: 30rpx;
		border-bottom: solid 2rpx #F1F1F1;

		.icon-you {
			float: right;
			margin-right: 40rpx;
			font-size: 16rpx;
			color: #C0C0C0;
		}
	}

	.footer {
		background-color: #F1F1F1;
		height: 208rpx;
		padding-top: 25rpx;

		.text {
			font-size: 37rpx;
			width: 88%;
			margin: auto;
			height: 100rpx;
			line-height: 100rpx;
			background-color: white;
			text-align: center;
		}
	}
</style>

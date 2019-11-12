<template>
	<view id="mine-setup">
		<!-- 自定义头部 -->
		<view class="hreder-i">
			<span class="iconfont icon-2fanhui" @click="returni"></span>
			<view class="text">设置</view>
		</view>
		<view class="hreder-j">账号管理</view>
		<!-- 个人资料 -->
		<view class="btn bt" @click="personal">
			<text>个人资料</text>
			<span class="iconfont icon-you"></span>
		</view>
		<!-- 收货地址 -->
		<view class="btn bt" @click="receiving">
			<text>收货地址</text>
			<span class="iconfont icon-you"></span>
		</view>
		<view class="hreder-j">关于</view>
		<!-- 循环页面名称 -->
		<view v-for="(item,index) in datas" class="btn bt" :data-url="item.url" @click="navTop" :key="index">
			<text>{{item.name}}</text>
			<span class="iconfont icon-you"></span>
		</view>
		<!-- 尾部退出 -->
		<view class="footer">
			<view class="text" @click="sign">退出登录</view>
		</view>
	</view>
</template>

<script>
	import { mapState, mapMutations } from 'vuex';
	export default {
		computed: {
			...mapState(['token'])
		},
		data() {
			return {
				datas: [{//跳转的数据
					name: "关于商城",
					url: 'about'
				}, {
					name: "意见反馈",
					url: "feedback"
				}, {
					name: "协议规则",
					url: ""
				}, {
					name: "资质证件",
					url: ""
				}, {
					name: "用户协议",
					url: ""
				}, {
					name: "隐私政策",
					url: ""
				}]
			}
		},
		methods: {
			//返回上一层
			returni() {
				uni.navigateBack({
					delta: 1
				})
			},
			//个人资料
			personal() {
				uni.navigateTo({
					url: "/pages/mine/personal/personal?id=1"
				})
			},
			//收货地址
			receiving() {
				uni.navigateTo({
					url: "/pages/mine/address/address?id=1"
				})
			},
			//退出登录
			sign() {
				let _this=this;
				// console.log(this.token)
				_this.$store.commit('sign');
				uni.switchTab({
					url: '/pages/mine/index/index'
				});
				uni.showToast({
					title: '点击协',
					icon: 'none'
				})
			},
			//跳转指定页面
			navTop(e) {
				let address = e.currentTarget.dataset.url || e.target.dataset.url
				uni.navigateTo({
					url: "/pages/mine/" + address + "/" + address + "?id=1"
				})

			}
		},
	}
</script>

<style lang="scss">
	.hreder-i {
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

	.hreder-j {
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

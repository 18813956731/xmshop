<template>
	<view id="mine-address">
		<!-- 头部导航 -->
		<view class="hreder">
			<span class="iconfont icon-2fanhui" @click="returni"></span>
			<view class="text">收货地址列表</view>
			<span class="iconfont icon-jia" @click="plus"></span>
		</view>
		<!-- 地址列表 -->
		<view class="mina">
			<!-- 循环收货地址 -->
			<view class="from-mina" v-for="(item,index) in list" :key="index">
				<view class="from-mina-left" @click="onfirm(index)">
					<view class="hred">
						<view class="text">{{item.name}}</view>
						<view class="phone">{{item.phone}}</view>
					</view>
					<view class="address">{{item.Location}}<br />{{item.detailed}}</view>
				</view>
				<view class="from-mina-right" @click="plus" :data-index="index">编辑</view>
			</view>
		</view>
	</view>
</template>

<script>
	//导入状态管理
	import {
		mapState,
		mapMutations
	} from 'vuex';
	import Json from "@/Json" //引入地址数据
	export default {
		data() {
			return {
				index: 0, //下标传值
				list: [] //进入页面接收渲染数据
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
			plus(e) {
				let index = e.currentTarget.dataset.index
				this.index = index
				console.log(this.index)
				if (index == null) {
					uni.navigateTo({
						url: "/pages/mine/address/edit?id=1"
					})
				} else {
					uni.navigateTo({
						url: "/pages/mine/address/edit?id=1&index=" + index + ""
					})
				}

			},
			//确认收货地址
			onfirm(e) {
				console.log(e)
				if (this.whether) {
					uni.navigateTo({
						url: "/pages/mine/deliver/confimindent?index=" + e + ""
					})
				} else {

				}
			}
		},
		computed: {
			...mapState(["whether"])
		},
		onLoad(option) {
			this.list = Json.address //进入接收数据
		}
	}
</script>

<style lang="scss">
	page {
		background-color: #F5F5F5;
	}

	.hreder {
		height: 100rpx;
		line-height: 100rpx;
		display: flex;
		justify-content: space-between;
		background-color: #F5F5F5;

		.icon-2fanhui {
			font-size: 40rpx;
			text-indent: 25rpx;
			// margin-right: 250rpx;
		}

		.text {
			margin: auto;
			text-align: center;
			font-size: 34rpx;
		}

		.icon-jia {
			margin-right: 30rpx;
			font-size: 50rpx;
		}
	}

	.mina {
		height: 100%;
		width: 100%;
		background-color: white;

		.from-mina {
			display: flex;
			justify-content: space-between;
			padding: 20rpx 30rpx 20rpx 30rpx;

			.hred {
				height: 50rpx;
				line-height: 50rpx;
				display: inline-flex;

				.text {
					font-size: 35rpx;
				}

				.phone {
					width: 230rpx;
					text-align: center;
					font-size: 28rpx;
					color: #555555;
				}
			}

			.address {
				width: 600rpx;
				font-size: 28rpx;
			}

			.from-mina-right {
				height: 120rpx;
				line-height: 120rpx;
				color: #F0AD4E;
				font-size: 33rpx;

			}
		}
	}
</style>

<template>
	<view id="mine-index">
		<!-- 头部 -->
		<view class="hreder">
			<img class="image" src="/static/images/bg.jpg" mode="widthFix" />
			<span class="iconfont font" @click="notice">&#xe67a;</span>
			<view class="name">
				<img src="/static/images/demo/demo6.jpg" mode="widthFix" />
			</view>
			<text class="text">厨师</text>
			<view class="integral">
				<span class="iconfont">&#xe7eb;</span>
				<text>会员积分1.99</text>
			</view>
		</view>
		<!-- 我的订单 -->
		<view class="order" @click="requer">
			我的订单
			<span class="rigth">全部订单<span class="iconfont icon-you"></span></span>
		</view>
		<!-- 分割线 -->
		<view class="hr"></view>
		<!-- 订单付款 -->
		<view class="logo">
			<view v-for="(item,index) in datas">
				<span class="iconfont" :class="item.icon"></span>
				<text>{{item.name}}</text>
			</view>
		</view>
		<!-- 广告 -->
		<image class="imgae" src="/static/images/demo/demo4.jpg"></image>
		<!-- 功能循环 -->
		<view class="btn" v-for="(iter,index) in datae" @click="fun" :id="index" :data-name="iter.name">
			<span class="iconfont ico" :class="iter.iconi"></span>
			<text>{{iter.name}}</text>
			<span class="iconfont icon-you" :class="iter.iconj"></span>
		</view>
		<!-- 分割线 -->
		<view class="hr"></view>
		<!-- 设置中心 -->
		<view class="btn bt" @click="set">
			<span class="iconfont icon-icon_set_up ico"></span>
			<text>更多设置</text>
			<span class="iconfont icon-you"></span>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				imge: false, //图片渲染条件
				datas: [{ //标签数据
						name: '待付款',
						icon: "icon-wallet_icon"
					},
					{
						name: '待收货',
						icon: "icon-daishouhuo"
					},
					{
						name: '待评价',
						icon: "icon-pinglun1"
					},
					{
						name: '退换修',
						icon: "icon-buoumaotubiao46"
					}
				],
				datae: [{ //功能数据
						name: "小米会员",
						iconi: "icon-VIP",
						iconj: "icon-you",

					},
					{
						name: "会员中心",
						iconi: "icon-huangguan",
						iconj: "icon-you"
					},
					{
						name: "服务中心",
						iconi: "icon-service",
						iconj: "icon-you"
					}, {
						name: "小米之家",
						iconi: "icon-home",
						iconj: "icon-you"
					}, {
						name: "更多功能",
						iconi: "icon-gengduo",
						iconj: "icon-you"
					},

				]
			}
		},
		onLoad() {

		},
		methods: {
			//设置
			set: function() {
				uni.navigateTo({
					url: "/pages/mine/setup/setup?id=1"
				})
			},
			//通知
			notice() {
				uni.showToast({
					title: '跳转通知',
					icon: 'none'
				})

			},
			//跳转指定页面
			fun(e) {
				let index = parseInt(e.currentTarget.id) ||parseInt(e.target.id)
				let name = e.currentTarget.dataset.name || e.currentTarget.target.name
				  for (let i=0;i<this.datae.length;i++) {
				  	    uni.showToast({
				  	    	title: '跳转'+name,
				  	    	icon: 'none'
				  	    })
				  }

			},
			//跳转我的订单
			requer() {
				uni.navigateTo({
					url: "/pages/mine/myorder/myorder"
				})
			}
		},

	}
</script>

<style lang="scss">
	.content {
		display: flex;
		flex-direction: column;
		justify-content: center;
	}

	.iconfont {
		font-size: 45rpx;
	}
// 头部样式
	.hreder {
		width: 100%;
		height: 340rpx;

		.image {
			width: 100%;
			height: 340rpx;
		}


		.font {
			color: white;
			position: absolute;
			right: 17rpx;
			top: 70rpx;
			font-size: 55rpx;
		}


		.name {
			display: flex;
			justify-content: space-between;
			position: absolute;
			left: 40rpx;
			top: 120rpx;
			width: 140rpx;
			height: 140rpx;
			border-radius: 50%;
			border: 5rpx solid white;

			img {
				border-radius: 50%;
				width: 100%;
				height: 140rpx;
			}
		}

		.text {
			position: absolute;
			left: 220rpx;
			top: 170rpx;
			color: white;
			width: 200rpx;
		}

		.integral {
			width: 300rpx;
			height: 80rpx;
			line-height: 80rpx;
			position: absolute;
			right: 0px;
			top: 220rpx;
			border-top-left-radius: 40rpx;
			border-bottom-left-radius: 40rpx;
			background-color: #FFD43F;

			span {
				color: #DE5800;
				margin: 0px 12rpx 0px 35rpx;
			}

			text {
				color: #DE5800;
				font-size: 35rpx;
			}
		}
	}

	.order {
		margin: 20rpx;
		width: 100%;
		font-size: 33rpx;
		font-weight: bold;

		.rigth {
			font-weight: 100;
			display: block;
			width: 190rpx;
			float: right;
			font-size: 30rpx;
			color: #999999;
		}

		.icon-you {
			font-size: 19rpx;
		}
	}

	.hr {
		border: 4rpx solid #F1F1F1;
		background-color: #F1F1F1;
	}

	.logo {
		display: flex;
		justify-content: space-around;
		text-align: center;
		padding-bottom: 30rpx;
		border-bottom: 20rpx solid #F1F1F1;

		.iconfont {
			margin-top: 19rpx;
			display: block;
		}

		text {
			font-size: 14rpx;
		}
	}

	.imgae {
		width: 100%;
		height: 300rpx;
	}

	.btn {
		font-size: 35rpx;
		height: 100rpx;
		line-height: 100rpx;
		border-bottom: 3rpx solid #F1F1F1;

		.icon-you {
			float: right;
			margin-right: 40rpx;
			font-size: 16rpx;
			color: #C0C0C0;
		}

		.ico {
			margin: 0rpx 20rpx 0rpx 30rpx;
		}

		.icon-VIP {
			color: #F0AD4E;

		}

		.icon-huangguan {
			color: #F0AD4E;
		}

		.icon-service {
			color: #FA6C5E;
		}

		.icon-home {
			color: #FD8B42;
		}

		.icon-gengduo {
			color: #9FD35D;
		}

		.icon-icon_set_up {
			color: #333333;
		}

	}

	.bt {
		border-top: #F1F1F1 15rpx solid;
	}
</style>

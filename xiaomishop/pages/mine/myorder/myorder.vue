<template>
	<view id="mine-myorder">
		<!-- 头部导航 -->
		<view class="hreder">
			<span class="iconfont icon-2fanhui" @click="returni"></span>
			<view class="text">我的订单</view>
			<view>
				<span class="iconfont icon-sousuo"></span>
				<span class="iconfont icon-gouwuche"></span>
			</view>
		</view>
		<!-- 导航 -->
		<view class="tab-item" v-for="(item,index) in order" :class="tabIndex==index?'tab-item-active':''" @click="tabactive"
		 :id="index">{{item.name}}</view>
		<!-- 滑动 -->
		<swiper :current="tabIndex" class="swiper-box" duration="300" @change="ontabchange">
			<swiper-item class="tab-content" v-for="(tabItem,tabIndex) in order" :key="tabIndex">
				<!-- 纵向滚动 -->
				<scroll-view class="list-scroll-content" scroll-y>
				  <!-- 空白页 -->
				  
					<all></all>

				</scroll-view>
			</swiper-item>
		</swiper>

		<view class="footer">
			<view class="tooer-hreder">
				<view class="text">猜你喜欢</view>
				<view class="text-flex">实时推荐你的爱</view>
			</view>
			<view class="footer-mian">
				<view class="footer-box" v-for="(item,index) in newtext">
					<tuijian :item="item" :index="index"></tuijian>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	import tuijian from "@/components/home/tuijian.vue"
	import all from "@/components/mine/all.vue"
	export default {
		components: {
			tuijian,
			all
		},
		data() {
			return {
				order: [{
						name: "全部", //导航数据
						index: 0,
						nothing: [] //空数据渲染
					},
					{
						name: "待付款",
						index: 1,
						nothing: []
					},
					{
						name: "待收货",
						index: 2,
						nothing: []
					},
					{
						name: "待评价",
						index: 3,
						nothing: []
					}
				],

				nothing: [{
						image: "/static/images/nothing/no_comment.png",
						name: "您还没有待付款订单"
					},
					{
						image: "/static/images/nothing/no_pay.png",
						name: "您还没有待收货订单"
					},
					{
						image: "/static/images/nothing/no_receiving.png",
						name: "您还没有待评价订单"
					}
				],
				//猜你喜欢数据
				newtext: [{
						img: '/static/images/demo/list/1.jpg',
						name: '米家空调',
						nameone: '1.5匹支流变频',
						pic: '2199',
						price: '2699'
					},
					{
						img: '/static/images/demo/list/4.jpg',
						name: '米家空调',
						nameone: '1.5匹支流变频',
						pic: '2199',
						price: '2699'
					},
					{
						img: '/static/images/demo/list/3.jpg',
						name: '米家空调',
						nameone: '1.5匹支流变频',
						pic: '2199',
						price: '2699'
					},
					{
						img: '/static/images/demo/list/2.jpg',
						name: '米家空调',
						nameone: '1.5匹支流变频',
						pic: '2199',
						price: '2699'
					}, {
						img: '/static/images/demo/list/5.jpg',
						name: '米家空调',
						nameone: '1.5匹支流变频',
						pic: '2199',
						price: '2699'
					}, {
						img: '/static/images/demo/list/6.jpg',
						name: '米家空调',
						nameone: '1.5匹支流变频',
						pic: '2199',
						price: '2699'
					}
				],
				tabIndex: 0 //条件渲染
			}
		},
		methods: {
			//返回上一层
			returni() {
				uni.navigateBack({
					delta: 1
				})
			},
			//更换导航内容一起
			tabactive(e) {
				this.tabIndex = parseInt(e.currentTarget.id) || parseInt(e.target.id)
			},
			loadMore() {

			},
			//更换内容导航一起
			ontabchange(e) {
				this.tabIndex = e.detail.current || e.target.current
			}
		}
	}
</script>

<style lang="scss">
	.scs {
		margin: 30rpx;
		padding: 30rpx;
		background-color: red;
	}

	.mine-myorder {
		height: 100%;
	}

	.hreder {
		display: flex;
		justify-content: space-between;
		line-height: 100rpx;
		height: 100rpx;
		padding: 0rpx 30rpx 0rpx 40rpx;
		border-bottom: #E5E5E5 2rpx solid;

		.iconfont {
			font-size: 50rpx;
		}

		.icon-sousuo {
			margin-right: 30rpx;
			font-size: 50rpx;
		}

		.icon-gouwuche {
			font-size: 50rpx;
		}
	}

	.tab-item {
		display: inline-block;
		height: 100rpx;
		width: 25%;
		text-align: center;
		color: #6D6D72;
		font-size: 35rpx;
		line-height: 100rpx;
	}

	.tab-item-active {
		color: #FD6801;
		border-bottom: 3rpx solid #FD6801;
	}

	.swiper-box {
		height: 1000rpx;
	}

	.list-scroll-content {
		height: 100%;
	}

	.footer {
		.tooer-hreder {
			height: 135rpx;
			position: relative;
			background-color: #f5f5f5;

			.text {
				width: 100%;
				text-align: center;
				color: #FD6801;
				font-weight: bold;
				border-bottom: 4rpx solid #D8D8D8;
				height: 80rpx;
			}

			.text-flex {
				font-size: 32rpx;
				width: 280rpx;
				text-align: center;
				color: #C0C0C0;
				background-color: #f5f5f5;
				position: absolute;
				bottom: 35rpx;
				left: 50%;
				transform: translateX(-50%);
			}
		}

		.footer-mian {
			display: flex;
			flex-wrap: wrap;

			.footer-box {
				width: 47%;
				margin: 0rpx 0rpx 10rpx 15rpx;
			}
		}
	}
</style>

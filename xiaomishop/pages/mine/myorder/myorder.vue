<template>
	<view id="mine-myorder">
		<view class="hreder">
			<span class="iconfont icon-2fanhui" @click="returni"></span>
			<view class="text">我的订单</view>
			<view>
				<span class="iconfont icon-sousuo"></span>
				<span class="iconfont icon-gouwuche"></span>
			</view>
		</view>
		<view class="tab-item" v-for="(item,index) in order" :class="tabIndex==index?'tab-item-active':''" @click="tabactive"
		 :id="index">{{item}}</view>
		<swiper class="swiper-box" style="flex: 1;" :duration="300" @change="ontabchange" :current="tabIndex">
			<swiper-item class="swiper-item" v-for="(tab,index1) in nothing" :key="index1">
				<scroll-view class="scroll-v list" enableBackToTop="true" scroll-y @scrolltolower="loadMore(index1)">
					<view class="order">
						<view class="image">
							<img :src="tab.image" mode="widthFix" />
						</view>
						<view class="text">{{tab.name}}</view>
					</view>

					<!-- <view class="loading-more" v-if="tab.isLoading || tab.data.length > 4">
						<text class="loading-more-text">{{tab.loadingText}}</text>
					</view> -->
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
	export default {
		components: {
			tuijian
		},
		data() {
			return {
				order: ["全部", "待付款", "待收货", "待评价"],
				nothing: [{
						image: "/static/images/nothing/no_receiving.png",
						name: "您的全部订单"
					},
					{
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
				newtext: [{
					img: '/static/images/demo/list/1.jpg',
					name: '米家空调',
					nameone: '1.5匹支流变频',
					pic: '2199',
					price: '2699'
				}, {
					img: '/static/images/demo/list/4.jpg',
					name: '米家空调',
					nameone: '1.5匹支流变频',
					pic: '2199',
					price: '2699'
				}, {
					img: '/static/images/demo/list/3.jpg',
					name: '米家空调',
					nameone: '1.5匹支流变频',
					pic: '2199',
					price: '2699'
				}, {
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
				}],
				tabIndex: 0
			}
		},
		methods: {
			returni() {
				uni.navigateBack({
					delta: 1
				})
			},
			tabactive(e) {
				this.tabIndex = parseInt(e.currentTarget.id) || parseInt(e.target.id)
			},
			loadMore() {

			},
			ontabchange(e) {
				this.tabIndex = e.detail.current || e.target.current
			}
		}
	}
</script>

<style lang="scss">
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

	.swiper-item {
		flex: 1;
		flex-direction: row;
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
		height: 500rpx;
	}

	.scroll-v {
		height: 500rpx;
		flex: 1;
		background-color: #f5f5f5;

		.order {
			position: absolute;
			left: 50%;
			top: 50%;
			transform: translate(-50%, -50%);
			text-align: center;

			.image {
				width: 300rpx;
				height: 250rpx;

				img {
					width: 100%;
					height: 100%;
				}
			}

			.text {
				color: #999999;
				font-size: 35rpx;
			}
		}

	}
	.footer{
		.tooer-hreder{
			height: 135rpx;
			position: relative;
			background-color: #f5f5f5;
			.text{
				width: 100%;
				text-align: center;
				color: #FD6801;
				font-weight: bold;
				border-bottom: 4rpx solid #D8D8D8;
				height: 80rpx;
			}
			.text-flex{
				font-size: 32rpx;
				width: 280rpx;
				text-align: center;
				color: #C0C0C0;
				background-color:#f5f5f5;
				position: absolute;
				bottom: 35rpx;
				left: 50%;
				transform: translateX(-50%);
			}
		}
		.footer-mian{
			display: flex;
			flex-wrap: wrap;
			.footer-box{
					 width: 48%;
			    margin: 0rpx 8rpx 8rpx 8rpx;
			}
		}
	}
</style>

<template>
	<view class="app">
		<view class="price-box">
			<text>支付金额</text>
			<view class="price">{{total}}</view>
		</view>

		<view class="pay-type-list">

			<view class="type-item b-b" @click="changePayType(1)">
				<text class="iconfont icon-weixinzhifu"></text>
				<view class="con">
					<text class="tit">微信支付</text>
					<text>推荐使用微信支付</text>
				</view>
				<label class="radio">
					<radio value="" color="#fa436a" :checked='payType == 1' />
					</radio>
				</label>
			</view>
			<view class="type-item b-b" @click="changePayType(2)">
				<text class="iconfont icon-zhifubao"></text>
				<view class="con">
					<text class="tit">支付宝支付</text>
				</view>
				<label class="radio">
					<radio value="" color="#fa436a" :checked='payType == 2' />
					</radio>
				</label>
			</view>
		</view>
		<text class="mix-btn" @click="confirm(true)">确认支付</text>
		<text class="mix-btn max-btn" @click="confirm(false)">取消支付</text>
	</view>
</template>

<script>
	import {
		mapState,
		mapMutations
	} from 'vuex' //导入状态管理
	export default {
		computed: {
			...mapState(['clearinggoods', "total"])
		},
		data() {
			return {
				payType: 1,
				orderInfo: {},
				total: 0
			};
		},
		computed: {

		},
		onLoad(options) {
			this.total = options.total
		},

		methods: {
			//选择支付方式
			changePayType(type) {
				this.payType = type;
			},
			//确认支付
			confirm: async function(e) {
				if (e) {
					uni.redirectTo({
						url: '/pages/mine/confirmpayment/paysuccess'
					})
				} else {
					uni.switchTab({
						url: '/pages/shopping/index'
					})
				}

			},
		}
	}
</script>

<style lang='scss'>
	.app {
		width: 100%;
	}

	.price-box {
		background-color: #fff;
		height: 265rpx;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		font-size: 28rpx;
		color: #909399;

		.price {
			font-size: 50rpx;
			color: #303133;
			margin-top: 12rpx;

			&:before {
				content: '￥';
				font-size: 40rpx;
			}
		}
	}

	.pay-type-list {
		margin-top: 20rpx;
		background-color: #fff;
		padding-left: 60rpx;

		.type-item {
			height: 120rpx;
			padding: 20rpx 0;
			display: flex;
			justify-content: space-between;
			align-items: center;
			padding-right: 60rpx;
			font-size: 30rpx;
			position: relative;
		}

		.iconfont {
			width: 100rpx;
			font-size: 52rpx;
		}

		.icon-zhifubao {
			color: #007AFF;
		}

		.icon-weixinzhifu {
			color: #36cb59;
		}

		.tit {
			/* font-size: $font-lg;
			color: $font-color-dark; */
			margin-bottom: 4rpx;
		}

		.con {
			flex: 1;
			display: flex;
			flex-direction: column;
			/* font-size: $font-sm;
			color: $font-color-light; */
		}
	}

	.mix-btn {
		display: flex;
		align-items: center;
		justify-content: center;
		width: 630rpx;
		height: 80rpx;
		margin: 30rpx auto 30rpx;
		font-size: 33rpx;
		color: #fff;
		background-color: #de207a;
		border-radius: 10rpx;
		box-shadow: 1px 2px 5px rgba(219, 63, 96, 0.4);
	}

	.max-btn {
		opacity: 0.8;
		background-color: #BAE3E5;
		color: #3B4144;
	}
</style>

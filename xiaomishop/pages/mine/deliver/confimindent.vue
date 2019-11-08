<template>
	<view id="user-confimindent">
		<view class="confimindent-top">
			<view class="title">
				<text class="iconfont icon-2fanhui" @click="fanhui"></text>
				<text class="text">订单配送至</text>
			</view>
			<view class="site">

			</view>
		</view>
		<view class="confimindent-bottom">
			<view class="user">
				<view class="pic">
					<image src="/static/images/demo/demo6.jpg" class="mypic"></image>
					<image src="/static/images/demo/demo6.jpg" class="mypic"></image>
					<image src="/static/images/demo/demo6.jpg" class="mypic"></image>
				</view>
				<view class="right">共三件 <text class="iconfont icon-you"></text> </view>
			</view>
			<view v-for="(item,index) in listText" :key="index">
				<view class="list">
					<text class="left">{{item.tesleft}}</text>
					<text class="right">{{item.price}}</text>
				</view>
			</view>
			<view class="list">
				<text class="left" style="color: #FD6801;">小计</text>
				<text class="right" style="color: #FD6801;">￥20.00</text>
			</view>
			<view class="invoice">
				<text class="text">发票</text>
				<text class="right">电子发票--个人></text>
			</view>
		</view>
		<view class="total">
			<view class="right">
				合计<text style="color: #FD6801;">￥20.00</text>
				<text class="btn">付款</text>
			</view>

		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				listText: [{
					tesleft: "商品总价",
					price: 20.00
				}, {
					tesleft: "运费",
					price: "包邮"
				}, {
					tesleft: "优惠券",
					price: "无可用"
				}]
			}
		},

	}
</script>

<style lang="scss" scoped>
	#user-confimindent {
		position: relative;
	}

	.confimindent-top {
		height: 400rpx;
		width: 100%;
		background-color: #FD6801;

		.title {
			height: 80rpx;
			line-height: 80rpx;
			color: white;
			text-align: center;

			.icon-2fanhui {
				float: left;
				padding-left: 15rpx;
			}

			.text {
				font-size: 34rpx;
			}
		}

		.site {
			height: 200rpx;
			line-height: 200rpx;
			color: white;

			.siteleft {
				float: left;
				padding-left: 15rpx;
			}

			.siteright {
				float: right;
				padding-right: 15rpx;
			}
		}
	}

	.confimindent-bottom {
		height: 500rpx;
		width: 100%;
		background-color: white;
		border-top-left-radius: 20rpx;
		border-top-right-radius: 20rpx;
		position: absolute;
		top: 380rpx;
		left: 0rpx;

		.user {
			height: 160rpx;

			.pic {
				float: left;
				padding-left: 15rpx;
				height: 160rpx;
				line-height: 160rpx;

				.mypic {
					width: 80rpx;
					height: 80rpx;
				}
			}

			.right {
				float: right;
				padding-right: 15rpx;
				height: 160rpx;
				line-height: 160rpx;
			}
		}

		.list {
			height: 100rpx;
			line-height: 100rpx;

			.left {
				float: left;
				padding-left: 20rpx;
			}

			.right {
				float: right;
				padding-right: 15rpx;
			}
		}

		.invoice {
			height: 100rpx;
			line-height: 100rpx;
			margin-top: 20rpx;

			.text {
				float: left;
				padding-left: 20rpx;
			}

			.right {
				float: right;
				padding-right: 15rpx;
			}
		}
	}

	.total {
		height: 100rpx;
		line-height: 100rpx;
		position: fixed;
		bottom: 0;
		text-align: right;

		.right {
			.btn {
				padding: 10rpx 30rpx;
				background-color: #FD6801;
				border-radius: 15rpx;
				color: white;
			}
		}

	}
</style>

<template>
	<view id="mine-article">
		<!-- 头部导航 -->
		<view class="hreder">
			<span class="iconfont icon-2fanhui" @click="returni"></span>
			<view class="text">小米商城</view>
			<span class="iconfont icon-gouwuche1" @click="returni"></span>
		</view>
		<view class="h3">Redmi k20 Rro常见购机咨询</view>
		<view class="h4">售前咨询:</view>
		<view class="article">
			<view class="text">1 . 怎么参与Redmi k20 Rro定金预售？</view>
			<view class="text">答：定金预售活动在5月28日18:00开启，成功支付定金后即表示成功预订Redmi k20 Rro手机。点击“我的”-“待付款”即可进行尾款支付，尾款支付时间6月1日0点至24点。</view>
		</view>
		<view class="article">
			<view class="text">2 . 定金预售的定金可以退还吗？</view>
			<view class="text">答：支付100元定金后，可以申请退款，退款将在财务审核后及时退回。</view>
		</view>
		<view class="article">
			<view class="text">3 . Redmi k20 Rro标配什么充电器？</view>
			<view class="text">答：原装标配18W充电器。Redmi k20 Rro最高可支付27W有线快充，如有需要，可自行选购。</view>
		</view>
		<view class="article">
			<view class="text">4 . Redmi k20 Rro有哪些套装可以购买？</view>
			<view class="text">答:在售套装有:<br>(1)Redmi k20 Rro+Redmi 20寸红色旅行箱套装。旅行箱原价299元，套装内价格199元，</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {

			}
		},
		methods:{
			returni(){
				//返回上一层
				uni.navigateBack({
					delta:1
				})
			}
		}
	}
</script>

<style lang="scss">
	.hreder {
		height: 100rpx;
		line-height: 100rpx;
		display: flex;
		justify-content: space-between;
		background-color: #F1F1F1;
		border-bottom: solid 1px #DDDDDD;

		.icon-2fanhui {
			font-size: 40rpx;
			text-indent: 25rpx;
			color: #7C858D;
		}

		.text {
			color: #555555;
		}

		.icon-gouwuche1 {
			font-size: 50rpx;
			margin-right: 40rpx;
		}
	}

	.h3 {
		margin: 40rpx;
		font-size: 40rpx;
	}

	.h4 {
		font-weight: bold;
		font-size: 36rpx;
		color:#2C405A;
		margin: 0rpx 0rpx 20rpx 40rpx;
	}
	.article{
		color:#333333;
		font-size: 35rpx;
		margin: 0rpx 20rpx 40rpx 40rpx;
		.text{
			line-height: 40rpx;
		}
	}
</style>

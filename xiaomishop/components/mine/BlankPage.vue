<template>
	<view id="mine-blank">
		<view class="order">
			<view class="image">
				<img :src="nothing[0].image" mode="widthFix" />
			</view>
			<view class="text">{{nothing[0].name}}</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
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
			}
		}
	}
</script>

<style lang="scss">
	.order {
		// height: 300rpx;
		position: absolute;
		left: 50%;
		top: 50%;
		transform: translate(-50%, -50%);
		text-align: center;
		background-color: white;

		.image {
			maring: 0rpx auto;
			width: 300rpx;
			height: 250rpx;

			img {
				width: 100%;
				height: 100%;
			}
		}

		.text {
			color: #999999;
			line-height: 100rpx;
			font-size: 32rpx;
		}
	}
</style>

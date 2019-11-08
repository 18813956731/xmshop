<template>
	<view>
		<view class="order">
			<view class="image">
				<image :src="nothing.ime" mode="widthFix"></image>
			</view>
			<view class="text">{{nothing.title}}</view>
		</view>
	</view>
</template>

<script>
	export default {
		props: {
			nothing: Object
		},
		data() {
			return {}
		}
	}
</script>

<style lang="scss">
	.order {
		height: 300rpx;
		position: absolute;
		left: 50%;
		top: 50%;
		transform: translate(-50%, -50%);
		text-align: center;
		background-color: #F5F5F5;

		.image {
			maring: 0rpx auto;
			width: 300rpx;
			height: 250rpx;

			image {
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

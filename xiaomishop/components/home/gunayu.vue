<template>
	<view>
		<view class="gaunyu">
			<view class="gy">
				<view>
					<image src="../../static/xm.jpg" style="width: 100rpx;height: 100rpx;" mode=""></image>
				</view>
				小米商城 4.5.3.0529.r1
			</view>
		</view>
		<view class="act">
			<view class="banben">版本更新<text class="iconfont icon-you text"></text></view>
			<view class="banben">了解小米<text class="iconfont icon-you text"></text></view>
			<view class="banben">官方微博<text class="iconfont icon-you text"></text></view>
			<view class="banben">廉洁小米<text class="iconfont icon-you text"></text></view>
			<view class="banben">app分享<text class="iconfont icon-you text"></text></view>
			<view class="banben">授权直供店<text class="iconfont icon-you text"></text></view>
			<view class="banben">清楚缓存<text class="iconfont icon-you text"></text></view>
		</view>
		<view class="xiaomi">探索黑科技，小米为发烧而生！</view>
	</view>
</template>

<script>
</script>

<style scoped>
	.gaunyu {
		width: 750rpx;
		height: 370rpx;
		background-color: #F5F5F5;
		text-align: center;
		display: table-cell;
		vertical-align: middle;
	}

	.gy {
		display: inline-block;
	}

	.act {
		display: flex;
		justify-content: flex-end;
		flex-wrap: wrap;
	}

	.banben {
		width: 90%;
		padding: 30rpx;
		border-bottom: 1px solid #007AFF;
		overflow: hidden;
	}

	.text {
		float: right;
	}

	.xiaomi {
		width: 100%;
		padding: 30rpx;
		text-align: center;
		background-color: #F0AD4E;
	}
</style>

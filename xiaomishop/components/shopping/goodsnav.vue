<template>
	<view class="content">
		<!-- 底部占位 -->
		<view class="footer">
			<view class="icon">
			</view>
			<view class="total">
				<text>合计:</text>
				<text class="yen">￥3232</text>
			</view>
			<view class="close">
				<text>结算</text>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data(){
		return {}
		},
		methods: {
			
		}
	}
</script>

<style scoped>
	.footer{
		width: 100%;
		height: 100rpx;
		display: flex;
		justify-content: space-between;
		background-color: #FFF;
		z-index: 88;
	}
	.footer text{
		font-size: 35rpx;
	}
	.icon {
		height: 100rpx;
		width: 130rpx;
		box-sizing: border-box;
		background: url(https://cdn.it120.cc/images/weappshop/gou.png) no-repeat 50% 50%;
		background-size: 40rpx auto;
	}
	.icon .active {
		height: 100rpx;
		width: 130rpx;
		background-image: url(https://cdn.it120.cc/images/weappshop/gou-red.png) no-repeat;
	} 
	.total{
		line-height: 100rpx;
	}
	.yen{
		color: #FD6801;
		margin-left: 30rpx;
	}
	.close{
		line-height: 100rpx;
		width: 300rpx;
		color: white;
		height: 100rpx;
		background-color:#FD6801;
		text-align: center;
	}
</style>
<template>
	<view class="content">
		<!-- 底部占位 -->
		<view class="footer">
			<view class="icon">
			</view>
			<view class="ftsc" v-show="!editor">
				<view class="total">
					<text>合计:</text>
					<text class="yen">￥3232</text>
				</view>
				<view class="close">
					<text>结算</text>
				</view>
			</view>
			<view class="ftsc" v-show="editor">
				<view class="collect">
					<text>移入收藏</text>
				</view>
				<view class="del">
					<text>删除</text>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data(){
		return {}
		},
		props:['editor'],
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
		text-align: center;
		width: 50%;
	}
	.yen{
		color: #FD6801;
		margin-left: 20rpx;
	}
	.close{
		line-height: 100rpx;
		width: 50%;
		color: white;
		height: 100rpx;
		background-color:#FD6801;
		text-align: center;
	}
	.ftsc{
		width: 80%;
		display: flex;
		justify-content: space-between;
	}
	.collect{
		width: 50%;
		background-color: #FD6801;
		text-align: center;
		line-height: 100rpx;
		color: white;
	}
	.del{
		width:50%;
		background-color: #DC3546;
		text-align: center;
		line-height: 100rpx;
		color: white;
	}
</style>
<template>
	<view id="salesForm">
		<view class="line"></view>
		<view class="products">
			<view class="tit" style="border:none">申请售后的产品</view>
			<view class="uni-list">
				<view class="uni-list-cell" hover-class="uni-list-cell-hover" v-for="(value,key) in list" :key="key">
					<view class="uni-media-list">
						<view class="uni-media-list-logo">
							<image v-if="showImg" :src="value.img"></image>
						</view>
						<view class="uni-media-list-body">
							<view class="uni-media-list-text-top">{{value.title}}</view>
							<view class="uni-media-list-text-bottom uni-ellipsis">{{value.content}}</view>
						</view>
					</view>
				</view>
			</view>
		</view>
		<view class="line"></view>
		<view class="typeService">
			<view class="tit">服务类型</view>
			<view class="service">
				<text>维修</text>
			</view>
		</view>
		<view class="line"></view>
		<view class="problem">
			<view class="tit">问题描述</view>
			<view class="detail">
				<view class="uni-textarea">
					<textarea placeholder-style="color:#D1D1D1" placeholder="请详细描述下你遇到的问题吧" />
				</view>
				<view class="photograph">
					<text class="iconfont icon-paizhao"></text>
					<text>0/200</text>
				</view>
			</view>
		</view>
		<view class="next">下一步</view>
	</view>
</template>
<script>
	export default{
		data() {
			return {
				showImg: false,
				list: [{
						title: "小米8 青春 6GB+128G 梦幻蓝 ",
						content: "维修服务:剩余111天",
						img: "/static/images/demo/list/1.jpg"
					}
				]
			}
		},
		onLoad() {
			setTimeout(() => {
				this.showImg = true;
			}, 400)
		}
	}
</script>
<style>
	#salesForm {
		position: fixed; 
		width: 100%;
		height: 100%;
		background-color: #EEEEEE;
	}
	.line{
		width: 100%;
		height: 20rpx;
	}
	.products,.typeService{
		background-color: white;
	}
	.uni-media-list-text-top{
		font-size: 28rpx;
	}
	.tit{
		width: 100%;
		height: 80rpx;
		line-height: 80upx;
		border-bottom: 1rpx solid #E0E0E0;
		margin-left: 20rpx;
		font-size: 28rpx;
		color: #7A7E83;
	}
	.uni-list{
		height: 180rpx;
	}
	.uni-media-list-body{
		margin-top:20rpx;
	}
	.uni-media-list-logo{
		height: 120rpx;
		width: 120rpx;
	}
	.service{
		width: 100%;
		height: 120rpx;
		line-height: 120rpx;		
	}
	.service text{
		display: inline-block;
		width: 150rpx;
		height: 80rpx;
		line-height: 80rpx;
		text-align: center;
		border: 1rpx solid #F5B181;
		margin-left:20rpx;
		color:#FF6B01;
		font-size: 28rpx;
	}
	.problem{
		background-color: white;
		height:404rpx
	}
	.detail{				
		margin: 20rpx;
		border-radius: 15rpx;
		border: 1rpx solid #D1D1D1;
	}
	.photograph{
		color: #D1D1D1;
		display: flex;
		justify-content: space-between;
		padding: 0px 20rpx;
		height:40rpx;
		line-height:40rpx;
		margin-bottom:10rpx;
		font-size: 30rpx;
	}
	.icon-paizhao{
		font-size: 40rpx;
		color: #D6D6D6;
	}
	.next{
		height: 100rpx;
		line-height: 100rpx;
		background-color: #FF6B01;
		text-align: center;
		color: white;
		margin: 25rpx;
	}
</style>
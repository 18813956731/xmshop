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
						title: "米加金属签字笔 金色",
						content: "能和心爱的人一起睡觉，是件幸福的事情；可是，打呼噜怎么办？",
						img: "/static/images/demo/demo1.jpg"
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
		font-size: 60upx;
	}
	.line{
		width: 100%;
		height: 20upx;
	}
	.products,.typeService{
		background-color: white;
	}
	.tit{
		width: 100%;
		height: 80upx;
		line-height: 80upx;
		border-bottom: 1upx solid #E0E0E0;
		margin-left: 20upx;
	}
	.uni-list{
		height: 180upx;
	}
	.uni-media-list-body{
		margin-top:20upx;
	}
	.uni-media-list-logo{
		height: 120upx;
		width: 120upx;
	}
	.service{
		width: 100%;
		height: 120upx;
		line-height: 120upx;		
	}
	.service text{
		display: inline-block;
		width: 150upx;
		height: 80upx;
		line-height: 80upx;
		text-align: center;
		border: 1upx solid #FF6B01;
		margin-left:20upx;
		color:#FF6B01;
	}
	.problem{
		background-color: white;
		height:404upx
	}
	.detail{				
		margin: 20upx;
		border-radius: 15upx;
		border: 1upx solid #D1D1D1;
	}
	.photograph{
		color: #D1D1D1;
		display: flex;
		justify-content: space-between;
		padding: 0px 20upx;
		height:40upx;
		line-height:40upx;
		margin-bottom:10upx;
	}
	.icon-paizhao{
		font-size: 40upx;
		color: #D6D6D6;
	}
	.next{
		height: 100upx;
		line-height: 100upx;
		background-color: #FF6B01;
		text-align: center;
		color: white;
		margin: 25upx;
	}
</style>
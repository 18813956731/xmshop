<template>
	<view id="afterSales">
		<view class="information">
			<view class="text">订单号:5180925177903542</view>
			<view>订单时间:2018年09月25日 11:34</view>
		</view>
		<view class="line"></view>
		<view class="uni-list">
			<view class="uni-list-cell" hover-class="uni-list-cell-hover" v-for="(value,key) in list" :key="key" @tap="topage">
				<view class="uni-list-cell-navigate uni-navigate-right uni-media-list ">
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
					},
					{
						title: "木屋",
						content: "想要这样一间小木屋，夏天挫冰吃瓜，冬天围炉取暖。",
						img: "/static/images/demo/demo2.jpg"
					},
					{
						title: "CBD",
						content: "烤炉模式的城，到黄昏，如同打翻的调色盘一般。",
						img: "/static/images/demo/demo3.jpg"
					}
				]
			}
		},
		onLoad() {
			setTimeout(() => {
				this.showImg = true;
			}, 400)
		},
		methods: {
			topage() {
				uni.navigateTo({
					url:"/pages/mine/sales/sales-service"
				})
			}
		},
	}
</script>
<style lang="scss">
	#afterSales {
		position: fixed; 
		width: 100%;
		height: 100%;
		background-color: #EEEEEE;
	}
	.information{
		height: 120rpx;
		width: 100%;
		background-color: white;
		text-indent: 1em;
		font-size: 28rpx;
		.text{
			color: #7A7E83;
			line-height: 63rpx;
		}
	}
	.line{
		width: 100%;
		height: 20rpx;
	}
	.uni-media-list{
		height: 200rpx;
	}
	.uni-media-list-logo{
		height: 120rpx;
		width: 120rpx;
	}
</style>
<template>
	<view id="common-about">
		<!-- 头部图片 -->
		<view class="about">
			<view class="about-hreder">
				<view class="images">
					<img src="../../../static/xm.jpg" mode="widthFix" />
				</view>
				<view class="text">小米商城 4.5.3.0529.r1</view>
			</view>
		</view>
		<!-- 内容导航 -->
		<view class="act">
			<view class="banben" v-for="(itme,index) in list">
				{{itme}}
				<span class="iconfont icon-you text"></span>
			</view>
		</view>
		<view class="xiaomi">探索黑科技，小米为发烧而生！</view>
	</view>
</template>

<script>
	export default{
		data(){
			return{
				list:["版本更新","了解小米","官方微博","廉洁小米","app","分享","授权直供店","清楚缓存"]//渲染数据
			}
		}
	}
</script>

<style lang="scss">
	.about {
		width: 750rpx;
		height: 370rpx;
		background-color: #F5F5F5;
		text-align: center;
		display: table-cell;
		vertical-align: middle;
	}

	.about-hreder {
		display: inline-block;
		.images{
			height: 150rpx;
			width: 150rpx;
			margin: 0rpx auto;
			img{
				width: 100%;
				height: 100%;
			}
		}
		.text{
			line-height: 60rpx;
			font-size: 30rpx;
			color: #999999;
		}
	}

	.act {
		color: #6D6D72;
		display: flex;
		justify-content: flex-end;
		flex-wrap: wrap;
	}

	.banben {
		width: 90%;
		padding: 26rpx;
		border-bottom: 1px solid #E5E5E5;
		font-size: 32rpx;
		overflow: hidden;
	}
   .icon-you{
	   color: #929292;
   }
	.text {
		float: right;
	}

	.xiaomi {
		width: 100%;
		height: 108rpx;
		line-height: 110rpx;
		font-size: 33rpx;
		color: #999999;
		text-align: center;
		background-color:#F5F5F5 ;
	}
</style>

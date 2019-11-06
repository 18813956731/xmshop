<template>
	<view id="mina-myfeedback">
		<view class="hreder">
			<span class="iconfont icon-2fanhui" @click="returni"></span>
			<view class="text">我的反馈</view>
		</view>
		<view v-if="ticve">
				<view class="center">您还没有提交任何反馈</view>
		</view>
		<view v-else>
			<view>123</view>
		</view>
	</view>
</template>

<script>
	export default{
		data(){
			return{
				ticve:true
			}
		},
		methods:{
			//返回上一层
			returni(){
				uni.navigateBack({
					delta:1
				})
			}
		}
	}
</script>

<style lang="scss">
	.hreder{
	width: 100%;
	height: 100rpx;
	line-height: 100rpx;
	display:flex;
	background-color: #E9E9E9;
	.icon-2fanhui{
		color: #333333;
		text-indent: 30rpx;
	}
	.text{
		color: #3F536E;
		text-indent: 30rpx;
	}
	}
	.center{
		font-size: 35rpx;
		color: #C0C0C0;
		position: absolute;
		top: 50%;
		left: 50%;
		transform: translate(-50%,-50%);
	}
</style>

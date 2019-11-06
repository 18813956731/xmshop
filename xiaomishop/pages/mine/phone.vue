<template>
	<view class="container">
		<h1>手机号登录</h1>
		<view class="input"><input type="text" class="txt" name="text" placeholder="请输入手机号" /></view>
		<view class="password">
			<input type="text" class="txt2" placeholder="请输入验证码" />
			<span>获取验证码</span>
			</view>
		<view class="tishi" @click="login">
			用账号密码登录
			<span class="iconfont icon-you"></span>
		</view>
		<view class="button"><button>登录</button></view>
		<view class="checkbox">
			<checkbox value="cb" />
			<span>已阅读并同意小米</span>
			<b>账号协议、隐私政策</b>
			<span>和</span>
			<b>小米商城用户协议</b>
		</view>
		<view class="icon">
			<span class="iconfont icon-zhifubao"></span>
			<span class="iconfont icon-weixinzhifu"></span>
		</view>
	</view>
</template>

<script>
export default{
	data(){
		return{
			
		}
	},
	methods:{
		login(){
			// uni.navigateTo({
			// 	url:""
			// })
			console.log("跳转账号密码登录")
		}

	}
}
</script>

<style scoped>
.container {
	padding: 5%;
}
h1 {
	margin: 60rpx 0rpx;
}
.txt {
	width: 100%;
	height: 60rpx;
	border: none;
}
.txt2 {
	display: block;
	float: left;
	width: 40%;
	height: 60rpx;
	border: none;
}
.password span{
	margin-left: 100rpx;
}
.input {
	padding: 10rpx 0rpx;
	border-bottom: 1rpx solid black;
}
.password {
	height: 60rpx;
	overflow: hidden;
	margin-top: 80rpx;
	padding: 10rpx 0rpx;
	border-bottom: 1rpx solid black;
}
.tishi {
	margin-top: 100rpx;
	font-size: 25rpx;
	color: #999999;
	height: 35rpx;
	line-height: 35rpx;
	/* border: 1rpx solid black; */
}
.button button {
	width: 100%;
	height: 80rpx;
	margin-top: 100rpx;
	width: 100%;
	line-height: 80rpx;
	text-align: center;
	outline: none;
	border: none;
	background-color: orange;
}
.checkbox {
	margin-top: 30rpx;
	height: 80rpx;
	line-height: 80rpx;
	font-size: 25rpx;
}
.checkbox span {
	color: #999999;
}
.icon {
	width: 100%;
	height: 200rpx;
	overflow: hidden;
}
.icon-zhifubao {
	line-height: 200rpx;
	display: block;
	float: left;
	width: 40%;
	text-align: right;
	padding-right: 50rpx;
}
.icon-weixinzhifu {
	line-height: 200rpx;
	display: block;
	float: left;
	width: 40%;
	text-align: left;
	padding-left: 50rpx;
}
</style>

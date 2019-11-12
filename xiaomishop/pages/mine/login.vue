<template>
	<view class="container">
		<h1>密码登录</h1>
		<view class="input"><input type="text" class="txt" name="text" placeholder="请输入手机号/邮箱/小米号" v-model="txt" /></view>
		<view class="password"><input type="password" class="txt" placeholder="请输入密码" v-model="pasd" /></view>
		<view class="tishi" @click="phone">
			没有账号前往注册页面
			<span class="iconfont icon-you"></span>
		</view>
		<view class="button"><button @tap="login">登录</button></view>
		<view class="checkbox">
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
import { mapState, mapMutations } from 'vuex';
export default {
	computed: {
		...mapState(['token'])
	},
	data() {
		return {
			txt: '',
			pasd: ''
		};
	},
	methods: {
		phone() {
			uni.navigateTo({
				url: '/pages/mine/phone'
			});
		},
		login() {
			let _this = this;
			uni.request({
				//登录
				url: 'http://ceshi3.dishait.cn/api/login',
				method: 'POST',
				data: {
					username: _this.txt,
					password: _this.pasd
				},
				success(res) {
					let token = res.data.data.token;
					_this.$store.commit('login', token);
					console.log(res);
					uni.switchTab({
						url: '/pages/mine/index/index'
					});
				}
			});
			
		},
	}
		
};
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
.input {
	padding: 10rpx 0rpx;
	border-bottom: 1rpx solid black;
}
.password {
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

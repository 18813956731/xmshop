<template>
	<view class="container">
		<h1>注册</h1>
		<view class="input"><input type="text" class="txt" name="text" placeholder="请输入手机号/账号" v-model="txt" /></view>
		<view class="password"><input type="text" class="txt2" placeholder="请输入密码" v-model="pasd" /></view>
		<view class="tishi" @click="login">
			已有账号前往密码登录
			<span class="iconfont icon-you"></span>
		</view>
		<view class="button"><button @click="gettxt_Pasd">注册</button></view>
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
		...mapState(['txt_Pasd'])
	},
	data() {
		return {
			txt: '',
			pasd: ''
		};
	},
	methods: {
		// 已有账号前往登录界面
		login() {
			uni.navigateTo({
				url: '/pages/mine/login'
			});
		},
		gettxt_Pasd() {
			//注册
			let _this = this;
			let arr = [_this.txt, _this.pasd]; //账号密码存到一个数组里
			if (_this.txt_Pasd.length == 0) {
				_this.$store.commit('gettxt_Pasd', arr); //条件成立注册成功
			} else {
				for (let i = 0; i < _this.txt_Pasd.length; i++) {
					// 循环判断账号是否为空或者账号重复
					if (_this.txt_Pasd[i].indexOf(arr[0]) == -1 && arr[0] != '' && arr[1] != '') {
						_this.$store.commit('gettxt_Pasd', arr); //条件成立注册成功
						console.log('注册成功');
						uni.navigateTo({
							url: '/pages/mine/login'
						});
					} else {
						console.log('账号重复或者账号密码为空');
					}
				}
			}

			console.log(_this.txt_Pasd);
		}
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
.txt2 {
	display: block;
	float: left;
	width: 40%;
	height: 60rpx;
	border: none;
}
.password span {
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

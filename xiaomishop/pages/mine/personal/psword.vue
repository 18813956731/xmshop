<template>
	<view id="mine-psword">
		<!-- 头部导航 -->
		<view class="hreder">
			<span class="iconfont icon-2fanhui" @click="returni"></span>
			<view class="text">修改密码</view>
		</view>
		<!-- 主体 -->
		<view class="main">
			<!-- 表单 -->
			<form @submit="formSubmit" @reset="">
				<view class="flex">
					<label>当前密码</label>
					<input type="number" value="" name="input" placeholder="请输入" />
				</view>
				<view class="flex">
					<label>新密码</label>
					<input type="number" value=""name="input" placeholder="请输入" />
				</view>
				<view class="flex">
					<label>确认密码</label>
					<input type="number" value=""name="input" placeholder="请输入" />
				</view>
				<view class="text">密码长度8-16位，数字，字母，符号至少包含两种</view>
				<button class="footer" form-type="submit">确认</button>
			</form>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {

			}
		},
		methods: {
			//返回上一层
			returni() {
				uni.navigateBack({
					delta: 1
				})
			},
			//提交修改
			formSubmit(e) {
			}

		}
	}
</script>

<style lang="scss">
	.hreder {
		height: 100rpx;
		line-height: 100rpx;
		display: inline-flex;
		width: 100%;
		background-color: #FAFAFA;
		border-bottom: 2rpx solid #DDDDDD;

		.icon-2fanhui {
			font-size: 40rpx;
			text-indent: 25rpx;
		}

		.text {
			text-indent: 30rpx;
		}
	}

	.main {
		width: 100%;
		height: 1212rpx;
		background-color: #F5F5F5;
		padding-top: 20rpx;

		.flex {
			background-color: white;
			width: 100%;
			display: inline-block;
			padding-bottom: 5rpx;

			label {
				text-indent: 35rpx;
				width: 250rpx;
				float: left;
				line-height: 100rpx;
				color: #2C405A;
			}

			input {
				height: 100rpx;
				line-height: 100rpx;
			}
		}

		.text {
			font-size: 30rpx;
			text-align: center;
			color: #C8C7CC;
			line-height: 100rpx;
		}

		.footer {
			height: 100rpx;
			width: 90%;
			margin: auto;
			text-align: center;
			background-color: #FD6801;
			line-height: 100rpx;
			color: white;
		}
	}
</style>

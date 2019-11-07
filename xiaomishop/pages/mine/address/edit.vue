<template>
	<view id="mina-edit">
		<!-- 头部导航 -->
		<view class="hreder">
			<span class="iconfont icon-2fanhui" @click="returni"></span>
			<view class="text">编辑收货地址</view>
			<view class="text-right">删除</view>
		</view>
		<!-- 主体 -->
		<view class="main">
			<!-- 表单 -->
			<form @submit="fomsubmit" @reset="">
				<!-- 收货人 -->
				<view class="flex">
					<label>收货人:</label>
					<input type="text" value="" name="input1" />
				</view>
				<!-- 手机号码 -->
				<view class="flex">
					<label>手机号码:</label>
					<input type="text" value="" name="input2" />
				</view>
				<!-- 所在地区 -->
				<view class="hr"></view>
				<view class="flex">
					<label>所在地区:</label>
					<input type="text" value="" name="input3"/>
				</view>
				<!-- 详细地址 -->
				<view class="flex">
					<label>详细地址:</label>
					<input type="text" value="" name="input4"/>
				</view>
				<view class="hr"></view>
				<!-- 设置默认地址 -->
				<view class="flex">
					<label>设置默认地址:</label>
					<switch checked="flase" @change="switchchange" name="switch" color="#FD6801" />
				</view>
				<button form-type="submit" class="footer">保存</button>
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
			//设置默认地址
			switchchange(e) {
				console.log('switch1 发生 change 事件，携带值为', e.target.value)
			},
			//返回上一层
			returni(){
				uni.navigateBack({
					delta:1
				})
			},
			//提交
			fomsubmit(e){
				console.log("1123")
				console.log(JSON.stringify(e.detail.value))
			}
		}
	}
</script>

<style lang="scss">
	.hreder {
		height: 100rpx;
		line-height: 100rpx;
		display: flex;
		justify-content: space-between;

		.icon-2fanhui {
			font-size: 40rpx;
			text-indent: 25rpx;
			// margin-right: 250rpx;
		}

		.text {
			margin: auto;
			text-align: center;
		}

		.text-right {
			margin-right: 30rpx;
			font-size: 35rpx;
			color: #999999;
		}
	}

	.main {
		width: 100%;
		height: 1234rpx;
		background-color: #F5F5F5;

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
				font-size: 35rpx;
			}

			input {
				height: 100rpx;
				line-height: 100rpx;
			}

			switch {
				float: right;
				height: 100rpx;
				line-height: 100rpx;
			}
		}

		.hr {
			height: 5rpx;
			background-color: #F5F5F5;
		}

		.footer {
			height: 100rpx;
			width: 90%;
			margin: 40rpx 20rpx 0rpx 40rpx;
			text-align: center;
			background-color: #FD6801;
			line-height: 100rpx;
			color: white;
		}
	}
</style>

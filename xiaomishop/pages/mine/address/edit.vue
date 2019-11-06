<template>
	<view id="mina-edit">
		<view class="hreder">
			<span class="iconfont icon-2fanhui" @click="returni"></span>
			<view class="text">编辑收货地址</view>
			<view class="text-right">删除</view>
		</view>
		<view class="main">
			<view class="flex">
				<label>收货人:</label>
				<input type="text" value="" />
			</view>
			<view class="flex">
				<label>手机号码:</label>
				<input type="text" value="" />
			</view>
			<view class="hr"></view>
			<view class="flex">
				<label>所在地区:</label>
				<input type="text" value="" />
			</view>
			<view class="flex">
				<label>详细地址:</label>
				<input type="text" value="" />
			</view>
			<view class="hr"></view>
			<view class="flex">
				<label>设置默认地址:</label>
				<switch checked="flase" @change="switchchange" color="#FD6801" />
			</view>
			<view class="footer" @click="baoc">保存</view>
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
			switchchange(e) {
				console.log('switch1 发生 change 事件，携带值为', e.target.value)
			},
			returni(){
				uni.navigateBack({
					delta:1
				})
			},
			baoc(){
				uni.showToast({
					title: '点击保存',
					icon: 'none'
				})
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

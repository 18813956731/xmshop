<template>
	<view id="salesService">
		<view class="tag">
			<view class="apply" :class="current==0?'action':''" @click="onClickItem(0)">售后申请</view>
			<view class="follow-up" :class="current==1?'action':''" @click="onClickItem(1)">进度查询</view>
		</view>
		<view v-show="current==0">
			<view class="line"></view>
			<view class="device number">
				<text>设备号申请</text>
				<text class="iconfont icon-gantan1"></text>
			</view>
			<view class="Imei">
				<view class="con-imei">
					<input type="text" placeholder="请输入IMEI或SN码" placeholder-style="color:#D1D1D1" />
					<view style="display: flex;justify-content: space-around;width: 50%;">
						<input type="text" placeholder="获取本机IMEI" placeholder-style="color:#D1D1D1" />
						<view class="btn">申请售后</view>
					</view>
				</view>
			</view>
			<view class="line"></view>
			<view class="time">2018-09-25 11:34</view>
			<view class="uni-list">
				<view class="uni-list-cell" v-for="(item,index) in list" :key="index">
					<view class="uni-list-cell-navigate">
						<image :src="item.image" mode=""></image>
						<view class="text">{{item.title}}</view>
						<view class="btn" @tap="apply">申请售后</view>
					</view>
				</view>
			</view>
		</view>
		<view class="inquire" v-show="current==1"><text>无进度</text></view>
	</view>
</template>
<script>
	export default {
		data() {
			return {
				current: 0,
				activeColor: '#FEAB88',
				styleType: 'text',
				styleIndex: 0,
				colorIndex: 0,
				list: [{
					image: "/static/images/demo/list/3.jpg",
					title: "小米8 青春 全网通版 6GB内存 梦幻蓝 128G"
				}, {
					image: "/static/images/demo/list/1.jpg",
					title: "小米8"
				}]
			}
		},
		methods: {
			onClickItem(index) {
				if (this.current !== index) {
					this.current = index;
				}
			},
			apply() {
				uni.navigateTo({
					url: "/pages/mine/sales/sales-form"
				})
			}
		},
	}
</script>
<style lang="scss">
	#salesService {
		position: fixed;
		width: 100%;
		height: 100%;
		background-color: #EEEEEE;
	}

	.line {
		width: 100%;
		height: 20rpx;
	}

	.tag {
		width: 100%;
		height: 100rpx;
		line-height: 100rpx;
		display: flex;
		justify-content: space-around;
		background-color: white;
	}

	.apply,
	.follow-up {
		height: 100upx;
		line-height: 100rpx;
		font-size: 32rpx;
	}

	.action {
		border-bottom: 4rpx solid #FF6B01;
		color: #FF6B01;
	}

	.device,
	.time {
		height: 70rpx;
		line-height: 70rpx;
		background-color: white;
		font-size: 30rpx;
	}

	.device text {
		margin-left: 30rpx;
		font-size: 30rpx;
	}

	.icon-gantan {
		color: #D1D1D1;
	}

	.Imei {
		width: 100%;
		padding: 30rpx 20rpx 40rpx;
		background-color: white;
	}

	.con-imei {
		width: 100%;
		height: 80rpx;
		line-height: 80rpx;
		display: flex;
		justify-content: space-around;
		border-bottom: 1rpx solid #E0E0E0;
		background-color: white;
	}

	.Imei input {
		height: 80rpx;
		line-height: 80rpx;
	}

	.btn {
		width: 220rpx;
		height: 60rpx;
		line-height: 60rpx;
		border: 1rpx solid #F0AD4E;
		color: #FF7200;
		text-align: center;
		margin-top: 10rpx;
		margin-right: 40rpx;
		font-size: 25rpx;
	}

	.time {
		padding-left: 30rpx;
		color: #D1D1D1;
	}

	.uni-list-cell-navigate image {
		width: 150rpx;
		height: 150rpx;
	}

	.uni-list-cell-navigate {
		.btn {
			width: 140rpx;
			margin: 0px;
		}
		.text {
			width: 350rpx;
			font-size: 30rpx;
			color: #333333;
		}
	}

	.inquire {
		position: fixed;
		width: 100%;
		height: 100%;
		display: flex;
	}

	.inquire text {
		margin: auto;
	}
</style>

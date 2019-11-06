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
			<text class="iconfont icon-gantan"></text>
		</view>
		<view class="Imei">
			<view class="con-imei">
			<input type="text" placeholder="请输入IMEI或SN码" placeholder-style="color:#D1D1D1"/>
			<view style="display: flex;justify-content: space-around;width: 50%;">
				<input type="text" placeholder="获取本机IMEI" placeholder-style="color:#D1D1D1"/>
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
					<view class="">{{item.title}}</view>
					<view class="btn" @tap="apply">申请售后</view>
				</view>
			</view>
		</view>
		</view>
		<view class="inquire" v-show="current==1"><text>无进度</text></view>
	</view>
</template>
<script>
	export default{
		data() {
			return {
				current: 0,
				activeColor: '#FEAB88',
				styleType: 'text',
				styleIndex: 0,
				colorIndex: 0,
				list:[{image:"/static/images/demo/demo1.jpg",title:"小米8"},{image:"/static/images/demo/demo1.jpg",title:"小米8"}]
			}
		},
		methods: {
			onClickItem(index) {
				if (this.current !== index) {
					this.current = index;
				}
			},
			apply(){
				uni.navigateTo({
					url:"after-sales"
				})
			}
		},
	}
</script>
<style>
	#salesService {
		position: fixed; 
		width: 100%;
		height: 100%;
		background-color: #EEEEEE;
		font-size: 60upx;
	}
	.line{
		width: 100%;
		height: 20upx;
	}
	.tag{
		width:100%;
		height:100upx;
		line-height:100upx;
		display:flex;
		justify-content: space-around;
		background-color: white;
	}
	.apply,.follow-up{
		height:100upx;
		line-height:100upx;
	}
	.action{
		border-bottom: 1upx solid #FF6B01;
		color: #FF6B01;
	}
	.device,.time{
		height:70upx;
		line-height:70upx;
		border-bottom:1upx solid #E0E0E0;
		background-color: white;
	}
	.device text{
		margin-left: 30upx;
	}
	.icon-gantan{
		color: #D1D1D1;
	}
	.Imei{
		width: 100%;		
		padding: 30upx 20upx 40upx;
		background-color: white;
	}
	.con-imei{
		width: 100%;
		height: 80upx;
		line-height: 80upx;
		display: flex;
		justify-content: space-around;
		border-bottom:1upx solid #E0E0E0;
		background-color: white;
	}
	.Imei input{
		height: 80upx;
		line-height: 80upx;
	}
	.btn{
		width: 220upx;
		height: 60upx;
		line-height: 60upx;
		border: 1upx solid #FF7200;
		color: #FF7200;
		text-align: center;
		margin-top: 10upx;
		margin-right: 40upx;
	}
	.time{
		padding-left: 30upx;
		color:#D1D1D1;
	}
	.uni-list-cell-navigate image{
		width: 150upx;
		height: 150upx;
	}
	.uni-list-cell-navigate .btn{
		width: 140upx;
		margin: 0px;
	}
	.inquire{
		position: fixed;
		width: 100%;
		height: 100%;
		display: flex;
	}
	.inquire text{
		margin: auto;
	}
</style>
<template>
	<!-- 发票页 -->
	<view id="invoice">
		<view class="line"></view>
		<view class="invoice-type">
			<view class="title">发票类型</view>
			<view class="btn">电子发票</view>
			<view class="txt">{{discrip}}</view>
		</view>
		<view class="line"></view>
		<view class="invoice-title">
			<view class="title">发票抬头</view>
			<view class="units" v-for="(item,index) in list" :key="index" :class="active==index?'btn':''"  @click="indexactive(index)">{{item}}</view>
			
		</view>
		<view class="line"></view>
		<view class="name">个人姓名: 个人</view>
		<view class="content">发票内容 : 商品明细</view>
		<view class="line"></view>
		<view class="phone">发票人手机 : {{phone}}</view>
		<view class="information">
			<text>发票须知:</text>
			<text>1.发票为实际支付金额，不包括优惠券等;</text>
			<text>2.电子发票可在订单完成后，在订单详情中查看;</text>
		</view>
	</view>
</template>
<script>
	export default {
		data() {
			return {
				active:0,
				list:["个人","单位"],
				phone:0,
				discrip: "电子发票与纸质发票具有相同的法律效力，可作为报销、售后、维权凭证，推荐使用电子发票，不怕丢失，更方便，环保。"
			}
		},
		methods:{
			// 修改发票
			indexactive(e){
				console.log(e)
				this.active=e
				console.log(this.active)
			},
		},
		onLoad(option){
			this.phone=option.phone
		}
	}
</script>
<style>
	  page{
		  background-color: #F5F5F5;
	  }
	.line {
		width: 100%;
		height: 20upx;
		background-color: #F5F5F5;
	}

	.invoice-type,
	.invoice-title {
		padding: 20upx;
		font-size: 30rpx;
		background-color: white;
	}

	.invoice-title .btn {
		display: inline-block;
	}

	.title {
		margin-bottom: 40upx;
	}

	.btn {
		width: 200upx;
		height: 70upx;
		line-height: 70upx;
		background-color: #FCE0D5 !important;
		border: 2upx solid #FA8538;
		color: #FA8538;
		text-align: center;
		margin-bottom: 20upx;
		border-radius: 5upx;
		font-size: 30rpx;
	}

	.units {
		width: 200upx;
		height: 70upx;
		line-height: 70upx;
		background-color: #CACACA;
		margin-right: 30rpx;
		text-align: center;
		margin-bottom: 20upx;
		border-radius: 5upx;
		font-size: 30rpx;
		display: inline-block;
	}

	.txt {
		color: #CACACA;
		font-size: 28rpx;
	}

	.name,
	.content,
	.phone {
		height: 90upx;
		line-height: 90upx;
		padding-left: 20upx;
		background-color: white;
		font-size: 30rpx;
	}

	.name {
		border-bottom: 2upx solid #EBEDF0;
	}

	.information {
		padding-left: 20upx;
		background-color: #F5F5F5;
		padding-top: 20upx;
		height: 276upx;
	}

	.information text {
		display: block;
		color: #999999;
		font-size: 30rpx;
		line-height: 50rpx;
	}
</style>

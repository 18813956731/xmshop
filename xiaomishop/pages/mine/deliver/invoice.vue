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
			<text class="btn">个人</text>
			<text class="btn units">单位</text>
		</view>
		<view class="line"></view>
		<view class="name">个人姓名: 个人</view>
		<view class="content">发票内容: 商品明细</view>
		<view class="line"></view>
		<view class="phone">发票人手机: 158****1215</view>
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
				discrip: "电子发票与纸质发票具有相同的法律效力，可作为报销、售后、维权凭证，推荐使用电子发票，不怕丢失，更方便，环保。"
			}
		},
	}
</script>
<style>
	/* #invoice {
		position: fixed;
		width: 100%;
		height: 100%;
		background-color: #EEEEEE;
		font-size: 60upx;
	} */
	.line {
		width: 100%;
		height: 20upx;
		background-color: #F5F5F5;
	}

	.invoice-type,
	.invoice-title {
		padding: 20upx;
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
		background-color: #FCE0D5;
		border: 2upx solid #F5B181;
		color: #F5B181;
		text-align: center;
		margin-bottom: 20upx;
		border-radius: 5upx;
	}

	.units {
		background-color: #F8F9FB;
		color: black;
		border: none;
		margin-left: 30upx;
	}

	.txt {
		color: #CACACA;
	}

	.name,
	.content,
	.phone {
		height: 90upx;
		line-height: 90upx;
		padding-left: 20upx;
	}

	.name {
		border-bottom: 2upx solid #EBEDF0;
	}

	.information {
		padding-left: 20upx;
		background-color: #EEEEEE;
		padding-top: 20upx;
		height: 276upx;
	}

	.information text {
		display: block;
		color: #C8C8C8;
	}
</style>

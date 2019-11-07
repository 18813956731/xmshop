<template>
	<view>
		<view class="line"></view>
		<view class="time">
			<view class="date">2019-06-07 10:20</view>
			<view class="shipped">已发货</view>
		</view>
		<view class="uni-list">
			<view class="uni-list-cell" v-for="(item,index) in list" :key="index">
				<view class="">
					<image :src="item.image" mode=""></image>
					<view>
						<view>{{item.title}}</view>
						<view>{{item.color}}</view>
					</view>
					<view>
						<view>{{item.price}}</view>
						<view>X{{item.count}}</view>
					</view>
				</view>
			</view>
		</view>
		<view class="total">
			<view class="" style="float: right;">
				<view class="total-price">共三件商品,合计: ￥299.00</view>
				<view class="logistics">
					<text>查看物流</text>
					<text>确认收货</text>
				</view>
			</view>
		</view>
		<view class="line"></view>
		<view class="time">
			<view class="date">2019-06-07 10:20</view>
			<view class="shipped">已发货</view>
		</view>
		<view class="uni-list">
			<view class="uni-list-cell" v-for="(item,index) in list" :key="index">
				<view class="uni-list-cell-navigate">
					<image :src="item.image" mode=""></image>
					<view class="">
						<view>{{item.title}}</view>
						<view>{{item.color}}</view>
					</view>
					<view>
						<view>{{item.price}}</view>
						<view>X{{item.count}}</view>
					</view>
				</view>
			</view>
		</view>
		<view class="total">
			<view style="float: right;">
				<view class="total-price">共三件商品,合计: ￥299.00</view>
				<view class="logistics">
					<text>查看物流</text>
					<text>确认收货</text>
				</view>
			</view>
		</view>
	</view>
</template>
<script>
	export default {
		data() {
			return {
				list: [{
					image: "/static/images/demo/demo1.jpg",
					title: "小米8",
					color: "金色",
					price: "￥1999.00",
					count: "1"
				}, {
					image: "/static/images/demo/demo2.jpg",
					title: "小米8",
					color: "金色",
					price: "￥1999.00",
					count: "1"
				}],				
			}
		},
	}
</script>
<style scoped="scoped">
	ul{
		margin:0upx;
		padding:0upx;
	}
	li{
		list-style: none;
	}
	.line {
		width: 100%;
		height: 20upx;
		background-color: #E0E0E0;
	}

	.time {
		display: flex;
		justify-content: space-between;
		padding: 0upx 30upx;
		height: 80upx;
		line-height: 80upx;
	}

	.date,
	.shipped {
		height: 80upx;
		line-height: 80upx;
	}

	.shipped {
		color: #FF6B01;
	}

	.uni-list-cell-navigate image {
		width: 150upx;
		height: 150upx;
	}

	.total {
		height: 200upx;
	}

	.logistics text {
		display: inline-block;
		height: 80upx;
		width: 150upx;
		line-height: 80upx;
		text-align: center;
		border: 1upx solid #E0E3E6;
		color: #80848A;
		margin-right: 30upx;
	}

	.total-price {
		height: 80upx;
		line-height: 80upx;
		margin-right: 40upx;
	}	
</style>

<template>
	<view>
		<view v-for="(iter,index) in list" :key='index'>
			<view class="line"></view>
			<view class="time">
				<view class="date">2019-06-07 10:20</view>
				<view class="shipped">已发货</view>
			</view>
			<view class="uni-list">
				<view class="uni-list-cell" v-for="(item,index) in list" :key="index">
					<view class="uni-list-cell-navigate">
						<view class="image">
							<img :src="item.image" mode="widthFix"/>
						</view>
						<view class="text">
							<view>{{item.title}}</view>
							<view class="text-lasth">{{item.color}}</view>
						</view>
						<view class="txt">
							<view>{{item.price}}</view>
							<view class="text-x">X{{item.count}}</view>
						</view>
					</view>
				</view>
			</view>
			<view class="total">
				<view class="" style="float: right;">
					<view class="total-price">共3件商品,合计: ￥299.00</view>
					<view class="logistics">
						<text @click="steps">查看物流</text>
						<text @click="confirm">确认收货</text>
					</view>
				</view>
			</view>
		</view>
	</view>
</template>
<script>
	export default {
		data() {
			return {
				list: [{//全部订单数据
					image: "/static/images/demo/list/3.jpg",
					title: "小米8",
					color: "金色",
					price: "￥1999.00",
					count: "1"
				}, {
					image: "/static/images/demo/list/5.jpg",
					title: "小米8",
					color: "金色",
					price: "￥1999.00",
					count: "1"
				}]
			}
		},
		methods:{
			steps(){
				// 跳转物流
				uni.navigateTo({
					url:"/pages/mine/steps/steps"
				})
			},
			confirm(){
				uni.request({
				    url: 'http://ceshi3.dishait.cn/api/login',
					method:"POST",
				    success: (res) => {
				        console.log(res.data);
				        this.text = 'request success';
				    }
				});
			}
		}
	}
</script>
<style lang="scss">
	ul {
		margin: 0upx;
		padding: 0upx;
	}

	li {
		list-style: none;
	}

	.line {
		width: 100%;
		height: 20upx;
		background-color: #f5f5f5;
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
		font-size: 30rpx;
	}

	.date {
		font-size: 26rpx;
		color: #000000;
	}

	.shipped {
		color: #FF6B01;
	}

	.uni-list-cell-navigate{
		.image {
			width: 150upx;
			height: 150upx;
			img{
				width: 100%;
				height: 100%;
			}
		}
		.text{
			position: relative;
			left: -120rpx;
		}
		.text-lasth{
			font-size: 28rpx;
			color: #929292;
		}
		.txt{
			color: #929292;
		}
		.text-x{
			text-align: right;
		}
	}
	

	.total {
		height: 200upx;
	}

	.logistics{
		text-align: right;
		text {
			font-size: 30rpx;
			display: inline-block;
			height: 80upx;
			width: 150upx;
			line-height: 80upx;
			text-align: center;
			border: 1upx solid #E0E3E6;
			color: #80848A;
			margin-right: 30upx;
		}
	} 

	.total-price {
		height: 80upx;
		line-height: 80upx;
		margin-right: 40upx;
		font-size: 33rpx;
	}
</style>

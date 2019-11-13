<template>
	<view>
		<view v-for="(iter,index) in typeall" :key='index'>
			<view class="line"></view>
			<view class="time">
				<view class="date">{{iter.orderdata}}</view>
				<view class="shipped">{{iter.paystatus?'已发货':'未发货'}}</view>
			</view>
			<view class="uni-list">
				<view class="uni-list-cell" v-for="(item,index) in iter.arr" :key="index">
					<view class="uni-list-cell-navigate">
						<view class="image">
							<img :src="item.obj.cover" mode="widthFix" />
						</view>
						<view class="text">
							<view>{{item.obj.title}}</view>
							<view class="text-lasth">{{item.obj.desc}}</view>
						</view>
						<view class="txt">
							<view>{{item.obj.min_price}}</view>
							<view class="text-x">X{{item.number}}</view>
						</view>
					</view>
				</view>
			</view>
			<view class="total">
				<view class="" style="float: right;">
					<view class="total-price">共{{iter.numbers}}件商品,合计: {{iter.total}}</view>
					<view class="logistics" v-if="iter.paystatus && !iter.observerstatus && !iter.taketatus">
						<text @click="steps">查看物流</text>
						<text @click="confirm(iter.id)">确认收货</text>
					</view>
					<view class="logistics" v-if="!iter.paystatus && !iter.observerstatus && !iter.taketatus">
						<text @click="cancellation(iter.id)">取消订单</text>
						<text @click="pay(iter.id)">去付款</text>
					</view>
					<view class="logistics" v-if="iter.paystatus && !iter.observerstatus && iter.taketatus">
						<text @click="steps">查看物流</text>
						<text @click="evaluated(iter.id)">待评价</text>
					</view>
				</view>
			</view>
		</view>
	</view>
</template>
<script>
	import {
		mapState,
		mapMutations
	} from 'vuex'; //导入状态管理
	export default {
		computed: {
			...mapState(['typeall'])
		},
		props:["tabIndex"],
		methods: {
			steps() {
				// 跳转物流
				uni.navigateTo({
					url: "/pages/mine/steps/steps"
				})
			},
			//确认收货
			confirm(e) {
				this.$api.msg("收货成功")
				setTimeout(()=>{
					this.$store.commit("gettaketatus", e)
					this.$store.commit("gettypeall",this.tabIndex)
					},500)
				
			},
			//去付款
			pay(e) {
				this.$store.commit("getpaystatusj", e)
				uni.navigateTo({
					url: "/pages/mine/deliver/confimindent"
				})
			},
			//待评价
			evaluated(e) {
				this.$api.msg("评价完成")
				setTimeout(()=>{
					this.$store.commit("getobserverstatus", e)
					this.$store.commit("gettypeall",this.tabIndex)
				},500)
				
			},
			//取消订单
			cancellation(e) {
				this.$api.msg("取消订单成功")
				setTimeout(()=>{
					this.$store.commit("getcancellation", e)
					this.$store.commit("gettypeall",this.tabIndex)
				},500)
				
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

	.uni-list-cell-navigate {
		.image {
			width: 150upx;
			height: 150upx;

			img {
				width: 100%;
				height: 100%;
			}
		}

		.text-lasth {
			width: 330rpx;
			font-size: 28rpx;
			color: #929292;
			white-space: nowrap;
			overflow: hidden;
			text-overflow: ellipsis;


		}

		.txt {
			color: #929292;
		}

		.text-x {
			text-align: right;
		}
	}


	.total {
		height: 200upx;
	}

	.logistics {
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

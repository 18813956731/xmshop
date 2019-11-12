<template>
	<view id="user-confimindent">
		<!-- 头部导航 -->
		<view class="hreder">
			<view class="title">
				<text class="iconfont icon-2fanhui" @click="fanhui"></text>
				<text class="text">订单详情</text>
			</view>
			<!-- 收货地址 -->
			<view class="site" @click="replace">
				<view class="from-mina-left">
					<view class="hred">
						<view class="text">{{list.name}}</view>
						<view class="phone">{{list.phone}}</view>
					</view>
					<view class="address">{{list.Location}}<br />{{list.detailed}}</view>
				</view>
				<view class="from-mina-right" >
					<span class="iconfont icon-you"></span>
				</view>
			</view>
		</view>
		<view class="confimindent-bottom">
			<!-- 商品详情 -->
			<view class="user">
				<view class="uni-list">
					<!-- 循环结算商品 -->
					<view class="uni-list-cell" v-for="(item,index) in clearinggoods" :key="index">
						<view class="uni-list-cell-navigate">
							<!-- 商品图片 -->
							<view class="image">
								<img :src="item.obj.cover" mode="widthFix" />
							</view>
							<!-- 名称,介绍 -->
							<view class="text">
								<view>{{item.obj.title}}</view>
								<view class="text-lasth">{{item.obj.desc}}</view>
							</view>
							<!-- 金额，数量 -->
							<view class="txt">
								<view>{{item.obj.min_price}}</view>
								<view class="text-x">X{{item.number}}</view>
							</view>
						</view>
					</view>
				</view>
			</view>
			<!-- 商品基础数据 -->
			<view v-for="(item,index) in listText" :key="index">
				<view class="list fexi">
					<text class="left">{{item.tesleft}}</text>
					<text class="right">{{item.price}}</text>
				</view>
			</view>
			<view class="list fexi">
				<text class="left" style="color: #FD6801;">小计</text>
				<text class="right" style="color: #FD6801;">￥{{total}}</text>
			</view>
			<!-- 分割线 -->
			<view class="hr"></view>
			<!-- 发票 -->
			<view class="invoice fexi">
				<text class="text">发票</text>
				<text class="right" @click="invoice">电子发票--个人
					<span class="iconfont icon-you"></span>
				</text>
			</view>
		</view>
		<!-- 付款 -->
		<view class="total">
			<view class="right">
				合计:
				<text style="color: #FD6801;">￥{{total}}</text>
				<view class="btn" @click="payment">去付款</view>
			</view>

		</view>
	</view>
</template>

<script>
	import {
		mapState,
		mapMutations
	} from 'vuex'; //导入状态管理
	import Json from "@/Json" //地址信息
	export default {
		data() {
			return {
				listText: [{//商品数据
					tesleft: "商品总价",
					price: "￥20.00"
				}, {
					tesleft: "运费",
					price: "包邮"
				}, {
					tesleft: "优惠券",
					price: "无可用"
				}],
				list: "",//结算数据
				listindex:0
			}
		},
		methods: {
			//返回上一层
			fanhui() {
				uni.navigateBack({
					delta: 1
				})
			},
			//更换地址
			replace(){
			this.$store.commit("change")
			uni.navigateTo({
				url:"/pages/mine/address/address"
			})
			},
			// 跳转发票
			invoice(){
				 let phone=this.list.phone
		     uni.navigateTo({
		     	url:"/pages/mine/deliver/invoice?phone="+phone+""
		     })
			},
			//跳转支付订单
			payment(){
			let total=this.total
			  uni.navigateTo({
			  	url:"/pages/mine/confirmpayment/confirmpayment?total="+total+""
			  })	
			}
		},
		computed: {
			...mapState(['clearinggoods',"total"])
		},
		onLoad(option) {
			if(option.index!=null){
				this.listindex=option.index
			}
			this.listText[0].price = "￥" + this.total
			this.list = Json.address[this.listindex]

		}

	}
</script>

<style lang="scss">
	page {
		background-color: #F5F5F5;
	}

	#user-confimindent {
		position: relative;
	}

	.hreder {
		height: 400rpx;
		width: 100%;
		background-color: #FD6801;

		.title {
			height: 100rpx;
			line-height: 100rpx;
			color: white;
			text-align: center;
            color: #E5E5E5;
			.icon-2fanhui {
				float: left;
				padding-left: 15rpx;
			}

			.text {
				font-size: 34rpx;
				
			}
		}

		.site {
			display: flex;
			justify-content: space-between;
			margin: 60rpx 40rpx 0rpx 40rpx;
			color: #E5E5E5;
			.hred {
				height: 50rpx;
				line-height: 50rpx;
				display: inline-flex;
			
				.text {
					font-size: 30rpx;
				}
			
				.phone {
					width: 230rpx;
					text-align: center;
					font-size: 28rpx;
				}
			}
			.address{
				font-size: 30rpx;
			}
			.from-mina-right{
				line-height: 136rpx;
			}
		}
	}

	.fexi {
		font-size: 33rpx;
		padding: 0rpx 20rpx 0rpx 20rpx;
		border-bottom: 5rpx solid #F5F5F5;
		display: flex;
		justify-content: space-between;
	}

	.confimindent-bottom {
		height: 600rpx;
		width: 100%;
		background-color: white;
		border-top-left-radius: 20rpx;
		border-top-right-radius: 20rpx;
		position: absolute;
		top: 380rpx;
		left: 0rpx;

		.user {
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
		}

		.list {
			height: 100rpx;
			line-height: 100rpx;
			background-color: white;
		}

		.hr {
			height: 20rpx;
			background-color: #F5F5F5;
		}

		.invoice {
			background-color: white;
			height: 100rpx;
			line-height: 100rpx;

		}

		.icon-you {
			font-size: 33rpx;
			color: #8F8F94;
		}
	}

	.total {
		text-align: right;
		position: fixed;
		bottom: 0;
		width: 100%;
		background-color: white;

		.right {
			height: 100rpx;
			line-height: 100rpx;

			.btn {
				display: inline-block;
				text-align: center;
				margin: 0rpx 20rpx 0rpx 20rpx;
				width: 190rpx;
				height: 70rpx;
				line-height: 70rpx;
				background-color: #FD6801;
				border-radius: 60rpx;
				color: white;
				font-size: 33rpx;
			}
		}

	}
</style>

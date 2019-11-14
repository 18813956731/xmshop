<template>
	<view id="mine-myorder">
		<!-- 导航 -->
		<view class="flex">
			<view class="tab-item" v-for="(item,index) in order" :key="index" :class="tabIndex==index?'tab-item-active':''"
			 @click="tabactive" :id="index">{{item.title}}</view>
		</view>
		<!-- 滑动 -->
		<swiper :current="tabIndex" :class="heighttactive?'swiper-box-active':'swiper-box'" duration="300" @change="ontabchange">
			<swiper-item class="tab-content" v-for="(tabItem,tabIndex) in order" :key="tabIndex">
				<!-- 纵向滚动 -->
				<scroll-view class="list-scroll-content" scroll-y @scrolltolower="loadData">
					<!-- 空白页 -->
					<blank v-if="heighttactive" :nothing="blank"></blank>
					<!-- 列表内容 -->
					<all v-else :tabIndex="tabIndex"></all>

				</scroll-view>
			</swiper-item>
		</swiper>

		<view class="footer">
			<view class="tooer-hreder">
				<view class="text">猜你喜欢</view>
				<view class="text-flex">实时推荐你的爱</view>
			</view>
			<tuijian></tuijian>
		</view>
	</view>
</template>

<script>
	import tuijian from "@/components/home/tuijian.vue"
	import all from "@/components/mine/all.vue"
	import blank from "@/components/mine/blank.vue"
	import {
		mapState,
		mapMutations
	} from 'vuex'; //导入状态管理
	export default {
		components: {
			tuijian,
			all,
			blank
		},
		computed: {
			...mapState(['allorders', "clearinggoods","typeall"])
		},
		data() {
			return {
				blank: [], //空页面要渲染数据
				order: [{ //导航数据
						title: "全部" //根据下标渲染
						
					},
					{
						title: "待付款"//待付款数据
					},
					{
						title: "待收货"//待收货数据
					},
					{
						title: "待评价" //待评价数据
					}
				],
				//空白数据渲染
				nothing: [
					{
							ime: "/static/images/nothing/no_pay.png",
							title: "您还没有订单"
					},
					{
						ime: "/static/images/nothing/no_pay.png",
						title: "您还没有待付款订单"
					},
					{
						ime: "/static/images/nothing/no_receiving.png",
						title: "您还没有待收货订单"
					},
					{
						ime: "/static/images/nothing/no_comment.png",
						title: "您还没有待评价订单"
					}
				],
				tabIndex: 0, //条件渲染
				heighttactive: true //样式渲染

			}
		},
		methods: {
			//点击导航内容一起
			tabactive(e) {
				let _this = this
				_this.tabIndex = parseInt(e.currentTarget.id) || parseInt(e.target.id)
				_this.loadData()
			},
			//获取订单列表
			loadData(source) {
				let index = this.tabIndex
				if(index==0){
					this.$store.commit("gettypeall",index) 
				}else if(index==1){
					this.$store.commit("gettypeall",index)
				}else if(index==2){
					this.$store.commit("gettypeall",index)
				}else{
					this.$store.commit("gettypeall",index)
				}
				let tab = this.typeall.length //获取数据长度
				this.blank = this.nothing[index]
				if (tab == 0) {
					this.heighttactive = true
				} else {
					this.heighttactive = false
				}
			},
			//滑动内容导航一起
			ontabchange(e) {
				this.tabIndex = e.detail.current || e.target.current
				this.loadData()
			},
			onLoad(options) {
				this.tabIndex = options.steat
				this.loadData()
			}
		}
	}
</script>

<style lang="scss">
	swiper {
		transition: all 0.5s;
	}

	.swiper-box {
		margin: 100rpx 0rpx 0rpx 0rpx;
		height: 600rpx;
	}

	.swiper-box-active {
		margin: 100rpx 0rpx 0rpx 0rpx;
		background-color: #f5f5f5;
		height: 600rpx;
	}

	.mine-myorder {
		height: 100%;
	}

	.icon-2fanhui {
		font-size: 38rpx !important;
	}

	.hreder {
		display: flex;
		justify-content: space-between;
		line-height: 100rpx;
		height: 100rpx;
		padding: 0rpx 30rpx 0rpx 40rpx;
		border-bottom: #E5E5E5 2rpx solid;

		.text {
			font-size: 36rpx;
		}

		.iconfont {
			font-size: 50rpx;
		}

		.icon-sousuo {
			margin-right: 30rpx;
			font-size: 50rpx;
		}

		.icon-gouwuche {
			font-size: 50rpx;
		}
	}

	.nav {
		width: 100%;
	}

	.flex {
		position: fixed;
		width: 100%;
		top: 0rpx;
		z-index: 999;
		background-color: white;
	}

	.tab-item {
		display: inline-block;
		height: 100rpx;
		width: 25%;
		text-align: center;
		color: #6D6D72;
		font-size: 33rpx;
		line-height: 100rpx;
	}

	.tab-item-active {
		color: #FD6801;
		border-bottom: 3rpx solid #FD6801;
	}



	.list-scroll-content {
		height: 100%;
	}

	.footer {
		.tooer-hreder {
			height: 135rpx;
			position: relative;
			background-color: #f5f5f5;

			.text {
				width: 100%;
				text-align: center;
				color: #FD6801;
				font-weight: bold;
				border-bottom: 4rpx solid #D8D8D8;
				height: 80rpx;
			}

			.text-flex {
				font-size: 32rpx;
				width: 280rpx;
				text-align: center;
				color: #C0C0C0;
				background-color: #f5f5f5;
				position: absolute;
				bottom: 35rpx;
				left: 50%;
				transform: translateX(-50%);
			}
		}

		.footer-mian {
			display: flex;
			flex-wrap: wrap;

			.footer-box {
				width: 47%;
				margin: 0rpx 0rpx 10rpx 15rpx;
			}
		}
	}
</style>

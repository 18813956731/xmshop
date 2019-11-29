<template>
	<view class="content">
		<scroll-view scroll-y show-scrollbar="false" :style="{ height: swiperheight_s + 'rpx' }" @scrolltolower="loadmore()">
			<view class="uni-navbar">
				<view class="navb">
					<view><text>购物车</text></view>
					<view class="text"><text @click="onClickRight">{{ rightText }}</text></view>
				</view>
			</view>
			<!-- 购物车商品 -->
			<goodslist></goodslist>
			<!-- 底部合计、结算 -->
			<goodsnav class="goods-carts" />
			<!-- 推荐 -->
			<view class="recommend">
				<view class="rendmain">
					<h3 class="rend">为你推荐</h3>
					<view class="tlt">
						<view class="reline"></view>
						<view class="retext">买了人还买了</view>
					</view>
					<recommend></recommend>
				</view>
			</view>
		</scroll-view>
	</view>
</template>

<script>
	//导入状态管理
	import {
		mapState,
		mapMutations
	} from 'vuex';

	import goodslist from "@/components/shopping/goodslist.vue"
	import goodsnav from "@/components/shopping/goodsnav.vue"
	import recommend from "@/components/home/recommend.vue"
	export default {
		data() {
			return {
				title: 'Hello',
				name: "我的购物车",
				productList: [],
				renderImage: false,
				rightText: "编辑",
				loadtext: "上拉加载更多", //加载更多
				swiperheight_s: 1150 //定义滚动高度
			}
		},
		computed: {
			...mapState(['editor', 'tjlist',"token"])
		},
		components: {
			goodslist,
			goodsnav,
			recommend //推荐
		},
		methods: {
			tiao() {
				uni.navigateTo({
					url: "../../components/home/xqing"
				})
			},
			//点击编辑
			onClickRight() {
				this.editor ? this.rightText = '编辑' : this.rightText = '完成'
				this.$store.commit("geteditor", !this.editor)
			},
			loadmore() { //下拉加载更多
				if (this.loadtext == "上拉加载更多") {
					//修改状态
					this.loadtext = "加载中..."
					//获取数据
					let that = this
					setTimeout(() => {
						let obj = that.tjlist;
						//每次刷新加载数据，把新数据加进去
						that.$store.commit("getwxtjlist", obj)
						that.loadtext = "上拉加载更多";
					}, 1000)
				} else {
					return
				}
			}
		},
		onShow() {
			let _this=this
			uni.getStorage({ //获取本地缓存
				key: "storage_key",
				success(res) {
					if (res.data == ""||_this.token=="") {
						uni.navigateTo({
							url: "/pages/mine/login"
						})
					} else {
						console.log("已在登录状态")
					}
				}
			})
		}
	}
</script>

<style scoped lang="scss">
	@import '../../common/uni-nvue.css';

	.goods-carts {
		position: fixed;
		width: 100%;
		bottom: 100rpx;
		background-color: #FFFFFF;
		z-index: 111;
	}

	.recommend {
		background-color: #F5F5F5;
	}

	.rend {
		text-align: center;
		color: orange;
		padding-top: 60rpx;
		height: 70rpx;
		line-height: 70rpx;
		font-size: 38rpx;
	}

	.tlt {
		width: 100%;
		height: 60rpx;
		line-height: 60rpx;
		position: relative;
	}

	.reline {
		border: 1px solid #E9E9E9;
		width: 100%;
		position: absolute;
		top: 50%;
		z-index: 2;
	}

	.retext {
		width: 300rpx;
		background-color: #F5F5F5;
		position: absolute;
		height: 60rpx;
		line-height: 60rpx;
		left: 50%;
		z-index: 5;
		text-align: center;
		transform: translateX(-50%);
		font-size: 32rpx;
	}

	.uni-navbar {
		position: relative;
		width: 100%;
		height: 100rpx;

		.navb {
			position: fixed;
			width: 100%;
			height: 100rpx;
			line-height: 100rpx;
			z-index: 99;
			background-color: #FFFFFF;
			border-bottom: 1px solid #CCC;

			.text {
				font-size: 33rpx;
			}

			view:first-child {
				position: absolute;
				left: 50%;
				transform: translateX(-50%);
				height: 100rpx;
				line-height: 100rpx;
				font-size: 34rpx;
			}

			view:last-child {
				position: absolute;
				right: 15rpx;
				height: 100rpx;
				line-height: 100rpx;
			}
		}
	}
</style>

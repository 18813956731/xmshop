<template>
	<view>
		<view class="uni-tab__seat" />
		<view class="uni-tab__cart-box flex">
			<view class="flex uni-tab__cart-sub-box">
				<view v-for="(item,index) in options" :key="index" class="flex uni-tab__cart-button-left uni-tab__shop-cart" @click="onClick(index,item)">
					<view class="uni-tab__icon">
						<image :src="item.icon" mode="widthFix" />
					</view>
					<text class="uni-tab__text">{{ item.text }}</text>
					<view class="flex uni-tab__dot-box">
						<view v-if="item.info" :class="{ 'uni-tab__dots': item.info > 9 }" class="uni-tab__dot ">
							{{ item.info }}
						</view>
					</view>
				</view>
			</view>
			<view :class="{'uni-tab__right':fill}" class="flex uni-tab__cart-sub-box ">
				<view v-for="(item,index) in buttonGroup" :key="index" :style="{backgroundColor:item.backgroundColor,color:item.color}"
				 class="flex uni-tab__cart-button-right" @click="buttonClick(index,item)">{{ item.text }}</view>
			</view>
		</view>
	</view>
</template>

<script>
	//导入状态管理
	import {
		mapState,
		mapMutations
	} from 'vuex'
	export default {
		name: 'UniGoodsNav',
		computed: {
			...mapState(['good', 'goodList',"token"])
		},
		props: {
			options: {
				type: Array,
				default () {
					return [{
						icon: 'https://img-cdn-qiniu.dcloud.net.cn/uniapp/uni-ui/goodsnav/dianpu.png',
						text: '收藏'
					}, {
						icon: 'https://img-cdn-qiniu.dcloud.net.cn/uniapp/uni-ui/goodsnav/carts.png',
						text: '购物车'
					}]
				}
			},
			buttonGroup: {
				type: Array,
				default () {
					return [{
						text: '加入购物车',
						backgroundColor: '#FD6801',
						color: '#fff'
					}]
				}
			},
			fill: {
				type: Boolean,
				default: false
			}
		},
		methods: {
			onClick(index, item) {
				this.$emit('click', {
					index,
					content: item
				})
				if (item.text == "购物车") {
					uni.switchTab({

						url: '/pages/shopping/index'
					})
				}

			},
			//点击加入购物车
			buttonClick(index, item, obj) {
				let _this = this
				uni.getStorage({ //获取本地缓存
					key: "storage_key",
					success(res) {
						if (res.data == "" || _this.token == "") {
							uni.navigateTo({
								url: "/pages/mine/login"
							})
						} else {
							_this.$api.msg("成功加入购物车")
							if (uni.report) {
								uni.report(item.text, item.text)
							}
							_this.$emit('buttonClick', {
								index,
								content: item
							})
							//通过id判断商品是否存在，存在即数量加1，不存在存入购物车数组
							let indexs = _this.goodList.map(item => item.obj.id).indexOf(_this.good.obj.id)
							if (indexs == -1) {
								_this.$store.commit("getgoodList", _this.good);
							} else {
								_this.$store.commit("getgoodnum", indexs);
							}
							_this.$store.commit("getztchek") //购物车改变全选状态改变
						}
					}
				})


			}
		}
	}
</script>

<style>
	.flex {
		display: flex;
	}

	.uni-tab__cart-box {
		width: 100%;
		height: 100rpx;
		background: #fff;
		z-index: 900;
	}

	.uni-tab__cart-sub-box {
		width: 100%;
		box-sizing: border-box;
	}

	.uni-tab__right {
		margin: 5px 0;
		margin-right: 10px;
		border-radius: 100px;
		overflow: hidden;
	}

	.uni-tab__cart-button-left {
		position: relative;
		justify-content: center;
		align-items: center;
		flex-direction: column;
		width: 100%;
		font-size: 24rpx;
	}

	.uni-tab__icon {
		width: 40rpx;
		height: 40rpx;
	}

	.uni-tab__icon image {
		width: 100%;
		height: 100%;
	}

	.uni-tab__cart-button-left .uni-tab__text {
		margin-top: 5rpx;
		font-size: 24rpx;
		color: #666;
	}

	.uni-tab__cart-button-right {
		justify-content: center;
		align-items: center;
		width: 100%;
		font-size: 24rpx;
		color: #fff;
	}

	.uni-tab__cart-button-right:active {
		opacity: 0.7;
	}

	.uni-tab__cart-button-left .uni-tab__dot-box {
		position: absolute;
		right: 40rpx;
		top: 20rpx;
		justify-content: center;
		align-items: center;
		width: 0;
		height: 0;
	}

	.uni-tab__dot-box .uni-tab__dot {
		flex-shrink: 0;
		width: 30rpx;
		height: 30rpx;
		line-height: 30rpx;
		color: #ffffff;
		text-align: center;
		font-size: 12px;
		background: #ff0000;
		border-radius: 50%;
	}

	.uni-tab__dot-box .uni-tab__dot.uni-tab__dots {
		padding: 0 8rpx;
		width: auto;
		border-radius: 30rpx;
	}

	.uni-tab__color-y {
		background: #ffa200;
	}

	.uni-tab__color-r {
		background: #ff0000;
	}
</style>

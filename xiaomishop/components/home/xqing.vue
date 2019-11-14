<template>
	<view style="height: 90%;">
		<swiper :style="{ height: swiperheight_s + 'rpx' }">
			<swiper-item>
				<scroll-view scroll-y show-scrollbar="false"  :style="{ height: swiperheight_s + 'rpx' }"
					 @scrolltolower="loadmore()">
					<!-- 商品介绍价格 -->
					<view class="shopping">
						<view v-for="(item,index) in shuddd" :key="index">
							<view class="img">
								<image :src="item.cover"></image>
							</view>
							<view class="shop">{{item.title}}</view>
							<view class="textr shop">{{item.desc}}</view>
							<view class="item-name shop">¥{{item.min_price}}</view>
						</view>
					</view>
					<!-- 商品cpu -->
					<view class="ico">
						<view v-for="(item,index) in cupr" v-if="index<4">
							<view class="iconfont icon-cpu"></view>
							<view>{{item.name}}</view>
							<view>{{item.value}}</view>
						</view>
					</view>
					<!-- 商品规格 -->
					<view class="huohon">
						<view class="shop-p" @click="togglePopup('bottom', 'popup','type')">已选 火焰红 64GB 标配<text class="iconfont icon-you icorr"></text>
						</view>
						<view class="shop-p" @click="togglePopup('bottom', 'popup','site')">配送 {{}}<text class="calse"> 有现货</text>
							<text class="iconfont icon-you icorr"></text>
						</view>
						<view class="shop-p" style="border-bottom: none;" @click="togglePopup('bottom', 'popup','setviceNote')">
							<text><text class="iconfont icon-iconfontxuanzhong4 calse"></text>小米自营</text><text><text class="iconfont icon-iconfontxuanzhong4 calse"></text>小米发货</text><text><text
								 class="iconfont icon-iconfontxuanzhong4 calse"></text>七天无理由退货</text><text class="iconfont icon-you icorr"></text>
						</view>
					</view>
					<!-- 商品评论 -->
					<view class="unitab-bar">
						<scroll-view class="uniswiper-tab" scroll-x="true" :show-scrollbar="false">
							<view class="swiper-tab" v-for="(item,index) in tabBars" :key='index'>
								<view class="swiper-tab-list">
									<view class="imgr">
										<view style="float: left;">
											<image :src="item.img"></image>
										</view>
										<view class="float">{{item.name}}</view>
										<text class="rq">{{item.rq}}</text>
									</view>
									<view class="icor"><text class="iconfont icon-dianzan"></text>164</view>
								</view>
								<view style="font-size: 30rpx;" class="item-text">{{item.text}}</view>
								<view class="right">
									<view class="imrt" v-for="(item,index) in imgtL">
										<image :src="item"></image>
									</view>
								</view>
							</view>
						</scroll-view>
						<view class="pinlun">更多评论<text class="iconfont icon-you"></text></view>
					</view>
					<!-- 商品外观预览 -->
					<view style="margin-top: 40rpx;">
						<view v-for="(item,index) in shoppt" class="exterior">
							<image :src="item.url" style="height: 950rpx;width:750rpx;"></image>
						</view>
					</view>
					<!-- 为你推荐 -->
					<text class="text">为你推荐</text>
					<tuijian></tuijian>
					<view class="load-more">{{loadtext}}</view>
				</scroll-view>
			</swiper-item>
		</swiper>
		<view class="goumai">
			<goumai></goumai>
		</view>
		<!-- 弹框层 -->
		<uni-popup class="bjbox" ref="popup" :type="type" :tktype="tktype"></uni-popup>
	</view>
</template>

<script>
	//导入状态管理
	import {
		mapState,
		mapMutations
	} from 'vuex';

	import tuijian from '@/components/home/tuijian.vue'
	import goumai from '@/components/home/goumai.vue'
	import uniPopup from "@/components/shopping/uni-popup.vue"
	export default {
		components: {
			tuijian,
			goumai,
			uniPopup
		},
		computed: {
			...mapState(['good','goodList',"tjlist"])},
		data() {
			return {
				shoppt: '', //商品预览
				loadtext: "上拉加载更多", //加载更多
				swiperheight_s: 1100, //定义滚动高度
				cupr: '', //cpu
				shuddd: [], //商品信息
				type: '', // 弹出层类型
				tktype: '', //具体弹出层
				tabBars: [{
					img: '/static/images/demo/demo6.jpg',
					name: '楚锦',
					rq: '2019-06-20',
					text: '支持迪沙IT学院继续出uni-app实战教程'
				}, {
					img: '/static/images/demo/demo6.jpg',
					name: '楚锦',
					rq: '2019-06-20',
					text: '支持迪沙IT学院继续出uni-app实战教程'
				}, {
					img: '/static/images/demo/demo6.jpg',
					name: '楚锦',
					rq: '2019-06-20',
					text: '支持迪沙IT学院继续出uni-app实战教程'
				}, {
					img: '/static/images/demo/demo6.jpg',
					name: '楚锦',
					rq: '2019-06-20',
					text: '支持迪沙IT学院继续出uni-app实战教程'
				}],
				imgtL: ['/static/images/demo/list/4.jpg', '/static/images/demo/list/4.jpg', '/static/images/demo/list/4.jpg']
			}
		},
		created() {
			this.shuj(); //调用方法周期里获取API的函数
		},
		methods: {
			async shuj() {
				let [error, res] = await uni.request({
					url: 'http://ceshi3.dishait.cn/api/goods/25' //接口拿取数据
				})
				this.cupr = res.data.data.goodsAttrs //CPU数据
				this.shoppt = res.data.data.goodsBanner //外观预览
			},
			//编辑弹出框
			togglePopup(type, open, tktype) {
				//具体弹出层类型
				console.log("123")
				this.tktype = tktype
				this.type = type
				if (open === 'tip') {
					this.show = true
				} else {
					this.$refs[open].open()
				}
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
						that.$store.commit("getwxtjlist",obj)
						that.loadtext = "上拉加载更多";
					}, 1000)
				} else {
					return
				}
			}
		},
		onLoad(position) {
			let _this = this
			let id = parseInt(position.data)
			uni.request({
				url: "http://ceshi3.dishait.cn/api/goods/" + id + "",
				success(res) {
					let obj={
						obj:res.data.data,
						number:1,
						action:false
					}
					_this.$store.commit("getgood",obj)
					_this.shuddd.push(res.data.data)
				}
			})
		}
	}
</script>

<style scoped>
	* {
		margin: 0;
		padding: 0;
	}

	/* 弹出层 */
	.bjbox {
		position: fixed;
		z-index: 1000;
		bottom: 0;
	}

	/* 商品价格 */
	.textr {
		font-size: 25upx;
		color: #8F8F94;
	}

	.img {
		text-align: center;
	}

	.img image {
		width: 750rpx;
		height: 600rpx;
	}

	.shop {
		padding-left: 20rpx;
	}

	.item-name {
		color: #F0AD4E;
	}

	/* 商品cpu */
	.ico {
		display: flex;
		justify-content: space-around;
		font-size: 20rpx;
		text-align: center;
		color: #555555;
	}

	/* 商品规格 */
	.icorr {
		float: right;
	}

	.shop-p {
		height: 100rpx;
		border-bottom: 0.5rpx solid #BBBBBB;
		line-height: 100rpx;
		color: #3B4144;
	}

	.huohon {
		width: 95%;
		height: 300rpx;
		background: #F5F5F3;
		font-size: 20rpx;
		margin: auto;
		border-radius: 20rpx;
		color: #999999;
		border: 0.5rpx solid #BBBBBB;
		margin-top: 10px;
		text-indent: 1em;
	}

	.calse {
		color: #F0AD4E;
	}

	/* 商品评论 */
	.unitab-bar {
		width: 100%;
		margin-top: 20px;
	}

	.uniswiper-tab {
		width: 100%;
		display: flex;
		justify-content: space-between;
		flex-direction: row;
		white-space: nowrap;
		overflow: hidden;
	}

	.swiper-tab {
		width: 90%;
		margin-left: 8px;
		margin-right: 10px;
		display: inline-block;
		background: #F5F5F3;
		padding: 40rpx 20rpx;
		border-radius: 30rpx;
		overflow: hidden;
	}

	.swiper-tab-list {
		width: 100%;
		display: flex;
		justify-content: space-between;
	}

	.imgr {
		height: 100rpx;
	}

	.imgr image {
		width: 100rpx;
		height: 100rpx;
		border-radius: 50rpx;
	}

	.right {
		margin-top: 20px;
		display: flex;
		justify-content: space-between;
	}

	.icor {
		height: 100rpx;
		line-height: 100rpx;
	}

	.float {
		width: 400rpx;
	}

	.imrt image {
		width: 200rpx;
		height: 200rpx;
		float: left;
	}

	.rq {
		color: #8F8F94;
		font-size: 20rpx;
	}

	.item-text {
		padding-top: 30rpx;
	}

	/* tab */




	.pinlun {
		color: #0A98D5;
		text-align: center;
		margin-top: 20px;
		font-size: 30rpx;
	}

	/* 为你推荐 */
	.text {
		display: block;
		padding: 20rpx 0rpx;
		color: #555555;
	}

	.textrt {
		display: flex;
		justify-content: space-between;
		flex-wrap: wrap;
	}

	.tuijian {
		width: 48%;
		padding: 10rpx 5rpx;
	}

	/* 购买 */
	.goumai {
		width: 100%;
		position: fixed;
		bottom: 0px;
	}

	/* //加载更多 */
	.load-more {
		text-align: center;
		height: 60rpx;
		line-height: 60rpx;
		font-size: 20rpx;
	}

	/* 外观 */
	.exterior {
		height: 920rpx;
		overflow: hidden;
	}
</style>

<template>
	<view id="box">
		<!-- 顶部选项卡 -->
		<scroll-view id="nav-bar" class="nav-bar" scroll-x scroll-with-animation :scroll-left="scrollLeft">
			<view v-for="(item,index) in tabBars" :key="item.id" class="nav-item" :tabCurrentIndex="tabCurrentIndex" :class="{current: index === tabCurrentIndex}"
			 :id="'tab'+index" @click="changeTab(index)">{{item.name}}</view>
		</scroll-view>
		<view>
			<!-- class="swiper-item" -->
			<swiper :current="tabCurrentIndex" @change="changeTab" :style="{ height: swiperheight_s + 'rpx' }">
				<swiper-item v-for="tabItem in tabBars" :key="tabItem.id">
					<!-- class="list" -->
					<scroll-view scroll-y show-scrollbar="false" :style="{ height: swiperheight_s + 'rpx' }" @scrolltolower="loadmore">
						<!-- 轮播 -->
						<caroUsel />
						<!-- 类别 -->
						<view class="category">
							<view class="category-one" v-for="(items,index1) in newslist" :key="index1" @tap="navigateTow()">
								<view>
									<image :src="items.src"></image>
								</view>
								<text>{{items.text}}</text>
							</view>
						</view>
						<!-- 广告 -->
						<view class="active" v-for="(item,index) in imgr" :key="index" v-if="index<1">
							<image :src="imgr[0].src" class="active-one"></image>
							<image :src="imgr[1].src" class="active-tow"></image>
							<image :src="imgr[2].src" class="active-tow"></image>
						</view>
						<!-- 商品列表 -->
						<view>
							<!-- 每日精选 -->
							<view>
								<text class="choice">{{selecteds.title}}</text>
								<view>
									<image :src="selecteds.cover" style="width: 750rpx;height: 350rpx;"></image>
								</view>
							</view>
							<!-- 商品-->
							<view class="productlist">
								<view v-for="(item,index) in jxlist" class="imageview" :key='index' @tap="navigateTo(item)">
									<view>
										<image :src="item.cover"></image>
									</view>
									<view class="selected">{{item.title}}</view>
									<view class="selected-font">{{item.desc}}</view>
									<view class="text-one"><text class=" selected">¥{{item.min_price}}</text><text class="text-tow">¥{{item.min_oprice}}</text></view>
								</view>
							</view>
							<view class="load-more">{{loadtext}}</view>
						</view>
					</scroll-view>
				</swiper-item>
			</swiper>
		</view>

	</view>
</template>

<script>
	import json from '@/Json'
	let windowWidth = 0,
		scrollTimer = false,
		tabBar;
	//导入状态管理
	import {
		mapState,
		mapMutations
	} from 'vuex';

	import swiperTabHead from "@/components/home/tabBars.vue"
	import caroUsel from "@/components/home/carousel.vue"
	export default {
		components: {//注册组件
			swiperTabHead,
			caroUsel
		},
		computed: {//状态管理
			...mapState(['recommend', 'jxlist'])
		},
		async onLoad() {
			// 获取屏幕宽度
			windowWidth = uni.getSystemInfoSync().windowWidth;
			this.loadTabbars();
		},
		data() {//data数据
			return {
				tabCurrentIndex: 0, //当前选项卡索引
				scrollLeft: 0, //顶部选项卡左滑距离
				enableScroll: true,
				swiperheight_s: 1055, //定义滚动高度
				loadtext: "上拉加载更多", //加载更多
				imgr: '', //广告图
				selecteds: '', //每日精选
				tabBars: [], //tab导航数据
				newslist: '', //类别
				initial: [{
						comprehensive: 99, //综合排序
						num: 1000, //销量
						pinglun: '1348',
						ids: 25
					}, {
						comprehensive: 95, //综合排序
						num: 6582, //销量
						pinglun: '1348',
						ids: 26
					}, {
						comprehensive: 97, //综合排序
						num: 3365, //销量
						pinglun: '1348',
						ids: 27
					}, {
						comprehensive: 90, //综合排序
						num: 844, //销量
						pinglun: '1348',
						ids: 28
					},
					{
						comprehensive: 85, //综合排序
						num: 390, //销量
						pinglun: '1348',
						ids: 29
					}
				] //自定义初始数组

			}
		},
		created() {
			this.shuj(); //调用方法周期里获取API的函数
			this.remend(); //调用方法周期里获取API的函数
			this.getshoplist();//加入购物车列表
			this.sign()//清除缓存
		},

		methods: {
			//获取分类
			loadTabbars() {//获取json数据
				let tabList = json.tabList;//获取
				this.tabBars = tabList;//赋值给data定义的tabBars
			},
			//tab切换
			async changeTab(e) {//顶部选项卡
				if(scrollTimer){//每次切换执行最后一次
					//多次切换只执行最后一次
					clearTimeout(scrollTimer);
					scrollTimer = false;
				}
				
				let index = e;
				if(typeof e === 'object'){//跟随变化
					index = e.detail.current
					this.tabCurrentIndex = e.detail.current; //滑块滑动跟随变化
				}
				//e=number为点击切换，e=object为swiper滑动切换
				if (typeof tabBar !== 'object') {
					tabBar = await this.getElSize("nav-bar")
				}
				//计算宽度相关
				let tabBarScrollLeft = tabBar.scrollLeft;
				let width = 0;
				let nowWidth = 0;
				//获取可滑动总宽度
				for (let i = 0; i <= index; i++) {
					let result = await this.getElSize('tab' + i);
					width += result.width;
					if (i === index) {
						nowWidth = result.width;
					}
				}
				if (typeof e === 'number') {
					//点击切换时先切换再滚动tabbar，避免同时切换视觉错位
					this.tabCurrentIndex = index;
				}
				//延迟300ms,等待swiper动画结束再修改tabbar
				scrollTimer = setTimeout(() => {
					if (width - nowWidth / 2 > windowWidth / 2) {
						//如果当前项越过中心点，将其放在屏幕中心
						this.scrollLeft = width - nowWidth / 2 - windowWidth / 2;
					} else {
						this.scrollLeft = 0;
					}
				})

			},
			// 清除本地缓存
			sign() {
				let _this=this;
				uni.setStorage({
				    key: 'storage_key',
				    data:"",
				    success: function () {
						uni.navigateBack({
						    delta: 1,
						    animationType: 'pop-out',
						    animationDuration: 500
						});
				    }
				});
			},
			//获得元素的size
			getElSize(id) {
				return new Promise((res, rej) => {
					let el = uni.createSelectorQuery().select('#' + id);
					el.fields({
						size: true
					}, (data) => {
						res(data);
					}).exec();
				});
			},
			async shuj() {
				let [error, res] = await uni.request({
					url: 'http://ceshi3.dishait.cn/api/index_category/data' //接口拿取数据
				})
				// console.log(res)
				this.selecteds = res.data.data.data[3].data //每日精选
				this.imgr = res.data.data.data[2].data //广告图
				this.newslist = res.data.data.data[1].data //类别
			},
			async remend() {
				let [error, res] = await uni.request({
					url: 'http://ceshi3.dishait.cn/api/goods/25' //接口拿取数据
				})
				let obj = res.data.data.hotList //推荐数据
				let arr = []
				for (let i in obj) { //推荐数据循环遍历
					arr.push(obj[i])
				}
				//推荐数据存入状态管理
				this.$store.commit("getrecommend", arr)
			},
			//精选分类商品列表数据存入状态管理
			async getshoplist() {
				let that = this
				that.initial.forEach(item => {
					uni.request({
						url: "http://ceshi3.dishait.cn/api/goods/" + item.ids + "",
						success(res) {
							let obj = res.data.data;
							for (var i in item) {
								obj[i] = item[i]
							}
							//分类商品列表数据存入状态管理
							that.$store.commit("getshoplist", obj)
							//精选商品列表数据存入状态管理
							that.$store.commit("getjxlist", obj)
							//推荐商品列表数据存入状态管理
							that.$store.commit("gettjlist", obj)
						}
					})
				})
			},
			loadmore(index) { //下拉加载更多
				// console.log(this.loadtext)
				if (this.loadtext == "上拉加载更多") {
					//修改状态
					this.loadtext = "加载中..."
					//获取数据
					let that = this
					setTimeout(() => {
						let obj = that.jxlist;
						//每次刷新加载数据，把新数据加进去
						that.$store.commit("getwxlist", obj)
						that.loadtext = "上拉加载更多";
					}, 1000)
				} else {
					return
				}
			},
			navigateTo(e) { //点击商品跳转到商品详情购买页
				// console.log(e) 
				uni.navigateTo({ //跳转传参到商品详情页
					url: "/components/home/xqing?data=" + e.id
				})
			},
			navigateTow() {
				uni.navigateTo({ //跳转到类别
					url: "/components/home/products"
				})
			},
			
		}
	}
</script>

<style scoped lang='scss'>
	* {
		margin: 0;
		padding: 0;
	}

	/* 顶部tabbar */
	.nav-bar {
		position: relative;
		z-index: 10;
		height: 72upx;
		white-space: nowrap;

		.nav-item {
			display: inline-block;
			width: 150upx;
			height: 70upx;
			text-align: center;
			line-height: 90upx;
			font-size: 30upx;
			color: #555555;
			position: relative;

			&:after {
				content: '';
				border-bottom: 4upx solid #F0AD4E;
				position: absolute;
				left: 50%;
				bottom: 0;
				transform: translateX(-50%);
				transition: .3s;
			}
		}

		.current {
			color: #F0AD4E;

			&:after {
				width: 80%;
			}
		}
	}

	/*  */
	.box {
		height: 100%;
	}

	.position {
		position: fixed;
		top: 100rpx;
		z-index: 2000;
		background-color: #FFFFFF;
	}

	/* 广告 */
	.active {
		overflow: hidden;
	}

	.active-one {
		width: 49%;
		float: left;
		height: 558rpx;
		overflow: hidden;
	}

	.active-tow {
		width: 50%;
		height: 275upx;
		float: right;
		padding-bottom: 6px;
	}

	/* 商品列表 */
	.choice {
		display: inline-block;
		font-weight: bold;
		padding: 10px 10px;
	}

	.productlist {
		display: flex;
		justify-content: space-between;
		overflow: hidden;
		flex-wrap: wrap;
	}

	.imageview {
		width: 48%;
		padding: 0rpx 7.5rpx;
		margin-top: 40rpx;
	}

	.imageview image {
		width: 100%;
		height: 300upx;
	}

	.selected-font {
		font-size: 20upx;
		color: #8F8F94;
		overflow: hidden;
		text-overflow: ellipsis;
		white-space: nowrap;
	}

	.selected {
		padding: 10rpx 0rpx;
		font-size: 35rpx;
	}

	/* 价格 */
	.text-one {
		color: red;
		margin-top: 10rpx;
	}

	.text-tow {
		font-size: 20upx;
		color: #8F8F94;
		text-decoration: line-through;
	}

	/* 类别 */
	.list-tow {
		width: 100%;
		display: flex;
		justify-content: flex-start;
		flex-wrap: wrap;
	}

	.list-noe {
		width: 20%;
		margin-top: 3px;
	}

	.list {
		height: 1080rpx;
	}

	.category {
		padding: 20rpx 0rpx;
		display: flex;
		justify-content: space-between;
		flex-wrap: wrap;
	}

	.category-one {
		width: 16.9%;
		font-size: 20upx;
		text-align: center;
		margin: 18rpx 0rpx;
		color: #555555;
	}

	.category-one image {
		width: 70upx;
		height: 70upx;
	}

	/* tab切换高度 */
	.swiper-item {
		height: 1080rpx;
	}

	.load-more {
		text-align: center;
		height: 60rpx;
		line-height: 60rpx;
		font-size: 20rpx;
	}
</style>

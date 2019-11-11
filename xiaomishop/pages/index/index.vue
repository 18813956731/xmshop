<template>
	<view id="box" :style="{height:swiperheight_all + 'rpx' }">
		<!-- 顶导航tab切换  -->
		<!-- <view class="position"> -->
		<swiperTabHead :tabBars="tabBars" :tabIndex="tabIndex" @tabtap="tabtap"></swiperTabHead>
		<!-- </view> -->
		<view>
			<!-- class="swiper-item" -->
			<swiper :current="tabIndex" @change="tabChange" :style="{ height: swiperheight_s + 'rpx' }">
				<swiper-item v-for="(itemz,indexz) in 10" :key='indexz'>
					<!-- class="list" -->
					<scroll-view scroll-y show-scrollbar="false" :style="{ height: swiperheight_s + 'rpx' }" @scrolltolower="loadmore(indexz)">
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
	//导入状态管理
	import {
		mapState,
		mapMutations
	} from 'vuex';
	
	import swiperTabHead from "@/components/home/tabBars.vue"
	import caroUsel from "@/components/home/carousel.vue"
	export default {
		components: {
			swiperTabHead,
			caroUsel
		},
		data() {
			return {
				swiperheight_s: 1070, //定义滚动高度
				swiperheight_all: 1070, //定义滚动高度
				loadtext: "上拉加载更多", //加载更多
				imgr: '', //广告图
				tabIndex: 0,
				selecteds: '', //每日精选
				tabBars: [], //tab导航数据存放数组
				selected: [], //每日精选商品类
				selectedss: [], //循环每日精选商品类
				newslist: '', //类别
				initial:[
					{
						comprehensive:99,//综合排序
						num:1000,//销量
						pinglun: '1348',
						ids: 25
					},{
						comprehensive:95,//综合排序
						num:6582,//销量
						pinglun: '1348',
						ids: 26
					},{
						comprehensive:97,//综合排序
						num:3365,//销量
						pinglun: '1348',
						ids: 27
					},{comprehensive:90,//综合排序
						num:844,//销量
						pinglun: '1348',
						ids: 28
					},
					{
						comprehensive:85,//综合排序
						num:390,//销量
						pinglun: '1348',
						ids: 29
					}
				]//自定义初始数组

			}
		},
		created() {
			this.shuj();//调用方法周期里获取API的函数
			this.remend();//调用方法周期里获取API的函数
			this.getshoplist();
		},
		computed: {
		           ...mapState(['recommend','jxlist'])
		       }, 
		methods: {
			async shuj() {
				let [error, res] = await uni.request({
					url: 'http://ceshi3.dishait.cn/api/index_category/data' //接口拿取数据
				})
				// console.log(res)
				this.tabBars = res.data.data.category //tab导航
				this.selecteds = res.data.data.data[3].data //每日精选
				this.selected = res.data.data.data[4].data //每日精选商品
				this.imgr = res.data.data.data[2].data //广告图
				this.newslist = res.data.data.data[1].data //类别
				for (let i in this.selected) { //循环遍历
					this.selectedss.push(this.selected[i])
				}
			},
			async remend() {
				let [error, res] = await uni.request({
					url: 'http://ceshi3.dishait.cn/api/goods/25' //接口拿取数据
				})
				let obj = res.data.data.hotList //推荐数据
				let arr=[]
				for (let i in obj) { //推荐数据循环遍历
					arr.push(obj[i])
				}
				//推荐数据存入状态管理
				this.$store.commit("getrecommend",arr)
			},
			//精选分类商品列表数据存入状态管理
			async getshoplist() {
				let that=this
				that.initial.forEach(item=>{
				uni.request({
					url:"http://ceshi3.dishait.cn/api/goods/"+item.ids+"",
					success(res) {
						let obj=res.data.data;
						for (var i in item) {
							obj[i]=item[i]
						}
						//分类商品列表数据存入状态管理
						that.$store.commit("getshoplist",obj)
						//精选商品列表数据存入状态管理
						that.$store.commit("getjxlist",obj)
						//推荐商品列表数据存入状态管理
						that.$store.commit("gettjlist",obj)
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
						that.$store.commit("getwxlist",obj)
						that.loadtext = "上拉加载更多";
					}, 1000)
				} else {
					return
				}
			},
			tabChange(e) {
				this.tabIndex = e.detail.current;
			},
			tabtap(index) {
				this.tabIndex = index;
			},
			navigateTo(e) { //点击商品跳转到商品详情购买页
				// console.log(e) 
				uni.navigateTo({ //跳转传参到商品详情页
					url: "/components/home/xqing?data="+e.id
				})
			},
			navigateTow() {
				uni.navigateTo({ //跳转到类别
					url: "/components/home/products"
				})
			}
		}
	}
</script>

<style scoped>
	* {
		margin: 0;
		padding: 0;
	}

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
		text-overflow:ellipsis;
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
		display: flex;
		justify-content: space-between;
		flex-wrap: wrap;
	}

	.category-one {
		width: 20%;
		font-size: 20upx;
		text-align: center;
		padding: 30rpx 0rpx;
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

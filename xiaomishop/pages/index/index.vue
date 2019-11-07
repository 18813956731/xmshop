<template>
	<view style="height: 100%;">
		<!-- 顶导航tab切换  -->
		<!-- <view class="position"> -->
		<swiperTabHead :tabBars="tabBars" :tabIndex="tabIndex" @tabtap="tabtap"></swiperTabHead>
		<!-- </view> -->
		<view>
			<swiper :current="tabIndex" @change="tabChange" class="swiper-item">
				<swiper-item v-for="(itemz,indexz) in 10" :key='indexz'>
					<scroll-view scroll-y show-scrollbar="false" class="list">
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
								<view v-for="(item,index) in selected" class="imageview" @tap="navigateTo">
									<view>
										<image :src="item.cover"></image>
									</view>
									<view class="selected">{{item.title}}</view>
									<view class="selected-font selected">{{item.desc}}</view>
									<view><text class="text-one selected">¥{{item.pprice}}</text><text class="text-tow">¥{{item.oprice}}</text></view>
								</view>
							</view>
						</view>
					</scroll-view>
				</swiper-item>
			</swiper>
		</view>

	</view>
</template>

<script>
	import swiperTabHead from "@/components/home/tabBars.vue"
	import caroUsel from "@/components/home/carousel.vue"
	export default {
		components: {
			swiperTabHead,
			caroUsel
			// indexlist
		},
		data() {
			return {
				imgrg:'',
				imgr: '', //广告图
				tabIndex: 0,
				selecteds: '', //每日精选
				tabBars: [], //tab导航数据存放数组
				selected: [], //每日精选商品类
				newslist: ''//类别
			}
		},
		onLoad() {
			this.shuj()
		},
		methods: {
			async shuj() {
				let [error, res] = await uni.request({
					url: 'http://ceshi3.dishait.cn/api/index_category/data' //接口拿取数据
				})
				console.log(res)
				this.tabBars = res.data.data.category //tab导航
				this.selecteds = res.data.data.data[3].data //每日精选
				this.selected = res.data.data.data[4].data //每日精选商品
				this.imgr = res.data.data.data[2].data //广告图
				this.newslist = res.data.data.data[1].data//类别
				this.imgrg = res.data.data.data[0].data.src//类别
				console.log(this.imgrg)
			},
			tabChange(e) {
				this.tabIndex = e.detail.current;
			},
			tabtap(index) {
				this.tabIndex = index;
			},
			navigateTo() { //点击商品跳转到商品详情购买页
				uni.navigateTo({
					url: "/components/home/xqing"
				})
			},
			navigateTow() {
				uni.navigateTo({//跳转到类别
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
		width: 46%;
		margin-left: 14rpx;
		margin-right: 14rpx;
		margin-top: 40rpx;
	}

	.imageview image {
		width: 100%;
		height: 300upx;
	}

	.selected-font {
		font-size: 20upx;
		color: #8F8F94;
	}

	.selected {
		padding: 10rpx;
	}

	/* 价格 */
	.text-one {
		color: red;
	}

	.text-tow {
		font-size: 20upx;
		color: #8F8F94;
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
		margin-bottom: 20rpx;
	}

	.category-one image {
		width: 70upx;
		height: 70upx;
	}

	/* tab切换高度 */
	.swiper-item {
		height: 1080rpx;
	}
</style>

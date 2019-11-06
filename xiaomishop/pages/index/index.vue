<template>
	<view>
		<!-- 顶导航tab切换  -->
		<view class="position">
			<swiperTabHead :tabBars="tabBars" :tabIndex="tabIndex" @tabtap="tabtap"></swiperTabHead>
		</view>

		<view style="margin-top: 25px;">
			<swiper :current="tabIndex" @change="tabChange" class="swiper-item">
				<swiper-item v-for="(items,index) in newslist" :key="index">
					<scroll-view scroll-y show-scrollbar="false" class="list">
						<!-- 轮播 -->
						<caroUsel />
						<!-- 类别 -->
						<view v-if="items.list.length > 0" class="list-tow">
							<view v-for="(item,index1) in items.list" :key="index1" class="list-noe" @tap="navigateTow">
								<indexlist :item="item" :index="index1"></indexlist>
							</view>
						</view>
						<!-- 广告 -->
						<view class="active" v-for="(item,index) in imgr" v-if="index<1">
							<image :src="imgr[0]" mode="" class="active-one"></image>
							<image :src="imgr[1]" mode="" class="active-tow"></image>
							<image :src="imgr[2]" mode="" class="active-tow"></image>
						</view>
						<!-- 商品列表 -->
						<view>
							<text class="choice">每日精选</text>
							<view>
								<image src="../../static/images/demo/demo4.jpg" style="width: 750upx;height: 350upx;"></image>
							</view>
							<view class="product-list">
								<view v-for="(item,index) in selected" class="image-view" @tap="navigateTo">
									<view>
										<image :src="item.imgge"></image>
									</view>
									<view>{{item.name}}</view>
									<view class="selected-font">{{item.name1}}</view>
									<view><text class="text-one">¥{{item.favourPrice}}</text><text class="text-tow">¥{{item.originalPrice}}</text></view>
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
	import indexlist from '@/components/home/index-list.vue'
	export default {
		components: {
			swiperTabHead,
			caroUsel,
			indexlist
		},
		data() {
			return {
				tabIndex: 0,
				tabBars: [{
					name: '推荐',
					id: 'tuijian'
				}, {
					name: '体育',
					id: 'tiyu'
				}, {
					name: '热点',
					id: 'redian'
				}, {
					name: '财经',
					id: 'caijing'
				}, {
					name: '娱乐',
					id: 'yule'
				}, {
					name: '军事',
					id: 'junshi'
				}, {
					name: "历史",
					id: "lishi"
				}, {
					name: "本地",
					id: "bendi"
				}],
				newslist: [{
					list: [{
						name: '新品分类',
						img: '/static/indexnav/1.png'
					}, {
						name: '小米众筹',
						img: '/static/indexnav/2.gif'
					}, {
						name: '以旧换新',
						img: '/static/indexnav/3.gif'
					}, {
						name: '1分拼团',
						img: '/static/indexnav/4.gif'
					}, {
						name: '超值特卖',
						img: '/static/indexnav/5.gif'
					}, {
						name: '小米秒杀',
						img: '/static/indexnav/6.gif'
					}, {
						name: '真心想要',
						img: '/static/indexnav/7.gif'
					}, {
						name: '电视热卖',
						img: '/static/indexnav/8.gif'
					}, {
						name: '家电热卖',
						img: '/static/indexnav/9.gif'
					}, {
						name: '米粉卡',
						img: '/static/indexnav/10.gif'
					}]
				}, {
					list: [{
						name: '新品分类',
						img: '/static/indexnav/1.png'
					}, {
						name: '小米众筹',
						img: '/static/indexnav/2.gif'
					}, {
						name: '以旧换新',
						img: '/static/indexnav/3.gif'
					}, {
						name: '1分拼团',
						img: '/static/indexnav/4.gif'
					}, {
						name: '超值特卖',
						img: '/static/indexnav/5.gif'
					}, {
						name: '小米秒杀',
						img: '/static/indexnav/6.gif'
					}]
				}, {
					list: [{
						name: '新品分类',
						img: '/static/indexnav/1.png'
					}, {
						name: '小米众筹',
						img: '/static/indexnav/2.gif'
					}, {
						name: '以旧换新',
						img: '/static/indexnav/3.gif'
					}, {
						name: '1分拼团',
						img: '/static/indexnav/4.gif'
					}, {
						name: '超值特卖',
						img: '/static/indexnav/5.gif'
					}, {
						name: '小米秒杀',
						img: '/static/indexnav/6.gif'
					}, {
						name: '真心想要',
						img: '/static/indexnav/7.gif'
					}, {
						name: '电视热卖',
						img: '/static/indexnav/8.gif'
					}]
				}, {
					list: [{
						name: '新品分类',
						img: '/static/indexnav/1.png'
					}, {
						name: '小米众筹',
						img: '/static/indexnav/2.gif'
					}, {
						name: '以旧换新',
						img: '/static/indexnav/3.gif'
					}, {
						name: '1分拼团',
						img: '/static/indexnav/4.gif'
					}, {
						name: '超值特卖',
						img: '/static/indexnav/5.gif'
					}, {
						name: '小米秒杀',
						img: '/static/indexnav/6.gif'
					}, {
						name: '真心想要',
						img: '/static/indexnav/7.gif'
					}, {
						name: '电视热卖',
						img: '/static/indexnav/8.gif'
					}]
				}, {
					list: [{
						name: '新品分类',
						img: '/static/indexnav/1.png'
					}, {
						name: '小米众筹',
						img: '/static/indexnav/2.gif'
					}, {
						name: '以旧换新',
						img: '/static/indexnav/3.gif'
					}, {
						name: '1分拼团',
						img: '/static/indexnav/4.gif'
					}, {
						name: '超值特卖',
						img: '/static/indexnav/5.gif'
					}, {
						name: '小米秒杀',
						img: '/static/indexnav/6.gif'
					}, {
						name: '真心想要',
						img: '/static/indexnav/7.gif'
					}, {
						name: '电视热卖',
						img: '/static/indexnav/8.gif'
					}]
				}, {
					list: [{
						name: '新品分类',
						img: '/static/indexnav/1.png'
					}, {
						name: '小米众筹',
						img: '/static/indexnav/2.gif'
					}, {
						name: '以旧换新',
						img: '/static/indexnav/3.gif'
					}, {
						name: '1分拼团',
						img: '/static/indexnav/4.gif'
					}, {
						name: '超值特卖',
						img: '/static/indexnav/5.gif'
					}, {
						name: '小米秒杀',
						img: '/static/indexnav/6.gif'
					}, {
						name: '真心想要',
						img: '/static/indexnav/7.gif'
					}, {
						name: '电视热卖',
						img: '/static/indexnav/8.gif'
					}]
				}, {
					list: [{
						name: '新品分类',
						img: '/static/indexnav/1.png'
					}, {
						name: '小米众筹',
						img: '/static/indexnav/2.gif'
					}, {
						name: '以旧换新',
						img: '/static/indexnav/3.gif'
					}, {
						name: '1分拼团',
						img: '/static/indexnav/4.gif'
					}, {
						name: '超值特卖',
						img: '/static/indexnav/5.gif'
					}, {
						name: '小米秒杀',
						img: '/static/indexnav/6.gif'
					}, {
						name: '真心想要',
						img: '/static/indexnav/7.gif'
					}, {
						name: '电视热卖',
						img: '/static/indexnav/8.gif'
					}]
				}, {
					list: [{
						name: '新品分类',
						img: '/static/indexnav/1.png'
					}, {
						name: '小米众筹',
						img: '/static/indexnav/2.gif'
					}, {
						name: '以旧换新',
						img: '/static/indexnav/3.gif'
					}, {
						name: '1分拼团',
						img: '/static/indexnav/4.gif'
					}, {
						name: '超值特卖',
						img: '/static/indexnav/5.gif'
					}, {
						name: '小米秒杀',
						img: '/static/indexnav/6.gif'
					}, {
						name: '真心想要',
						img: '/static/indexnav/7.gif'
					}, {
						name: '电视热卖',
						img: '/static/indexnav/8.gif'
					}]
				}],
				imgr: ['/static/images/demo/demo1.jpg',
					'/static/images/demo/demo2.jpg',
					'/static/images/demo/demo3.jpg'
				],
				//每日精选
				selected: [{
					imgge: '/static/images/demo/list/1.jpg',
					name: '米家空调',
					name1: '1.5匹支流变频',
					favourPrice: '2199',
					originalPrice: '2699'
				}, {
					imgge: '/static/images/demo/list/2.jpg',
					name: '米家空调',
					name1: '1.5匹支流变频',
					favourPrice: '2199',
					originalPrice: '2699'
				}, {
					imgge: '/static/images/demo/list/3.jpg',
					name: '米家空调',
					name1: '1.5匹支流变频',
					favourPrice: '2199',
					originalPrice: '2699'
				}, {
					imgge: '/static/images/demo/list/4.jpg',
					name: '米家空调',
					name1: '1.5匹支流变频',
					favourPrice: '2199',
					originalPrice: '2699'
				}, {
					imgge: '/static/images/demo/list/5.jpg',
					name: '米家空调',
					name1: '1.5匹支流变频',
					favourPrice: '2199',
					originalPrice: '2699'
				}, {
					imgge: '/static/images/demo/list/6.jpg',
					name: '米家空调',
					name1: '1.5匹支流变频',
					favourPrice: '2199',
					originalPrice: '2699'
				}, {
					imgge: '/static/images/demo/list/1.jpg',
					name: '米家空调',
					name1: '1.5匹支流变频',
					favourPrice: '2199',
					originalPrice: '2699'
				}, {
					imgge: '/static/images/demo/list/2.jpg',
					name: '米家空调',
					name1: '1.5匹支流变频',
					favourPrice: '2199',
					originalPrice: '2699'
				}, {
					imgge: '/static/images/demo/list/3.jpg',
					name: '米家空调',
					name1: '1.5匹支流变频',
					favourPrice: '2199',
					originalPrice: '2699'
				}]
			}
		},
		onLoad() {

		},
		mounted() {},
		methods: {
			tabChange(e) {
				this.tabIndex = e.detail.current;
			},
			tabtap(index) {
				this.tabIndex = index;
			},
			navigateTo() {
				uni.navigateTo({
					url: "/components/home/xqing"
				})
			},
			navigateTow() {
				uni.navigateTo({
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

	.image-view {
		width: 50%;
		height: 220px;
		float: left;
	}

	.image-view image {
		width: 100%;
		height: 300upx;
	}

	.selected-font {
		font-size: 20upx;
		color: #8F8F94;
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
		height: 450px;
	}

	/* tab切换高度 */
	.swiper-item {
		height: 1100rpx;
	}
</style>

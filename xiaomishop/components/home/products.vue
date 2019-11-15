<template>
	<view>
		<!-- 顶部选项卡 -->
		<scroll-view id="nav-bar" class="nav-bar" scroll-x scroll-with-animation :scroll-left="scrollLeft">
			<view class="taber-nav">
				<view v-for="(item,index) in tabBars" :key="item.id" class="nav-item" :tabCurrentIndex="tabCurrentIndex" :class="{current: index === tabCurrentIndex}"
				 :id="'tab'+index" @click="changeTab(index)">{{item.name}}</view>
			</view>
		</scroll-view>
		<view class="uni-tab-bar">
			<swiper class="swiper-box" :current="tabCurrentIndex" @change="changeTab">
				<swiper-item v-for="tabItem in tabBars" :key="tabItem.id">
					<scroll-view scroll-y class="list" show-scrollbar="false" @scrolltolower="loadmore(indexz)">
						<!-- 图文列表 -->
						<view>
							<view class="tab-list" v-for="(item,index) in jxlist" :key='index'>
								<view>
									<image :src="item.cover"></image>
								</view>
								<view class="zuixin">
									<view class="item-name">
										<view>{{item.title}}</view>
										<view class="item.one">{{item.desc}}</view>
									</view>
									<view class="purchase">去购买</view>
								</view>
								<view class="understand">了解更多<text class="iconfont icon-you"></text></view>
							</view>
						</view>
						<view class="load-more">{{loadtext}}</view>
					</scroll-view>
				</swiper-item>
			</swiper>
		</view>
	</view>
</template>

<script>
	//导入json
	import json from '@/Json'
	let scrollTimer = false,
		tabBar;
	//导入状态管理
	import {
		mapState,
		mapMutations
	} from 'vuex';
	import swiperTabHead from "@/components/home/tabBars.vue"
	export default {
		computed: {
			...mapState(['recommend', 'jxlist'])
		},
		components: {
			swiperTabHead
		},
		data() {
			return {
				tabBars: [], //tab导航数据
				tabCurrentIndex: 0,
				loadtext: '上拉加载更多'
			}
		},
		async created() {
			this.loadTabbars();
		},
		methods: {
			//获取分类
			loadTabbars() { //获取json数据
				let tabList = json.tabar; //获取
				this.tabBars = tabList; //赋值给data定义的tabBars
			},
			//tab切换
			async changeTab(e) { //顶部选项卡
				if (scrollTimer) { //每次切换执行最后一次
					//多次切换只执行最后一次
					clearTimeout(scrollTimer);
					scrollTimer = false;
				}

				let index = e;
				if (typeof e === 'object') { //跟随变化
					index = e.detail.current
					this.tabCurrentIndex = e.detail.current; //滑块滑动跟随变化
				}

				if (typeof e === 'number') {
					//点击切换时先切换再滚动tabbar，避免同时切换视觉错位
					this.tabCurrentIndex = index;
				}
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
			loadmore(index) { //下拉加载更多
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
			}
		}
	}
</script>

<style scoped lang='scss'>
	/* 顶部tabbar */
	.taber-nav{
		display: flex;
		justify-content: space-around;
	}
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
	.list {
		height: 1130rpx;
	}

	.swiper-box {
		height: 1130rpx;
	}

	/*  */
	.tab-list {
		width: 700rpx;
		border-bottom: 1px solid #555555;
		margin: auto;
		border-radius: 15rpx;
		overflow: hidden;
		margin-top: 100rpx;
	}

	.tab-list image {
		width: 700rpx;
		height: 400rpx;
	}

	.zuixin {
		overflow: hidden;
		margin-top: 10px;
	}

	.item-name {
		width: 45%;
		float: left;
		font-size: 30rpx;
		color: #555555;

	}

	.item.one {
		overflow: hidden;
		text-overflow: ellipsis;
		white-space: nowrap;
	}

	.purchase {
		padding: 10rpx 40rpx;
		border-radius: 50px;
		background: #FD7112;
		color: #FFFFFF;
		float: right;
		margin-top: 5px;
		font-size: 30rpx;
	}

	.understand {
		text-align: center;
		padding: 30rpx 0rpx;
		color: #555555;
		font-size: 30rpx;
	}

	.load-more {
		text-align: center;
		height: 60rpx;
		line-height: 60rpx;
		font-size: 20rpx;
	}
</style>

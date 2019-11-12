<template>
	<view>
		<swiperTabHead :tabBars="tabBars" :tabIndex="tabIndex" @tabtap="tabtap"></swiperTabHead>
		<view class="uni-tab-bar">
			<swiper class="swiper-box" :current="tabIndex" @change="tabChange">
				<swiper-item v-for="(items,index) in 4" :key="index">
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
				tabIndex: 0,
				tabBars: [{
					name: '最新热品',
					id: 'zuixinrepin'
				}, {
					name: '最新上架',
					id: 'zuixinshangjia'
				}, {
					name: '即将开售',
					id: 'jijiangkaishou'
				}, {
					name: '新品手机',
					id: 'xinpinshouji'
				}],
				loadtext: '上拉加载更多'
			}
		},
		created() {
			this.shuj();
		},
		methods: {
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
			async shuj() {
				let [error, res] = await uni.request({
					url: 'http://ceshi3.dishait.cn/api/index_category/data' //接口拿取数据
				})
				this.newslist = res.data.data.data[4].data //每日精选商品
			},
			tabChange(e) {
				this.tabIndex = e.detail.current;
			},
			tabtap(index) {
				this.tabIndex = index;
			}
		}
	}
</script>

<style scoped>
	.list {
		height: 1155rpx;
	}

	.swiper-box {
		height: 1155rpx;
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

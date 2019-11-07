<template>
	<view>
		<swiperTabHead :tabBars="tabBars" :tabIndex="tabIndex" @tabtap="tabtap"></swiperTabHead>
		<view class="uni-tab-bar">
			<swiper class="swiper-box" :current="tabIndex" @change="tabChange">
				<swiper-item v-for="(items,index) in 4" :key="index">
					<scroll-view scroll-y class="list" show-scrollbar="false">
						<!-- 图文列表 -->
						<view>
							<view class="tab-list" v-for="(item,index) in newslist" :key='index'>
								<view>
									<image :src="item.cover"></image>
								</view>
								<view class="zuixin">
									<view class="item-name">
										<view>{{item.title}}</view>
										<view class="item.one">{{item.desc}}</view>
									</view>
									<view class="goumai">去购买</view>
								</view>
								<view class="liaojie">了解更多<text class="iconfont icon-you"></text></view>
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
	import tabList from "@/components/home/tab-list.vue"
	export default {
		components: {
			swiperTabHead,
			tabList
		},
		data() {
			return {
				tabIndex: 0,
				tabBars: [{
					name: '最新热品',
					n: 'zuixinrepin'
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
				newslist: ''
			}
		},
		created() {
			this.shuj();
		},
		methods: {
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
		height: 1200rpx;
	}

	.swiper-box {
		height: 1200rpx;
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
		height: 300rpx;
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
		text-overflow:ellipsis;
		white-space: nowrap;
	}

	.goumai {
		padding: 10rpx 40rpx;
		border-radius: 50px;
		background: #FD7112;
		color: #FFFFFF;
		float: right;
		margin-top: 5px;
		font-size: 30rpx;
	}

	.liaojie {
		text-align: center;
		padding: 30rpx 0rpx;
		color: #555555;
		font-size: 30rpx;
	}
</style>

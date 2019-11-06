<template>
	<view>
		<swiperTabHead :tabBars="tabBars" :tabIndex="tabIndex" @tabtap="tabtap"></swiperTabHead>
		<view class="uni-tab-bar">
			<swiper class="swiper-box" :current="tabIndex" @change="tabChange">
				<swiper-item v-for="(items,index) in newslist" :key="index">
					<scroll-view scroll-y class="list" show-scrollbar="false">
						<template v-if="items.list.length > 0">
							<!-- 图文列表 -->
							<block v-for="(item,index1) in items.list" :key="index1">
								<tabList :item="item" :index="index1"></tabList>
							</block>
						</template>
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
				newslist: [{
					list: [{
						img: '/static/images/demo/demo4.jpg',
						name: 'Remi K20 Pro',
						name1: '蛟龙885 旗舰处理器',
						pic: '去购买',
						picr: '了解更多'
					},{
						img: '/static/images/demo/demo4.jpg',
						name: 'Remi K20 Pro',
						name1: '蛟龙885 旗舰处理器',
						pic: '去购买',
						picr: '了解更多'
					},{
						img: '/static/images/demo/demo4.jpg',
						name: 'Remi K20 Pro',
						name1: '蛟龙885 旗舰处理器',
						pic: '去购买',
						picr: '了解更多'
					},{
						img: '/static/images/demo/demo4.jpg',
						name: 'Remi K20 Pro',
						name1: '蛟龙885 旗舰处理器',
						pic: '去购买',
						picr: '了解更多'
					}]
				},{
					list: [{
						img: '/static/images/demo/demo4.jpg',
						name: 'Remi K20 Pro',
						name1: '蛟龙885 旗舰处理器',
						pic: '去购买',
						picr: '了解更多'
					},{
						img: '/static/images/demo/demo4.jpg',
						name: 'Remi K20 Pro',
						name1: '蛟龙885 旗舰处理器',
						pic: '去购买',
						picr: '了解更多'
					},{
						img: '/static/images/demo/demo4.jpg',
						name: 'Remi K20 Pro',
						name1: '蛟龙885 旗舰处理器',
						pic: '去购买',
						picr: '了解更多'
					},{
						img: '/static/images/demo/demo4.jpg',
						name: 'Remi K20 Pro',
						name1: '蛟龙885 旗舰处理器',
						pic: '去购买',
						picr: '了解更多'
					}]
				},{
					list: [{
						img: '/static/images/demo/demo4.jpg',
						name: 'Remi K20 Pro',
						name1: '蛟龙885 旗舰处理器',
						pic: '去购买',
						picr: '了解更多'
					},{
						img: '/static/images/demo/demo4.jpg',
						name: 'Remi K20 Pro',
						name1: '蛟龙885 旗舰处理器',
						pic: '去购买',
						picr: '了解更多'
					},{
						img: '/static/images/demo/demo4.jpg',
						name: 'Remi K20 Pro',
						name1: '蛟龙885 旗舰处理器',
						pic: '去购买',
						picr: '了解更多'
					},{
						img: '/static/images/demo/demo4.jpg',
						name: 'Remi K20 Pro',
						name1: '蛟龙885 旗舰处理器',
						pic: '去购买',
						picr: '了解更多'
					}]
				},{
					list: [{
						img: '/static/images/demo/demo4.jpg',
						name: 'Remi K20 Pro',
						name1: '蛟龙885 旗舰处理器',
						pic: '去购买',
						picr: '了解更多'
					},{
						img: '/static/images/demo/demo4.jpg',
						name: 'Remi K20 Pro',
						name1: '蛟龙885 旗舰处理器',
						pic: '去购买',
						picr: '了解更多'
					},{
						img: '/static/images/demo/demo4.jpg',
						name: 'Remi K20 Pro',
						name1: '蛟龙885 旗舰处理器',
						pic: '去购买',
						picr: '了解更多'
					},{
						img: '/static/images/demo/demo4.jpg',
						name: 'Remi K20 Pro',
						name1: '蛟龙885 旗舰处理器',
						pic: '去购买',
						picr: '了解更多'
					}]
				}	]
			}
		},
		onLoad() {

		},
		methods: {
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
	.list{
		height: 1200rpx;
	}
	
	.swiper-box{
		height: 1200rpx;
	}
</style>

<template>
	<view>
		<swiper :indicator-dots="true" autoplay="false" :interval="3000" :duration="1000" circular="false" style='height: 350rpx;'>
			<swiper-item>
				<view v-for="(item,index) in imgge" :key='index'>
					<image class="swiper-item" :src="item.src" style="width: 750rpx;height: 350rpx;"></image>
				</view>
			</swiper-item>
		</swiper>
	</view>
</template>
<script>
	export default {
		data() {
			return {
				imgge:[]
			}
		},
		onLoad() {
			this.shujr()
		},
		methods: {
			async shujr() {
				let [error, res] = await uni.request({
					url: 'http://ceshi3.dishait.cn/api/index_category/data' //接口拿去数据
				})
				this.imgge=res.data.data.data[0].data
			}
		}
	}
</script>

<style>

</style>

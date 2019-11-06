<template>
	<view>
		<swiper :indicator-dots="true" autoplay="false" :interval="3000" :duration="1000" circular="false" style='height: 350rpx;'>
			<swiper-item v-for="(item,index) in imgge">
				<image class="swiper-item" :src="item.img" style="width: 750rpx;height: 350rpx;"></image>
			</swiper-item>
		</swiper>
	</view>
</template>
<script>
	export default {
		data() {
			return {
				imgge: [{
					img: "/static/images/demo/demo4.jpg"
				}, {
					img: "/static/images/demo/demo8.jpg"
				}]
			}
		},
		onLoad() {

		},
		methods: {

		}
	}
</script>

<style>

</style>

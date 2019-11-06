<template>
	<view class="category">
		<view class="category-one">
			<view>
				<image :src="item.img"></image>
			</view>
			<text>{{item.name}}</text>
		</view>
	</view>
</template>

<script>
	export default {
		props: {
			item: Object,
			index: Number
		},
		data() {
			return {}
		},
		methods: {
			opendetail() {

			}
		}
	}
</script>

<style scoped>
	.category-one {
		font-size: 20upx;
		text-align: center;
		margin-bottom: 20rpx;
	}

	.category-one image {
		width: 70upx;
		height: 70upx;
	}
</style>

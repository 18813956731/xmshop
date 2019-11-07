<template>
	<view class="category">
		<view class="category-one">
			<view>
				<image :src="item.src"></image>
			</view>
			<text>{{item.text}}</text>
		</view>
	</view>
</template>

<script>
	export default {
		props: {
			item: Object
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

<template>
	<view>
		<view class="textr">
			<view class="tuijian">
				<view>
					<image :src="item.img"></image>
				</view>
				<view class="text">{{item.name}}</view>
				<view class="text_tow">{{item.nameone}}</view>
				<view class="text">
					<text class="text-Four">￥{{item.pic}}</text>
					<text class="text-three">￥{{item.price}}</text>
				</view>
			</view>
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
			return {

			}
		},
		methods: {
			opendetail() {

			}
		}
	}
</script>

<style scoped>
	.tuijian {
		width: 100%;
	}

	.tuijian image {
		width: 100%;
		height: 300rpx;
	}

	.text {
		font-size: 33rpx;
		color: #333333;
		text-indent: 25rpx;
		line-height: 60rpx;
	}

	.text_tow {
		text-indent: 25rpx;
		font-size: 25rpx !important;
		color: #999999;
	}

	.text-Four {
		color: #DC3546;
	}

	.text-three {
		font-size: 25rpx;
		color: #8F8F94;
		text-decoration: line-through;
	}
</style>

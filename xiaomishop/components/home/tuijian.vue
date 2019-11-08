<template>
	<view>
		<view class="textr">
			<view class="tuijian">
				<view>
					<image :src="item.cover"></image>
				</view>
				<view class="text">{{item.title}}</view>
				<view class="text_tow">{{item.desc}}</view>
				<view class="text">
					<text class="text-Four">￥{{item.min_oprice}}</text>
					<text class="text-three">￥{{item.min_price}}</text>
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
		line-height: 60rpx;
	}

	.text_tow {
		font-size: 25rpx !important;
		color: #999999;
		overflow: hidden;
		text-overflow:ellipsis;
		white-space: nowrap;
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

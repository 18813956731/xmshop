<template>
	<view>
		
		<view class="textr">
			<view class="tuijian" v-for="(item,index) in tjlist" :key="index" @click="navigateTo(item)">
				<view>
					<image :src="item.cover"></image>
				</view>
				<view class="text">{{item.title}}</view>
				<view class="text_tow">{{item.desc}}</view>
				<view class="text">
					<text class="text-Four">￥{{item.min_price}}</text>
					<text class="text-three">￥{{item.min_oprice}}</text>
				</view>
			</view>
		</view>
		
	</view>
</template>

<script>
	//导入状态管理
	import {
		mapState,
		mapMutations
	} from 'vuex';
	export default {
		computed: {
			...mapState(['tjlist'])
		},
		methods: {
			navigateTo(e) { //点击商品跳转到商品详情购买页
				uni.navigateTo({ //跳转传参到商品详情页
					url: "/components/home/xqing?data=" + e.id
				})
			}
		}
	}
</script>

<style scoped>
	.textr {
		width: 750rpx;
		display: flex;
		justify-content: space-between;
		flex-wrap: wrap;
	}

	.tuijian {
		width: 47.5%;
		padding: 0rpx 8rpx;
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
		text-overflow: ellipsis;
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

	/* 为你推荐 */
</style>

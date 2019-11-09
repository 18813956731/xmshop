<template>
	<view>
			<view class="textr">
				<view class="tuijian" v-for="(item,index) in recommend" :key="index">
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
//导入状态管理
	import {  
	        mapState,  
	        mapMutations  
	} from 'vuex';
	export default {
		data() {
			return {
				
			}
		},
		created(){

		},
		computed: {
		           ...mapState(['recommend'])
		       }, 
		methods: {
			
		}
	}
</script>

<style scoped>
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
	
	/* 为你推荐 */
	.textr{
		display: flex;
		justify-content: space-between;
		flex-wrap: wrap;
		width: 100%;
	}
	
	.tuijian {
		width: 48%;
		padding: 10rpx 5rpx;
	}
</style>

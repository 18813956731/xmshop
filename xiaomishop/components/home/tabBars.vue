<template>
	<!-- tab导航组件 -->
	<view class="one">
		<scroll-view class="tow" :scroll-x="true" show-scrollbar="false" scroll-x>
			<view v-for="(tab,index) in tabBars" :key="index" class="trr" :style="scrollStyle">
				<view class="swiper-tab-list" :class="{'active' : tabIndex==index}" @tap="tabtap(index)" :style="scrollItemStyle">
					{{tab.name}}
					<view class="swiper-tab-line"></view>
				</view>
			</view>
		</scroll-view>
	</view>
</template>

<script>
	export default {
		props: { //组件传参是实时更新的，数据及时变化！
			tabBars: Array,
			tabIndex: Number,
			scrollStyle: {
				type: String,
				default: ""
			},
			scrollItemStyle: {
				type: String,
				default: ""
			}
		},
		data() {
			return {
				scrollLeft: 0,
				tabIndexr: 0,
			}
		},
		methods: {
			//点击切换导航
			tabtap(index) {
				// this.tabIndex = index;
				this.$emit('tabtap', index) //触发自定义的tabtap事件
			}
		}
	}
</script>

<style scoped>
	.tow {
		width: 750rpx;
		display: flex;
		justify-content: space-between;
		flex-direction: row;
		white-space: nowrap;
	}

	.trr {
		height: 100%;
		display: inline-block;
		flex-wrap: nowrap;
	}

	.swiper-tab-list {
		padding: 10rpx 20rpx;
		color: #333333;
		font-size: 30rpx;
	}

	.one .active {
		color: #F0AD4E;
	}

	.active .swiper-tab-line {
		border-bottom: 6rpx solid #FEDE33;
		width: 100%;
	}
</style>

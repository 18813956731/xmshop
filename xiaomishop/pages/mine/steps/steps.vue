<template>
	<view>
		<view class="example-body">
			<uni-steps :options="list1" :active="active" direction="column" />
		</view>
		<!-- <button type="primary" @click="change">改变状态</button> -->
	</view>
</template>

<script>
	import uniSteps from '@/components/mine/uni-steps.vue'
	export default {
		components: {
			uniSteps
		},
		data() {
			return {
				active: 1,
				list1: [{
					title: '买家下单',
					desc: '2018-11-11'
				}, {
					title: '卖家发货',
					desc: '2018-11-11'
				}, {
					title: '圆通收货',
					desc: '2018-11-12'
				}, {
					title: '交易完成',
					desc: '2018-11-14'
				}]
			}
		},
		methods: {
			//改变状态
			change() {
				if (this.active < this.list1.length - 1) {
					this.active += 1
				} else {
					this.active = 0
				}
			}
		}
	}
</script>

<style scoped="scoped">
	page {
		display: flex;
		flex-direction: column;
		box-sizing: border-box;
		background-color: #efeff4
	}

	view {
		font-size: 28upx;
		line-height: inherit
	}

	.example {
		padding: 0 30upx 30upx
	}


	.example .example-title {
		margin: 40upx 0
	}

	.example-body {
		padding: 30upx;
		background: #fff
	}

	.example-info {
		padding: 30upx;
		color: #3b4144;
		background: #fff
	}

	button {
		margin: 30upx;
	}
</style>
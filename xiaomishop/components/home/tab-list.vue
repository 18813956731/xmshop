<template>
	<view>
		<view class="tab-list">
			<view>
				<image :src="item.img"></image>
			</view>
			<view class="zuixin">
				<view class="item-name">
					<view>{{item.name}}</view>
					<view>{{item.name1}}</view>
				</view>
				<view class="goumai">{{item.pic}}</view>
			</view>
			<view class="liaojie">{{item.picr}}<text class="iconfont icon-you"></text></view>
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
	.tab-list {
		width: 95%;
		border-bottom: 1px solid #555555;
		margin: auto;
		border-radius: 15rpx;
		overflow: hidden;
		margin-bottom: 100rpx;
	}

	image {
		width: 100%;
		height: 300rpx;
	}

	.zuixin {
		overflow: hidden;
		margin-top: 10px;
	}

	.item-name {
		float: left;
	}

	.goumai {
		padding: 10upx 40upx;
		border-radius: 50px;
		background: #FD7112;
		color: #FFFFFF;
		float: right;
		margin-top: 5px;
	}

	.liaojie {
		text-align: center;
		margin-top: 100rpx;
	}
</style>

<template>
	<view id="content">
		<view class="head">
			<!-- 头部导航 -->
			<view class="itemst" v-for="item in head">
				<view class="items-icon">{{ item }}</view>
				<view class="icon">
					<view class="icotop">
						<icon type="black" class="iconfont icon-paixu-shengxu"></icon>
						<icon type="black" class="iconfont icon-paixu-jiangxu"></icon>
					</view>
				</view>
			</view>
			<view class="items" @click="show('right')" style="color: orange;">筛选</view>
		</view>
		<!-- 筛选 -->
		<view class="example-body">
			<uni-drawer :visible="showRigth" mode="right" @close="closeDrawer('right')">
				<!-- 服务 -->
				<view class="service">
					<view>服务</view>
					<view class="service-text">
						<span>促销</span>
						<span>分期</span>
						<span>仅看有货</span>
					</view>
				</view>
				<!-- 分类 -->
				<view class="service">
					<view>分类</view>
					<view class="service-text">
						<span>耳机</span>
						<span>户外</span>
						<span>配件</span>
					</view>
				</view>
				<view class="close">
					<button class="but1" @click="res">重置</button>
					<button class="but2" @click="hide">确定</button>
				</view>
			</uni-drawer>
		</view>
		<!-- 筛选end -->
		<view class="conter">
			<!-- 商品 -->
			<view v-for="item in 10">
				<view class="dl" v-for="(item, index) in datas" @click="tiao(index)">
					<view class="dt"><image src="../../../static/images/demo/list/1.jpg"></image></view>
					<view class="dd">
						<view class="name">{{ item.name }}</view>
						<span class="span">{{ item.txt }}</span>
						<view class="rmb">
							$
							<span style="font-size: 45rpx;">{{ item.rmb }}</span>
						</view>
						<view class="pinglun">{{ item.pinglun }}</view>
					</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
import uniDrawer from '@/components/uni-drawer/uni-drawer.vue';
export default {
	components: {
		uniDrawer
	},
	data() {
		return {
			showRigth: false,
			showLeft: false,
			head: ['综合', '销量', '价格'],

			datas: [
				{
					name: '真无线蓝牙耳机',
					txt: '雅致简约/分体式入耳/收纳盒充电/蓝牙5.0、触控操作',
					rmb: '199',
					pinglun: '1348'
				}
			]
		};
	},
	methods: {
		tiao(){
			uni.navigateTo({
				url:"../../../components/home/xqing"
			})
		},
		res() {
			//关闭筛选
			console.log('取消');
			// this.showRigth = false;
		},
		show(e) {
			//显示筛选
			this.showRigth = true;
		},
		hide() {
			//关闭筛选
			this.showRigth = false;
		},
		closeDrawer(e) {
			this.showRigth = false;
		},
		confirm() { }
	},

	onNavigationBarButtonTap(e) {
		uni.navigateTo({
			url: '../search/search'
		});
	}
};
</script>

<style scoped>
.head {
	height: 100rpx;
	border-top: #999999 1px solid;
	border-bottom: #999999 1px solid;
	overflow: hidden;
	line-height: 100rpx;
}
.itemst {
	text-align: center;
	width: 180rpx;
	float: left;
	padding-left: 20rpx;
	color: #808080;
}
/* 字体图标 */
.icon {
	position: relative;
	/* width: 80rpx; */
	height: 100rpx;
	float: left;
}
.items-icon {
	float: left;
}
.icotop {
	position: relative;
	/* border: 1px solid; */
	height: 100rpx;
}
.iconfont {
	font-size: 45rpx;
	width: 50rpx;
	float: left;
	overflow: hidden;
	line-height: 40rpx;
	text-align: center;
}
.icon-paixu-shengxu {
	color: #fd964f;
	position: absolute;
	top: 30rpx;
	left: 10rpx;
}
.icon-paixu-jiangxu {
	position: absolute;
	top: 30rpx;
	left: 10rpx;
}
/* 商品 列表*/
.dl {
	padding: 30rpx;
	border-bottom: #999999 1px solid;
	overflow: hidden;
}
.dl .dt {
	float: left;
	width: 250rpx;
	height: 250rpx;
}

.dl .dd {
	margin-left: 20rpx;
	width: 400rpx;
	float: left;
}
.dt image {
	width: 100%;
	height: 100%;
}
.dl .dd .span,
.pinglun {
	color: #999999;
	font-size: 30rpx;
}
.dl .dd .name {
	padding-top: 10rpx;
	font-weight: 600;
}
/* 价格 */
.rmb {
	color: orange;
}
/* 筛选 */
.example-body {
	position: relative;
	/* padding: 30upx; */
	background: #fff;
}
.close {
	position: absolute;
	bottom: 0rpx;
	right: 0rpx;
	width: 100%;
	height: 100rpx;
}
.but1,
.but2 {
	font-size: 40rpx !important;
	font-weight: 600;
	border: none;
	border-radius: 0rpx;
	outline: none;
	float: left;
	display: block;
	height: 100rpx;
	width: 50%;
	line-height: 100rpx;
}
.but1 {
	background-color: white;
}
.but2 {
	background-color: orange;
}
.service {
	width: 100%;
	padding: 15rpx;
	overflow: hidden;
}
.service-text {
	padding: 15rpx;
	overflow: hidden;
}
.service-text span {
	display: block;
	text-align: center;
	font-size: 36rpx;
	width: 160rpx;
	margin: 5%;
	float: left;
	background: #c0c0c0;
	border: #7c858d 1rpx solid;
}
/* 筛选结束 */
</style>

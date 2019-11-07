<template>
	<view id="content">
		<view class="head">
			<!-- 头部导航 -->
			<view class="itemst" v-for="(item,index) in head" :key="index" @click="sort(index)">
				<view class="items-icon" :class="sortIndex==index?'headerTxt':''">{{ item }}</view>
				<view class="icon">
					<view class="icotop">
						<!-- 字体图标 -->
						<icon type="black" class="iconfont icon-paixu-shengxu" :class="sortT==true&&sortIndex==index?'headerTxt':''"></icon>
						<icon type="black" class="iconfont icon-paixu-jiangxu" :class="sortT==false&&sortIndex==index?'headerTxt':''"></icon>
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
						<span :class="serviceB==index?'active':''" v-for="(item,index) in service" :key="index" @click="serviceD(index)">{{item}}</span>
					</view>
				</view>
				<!-- 分类 -->
				<view class="service">
					<view>分类</view>
					<view class="service-text">
						<span :class="classB==index?'active':''"  v-for="(item,index) in classT" :key="index" @click="classD(index)">{{item}}</span>
					</view>
				</view>
				<!-- 重置确定按钮 -->
				<view class="close">
					<button class="but1" @click="res">重置</button>
					<button class="but2" @click="hide">确定</button>
				</view>
			</uni-drawer>
		</view>
		<!-- 筛选end -->
		<view class="conter">
			<!-- 商品 -->
			<view v-for="item in 10" :key="item">
				<view class="dl" v-for="(item, index) in datas" @click="Jump(index)">
					<view class="dt"><image src="/static/images/demo/list/1.jpg"></image></view>
					<view class="dd">
						<!-- 商品名 -->
						<view class="name">{{ item.name }}</view>
						<!-- 介绍 -->
						<span class="span">{{ item.txt }}</span>
						<!-- 价格 -->
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
			service:["促销","分期","仅看有货"],
			serviceB:0,
			classT:["耳机","户外","配件"],
			classB:0,
			showRigth: false,
			showLeft: false,
			head: ['综合', '销量', '价格'],
			sortIndex:0,
			sortT:false,
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
		sort(e){
			let _this=this;
			_this.sortIndex=e;
			_this.sortT=!_this.sortT;
			// 获取数据
			uni.request({
				url:"http://ceshi3.dishait.cn/api/goods/search",
				 success: (res) => {
					 console.log(res)
				 }
			})
		},
		serviceD(e){//点击当前筛选赋值样式
			this.serviceB=e;
		},
		classD(e){
			this.classB=e;
		},
		Jump(){//跳转详情页面
			uni.navigateTo({
				url:"/components/home/xqing"
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
		if(e.index==0){
			// uni.navigateTo({
			// 	url: '/pages/shopping/index'
			// });
			console.log("购物")
		}
		
	}
};
</script>

<style scoped>
	/* 头部 */
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
/* 点击头部排序列表换字体颜色 */
.headerTxt{
	color: #fd964f;
}
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
/* 排序字体图标 */
.iconfont {
	font-size: 45rpx;
	width: 50rpx;
	float: left;
	overflow: hidden;
	line-height: 40rpx;
	text-align: center;
}
.icon-paixu-shengxu {
	position: absolute;
	top: 30rpx;
	left: 0rpx;
}
.icon-paixu-jiangxu {
	position: absolute;
	top: 30rpx;
	left: 0rpx;
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
/* 重置取消 */
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
	background: #F8F9FB;
	border: 1rpx solid white;
}
/* 点击添加的样式 */
.active{
	border: 1rpx solid #FA8538!important;
	background-color: #FCE0D5;
	color: #FA9855;
}
/* 筛选结束 */
</style>

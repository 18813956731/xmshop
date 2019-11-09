<template>
	<view id="content">
		<view class="head">
			<!-- 头部导航 -->
			<view class="itemst" v-for="(item, index) in head" :key="index" @click="sort(index)">
				<view class="items-icon" :class="sortIndex == index ? 'headerTxt' : ''">{{ item.txt }}</view>
				<view class="icotop">
						<!-- 字体图标 -->
						<icon type="black" class="iconfont icon-paixu-shengxu" :class="item.judge == 1 && sortIndex == index ? 'headerTxt' : ''"></icon>
						<icon type="black" class="iconfont icon-paixu-jiangxu" :class="item.judge == 0 && sortIndex == index ? 'headerTxt' : ''"></icon>
					</view>
			</view>
			<view class="itemst" @click="show('right')" style="color: orange;">筛选</view>
		</view>
		<!-- 筛选 -->
		<view class="example-body">
			<uni-drawer :visible="showRigth" mode="right" @close="closeDrawer('right')">
				<!-- 服务 -->
				<view class="service">
					<view>服务</view>
					<view class="service-text">
						<span :class="serviceB == index ? 'active' : ''" v-for="(item, index) in service" :key="index" @click="serviceD(index)">{{ item }}</span>
					</view>
				</view>
				<!-- 分类 -->
				<view class="service">
					<view>分类</view>
					<view class="service-text">
						<span :class="classB == index ? 'active' : ''" v-for="(item, index) in classT" :key="index" @click="classD(index)">{{ item }}</span>
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
			<view >
				<view class="dl" v-for="(item, index) in datas" @click="Jump(item)" :key="index">
					<view class="dt"><image :src="item.cover"></image></view>
					<view class="dd">
						<!-- 商品名 -->
						<view class="name">{{ item.title }}</view>
						<!-- 价格 -->
						<view class="rmb">
							￥
							<span style="font-size: 45rpx;">{{ item.min_price }}</span>
						</view>
						<!-- 销量-->
						<span class="span">销量:{{ item.num }}</span>
						<view class="pinglun">{{ item.comments_count}}条评论 {{item.comprehensive}}%满意</view>
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
			service: ['促销', '分期', '仅看有货'],
			serviceB: 0,
			classT: ['耳机', '户外', '配件'],
			classB: 0,
			showRigth: false, //筛选
			head: [{ txt: '综合', judge: 0 }, { txt: '销量', judge: 0 }, { txt: '价格', judge: 0 }],
			sortIndex: 0,
			datas: [
				{
					comprehensive:99,//综合排序
					num:1000,//销量
					pinglun: '1348',
					"id": 28,
					"title": "小米空调",
					"cover": "https://tangzhe123-com.oss-cn-shenzhen.aliyuncs.com/public/5d8834543784d.jpg",
					"min_price": "680.00",//价格
					"comments_count": 1000,
					"comments_good_count": 0
				},{
					comprehensive:95,//综合排序
					num:6582,//销量
					pinglun: '1348',
					"id": 28,
					"title": "小米空调",
					"cover": "https://tangzhe123-com.oss-cn-shenzhen.aliyuncs.com/public/5d8834543784d.jpg",
					"min_price": "998.00",//价格
					"comments_count": 2450,
					"comments_good_count": 0
				},{
					comprehensive:97,//综合排序
					num:3365,//销量
					pinglun: '1348',
					"id": 28,
					"title": "小米空调",
					"cover": "https://tangzhe123-com.oss-cn-shenzhen.aliyuncs.com/public/5d8834543784d.jpg",
					"min_price": "885.00",//价格
					"comments_count": 4780,
					"comments_good_count": 0
				},{comprehensive:90,//综合排序
					num:844,//销量
					pinglun: '1348',
					"id": 28,
					"title": "小米空调",
					"cover": "https://tangzhe123-com.oss-cn-shenzhen.aliyuncs.com/public/5d8834543784d.jpg",
					"min_price": "627.00",//价格
					"comments_count": 1080,
					"comments_good_count": 0
				},{comprehensive:85,//综合排序
					num:390,//销量
					pinglun: '1348',
					"id": 28,
					"title": "小米空调",
					"cover": "https://tangzhe123-com.oss-cn-shenzhen.aliyuncs.com/public/5d8834543784d.jpg",
					"min_price": "290.00",//价格
					"comments_count": 980,
					"comments_good_count": 0
				}
			],
			click:["comprehensive","num","min_price"]//综合销量价格排序
		};
	},
	methods: {
		sort(e) {
			let _this = this;
			let index = 0;
			_this.sortIndex = e;
			for (let i = 0; i < _this.head.length; i++) {
				if (e == i) {//当前字体图标
					if (_this.head[i].judge == 0) {
						this.datas=this.datas.sort(this.compareB(this.click[e]))//小到大排序
						console.log(this.datas)
						_this.head[i].judge = 1;//向上字体图标的颜色变色
					} else {
						this.datas=this.datas.sort(this.compareT(this.click[e]))//大到小排序
						console.log(this.datas)
						_this.head[i].judge = 0;//向下字体图标的颜色变色
					}
				} else {//其他字体图标
					_this.head[i].judge = 1;
				}
			}

			// 获取数据
		},
		
		serviceD(e) {
			//点击当前筛选赋值样式
			this.serviceB = e;
		},
		classD(e) {
			this.classB = e;
		},
		Jump(e) {
			//跳转详情页面
			let id=e.id
			console.log(id)
			uni.navigateTo({
				url: '/components/home/xqing?data='+id
			});
		},
		res() {
			//关闭筛选
			let _this=this
			_this.serviceB=0
			_this.classB=0
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
		compareT(property){
		    return function(a,b){
		        var value1 = a[property];
		        var value2 = b[property];
		        return value1 - value2;
		    }
		},
		compareB(property){
		    return function(a,b){
		        var value1 = b[property];
		        var value2 = a[property];
		        return value1 - value2;
		    }
		}
	},
	created() {
		uni.request({
			url:"http://ceshi3.dishait.cn/api/goods/search",
			data:{
				page:1,
				title:"小米空调"
			},
			method:"POST",
			header: {
				'content-type': 'application/x-www-form-urlencoded',
			},
			success(res) {
				// console.log(res)
			}
		})
		uni.request({//获取数据
			url: 'http://ceshi3.dishait.cn/api/goods/28',
			success(res) {
				// 分类da
				
				console.log(res.data);
			}
		})
		// console.log(arr.sort(compare('age')))
	},
	onNavigationBarButtonTap(e) {
		if (e.index == 0) {
			// uni.navigateTo({
			// 	url: '/pages/shopping/index'
			// });
			console.log('购物');
		}
	}
};
</script>

<style scoped>
/* 头部 */
.head {
	height: 100rpx;
	line-height:100rpx;
	border-top: #999999 1px solid;
	border-bottom: #999999 1px solid;
	overflow: hidden;
}
.itemst {
	float:left;
	overflow:hidden;
	text-align: center;
	width: 160rpx;
	padding-left: 20rpx;
	color: #808080;
}
/* 字体图标 */
/* 点击头部排序列表换字体颜色 */
.headerTxt {
	color: #fd964f;
}
.items-icon {
	padding-left:30rpx;
	float: left;
}
.icotop {
	width: 50rpx;
	position: relative;
	height: 100rpx;
	float: left;
	height: 100rpx;
}
/* 排序字体图标 */
.iconfont {
	position: absolute;
	top: 0rpx;
	left: 0rpx;
	height:100rpx;
	font-size: 45rpx;
	width: 50rpx;
	overflow: hidden;
	line-height: 100rpx;
	text-align: center;
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
	font-size: 38rpx !important;
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
	color: white;
	background-color: #FD6801;
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
	padding:10rpx 0rpx;
	display: block;
	text-align: center;
	font-size: 36rpx;
	width: 160rpx;
	margin: 5%;
	float: left;
	background: #f8f9fb;
	border: 1rpx solid white;
	border-radius: 10rpx;
}
/* 点击添加的样式 */
.active {
	border: 1rpx solid #fa8538 !important;
	background-color: #fce0d5;
	color: #fa9855;
}
/* 筛选结束 */
</style>

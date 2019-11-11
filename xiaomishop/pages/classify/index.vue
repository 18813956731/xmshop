<template>
	<view id="content">
		<!-- 左边栏上下滑动  -->
		<view class="scroll-Left">
			<scroll-view scroll-y="false" class="scroll-y" :style="{height:phoneHeight+'px'}">
				<!-- 类别 -->
				<view v-for="(item,index) in classification" :key="index">
					<view class="classs" :class="tabcss==index?'tabcolor':''"  @click="tabs(index)">{{item.name}}</view>
				</view>
			</scroll-view>
		</view>
		<!-- 右边栏上下滑动  -->
		<view class="commodity-Right">
			<scroll-view scroll-y="false" class="scroll-yr" :style="{height:phoneHeights+'px'}">
				<ul class="commodity-ul" v-for="(item,indexs) in 6">
					<!-- 商品品牌种类 -->
					<li class="li-item" v-for="(val,index) in category_items" @tap="Jumps(index)">
						<image :src="val.cover"></image>
						<view class="Trade-Name">{{val.name}}</view>
					</li>
				</ul>
			</scroll-view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				// index下标
				tabcss:0,
				// index下标商品类别
				classif:0,
				phoneHeight: 0,//左边栏高度
				phoneHeights: 0,//右边栏高度
				classification:'',//类别
				category_items:[]//类别1
			}
		},
		onLoad() {
			let _this = this
			uni.getSystemInfo({
				success(res) {
					// 获取窗口高度
					_this.phoneHeight = res.windowHeight;
					_this.phoneHeights = res.windowHeight;
					// console.log(res.windowHeight)
				}
			});
			uni.request({//获取数据
				url: 'http://ceshi3.dishait.cn/api/category/app_category',
				success(res) {
					// 分类
					_this.classification=res.data.data
					_this.category_items=_this.classification[0].app_category_items
					console.log(res.data.data);
				}
			})
			
		},
		methods: {
			// 切换样式
			tabs(e){
				let _this=this
				_this.tabcss=e;
				_this.classif=e;
				_this.category_items=_this.classification[_this.classif].app_category_items
			},
			// 跳转列表页
			Jumps(e){
				uni.navigateTo({
					url:"/pages/classify/list/list"
				})
			},
		},
		onNavigationBarSearchInputClicked(e){
			// 跳转搜索页面
			uni.navigateTo({
				url:"search/search"
			})
			console.log(1)
		}
	}
</script>

<style scoped>
	* {
		padding: 0;
		margin: 0;
	}

	li {
		list-style: none;
	}

	#content {
		height: 100%;
		width: 100%;
	}

	/* 左边栏 */
	.scroll-Left {
		float: left;
		height: auto;
	}

	.scroll-y {
		width: 180rpx;
	}

	/* tab切换 */
	.classs{
		font-size: 30rpx;
		padding: 25rpx 0rpx;
		text-align: center;
		border-bottom: solid 1rpx #DDDDDD;
		border-right: solid 1rpx #DDDDDD;
		width: 180rpx;
		border-left: #FFFFFF 7rpx solid;
	}
	.tabcolor{
		color: #FD964F;
		border-left: #FD964F 7rpx solid;
	}

	/* 右边商品 */
	.commodity-Right {
		float: left;
		width: 570rpx;
	}

	.li-item {
		text-align: center;
		float: left;
		width: 188rpx;
		height: 188rpx;
		/* border: #007AFF 1px solid; */
	}

	.li-item image {
		width: 70%;
		height: 70%;
	}

	.Trade-Name {
		font-size: 25rpx;
	}
</style>

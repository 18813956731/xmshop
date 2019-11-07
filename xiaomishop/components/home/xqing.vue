<template>
	<view style="height: 90%;">
		<!-- 商品介绍价格 -->
		<view>
			<view class="img">
				<image :src="shop.img" style="width: 500upx;"></image>
			</view>
			<view class="shop">{{shop.name}}</view>
			<view class="textr shop">{{shop.text}}</view>
			<view class="item-name shop">¥{{shop.monye}}</view>
		</view>
		<!-- 商品cpu -->
		<view class="ico">
			<view v-for="(item,index) in list">
				<view class="iconfont icon-cpu"></view>
				<view>{{item.cpu}}</view>
				<view>{{item.name}}</view>
			</view>
		</view>
		<!-- 商品规格 -->
		<view class="huohon">
			<view class="shop-p" @click="togglePopup('bottom', 'popup','')">已选 火焰红 64GB 标配<text  class="iconfont icon-you icorr" ></text>
			</view>
			<view class="shop-p" @click="togglePopup('bottom', 'popup','site')">配送 北京 东城区 <text class="calse"> 有现货</text>
				<text class="iconfont icon-you icorr" ></text>
			</view>
			<view class="shop-p" style="border-bottom: none;" @click="togglePopup('bottom', 'popup','setviceNote')">
				<text><text class="iconfont icon-iconfontxuanzhong4 calse"></text>小米自营</text><text><text class="iconfont icon-iconfontxuanzhong4 calse"></text>小米发货</text><text><text
					 class="iconfont icon-iconfontxuanzhong4 calse"></text>七天无理由退货</text><text class="iconfont icon-you icorr"></text>
			</view>
		</view>
		<!-- 商品评论 -->
		<view class="unitab-bar">
			<scroll-view class="uniswiper-tab" scroll-x="true" :show-scrollbar="false">
				<view class="swiper-tab" v-for="(item,index) in tabBars">
					<view class="swiper-tab-list">
						<view class="imgr">
							<view style="float: left;">
								<image :src="item.img"></image>
							</view>
							<view class="float">{{item.name}}</view>
							<text class="rq">{{item.rq}}</text>
						</view>
						<view class="icor"><text class="iconfont icon-dianzan"></text>164</view>
					</view>
					<view style="font-size: 30rpx;" class="item-text">{{item.text}}</view>
					<view class="right">
						<view class="imrt" v-for="(item,index) in imgtL">
							<image :src="item"></image>
						</view>
					</view>
				</view>
			</scroll-view>
			<view class="pinlun">更多评论<text class="iconfont icon-you"></text></view>
		</view>
		<!-- 为你推荐 -->
		<text class="text">为你推荐</text>
		<view class="textrt">
			<view v-for="(items,index) in newtext" :key="index" class="tuijian">
				<tuijian :item="items" :index="index"></tuijian>
			</view>
		</view>
		<view class="goumai">
			<goumai></goumai>
		</view>
			<uni-popup class="bjbox"  ref="popup" :type="type">
				<!-- 地址 -->
				<view v-if="this.popup=='site'" class="site">
					<view class="sitebox">
						<view class="address">收货地址</view>
						<view class="location">
							<view class="lction">
								<span class="iconfont">&#xe64d;</span>
							</view>
						</view>
					</view>
					<view class="newAddress">选择新的地址</view>
				</view>
				<!-- 服务详情  setviceNote-->
				<view v-if="this.popup=='setviceNote'">
					<view class="sitebox">
						<view class="address">服务说明</view>
						<view class="fw">
							<view>
								<span class="iconfont pitch">&#xe623;</span>
								<text>仿米自营</text>
							</view>
							<view>
								<span class="iconfont pitch">&#xe623;</span>
								<text>仿米自营</text>
							</view>
							<view>
								<view>
									<span class="iconfont pitch">&#xe623;</span>
									<text>仿米发货</text>
								</view>
									<view class="Small">由仿米发货</view>
							</view>
							<view>
								<span class="iconfont pitch">&#xe623;</span>
								<text>七天无理由就是不退货</text>
							</view>
							<view>
								<view>
									<span class="iconfont pitch">&#xe623;</span>
									<text>运费说明</text>
								</view>
									<view class="Small">不管满多少就是不包邮</view>
									<view class="Small">特殊产品,也是一样</view>
							</view>
						</view>
					</view>
					<view class="newAddress">确定</view>
				</view>
			</uni-popup>
	</view>
</template>

<script>
	import tuijian from '@/components/home/tuijian.vue'
	import goumai from '@/components/home/goumai.vue'
	import uniPopup from "@/components/shopping/uni-popup.vue"
	export default {
		components: {
			tuijian,
			goumai,
			uniPopup
		},
		data() {
			return {
				type:'',// 弹出层类型
				popup:'',//点击具体的弹出层
				newtext: [{
					img: '/static/images/demo/list/4.jpg',
					name: '米家空调',
					nameone: '1.5匹支流变频',
					pic: '2199',
					price: '2699'
				}, {
					img: '/static/images/demo/list/4.jpg',
					name: '米家空调',
					nameone: '1.5匹支流变频',
					pic: '2199',
					price: '2699'
				}, {
					img: '/static/images/demo/list/4.jpg',
					name: '米家空调',
					nameone: '1.5匹支流变频',
					pic: '2199',
					price: '2699'
				}, {
					img: '/static/images/demo/list/4.jpg',
					name: '米家空调',
					nameone: '1.5匹支流变频',
					pic: '2199',
					price: '2699'
				}, {
					img: '/static/images/demo/list/4.jpg',
					name: '米家空调',
					nameone: '1.5匹支流变频',
					pic: '2199',
					price: '2699'
				}, {
					img: '/static/images/demo/list/4.jpg',
					name: '米家空调',
					nameone: '1.5匹支流变频',
					pic: '2199',
					price: '2699'
				}, {
					img: '/static/images/demo/list/4.jpg',
					name: '米家空调',
					nameone: '1.5匹支流变频',
					pic: '2199',
					price: '2699'
				}, {
					img: '/static/images/demo/list/4.jpg',
					name: '米家空调',
					nameone: '1.5匹支流变频',
					pic: '2199',
					price: '2699'
				}],
				tabBars: [{
					img: '/static/images/demo/demo6.jpg',
					name: '楚锦',
					rq: '2019-06-20',
					text: '支持迪沙IT学院继续出uni-app实战教程'
				}, {
					img: '/static/images/demo/demo6.jpg',
					name: '楚锦',
					rq: '2019-06-20',
					text: '支持迪沙IT学院继续出uni-app实战教程'
				}, {
					img: '/static/images/demo/demo6.jpg',
					name: '楚锦',
					rq: '2019-06-20',
					text: '支持迪沙IT学院继续出uni-app实战教程'
				}, {
					img: '/static/images/demo/demo6.jpg',
					name: '楚锦',
					rq: '2019-06-20',
					text: '支持迪沙IT学院继续出uni-app实战教程'
				}],
				imgtL: ['/static/images/demo/list/4.jpg', '/static/images/demo/list/4.jpg', '/static/images/demo/list/4.jpg'],
				shop: {
					img: '/static/images/demo/list/2.jpg',
					name: '小米MIX3 6GB+128GB',
					text: '磁动力滑盖全面屏/前后旗舰AI双摄/四曲面彩色陶瓷机身/高效10W无线充电',
					monye: '3299'
				},
				list: [{
					cpu: 'CPU',
					name: '蛟龙845八核'
				}, {
					cpu: 'CPU',
					name: '蛟龙845八核'
				}, {
					cpu: 'CPU',
					name: '蛟龙845八核'
				}, {
					cpu: 'CPU',
					name: '蛟龙845八核'
				}]
			}
		},
		methods: {
			change(e) {
				console.log(e.show)
			},
			//编辑弹出框
			togglePopup(type, open,popup) {
				this.popup=popup;
				this.type = type
				if (open === 'tip') {
					this.show = true
				} else {
					this.$refs[open].open()
				}
			},
		}
	}
</script>

<style scoped>
	/* 弹出层 */
	.bjbox{
		position: fixed;
		bottom: 0;
	}
	/* 弹出层地址 */
	.sitebox{
		padding: 20rpx 30rpx 0;
	}
	.address{
		height: 65rpx;
		width: 100%;
		text-align: center;
		font-size: 30rpx;
		font-weight: bold;
	}
	.location{
		height: 140rpx;
		line-height: 140rpx;
		width: 100%;
		border-top:1px solid #CCCCCC ;
		border-bottom:1px solid #CCCCCC ;
		margin-bottom: 650rpx;
	}
	.lction{
		height: 90rpx;
		line-height: 90rpx;
		width: 100%;
		padding-left:20rpx ;
		font-weight: bold;
	}
	.newAddress{
		width: 100%;
		height: 80rpx;
		line-height: 80rpx;
		background-color: #FD6801;
		text-align: center;
		font-size: 30rpx;
		color: white;
	}
	.fw{
		width: 100%;
		border-top:1px solid #CCCCCC ;
		margin-bottom: 250rpx;
	}
	.fw view{
		line-height: 80rpx;
		font-size: 30rpx;
		font-weight: bold;
	}
	.pitch{
		color: #FD6801;
		font-weight:100;
		margin-right: 20rpx;
	}
	view.Small{
		line-height: 50rpx;
		font-size: 26rpx;
		color: #C8C7CC;
		margin-left: 50rpx;
	}
	/* 商品价格 */
	.textr {
		font-size: 25upx;
		color: #8F8F94;
	}

	.img {
		text-align: center;
	}

	.shop {
		padding-left: 20rpx;
	}

	.item-name {
		color: #F0AD4E;
	}

	/* 商品cpu */
	.ico {
		display: flex;
		justify-content: space-around;
		font-size: 20rpx;
		text-align: center;
	}

	/* 商品规格 */
	.icorr {
		float: right;
	}

	.shop-p {
		height: 100rpx;
		border-bottom: 0.5rpx solid #BBBBBB;
		line-height: 100rpx;
	}

	.huohon {
		width: 95%;
		height: 300rpx;
		background: #F5F5F3;
		font-size: 20rpx;
		margin: auto;
		border-radius: 20rpx;
		color: #999999;
		border: 0.5rpx solid #BBBBBB;
		margin-top: 10px;
		text-indent: 1em;
	}

	.calse {
		color: #F0AD4E;
	}

	/* 商品评论 */
	.unitab-bar {
		width: 100%;
		margin-top: 20px;
	}

	.uniswiper-tab {
		width: 100%;
		display: flex;
		justify-content: space-between;
		flex-direction: row;
		white-space: nowrap;
		overflow: hidden;
	}

	.swiper-tab {
		width: 90%;
		margin-left: 8px;
		margin-right: 10px;
		display: inline-block;
		background: #F5F5F3;
		padding: 40rpx 20rpx;
		border-radius: 30rpx;
		overflow: hidden;
	}

	.swiper-tab-list {
		width: 100%;
		display: flex;
		justify-content: space-between;
	}

	.imgr {
		height: 100rpx;
	}

	.imgr image {
		width: 100rpx;
		height: 100rpx;
		border-radius: 50rpx;
	}

	.right {
		margin-top: 20px;
		display: flex;
		justify-content: space-between;
	}

	.icor {
		height: 100rpx;
		line-height: 100rpx;
	}

	.float {
		width: 400rpx;
	}

	.imrt image {
		width: 200rpx;
		height: 200rpx;
		float: left;
	}

	.rq {
		color: #8F8F94;
		font-size: 20rpx;
	}

	.item-text {
		padding-top: 30rpx;
	}

	/* tab */




	.pinlun {
		color: #007AFF;
		text-align: center;
		margin-top: 20px;
	}

	/* 为你推荐 */
	.text {
		display: block;
		padding: 20rpx 0rpx;
	}

	.textrt {
		display: flex;
		justify-content: space-around;
		flex-wrap: wrap;
	}

	.tuijian {
		width: 49%;
		padding: 10rpx 0rpx;
	}

	/* 购买 */
	.goumai {
		width: 100%;
		position: fixed;
		bottom: 0px;
	}
</style>

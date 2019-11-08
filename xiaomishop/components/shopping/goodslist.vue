<template>
	<view id="content" >
		<view class='car-list'>
						<!-- 购物车产品 -->
						<view class='car-item'>
							<!--列表项-->
							<view class='car-prod' v-for="(item,index) in goodList" :key='index'>
								<!-- 商品信息-->
								<view class='goods-info'   :class="{active:item.action}">
									<view class='goods-info-inner'>
										<view class='checkbox' @click="action(item)">
										</view>
										<view class='goods-image'>
											<image :src="item.img"></image>
										</view>
										<view class='good-info'>
											<view class='name'>{{item.name}}</view>
											<view class='lx' :class="{bjaction:editor}">
												<view class="lxtext">
													{{item.lxtext}}
												</view>
												<view v-show="editor">
													<span class="iconfont" @click="togglePopup('bottom', 'popup','type')">&#xe65d;</span>
												</view>
											</view>
											<view class="infobox">
												<view class='price'>￥{{item.price}}</view>
												<amount  class="numbers" :value="item.number"></amount>
											</view>
											
										</view>
									</view>
								</view>
							</view>
						</view>
						<!-- 没有商品信息 -->
						<view v-if='1==0'>
								购物车空空如也，赶紧去挑选你心意的产品吧~~~~~
						</view>
					</view>
					<!-- 商品编辑弹框 -->
					<uni-popup class="bjbox" ref="popup" :type="type" :tktype="tktype"></uni-popup>
	</view>
</template>

<script>
	import amount from "@/components/shopping/amount.vue"
	import uniPopup from "@/components/shopping/uni-popup.vue"
	export default{
		data(){
			return{
				phoneHeight:0,
				show: false,
				type: '',//弹出层类型
				tktype:'',//具体弹出层
				goodList:[{
					img:"../../static/images/demo/list/1.jpg",
					name:"华为matax210",
					lxtext:"火焰红 64G 标配",
					price:"3541",
					action:false,
					number:1
				},{
					img:"../../static/images/demo/list/1.jpg",
					name:"华为matax210",
					lxtext:"火焰红 64G 标配",
					price:"3541",
					action:false,
					number:1
				},{
					img:"../../static/images/demo/list/1.jpg",
					name:"华为matax210",
					lxtext:"火焰红 64G 标配",
					price:"3541",
					action:false,
					number:1
				},{
					img:"../../static/images/demo/list/1.jpg",
					name:"华为matax210",
					lxtext:"火焰红 64G 标配",
					price:"3541",
					action:false,
					number:1
				},{
					img:"../../static/images/demo/list/1.jpg",
					name:"华为matax210",
					lxtext:"火焰红 64G 标配",
					price:"3541",
					action:false,
					number:1
				}]
			}
		},
		props:['editor','allchek'],
		components:{
			amount,
			uniPopup
		},
		methods:{
			//弹出模态框
			togglePopup(type,open,tktype) {
				this.tktype=tktype;
				this.type = type
				if (open === 'tip') {
					this.show = true
				} else {
					this.$refs[open].open()
				}
			},
			// 点击选中
			action(item){
				item.action=!item.action
			}
		},
		watch:{
			//监听全选状态，并改变选中
			allchek(newval){
					this.goodList.forEach(item=>{
						item.action=newval
					})
			}
		}
	}
</script>

<style scoped>
		.car-item {
			position: relative;
			overflow: hidden;
		}
		
		.car-item .car-prod {
			border-top: 1px solid #ddd;
			position: relative;
			left: 0;
			box-sizing: border-box;
			overflow: hidden;
		}
		
		.car-prod .btn-delete {
			float: left;
			border-radius: 0;
			font-size: 30rpx;
			box-sizing: border-box;
			width: 50px;
			background-color: #e64340;
			color: #fff;
			text-align: center;
			height: 260rpx;
			line-height: 260rpx;
		}
		.infobox{
			position:relative;
			height:100rpx;
		}
		.goods-info {
			float: left;
			width: 100%;
			box-sizing: border-box;
			position: relative;
			background: url(https://cdn.it120.cc/images/weappshop/gou.png) no-repeat 30rpx center;
			background-size: 40rpx auto;
		}
		
		.goods-info.active {
			background-image: url(https://cdn.it120.cc/images/weappshop/gou-red.png);
		}
		
		.goods-info .goods-info-inner {
			display: flex;
			height: 260rpx;
			padding: 40rpx 0;
		}
		
		.goods-info-inner .checkbox {
			width: 120rpx;
		}
	
		.goods-info-inner .goods-image{
			width: 220rpx;
			height: 220rpx;
			border: 1px solid #CCC;
			display: flex;
		}
		.goods-image>image{
			width: 180rpx;
			height: 180rpx;
			display: block;
			margin: auto;
		}
		.goods-info-inner .good-info {
			flex: 1;
			padding: 0 20rpx;
		}
		
		.goods-info-inner .good-info .name {
			line-height: 70rpx;
			white-space: nowrap;
			overflow: hidden;
			text-overflow: ellipsis;
			box-sizing: border-box;
		}
		.lx{
			display: flex;
			justify-content: space-between;
			height: 80rpx;
			white-space: nowrap;
			font-size: 30rpx;
			overflow: hidden;
			text-overflow: ellipsis;
			box-sizing: border-box;
		}
		.lx view{
			height: 80rpx;
			line-height: 80rpx;
		}
		.bjaction{
			background-color: #F1F1F1;
			color: #7C858D;
		}
		.price {
			position:absolute;
			color: #FD7112;
			left:0;
		}
		
		.numbers {
			position:absolute;
			right:0;
			bottom:0;
		}
		
		.goods-info-inner .good-info {
			height: 90rpx;
			line-height: 90rpx;
		}
		.bjbox{
			position: fixed;
			z-index: 1000;
			bottom: 0;
		}
</style>

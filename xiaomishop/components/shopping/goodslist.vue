<template>
	<view id="content">
		<view class='car-list'>
			<!-- 购物车产品 -->
			<view class='car-item' v-if='goodList.length>0'>
				<!--列表项-->
				<view class='car-prod' v-for="(item,index) in goodList" :key='index'>
					<!-- 商品信息-->
					<view class='goods-info' :class="{active:item.action}">
						<view class='goods-info-inner'>
							<view class='checkbox' @click="action(index)">
							</view>
							<view class='goods-image'>
								<image :src="item.obj.cover"></image>
							</view>
							<view class='good-info'>
								<view class='name'>{{item.obj.title}}</view>
								<view class='lx' :class="{bjaction:editor}">
									<view class="lxtext">
										{{item.obj.desc}}
									</view>
									<view>
										<span v-show="editor" class="iconfont" @click="togglePopup('bottom', 'popup','type')">&#xe65d;</span>
									</view>
								</view>
								<view class="infobox">
									<view class='price'>￥{{item.obj.min_price}}</view>
									<amount class="numbers" :value="item.number" @change="change($event,index)"></amount>
								</view>

							</view>
						</view>
					</view>
				</view>
			</view>
			<!-- 没有商品信息 -->
			<view class="cart" v-else>
				<view>
					<span class="iconfont icons">&#xe64c;</span>
				</view>
				<view>
					<text class="txt">购物车还是空的</text>
				</view>
				<view class="twocart">
					<button>去逛逛</button>
				</view>
			</view>
		</view>
		<!-- 商品编辑弹框 -->
		<uni-popup class="bjbox" ref="popup" :type="type" :tktype="tktype"></uni-popup>
	</view>
</template>

<script>
	//导入状态管理
	import {
		mapState,
		mapMutations
	} from 'vuex';
	
	import amount from "@/components/shopping/amount.vue"
	import uniPopup from "@/components/shopping/uni-popup.vue"
	
	export default {
		data() {
			return {
				phoneHeight: 0,
				show: false,
				type: '', //弹出层类型
				tktype: '' //具体弹出层
			}
		},
		components: {
			amount,
			uniPopup
		},
		methods: {
			//弹出模态框
			togglePopup(type, open, tktype) {
				this.tktype = tktype;
				this.type = type
				if (open === 'tip') {
					this.show = true
				} else {
					this.$refs[open].open()
				}
			},
			// 点击选中
			action(index) {
				this.$store.commit("getaction",index)
				let allchek=true;//全选状态
				for (var item of this.goodList) {
					if(!item.action){
						allchek=false;
						break;
					}
				}
				//改变全选状态
				this.$store.commit("getallcheks",allchek)
			},
			//改变购物车对应商品数量
			change(event,index){
				this.$store.commit("getchange",[event,index])
			}
		},
		computed: {
			...mapState(['goodList','editor', 'allchek'])
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

	.infobox {
		position: relative;
		display: flex;
		height: 100rpx;
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

	.goods-info-inner .goods-image {
		width: 220rpx;
		height: 220rpx;
		border: 1px solid #CCC;
		display: flex;
	}

	.goods-image>image {
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

	.lx {
		display: flex;
		justify-content: space-between;
		height: 80rpx;
		white-space: nowrap;
		font-size: 30rpx;
		overflow: hidden;
		text-overflow: ellipsis;
		box-sizing: border-box;
	}

	.lx view {
		height: 80rpx;
		line-height: 80rpx;
	}
	.lxtext{
		white-space: nowrap;
		width: 370rpx;
		overflow: hidden;
		text-overflow: ellipsis;
	}
	.lx view:last-child{
		width: 40rpx;
	}
	.bjaction {
		background-color: #F1F1F1;
		color: #7C858D;
	}

	.price {
		position: absolute;
		color: #FD7112;
		left: 0;
	}

	.numbers {
		position: absolute;
		right: 0;
		bottom: 0;
	}

	.goods-info-inner .good-info {
		height: 90rpx;
		line-height: 90rpx;
	}

	.bjbox {
		position: fixed;
		z-index: 1000;
		bottom: 0;
	}
	/* 空购物车 */
	.cart {
		display: flex;
		height: 130rpx;
		justify-content: center;
		align-items: center;
	}
	.icons{
		color: #C8C7CC;
		font-size: 80rpx;
	}
	.txt{
		color: #C8C7CC;
		margin-left: 20rpx;
		font-size:32rpx ;
	}
	.twocart button{
		height:80rpx;
		margin-left: 20rpx;
		line-height: 80rpx;
		font-size: 35rpx;
	}
</style>

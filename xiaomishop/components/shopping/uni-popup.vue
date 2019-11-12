<template>
	<view v-if="showPopup" class="uni-popup">
		<view :class="[ani, animation ? 'ani' : '', !custom ? 'uni-custom' : '']" class="uni-popup__mask" @click="close(true)" />
		<view :class="[type, ani, animation ? 'ani' : '', !custom ? 'uni-custom' : '']" class="uni-popup__wrapper" @click="close(true)">
			<view class="uni-popup__wrapper-box" @click.stop="clear">
				<!-- 商品筛选 -->
				<view v-if="tktype=='type'">
					<view class="edmain">
						<view class="editor">
							<view class="tltmg">
								<view class="edimg"><image :src="good.obj.cover"></image></view>
								<view class="edlb">
									<view  class="edprice"><text>￥</text><text>{{good.obj.min_price}}</text></view>
									<view><text class="edlx">火焰红 64G 标配</text></view>
								</view>
							</view>
							<view>
								<view class="color"><text>颜色</text></view>
								<view class="jtfl">
									<view @click="getcolor(0)" :class="{jtaction:color==0}"><text>火焰红</text></view>
									<view @click="getcolor(1)" :class="{jtaction:color==1}"><text>炭黑</text></view>
									<view @click="getcolor(2)" :class="{jtaction:color==2}"><text>冰川蓝</text></view>
								</view>
							</view>
							<view>
								<view class="color"><text>容量</text></view>
								<view class="jtfl">
									<view @click="getmemory(0)" :class="{jtaction:memory==0}"><text>64GB</text></view>
									<view @click="getmemory(1)" :class="{jtaction:memory==1}"><text>128GB</text></view>
								</view>
							</view>
							<view>
								<view class="color"><text>套餐</text></view>
								<view class="jtfl">
									<view @click="getmeal(0)" :class="{jtaction:meal==0}"><text >标配</text></view>
									<view @click="getmeal(1)" :class="{jtaction:meal==1}"><text>套餐一</text></view>
									<view @click="getmeal(2)" :class="{jtaction:meal==2}"><text>套餐二</text></view>
								</view>
							</view>
							<view class="gmnum">
								<view><text>购买数量</text></view>
								<amount :value="good.number" @change="change($event)"></amount>
							</view>
						</view>
						<view class="grgwc" @click="grgwc(true)">加入购物车</view>
					</view>
				</view>
					<!-- 地址 -->
					<view v-if="tktype=='site'" class="site">
						<view class="sitebox">
							<view class="address">收货地址</view>
							<view class="location">
								<view class="lction">
									<span class="iconfont">&#xe64d;</span>
								</view>
							</view>
						</view>
						<view class="newAddress" @click="close(true)">选择新的地址</view>
					</view>
					<!-- 服务详情  setviceNote-->
					<view v-if="tktype=='setviceNote'">
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
						<view class="newAddress" @click="close(true)">确定</view>
					</view>
			</view>
		</view>
	</view>
</template>

<script>
	//导入状态管理
	import {
		mapState,
		mapMutations
	} from 'vuex';
	
import amount from "@/components/shopping/amount.vue"
	export default {
		name: 'UniPopup',
		components:{
			amount
		},
		computed: {
			...mapState(['good','goodList'])},
		props: {
			// 开启动画
			animation: {
				type: Boolean,
				default: true
			},
			// 具体弹出层
			tktype: {
				type: String
			},
			// 弹出层类型，可选值，top: 顶部弹出层；bottom：底部弹出层；center：全屏弹出层
			type: {
				type: String,
				default: 'center'
			},
			// 是否开启自定义
			custom: {
				type: Boolean,
				default: false
			},
			// maskClick
			maskClick: {
				type: Boolean,
				default: true
			},
			show: {
				type: Boolean,
				default: true
			}
		},
		data() {
			return {
				ani: '',
				showPopup: false,
				color:0,
				memory:0,
				meal:0
			}
		},
		watch: {
			show(newValue) {
				if (newValue) {
					this.open()
				} else {
					this.close()
				}
			}
		},
		methods: {
			//颜色选择
			getcolor(index){
				this.color=index
			},
			//内存选择
			getmemory(index){
				this.memory=index
			},
			//套餐选择
			getmeal(index){
				this.meal=index
			},
			//加入购物车
			grgwc(type){
				//隐藏
				this.close(type);
				//通过id判断商品是否存在，存在即数量加1，不存在存入购物车数组
				let indexs=this.goodList.map(item=>item.obj.id).indexOf(this.good.obj.id)
				if(indexs==-1){
					// var newObj = JSON.parse(JSON.stringify(this.good));
					// newObj.number=1;
					this.$store.commit("getgoodList",this.good);
				}
				else{
					this.$store.commit("getgoodnum",indexs);
				}
				this.$store.commit("getztchek")//购物车改变全选状态改变
			},
			clear(){
				console.log("1")
			},
			open() {
				this.showPopup = true
				this.$nextTick(() => {
					setTimeout(() => {
						this.ani = 'uni-' + this.type
					}, 30)
				})
			},
			close(type) {
				if (!this.maskClick && type) return
				this.ani = ''
				this.$nextTick(() => {
					setTimeout(() => {
						this.showPopup = false
					}, 300)
				})
			},
			//改变编辑商品的对应商品数量
			change(event){
				this.$store.commit("getedchange",event)
			}
		}
	}
</script>
<style scoped lang="scss">
	@charset "UTF-8";

	.uni-popup {
		position: fixed;
		top: 0;
		top: 0;
		bottom: 0;
		left: 0;
		right: 0;
		z-index: 998;
		overflow: hidden
	}

	.uni-popup__mask {
		position: absolute;
		top: 0;
		bottom: 0;
		left: 0;
		right: 0;
		z-index: 998;
		background: rgba(0, 0, 0, .4);
		opacity: 0
	}

	.uni-popup__mask.ani {
		transition: all .3s
	}

	.uni-popup__mask.uni-bottom,
	.uni-popup__mask.uni-center,
	.uni-popup__mask.uni-top {
		opacity: 1
	}

	.uni-popup__wrapper {
		position: absolute;
		z-index: 999;
		box-sizing: border-box;
	}

	.uni-popup__wrapper.ani {
		transition: all .3s
	}

	.uni-popup__wrapper.top {
		top: 0;
		left: 0;
		width: 100%;
		transform: translateY(-100%)
	}

	.uni-popup__wrapper.bottom {
		bottom: 0;
		left: 0;
		width: 100%;
		transform: translateY(100%)
	}

	.uni-popup__wrapper.center {
		width: 100%;
		height: 100%;
		display: flex;
		justify-content: center;
		align-items: center;
		transform: scale(1.2);
		opacity: 0
	}

	.uni-popup__wrapper-box {
		position: relative;
		box-sizing: border-box
	}

	.uni-popup__wrapper.uni-custom .uni-popup__wrapper-box {
		background: #fff
	}

	.uni-popup__wrapper.uni-custom.center .uni-popup__wrapper-box {
		position: relative;
		max-width: 80%;
		max-height: 80%;
		overflow-y: scroll
	}

	.uni-popup__wrapper.uni-custom.bottom .uni-popup__wrapper-box,
	.uni-popup__wrapper.uni-custom.top .uni-popup__wrapper-box {
		width: 100%;
		max-height: 500px;
		overflow-y: scroll
	}

	.uni-popup__wrapper.uni-bottom,
	.uni-popup__wrapper.uni-top {
		transform: translateY(0)
	}

	.uni-popup__wrapper.uni-center {
		transform: scale(1);
		opacity: 1
	}
	.editor{
			padding: 37.5rpx 37.5rpx 0;
		}
	.color{
			width: 90rpx;
			line-height: 70rpx;
			text-align: center;
	}	
	.tltmg{
		display: flex;
	}
		.edimg{
			width: 220rpx;
			height: 220rpx;
			border: 1px solid #C8C7CC;
			position: relative;
		}
		.edimg{
			image{
				width: 80%;
				height: 80%;
				position: absolute;
				left: 50%;
				top: 50%;
				transform: translate(-50%,-50%);
			}
		} 
		.edprice{
			margin-top: 20%;
			
			text:first-child{
				color: #FD7719;
			}
			
			text:last-child{
				color:  #FD7719;
				font-size:40rpx ;
			}
		}
		
		.jtfl{
			display: flex;
			
			view{
				width: 198rpx;
				height: 70rpx;
				background-color: #F8F9FB;
				text-align: center;
				line-height: 70rpx;
				border-radius: 5rpx;
				border: 1px solid #F8F9FB;
			}
			
			view+view{
				margin-left: 37.5rpx;
			}
			 .jtaction{
				color: #FA9E60;
				border-color:#FA9E60 ;
				background-color: #FCE0D5;
			}
		}
		.gmnum{
			display: flex;
			height: 90rpx;
			align-items: center;
			line-height: 90rpx;
			margin-top: 50rpx;
			padding-top: 20rpx;
			justify-content: space-between;
			border-top:1px solid #CCCCCC ;
		}
		.grgwc{
			width: 100%;
			height: 110rpx;
			line-height: 110rpx;
			text-align: center;
			background-color: #FD6801;
			color: white;
			font-size: 33rpx;
		}
		/* 弹出层*/
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
</style>
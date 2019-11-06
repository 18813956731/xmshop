<template>
	<view v-if="showPopup" class="uni-popup">
		<view :class="[ani, animation ? 'ani' : '', !custom ? 'uni-custom' : '']" class="uni-popup__mask" @click="close(true)" />
		<view :class="[type, ani, animation ? 'ani' : '', !custom ? 'uni-custom' : '']" class="uni-popup__wrapper" @click="close(true)">
			<view class="uni-popup__wrapper-box" @click.stop="clear">
				<!-- <slot /> -->
				<!-- 商品编辑 -->
				<view>
					<view class="editor">
						<view class="tltmg">
							<view class="edimg"><image src="../../static/images/demo/list/1.jpg"></image></view>
							<view class="edlb">
								<view  class="edprice"><text>￥</text><text>3369</text></view>
								<view><text class="edlx">火焰红 64G 标配</text></view>
							</view>
						</view>
						<view>
							<view class="color"><text>颜色</text></view>
							<view class="jtfl">
								<view><text>火焰红</text></view>
								<view><text>炭黑</text></view>
								<view><text>冰川蓝</text></view>
							</view>
						</view>
						<view>
							<view class="color"><text>容量</text></view>
							<view class="jtfl">
								<view><text>64GB</text></view>
								<view><text>128GB</text></view>
							</view>
						</view>
						<view>
							<view class="color"><text>套餐</text></view>
							<view class="jtfl">
								<view><text>标配</text></view>
								<view><text>套餐一</text></view>
								<view><text>套餐二</text></view>
							</view>
						</view>
						<view class="gmnum">
							<view><text>购买数量</text></view>
							<amount></amount>
						</view>
					</view>
					<view class="grgwc">加入购物车</view>
				</view>
				
			</view>
		</view>
	</view>
</template>

<script>
import amount from "@/components/shopping/amount.vue"
	export default {
		name: 'UniPopup',
		components:{
			amount
		},
		props: {
			// 开启动画
			animation: {
				type: Boolean,
				default: true
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
				showPopup: false
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
		created() {},
		methods: {
			clear() {},
			open() {
				this.$emit('change', {
					show: true
				})
				this.showPopup = true
				this.$nextTick(() => {
					setTimeout(() => {
						this.ani = 'uni-' + this.type
					}, 30)
				})
			},
			close(type) {
				if (!this.maskClick && type) return
				this.$emit('change', {
					show: false
				})
				this.ani = ''
				this.$nextTick(() => {
					setTimeout(() => {
						this.showPopup = false
					}, 300)
				})
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
		box-sizing: border-box
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
</style>
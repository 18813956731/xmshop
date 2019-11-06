<template>
	<view class="content">
			<view class="uni-navbar">
				<view class="navb">
					<view><text>购物车</text></view>
					<view><text @tap="onClickRight">{{ rightText }}</text></view> 
				</view>
			</view>
		<!-- 购物车商品 -->
		<goodslist :djbj="djbj"></goodslist>
		<!-- 底部合计、结算 -->
			<goodsnav class="goods-carts" :djbj="djbj"/>
		<!-- 推荐 -->
		<view class="recommend">
			<view class="rendmain">
				<h3 class="rend">为你推荐</h3>
				<view class="tlt">
					<view class="reline"></view>
					<view class="retext">买了人还买了</view>
				</view>
				<view class="goodslist">
					<view class="uni-product-list">
						<view class="uni-product" v-for="(product,index) in productList" :key="index" @tap="tiao">
							<view class="image-view">
								<image v-if="renderImage" class="uni-product-image" :src="product.image"></image>
							</view>
							<view class="uni-product-title">{{product.title}}</view>
							<view class="uni-product-price">
								<text class="uni-product-price-favour">￥{{product.originalPrice}}</text>
								<text class="uni-product-price-original">￥{{product.favourPrice}}</text>
								<text class="uni-product-tip">{{product.tip}}</text>
							</view>
						</view>
					</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	import goodslist from "@/components/shopping/goodslist.vue"
	import goodsnav from "@/components/shopping/goodsnav.vue"
	export default {
		data() {
			return {
				title: 'Hello',
				name:"我的购物车",
				productList: [],
				renderImage: false,
				rightText:"编辑",
				djbj:false
			}
		},
		components:{
			goodslist,
			goodsnav
		},
		methods: {
			tiao(){
				uni.navigateTo({
					url:"../../components/home/xqing"
				})
			},
			loadData(action = 'add') {
			    const data = [
			        {
			            image: 'https://img-cdn-qiniu.dcloud.net.cn/uploads/example/product1.jpg',
			            title: 'Apple iPhone X 256GB 深空灰色 移动联通电信4G手机',
			            originalPrice: 9999,
			            favourPrice: 8888,
			            tip: '自营'
			        },
			        {
			            image: 'https://img-cdn-qiniu.dcloud.net.cn/uploads/example/product2.jpg',
			            title: 'Apple iPad 平板电脑 2018年新款9.7英寸',
			            originalPrice: 3499,
			            favourPrice: 3399,
			            tip: '优惠'
			        },
			        {
			            image: 'https://img-cdn-qiniu.dcloud.net.cn/uploads/example/product3.jpg',
			            title: 'Apple MacBook Pro 13.3英寸笔记本电脑（2017款Core i5处理器/8GB内存/256GB硬盘 MupxT2CH/A）',
			            originalPrice: 12999,
			            favourPrice: 10688,
			            tip: '秒杀'
			        },
			        {
			            image: 'https://img-cdn-qiniu.dcloud.net.cn/uploads/example/product4.jpg',
			            title: 'Kindle Paperwhite电纸书阅读器 电子书墨水屏 6英寸wifi 黑色',
			            originalPrice: 999,
			            favourPrice: 958,
			            tip: '秒杀'
			        },
			        {
			            image: 'https://img-cdn-qiniu.dcloud.net.cn/uploads/example/product5.jpg',
			            title: '微软（Microsoft）新Surface Pro 二合一平板电脑笔记本 12.3英寸（i5 8G内存 256G存储）',
			            originalPrice: 8888,
			            favourPrice: 8288,
			            tip: '优惠'
			        },
			        {
			            image: 'https://img-cdn-qiniu.dcloud.net.cn/uploads/example/product6.jpg',
			            title: 'Apple Watch Series 3智能手表（GPS款 42毫米 深空灰色铝金属表壳 黑色运动型表带 MQL12CH/A）',
			            originalPrice: 2899,
			            favourPrice: 2799,
			            tip: '自营'
			        }
			    ];
					
			    if (action === 'refresh') {
			        this.productList = [];
			    }
					
			    data.forEach(item => {
			        this.productList.push(item);
			    });
			},
			onClickRight(){
				if(this.rightText=="编辑"){
					this.rightText="完成"
					this.djbj=true;
				}else{
					this.rightText="编辑"
					this.djbj=false;
				}
			}
		},
		onLoad() {
		    this.loadData();
		    setTimeout(()=> {
		        this.renderImage = true;
		    }, 300);
		},
		onPullDownRefresh() {
		    this.loadData('refresh');
		    // 实际开发中通常是网络请求，加载完数据后就停止。这里仅做演示，加延迟为了体现出效果。
		    setTimeout(() => {
		        uni.stopPullDownRefresh();
		    }, 2000);
		},
		onReachBottom() {
		    this.loadData();
		}
}
</script>

<style scoped lang="scss">
@import '../../common/uni-nvue.css';

.goods-carts{
	position: fixed;
	width: 100%;
	bottom:49px;
	background-color:#FFFFFF ;
	z-index: 111;
}
.recommend{
		background-color: #F5F5F5;
	}
	.rend{
			text-align: center;
			color: orange;
			padding-top: 60rpx;
			height: 70rpx;
			line-height: 70rpx;
			font-size: 38rpx;
		}
		.tlt{
			width: 100%;
			height: 60rpx;
			line-height: 60rpx;
			position: relative;
		}
		.reline{
			border: 1px solid #E9E9E9;
			width: 100%;
			position: absolute;
			top: 50%;
			z-index: 2;
		}
		.retext{
			width: 300rpx;
			background-color: #F5F5F5;
			position: absolute;
			height: 60rpx;
			line-height: 60rpx;
			left: 50%;
			z-index: 5;
			text-align: center;
			transform: translateX(-50%);
			font-size: 32rpx;
		}
		.uni-navbar{
			position: relative;
			width: 100%;
			height: 100rpx;
			.navb{
				position:fixed;
				width: 100%;
				height: 100rpx;
				line-height: 100rpx;
				z-index: 99;
				background-color: #FFFFFF;
				border-bottom:1px  solid #CCC ;
				view:first-child{
					position:absolute;
					left: 50%;
					transform: translateX(-50%);
					height: 100rpx;
					line-height: 100rpx;
					font-size: 34rpx;
				}
				view:last-child{
					position:absolute;
					right: 15rpx;
					height: 100rpx;
					line-height: 100rpx;
				}
			}
		}
</style>

<template>
	<view class="content">
		<!-- 底部占位 -->
		<view class="footer">
			<view class="icon" @click="allChek" :class="{active:allchek}">
			</view>
			<view class="ftsc" v-if="!editor">
				<view class="total">
					<text>合计:</text>
					<text class="yen">￥{{total}}</text>
				</view>
				<view class="close" @click="close">
					<text >结算</text>
				</view>
			</view>
			<view class="ftsc" v-if="editor">
				<view class="collect">
					<text>移入收藏</text>
				</view>
				<view class="del">
					<text @click="del">删除</text>
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
	export default {
		data(){
		return {
			
		}
		},
		 computed: {
		            ...mapState(['total','editor','allchek','goodList','clearinggoods']),
					total(){
					 	var sum = this.goodList.filter(item=>item.action).reduce((totals,item)=>{
							return totals + item.number*item.obj.min_price
						},0)
						this.$store.commit("gettotal",sum)
						 return sum
					}
		        }, 
		methods: {
			//全选或者全不选
			allChek(){
				this.$store.commit("getallchek",!this.allchek)
				this.$store.commit("getztchek")//购物车改变全选状态改变
			},
			//点击结算
			close(){
				this.$store.commit("getclearinggoods")
				if(this.clearinggoods.length>0){
					uni.navigateTo({
						url:"/pages/mine/deliver/confimindent"
					})
					this.$store.commit("getztchek")//购物车改变全选状态改变
				}				
			},
			//点击删除
			del(){
				this.$store.commit("getdel")
				this.$store.commit("getztchek")//购物车改变全选状态改变
			}
		},
		
	}
</script>

<style scoped>
	.footer{
		width: 100%;
		height: 100rpx;
		display: flex;
		justify-content: space-between;
		background-color: #FFF;
	}
	.footer text{
		font-size: 35rpx;
	}
	.icon {
		height: 100rpx;
		width: 130rpx;
		box-sizing: border-box;
		background: url(https://cdn.it120.cc/images/weappshop/gou.png) no-repeat 50% 50%;
		background-size: 40rpx auto;
	}
	.icon.active {
		background-image: url(https://cdn.it120.cc/images/weappshop/gou-red.png);
	} 
	.total{
		line-height: 100rpx;
		text-align: center;
		width: 50%;
	}
	.yen{
		color: #FD6801;
		margin-left: 20rpx;
	}
	.close{
		line-height: 100rpx;
		width: 50%;
		color: white;
		height: 100rpx;
		background-color:#FD6801;
		text-align: center;
	}
	.ftsc{
		width: 80%;
		display: flex;
		justify-content: space-between;
	}
	.collect{
		width: 50%;
		background-color: #FD6801;
		text-align: center;
		line-height: 100rpx;
		color: white;
	}
	.del{
		width:50%;
		background-color: #DC3546;
		text-align: center;
		line-height: 100rpx;
		color: white;
	}
</style>
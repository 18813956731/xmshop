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
			id:0//订单对象ID唯一值
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
				//获取选择的结算商品的数组
				let arr=this.goodList.filter(item=>item.action);
				let numbers=arr.reduce((sum,item)=>{
					return sum+item.number
				},0)
				if(arr.length>0){
					//结算订单对象
					let cleargoods={
						arr,//购物车商品详情表
						id:this.id++,
						total:this.total,//本单合计金额
						numbers,//商品总数量
						paystatus:false,//本单支付状态
						taketatus:false,//本单收货状态
						observerstatus:false,//本单评论状态
						orderdata:this.getNowFormatDate()//本单结算日期
					}
					this.$store.commit("getclearinggoods",cleargoods)
					uni.navigateTo({
						url:"/pages/mine/deliver/confimindent"
					})
					this.$store.commit("getztchek")//购物车改变全选状态改变
				}				
			},
			//点击删除
			del(){
				this.$api.msg("删除成功")
				setTimeout(()=>{
					this.$store.commit("getdel")
					this.$store.commit("getztchek")//购物车改变全选状态改变
				},800)
				
			},
			//日期函数
			getNowFormatDate(){
			    var date = new Date();
			    var seperator1 = "-";
			    var seperator2 = ":";
			    var month = date.getMonth() + 1;
			    var strDate = date.getDate();
			    var hours=date.getHours();
			    var minutes=date.getMinutes();
			    if (month >= 1 && month <= 9) {
			        month = "0" + month;
			    }
			    if (strDate >= 0 && strDate <= 9) {
			        strDate = "0" + strDate;
			    }
			    if (hours >= 0 && hours <= 9) {
			        hours = "0" + hours;
			    }
			    if (minutes >= 0 && minutes <= 9) {
			        minutes = "0" + minutes;
			    }
			    var currentdate = date.getFullYear() + seperator1 + month + seperator1 + strDate +" "+ hours+ seperator2 + minutes;
			    return currentdate}
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
<template>
	<view id="mina-edit">
		<!-- 头部导航 -->
		<view class="hreder">
			<span class="iconfont icon-2fanhui" @click="returni"></span>
			<view class="text" >{{title}}</view>
			<view class="text-right" @click="deleteindex">删除</view>
		</view>
		<!-- 主体 -->
		<view class="main">
			<!-- 表单 -->
			<form @submit="fomsubmit" @reset="">
				<!-- 收货人 -->
				<view class="flex">
					<label>收货人:</label>
					<input type="text" :value="item.name" name="name" placeholder="收货人姓名" />
				</view>
				<!-- 手机号码 -->
				<view class="flex">
					<label>手机号码:</label>
					<input type="text" :value="item.phone" name="phone" placeholder="收货人手机号码" />
				</view>
				<!-- 所在地区 -->
				<view class="hr"></view>
				<view class="flex">
					<label>所在地区:</label>
					<input type="text" :value="item.Location" name="Location"  placeholder="地址选择" placeholder-style="color:#000000;"/>
					<view class="iconfont icon-dingwei" @click="coation"></view>
				</view>
				<!-- 详细地址 -->
				<view class="flex">
					<label>详细地址:</label>
					<input type="text" :value="item.detailed" name="detailed" placeholder="楼号、门牌" />
				</view>
				<view class="hr"></view>
				<!-- 设置默认地址 -->
				<view class="flex">
					<label>设置默认地址:</label>
					<switch :checked="bure" @change="switchchange" name="switch" color="#FD6801" />
				</view>
				<button form-type="submit" class="footer">保存</button>
			</form>
		</view>
	</view>
</template>

<script>
	import {
		mapState,
		mapMutations
	} from 'vuex'//导入状态管理
	import Json from '@/Json'//导入地址数据
	export default {
		data() {
			return {
				item:{//空数据
				Location:''//地址接收
				},
				bure: false,//提交条件
				index: 0,//数据下标
				title:"编辑收货地址"//导航
			}
		},
		methods: {
			//设置默认地址
			switchchange(e) {
				
				console.log('switch1 发生 change 事件，携带值为', e.target.value)
			},
			//返回上一层
			returni() {
				uni.navigateBack({
					delta: 1
				})
			},
			//地图选择地址
			coation(){
				this.$api.msg("地图")
				uni.chooseLocation({
					success: (data)=> {
				       this.item.Location=data.name
					}
				})
			},
			//删除
			deleteindex() {
				let _this=this
				uni.showModal({
					title: '提示',
					content: '确认删除收货地址',
					success: function(res) {
						if (res.confirm) {
							_this.$api.msg("删除成功")
							Json.address.splice(_this.index, 1)
							setTimeout(()=>{
								uni.navigateTo({
									url: "/pages/mine/address/address"
								})
							},1000)
							
						} else if (res.cancel) {
							_this.$api.msg("取消删除成功")
						}
					}
				})
			},
			//提交
			fomsubmit(e) {
				let index = this.index
				if (this.bure) {
					Json.address.push(e.detail.value)
				} else {
					Json.address[this.index] = e.detail.value
				}
				uni.navigateTo({
					url: "/pages/mine/address/address"
				})
			}
		},
		//加载获取数据
		onLoad(option) {
			this.index =parseInt(option.index) 
			if (option.index != null) {
				this.item = Json.address[this.index]
			} else {
				this.bure = true
				this.title="新增收货地址"
			}


		}

	}
</script>

<style lang="scss">
	.hreder {
		height: 100rpx;
		line-height: 100rpx;
		display: flex;
		justify-content: space-between;
        background-color: #F5F5F5;
		font-size: 32rpx;
		.icon-2fanhui {
			font-size: 40rpx;
			text-indent: 25rpx;
			// margin-right: 250rpx;
		}

		.text {
			margin: auto;
			text-align: center;
		}

		.text-right {
			margin-right: 30rpx;
			font-size: 35rpx;
			color: #999999;
		}
	}

	.main {
		width: 100%;
		height: 1234rpx;
		background-color: #F5F5F5;

		.flex {
			background-color: white;
			width: 100%;
			display: inline-block;
			padding-bottom: 5rpx;
            position: relative;
			label {
				text-indent: 32rpx;
				width: 208rpx;
				float: left;
				line-height: 100rpx;
				color: #2C405A;
				font-size: 28rpx;
			}

			input {
				height: 100rpx;
				line-height: 100rpx;
				font-size: 30rpx;
			}
          .icon-dingwei{
			  position: absolute;
			  right: 20rpx;
			  top: 50%;
			  background-color: white;
			  height: 100rpx;
			  line-height: 100rpx;
			  transform: translateY(-50%);
			  font-size: 50rpx;;
			  color: red;
			  z-index: 999;
		  }
			switch {
				float: right;
				height: 100rpx;
				line-height: 100rpx;
			}
		}

		.hr {
			height: 5rpx;
			background-color: #F5F5F5;
		}

		.footer {
			height: 100rpx;
			width: 90%;
			margin: 40rpx 20rpx 0rpx 40rpx;
			text-align: center;
			background-color: #FD6801;
			line-height: 100rpx;
			color: white;
		}
	}
</style>

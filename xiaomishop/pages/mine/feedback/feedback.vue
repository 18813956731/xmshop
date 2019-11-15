<template>
	<view id="mine-feedback">
		<!-- 头部导航 -->
		<view class="hreder">
			<span class="iconfont icon-2fanhui" @click="returni"></span>
			<view class="txt">意见反馈</view>
			<view class="txt-right" @click="mine">我的反馈</view>
		</view>
		<!-- 主体内容 -->
		<view class="main">
			<form @submit="formsuibmit" @reset="">
				<!-- 卡片内容 -->
				<view class="textarea">
					<textarea @blur="blur" name="textarea" value="" placeholder-style="color: #C8C7CC;" placeholder="请描述您的相关问题 , 若遇到功能异常 , 请您上传图片可以更加快速解决哦~" />
					</view>
				<!-- 图片 -->
			    <view class="image">
				<!-- 循环图片 -->
			    <block v-for="(image,index) in imageList" :key="index">
			    <view class="uni-uploader__file">
					<img class="uni-uploader__img" :src="image" :data-src="image" @tap="previewImage"/>
				</view>
			    </block>
				<!-- 提交图片 -->
			    <view class="uni-uploader__paizhao" @tap="chooseImage">
				    <span class="iconfont icon-paizhao" ></span>
			    </view>
			    </view>
			    <view class="text">最多三张照片(选填)140</view>
				<!-- 输入手机号码 -->
			    <view class="haom">
			   <input value="" name="input" placeholder-style="color:#B2B2B2;text-indent:55rpx;font-size:35rpx;" placeholder="请留下您的手机号码 ( 选填 ) " />
			   </view>
			    <view class="footer">
				<!-- 提交修改 -->
				<button form-type="submit" class="txt" :class="activeindex?'active':'activeindex'">提交</button>
				<view class="tex">咨询小米客服></view>
			</view>
			</form>
			
    	</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
			  activeindex:false,
              imageList:[]
			}
		},
		methods:{
			//返回上一层
			returni(){
				uni.navigateBack({
					delta:1
				})
			},
			//上传图片
			chooseImage(){
				// 从相册选择6张图
				uni.chooseImage({
				    count: 6,
				    sizeType: ['original', 'compressed'],
				    sourceType: ['album'],
				    success: function(res) {
				        console.log(res.tempFilePaths)
				    }
				    })
			},
			//跳转我的反馈
			mine(){
			uni.navigateTo({
				url:"/pages/mine/feedback/myfeedback?id=1"
			})
			},
			//卡片失去焦点
			blur(e){
				let name=e.detail.value
				if(name!=""){
					this.activeindex=!this.activeindex
				}else{
					this.activeindex=!this.activeindex
				}
				
			},
			//表单提交
			formsuibmit(e){
			console.log(e.detail.value)
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
			background-color: #fafafa;
			color: #555555;
		
			.icon-2fanhui {
				font-size: 40rpx;
				text-indent: 25rpx;
				// margin-right: 250rpx;
			}
		
			.txt {
				margin-left: -320rpx;
			}
		
			.txt-right {
				margin-right: 30rpx;
				font-size: 35rpx;
				color: #333333;
			}
		}
		.main{
			background-color: #E9E9E9;
			height: 1205rpx;
			width: 100%;
			padding-top: 30rpx;
			.textarea{
			margin:0rpx 30rpx 30rpx 30rpx;
			height: 500rpx;
			background-color: white;
			border-radius: 12rpx;
			
			textarea{
				font-size: 32rpx;
				width: 90%;
				height: 300rpx;
				padding:30rpx 30rpx 30rpx 30rpx ;
			}
			}
			.image{
				position: absolute;
				top: 385rpx;
				left: 50rpx;
			}
			.uni-uploader__paizhao{
				position: relative;
				margin: 8rpx;
				width: 199rpx;
				height: 199rpx;
				border: 2rpx solid #D9D9D9;
				.icon-paizhao{
					position: absolute;
					z-index: 1;
				    top: 50%;
					left: 50%;
				    color: #B2B2B2;
					transform: translate(-50%, -50%);
				    font-size: 60rpx;    
		
				}
		    }
			.text{
				color: #B2B2B2;
				font-size: 25rpx;
				position: absolute;
				right: 50rpx;
				top: 550rpx;
				}
		
			.haom{
				background-color: white;
				margin:0rpx 30rpx 30rpx 30rpx;
				border-radius: 12rpx;
				input{
					height: 100rpx;
					line-height: 100rpx;
				
				}
			}
			.footer{
				
				.txt{
					height: 100rpx;
					width: 90%;
					margin: auto;
					text-align: center;
					background-color: #FD6801;
					line-height: 100rpx;
					color: white;
					border-radius: 100rpx;
					
					}
					.activeindex{
						opacity: 0.5;
					}
					.active{
						opacity: 1;
					}
				.tex{
					text-align: center;
                    color: #BEBEBE;
					font-size: 28rpx;
					line-height: 80rpx;
				}
					
				}	
		}
	
	
</style>

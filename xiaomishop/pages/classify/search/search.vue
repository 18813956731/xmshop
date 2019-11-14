<template>
	<view>
		<view class="conter">
			<!-- 热门搜索 -->
			<view class="popular">
				<h3>热门搜索</h3>
				<image src="../../../static/images/demo/search-banner.png"></image>
				<view class="bot">
					<view class="button" type="warn" v-for="(item, index) in but">{{ item }}</view>
				</view>
			</view>
			<!-- 常用分类 -->
			<view class="classfe">
				<h3>常用分类</h3>
				<view class="classCy">
					<view class="txt" v-for="(item, index) in classCy">{{ item }}</view>
				</view>
			</view>

			<h3 class="record">搜索记录</h3>
			<view class="list" v-for="(item, index) in record">{{ item }}</view>
		</view>
		<!-- <login></login> -->
	</view>
</template>

<script>
	// import login from "../../mine/phone.vue"
export default {
	data() {
		return {
			but: ['领劵中心', 'Redmi K20', 'RedmiBook 14', '智能积木 越野四驱车', '手环 腕带'],
			classCy: ['耳机', '手机', '音箱', '手表', '配件', '网关/传感器', '健康', '酷玩'],
			record: ['小米', '小米8屏幕指纹版'],
			text: ''//
		};
	},
	methods: {},
	// 搜索框获取焦点事件
	onNavigationBarSearchInputChanged(e) {
		this.text = e.text;
		// console.log(this.text);
	},
	// 按钮点击事件--搜索历史
	onNavigationBarButtonTap(e) {
		let _this = this;
		if (e.index == 0) {
			if (_this.record.length >= 10) {
				_this.record.splice(0, 1);//搜索历史内容大于十条的时候移除之前的内容
			} else if (_this.text != '' && _this.record.indexOf(_this.text) == -1) {
				_this.record.push(_this.text);//搜索历史内容小于十条的时候把内容加到数组里
			} else {
			}
		} else {
		}
	},
	// 搜索框回车键触发事件
	onNavigationBarSearchInputConfirmed(e) {
		let _this = this;
		if (_this.record.length >= 10) {
			_this.record.splice(0, 1);//移除数组第一个元素
		} else if (_this.text != '' && _this.record.indexOf(_this.text) == -1) {
			_this.record.push(_this.text);//加入数组
		} else {
		}
	}
};
</script>

<style scoped>
/* 热门搜索 */
.popular {
	width: 100%;
	overflow: hidden;
}
.popular image {
	width: 100%;
	height: 280rpx;
}
h3 {
	width: 100%;
	height: 120rpx;
	line-height: 120rpx;
	padding-left: 20rpx;
}
.bot {
	width: 100%;
	padding: 10rpx;
	margin: 20rpx 0rpx;
}
.bot .button {
	padding: 10rpx;
	background-color: #E4F4F4;
	border: 1rpx solid #BAE3E5;
	float: left;
	margin: 20rpx;
}
/* 常用分类 */
.classCy {
	width: 100%;
	overflow: hidden;
	padding: 10rpx;
}
.txt {
	padding: 15rpx;
	background-color: #F5F5F5;
	float: left;
	margin: 20rpx;
}
/* 搜索记录 */
.record {
	border-bottom: 1rpx solid #c8c7cc;
}
.list {
	padding:30rpx 20rpx;
	width: 100%;
	border-bottom: 1rpx solid #c8c7cc;
}
</style>

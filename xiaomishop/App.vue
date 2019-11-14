<script>
import { mapState, mapMutations } from 'vuex';
	export default {
		computed: {
			...mapState(['token'])
		},
		onLaunch: function() {
			let _this=this;
			uni.setStorage({
			    key: 'storage_key',
			    data:"",
			    success: function () {}
			});
		},
		onShow: function() {
			console.log('App Show')
		},
		onHide: function() {
			console.log('App Hide')
		}
	}
</script>

<style>
	/*每个页面公共css */
	@import url("./common/iconfont.css");
	/* uni.css - 通用组件、模板样式库，可以当作一套ui库应用 */
	@import url("./common/uni.css");
</style>

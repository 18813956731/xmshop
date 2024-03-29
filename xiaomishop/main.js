import Vue from 'vue'
import App from './App'
import store from './store'

Vue.config.productionTip = false

const msg = (title, duration=1000, mask=false, icon='none')=>{
	//统一提示方便全局修改
	if(Boolean(title) === false){
		return;
	}
	uni.showToast({
		title,
		duration,
		mask,
		icon
	});
}

Vue.prototype.$store = store;
Vue.prototype.$api = {msg};

App.mpType = 'app'

const app = new Vue({
	...App
})
app.$mount()

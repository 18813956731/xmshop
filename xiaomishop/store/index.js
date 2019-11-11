import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
	state: {
		allchek:false,//全选状态
		total:0,//合计金额
		good:"",//详情商品
		editor:false,//编辑状态
		shoplist:[],//分类商品列表
		jxlist:[],//精选商品列表
		tjlist:[],//精选商品列表
		recommend:[],//推荐商品列表
		goodList:[],//购物车列表
		txt_Pasd:[],//账号密码
		logon_Status:false//登录状态
	},
	getters:{
		
	},
	mutations: {
		// 获取账号密码
		gettxt_Pasd(state,txt_Pasd){
			state.txt_Pasd.push(txt_Pasd)
		},
		//登录状态
		login(state,logon_Status){
			state.logon_Status=logon_Status
		},
		//获取推荐商品列表
		getrecommend(state,recommend){
			state.recommend=recommend
		},
		//获取编辑状态
		geteditor(state,editor){
			state.editor=editor
		},
		//获取商品选中状态
		getaction(state,index){
			state.goodList[index].action=!state.goodList[index].action
		},
		//获取购物车对应商品数量
		getchange(state,arr){
			state.goodList[arr[1]].number=arr[0]
		},
		//获取合计金额
		gettotal(state,total){
			 state.total=total
		},
		//获取全选状态
		getallchek(state,allchek){
			state.goodList.forEach(item=>item.action=allchek)
			state.allchek=allchek
		},
		//单选改全选状态
		getallcheks(state,allchek){
			state.allchek=allchek
		},
		//获取分类商品列表
		getshoplist(state,obj){
			state.shoplist.push(obj)
		},
		//获取精选商品列表
		getjxlist(state,obj){
			state.jxlist.push(obj)
		},
		//获取推荐商品列表
		gettjlist(state,obj){
			state.tjlist.push(obj)
		},
		getwxlist(state,obj){
			state.jxlist = state.jxlist.concat(obj.slice(0, 6))
		},
		//获取详情页商品
		getgood(state,good){
			state.good=good
		}
	},
	actions: {
	
	}
})

export default store

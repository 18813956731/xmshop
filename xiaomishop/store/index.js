import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
	state: {
		allchek:false,//全选状态
		total:0,//合计金额
		heighttactive:true,//订单空白状态
		good:"",//详情商品
		edgood:"",//点击编辑的商品
		editor:false,//编辑状态
		whether:false,//地址状态
		shoplist:[],//分类商品列表
		jxlist:[],//精选商品列表
		tjlist:[],//精选商品列表
		recommend:[],//推荐商品列表
		goodList:[],//购物车列表
		token:"",//登录令牌
		clearinggoods:"",//订单结算的商品
		allorders:[],//全部订单
		typeall:[]//不同状态的订单
	},
	getters:{
		
	},
	mutations: {
		// 获取账号密码
		gettxt_Pasd(state,txt_Pasd){
			state.txt_Pasd.push(txt_Pasd)
		},
		// 退出登录
		sign(state){
			state.token=""
		},
		// 登录
		login(state,e){
			state.token=e
		},
		//获取推荐商品列表
		getrecommend(state,recommend){
			state.recommend=recommend
		},
		//获取编辑状态
		geteditor(state,editor){
			state.editor=editor
		},
		//获取购物车商品信息
		getgoodList(state,obj){
			state.goodList.push(obj)
		},
		//已加入购物车商品，在加入数量
		getgoodnum(state,index){
			state.goodList[index].number=state.goodList[index].number+state.good.number;
		},
		//获取商品选中状态
		getaction(state,index){
			state.goodList[index].action=!state.goodList[index].action
		},
		//删除商品
		getdel(state){
			state.goodList=state.goodList.filter(item=>!item.action)
		},
		//获取购物车对应商品数量
		getchange(state,arr){
			state.goodList[arr[1]].number=arr[0]
		},
		//获取编辑商品对应商品数量
		getedchange(state,number){
			state.good.number=number
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
		//购物车状态改变，全选改变
		getztchek(state){
			let chek=true;//每项状态
				for (var item of state.goodList) {
					if(!item.action){
						chek=false;
						break;
					}
				}
				//购物车为空时 全选也要变为空
				if( state.goodList.length==0){
					chek=false;
				}
			if(chek){
				state.allchek=true;
			}else{
				state.allchek=false;
			}
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
		getwxtjlist(state,obj){
			state.tjlist = state.tjlist.concat(obj.slice(0, 6))
		},
		//获取详情页商品
		getgood(state,good){
			state.good=good
		},
		//获取结算订单对象，并存入全部订单
		getclearinggoods(state,cleargoods){
			//结算后的购物车商品列表
			state.goodList=state.goodList.filter(item=>!item.action);
			//获取结算订单对象
			state.clearinggoods=cleargoods
			//存入全部订单
			state.allorders.push(cleargoods)
		},
		//改变地址内点击
		getchange(state,e){
			if(e){
				state.whether=true
			}else{
				state.whether=false
			}
			
		},
		//改变付款状态
		getpaystatus(state){
			state.clearinggoods.paystatus=true
		},
		//改变付款状态
		getpaystatusj(state,e){
			let index=state.allorders.map(item=>item.id).indexOf(e)
			state.clearinggoods=state.allorders[index]
		},
		//改变评论状态
		getobserverstatus(state,e){
			let index=state.allorders.map(item=>item.id).indexOf(e)
			state.allorders[index].observerstatus=true
		},
		//改变收货状态
		gettaketatus(state,e){
			let index=state.allorders.map(item=>item.id).indexOf(e)
			state.allorders[index].taketatus=true
		},
		//取消订单，把订单移除
		getcancellation(state,e){
			let index=state.allorders.map(item=>item.id).indexOf(e)
			state.allorders.splice(index,1)
		},
		//获取不同状态的订单
		gettypeall(state,index){
			if(index==0){
				state.typeall=state.allorders
			}else if(index==1){
				state.typeall=state.allorders.filter(iter=>!iter.paystatus && !iter.observerstatus && !iter.taketatus);
			}else if(index==2){
				state.typeall=state.allorders.filter(iter=>iter.paystatus && !iter.observerstatus && !iter.taketatus);
			}else{
				state.typeall=state.allorders.filter(iter=>iter.paystatus && !iter.observerstatus && iter.taketatus);
			}
		},
		//获取订单数据长度
		getheighttactive(state,tab){
			if (tab == 0) {
				state.heighttactive = true
			} else {
				state.heighttactive = false
			}
		}
	},
	actions: {
	
	}
})

export default store

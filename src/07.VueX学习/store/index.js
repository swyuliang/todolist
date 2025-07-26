// 该文件用于创建Vuex最核心的store
// 引入Vuex
import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)
// 准备 actions--用于响应组件中的动作
const actions = {
    jia(context, value){
        console.log('jia被调用了',context,value)
        context.commit('JIA',value)
    },

    jian(context, value){
        context.commit('JIAN',value)
    },
    jiaOdd(context, value){
        if(context.state.sum % 2){
            context.commit('JIA',value)
        }
    },
    jiawait(context, value){
        setTimeout(() => {
            context.commit('JIA',value)
        }, 500);
    }
}
// 准备 mutations -- 用于操作数据（state)
const mutations = {
    JIA(state,value){
        console.log('JIA被调用了',state,value)
        state.sum += value
    },
     JIAN(state,value){
        state.sum -= value
    }
}
// 准备state---用于存储数据
const state = {
    sum:0 // 当前的和
}

export default new Vuex.Store({
    actions,
    mutations,
    state
})

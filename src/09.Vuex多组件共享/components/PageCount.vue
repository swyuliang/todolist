<template>
    <div>
        <h1>当前求和为：{{ sum }}</h1>
        <h3>当前求和放大十倍：{{ $store.getters.bigSum }}</h3>
        <h3>我在：{{ school }},学习：{{ subject }}</h3>
        <h3 style="color: red">Person组件的总人数是：{{ personList.length }}</h3>
        <select name="" id="" v-model="n">
            <option :value="1">1</option>
            <option :value="2">2</option>
            <option :value="3">3</option>
        </select>
        <button @click="increment(n)">+</button>
        <button @click="decrement(n)">-</button>
        <button @click="incrementOdd(n)">当前求和为奇数再加</button>
        <button @click="incrementWait(n)">等一等再加</button>
    </div>
</template>

<script>
import { mapState,mapGetters,mapMutations,mapActions } from 'vuex'
export default {
    name: 'PageCount',
    data() {
        return {
            n:1, // 用户选择的数字
        }
    },
    components: {},
    mounted() {
    },
    computed:{
        // 靠程序自己亲自去写计算属性
        // sum(){
        //     return this.$store.state.sum
        // },
        // school(){
        //     return this.$store.state.school
        // },
        // subject(){
        //     return this.$store.state.subject
        // },
        // bigSum(){
        //     return this.$store.getters.bigSum
        // },
        // ///////////////////////////
        // 借助mapState生成计算属性，从state中读取数据对象写法
        // ...mapState({sum:'sum',school:'school',subject:'subject'})
        // //////////////////////////////////////////////////////////
        // 借助mapState生成计算属性，从state中读取数据数组写法
        ...mapState(['sum','school','subject','personList']),
        // 借助mapGetters生成计算属性，从state中读取数据数组写法
        ...mapGetters(['bigSum'])
    },
    methods: {
        // increment(){
        //     // this.sum += this.n
        //     // this.$store.dispatch('jia',this.n)
        //     this.$store.commit('JIA',this.n) // 当action中没有业务时，可以直接commit调用mutations
        // },
        // decrement(){
        //     //  this.sum -= this.n
        //     // this.$store.dispatch('jian',this.n)
        //     this.$store.commit('JIAN',this.n) // 当action中没有业务时，可以直接commit调用mutations
        // },
        // 

        //  <button @click="increment(n)">+</button>
        // <button @click="decrement(n)">-</button>  借助...mapMutations生成方法，由绑定事件传参数
        ...mapMutations({increment:'JIA',decrement:'JIAN'}),
        // ...mapMutations(['JIA',JIAN])  // 数组写法
        // ********************************************************

        // incrementOdd(){
        //     this.$store.dispatch('jiaOdd',this.n)
        // },
        // incrementWait(){
        //     this.$store.dispatch('jiawait',this.n)
        // }

        // <button @click="incrementOdd(n)">当前求和为奇数再加</button>
        // <button @click="incrementWait(n)">等一等再加</button>
        // 借助...mapActions生成方法，由绑定事件传参数
        ...mapActions({incrementOdd:'jiaOdd',incrementWait:'jiawait'})
    },
    watch: {}
}
</script>

<style scoped>
button {
  margin-left: 5px;
}
</style>

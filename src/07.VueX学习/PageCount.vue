<template>
    <div>
        <h1>当前求和为：{{ $store.state.sum }}</h1>
        <select name="" id="" v-model="n">
            <option :value="1">1</option>
            <option :value="2">2</option>
            <option :value="3">3</option>
        </select>
        <button @click="increment">+</button>
        <button @click="decrement">-</button>
        <button @click="incrementOdd">当前求和为奇数再加</button>
        <button @click="incrementWait">等一等再加</button>
    </div>
</template>

<script>

export default {
    name: 'PageCount',
    data() {
        return {
            n:1, // 用户选择的数字
        }
    },
    components: {},
    mounted() {},
    methods: {
        increment(){
            // this.sum += this.n
            // this.$store.dispatch('jia',this.n)
            this.$store.commit('JIA',this.n) // 当action中没有业务时，可以直接commit调用mutations
        },
        decrement(){
            //  this.sum -= this.n
            // this.$store.dispatch('jian',this.n)
            this.$store.commit('JIAN',this.n) // 当action中没有业务时，可以直接commit调用mutations
        },
        incrementOdd(){
            this.$store.dispatch('jiaOdd',this.n)
        },
        incrementWait(){
            this.$store.dispatch('jiawait',this.n)
        }
    },
    watch: {}
}
</script>

<style scoped>
button {
  margin-left: 5px;
}
</style>

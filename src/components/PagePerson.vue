<template>
    <div>
        <h1>人员列表</h1>
        <h3 style="color: red">Count组件的求和为：{{ sum }}</h3>
        <input type="text" placeholder="请输入名字" v-model="name">
        <button @click="add">添加</button>
        <ul>
            <li v-for="p in personList" :key="p.id">{{ p.name }}</li>
        </ul>
    </div>
</template>

<script>
import { nanoid } from 'nanoid'
import { mapState } from 'vuex'
export default{
    name:'PagePerson',
    computed:{
        // personList(){
        //     return this.$store.state.personList
        // }
        ...mapState(['personList','sum'])
    },
    data(){
        return {
            name:''
        }
    },
    methods:{
        add(){
            // console.log(this.name)
            const personObj = {id:nanoid(),name:this.name}
            // console.log(personObj)
            // this.personList.push(personObj)
            this.$store.commit('ADD_PERSON',personObj)
            this.name = ''
        }
    }
}
</script>
<template>
  <div class="app">
    <h1 >{{ msg }}</h1>
    <!-- 通过父组件给子组件传递函数类型的props实现：子给父传递数据 -->
    <School :getSchoolname="getSchoolname"/>
    <!-- 通过父组件给子组件绑定一个自定义事件实现：子给父传递数据（第一种写法，使用@或者v-on）-->
    <Student @shijian="getStudentname" @demo="m1"/>
    <!-- 通过父组件给子组件绑定一个自定义事件实现：子给父传递数据（第二种写法，使用ref -->
     <!-- @click.native 加上native可认为是原生事件 -->
    <Student2 ref="student2" @click.native="showAlert"/>
  </div>
</template>

<script>
import School from './components/School'
import Student from './components/Student'
import Student2 from './components/Student2'

export default {
  name: 'App',
  components:{School,Student,Student2},
  data() {
    return {
      msg: '你好啊'
    }
  },
  mounted(){ 
    this.$refs.student2.$on('shijian2',this.getStudent2name) // 绑定自定义事件
    // this.$refs.student2.$on。once('shijian2',this.getStudent2name) // 绑定自定义事件（一次性）加once
  },
  methods:{
    getSchoolname(name){
      console.log('收到学校名称：',name)
    },
    getStudentname(name){
      console.log('收到学生名称：',name)
    },
    getStudent2name(name){
      console.log('收到学生名称：',name)
    },
    m1(){
      console.log('触发demo事件')
    },
    showAlert(){
      alert('触发原生事件')
    }
  }
}
</script>

<style>
.app{
  background-color: pink;
  padding: 5px;
}
</style>

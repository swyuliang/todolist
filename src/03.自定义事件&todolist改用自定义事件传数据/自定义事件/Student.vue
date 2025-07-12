<template>
  <div class="student">
    <h2>学生名称：{{ name }}</h2>
    <h2>学生性别：{{ sex }}</h2>
    <h2>number:{{ number }}</h2>
    <button @click="SendStudentname">点击</button>
    <button @click="unbind">解绑事件</button>
    <button @click="addnumber">点击number+1</button>
    <button @click="destroyComponent">销毁组件</button>
  </div>
</template>

<script>
export default {
  name:'myStudent',
  data(){
    return {
        name:'张三',
        sex:'男',
        number:0
    }
  },
  methods:{
    addnumber(){
      this.number++
      console.log('number:',this.number)
    },
    SendStudentname(){
      this.$emit('shijian',this.name)
      this.$emit('demo')
    },
    unbind(){
      this.$off('shijian')
      console.log('触发解绑')  // 解绑自定义事件
      this.$off(['shijian','demo'])   //解绑多个事件用数组
      this.$off() // 解绑所有事件
    },
    destroyComponent(){
      this.$destroy()  // 销毁了当前Student组件实例，销毁后所有Student实例自定义事件全部不奏效
    }
  }
}
</script>

<style scoped>
.student{
  background-color: gray;
  margin-top: 5px;
}
</style>
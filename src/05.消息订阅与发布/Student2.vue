<template>
  <div class="student2">
    <h2>学生名称：{{ name }}</h2>
    <h2>学生性别：{{ sex }}</h2>
    <button @click="sendSutdent2Name">把学生的名字传给School组件</button>
  </div>
</template>

<script>
import pubsub from 'pubsub-js' // 引入订阅与发布消息库
export default {
  name:'myStudent2',
  data(){
    return {
        name:'李四',
        sex:'女'
    }
  },
   methods:{
    sendSutdent2Name(){
      // this.$bus.$emit('studentname',this.name)
      pubsub.publish('studentname',this.name) // 发布消息
    }
  }
}
</script>

<style scoped>
.student2{
  background-color: wheat;
  margin-top: 5px;
}
</style>
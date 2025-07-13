<template>
  <div class="student">
    <h2>学生名称：{{ name }}</h2>
    <h2>学生性别：{{ sex }}</h2>
    <button @click="sendSutdentName">把学生的名字传给School组件</button>
  </div>
</template>

<script>
export default {
  name:'myStudent',
  data(){
    return {
        name:'张三',
        sex:'男'
    }
  },
  methods:{
    sendSutdentName(){
      this.$bus.$emit('studentname',this.name)
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
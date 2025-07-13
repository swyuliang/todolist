<template>
  <div class="student2">
    <h2>学生名称：{{ name }}</h2>
    <h2>学生性别：{{ sex }}</h2>
    <button @click="sendSutdent2Name">把学生的名字传给School组件</button>
  </div>
</template>

<script>
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
      this.$bus.$emit('studentname',this.name)
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
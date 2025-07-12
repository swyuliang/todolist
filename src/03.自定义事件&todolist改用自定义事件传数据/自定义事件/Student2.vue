<template>
  <div class="student2">
    <h2>学生名称：{{ name }}</h2>
    <h2>学生性别：{{ sex }}</h2>
    <button @click="SendStudentname">点击</button>
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
    SendStudentname(){
        this.$emit('shijian2',this.name)
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
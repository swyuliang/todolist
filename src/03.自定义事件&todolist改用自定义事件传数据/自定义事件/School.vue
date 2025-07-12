<template>
  <div class="school">
    <h2>学校名称：{{ name }}</h2>
    <h2>学校地址：{{ address }}</h2>
    <button @click="SendSchoolname">点击</button>
  </div>
</template>

<script>
export default {
  name:'mySchool',
  data(){
    return {
        name:'清华',
        address:'北京'
    }
  },
  props:['getSchoolname'],
  methods:{
    SendSchoolname(){
        this.getSchoolname(this.name)
    }
  }
}
</script>

<style scoped>
.school{
  background-color: skyblue;
  margin-top: 5px;
}
</style>
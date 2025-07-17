<template>
  <div class="school">
    <h2>学校名称：{{ name }}</h2>
    <h2>学校地址：{{ address }}</h2>
    <h2>收到学生名字叫:{{ studentName }}</h2>
  </div>
</template>

<script>
import pubsub from 'pubsub-js' // 引入订阅与发布消息库
export default {
  name:'mySchool',
  data(){
    return {
        name:'清华',
        address:'北京',
        studentName:''
    }
  },
  methods:{
    setStudent(msgname,name){
    this.studentName = name
    }
  },
  mounted(){
    // this.$bus.$on('studentname',this.setStudent)
    this.pubid = pubsub.subscribe('studentname',this.setStudent)
  },
  beforeDestroy(){
    // this.$bus.$off('studentname')
    pubsub.unsubscribe(this.pubid)
  }
}
</script>

<style scoped>
.school{
  background-color: skyblue;
  margin-top: 5px;
}
</style>
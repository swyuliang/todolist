<template>
  <div class="app">
    <h1 >{{ msg }}</h1>
    <School/>
    <Student/>
    <Student2/>
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
  }
}
</script>

<style>
.app{
  background-color: pink;
  padding: 5px;
}
</style>

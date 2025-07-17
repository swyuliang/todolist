<template>
<div id="root">
  <h1>ToDoList</h1>
  <div class="todo-container">
    <div class="todo-wrap">
      <!-- <MyHeader :addTodo="addTodo"/>       改自定义事件如下-->
      <MyHeader @addTodo="addTodo"/>
      <MyList :todos="todos"/>
      <!-- <MyFooter :todos="todos" :checkAllTodo="checkAllTodo" :clearAllTodo="clearAllTodo"/>    -->
      <MyFooter :todos="todos" @checkAllTodo="checkAllTodo" @clearAllTodo="clearAllTodo"/>
    </div>
  </div>
</div>
</template>

<script>
import pubsub from 'pubsub-js' // 引入订阅与发布消息库
import MyHeader from './components/MyHeader'
import MyList from './components/MyList'
import MyFooter from './components/MyFooter'

export default {
  name: 'App',
  data() {
    return {
        todos:JSON.parse(window.localStorage.getItem('todos')) || []
    }
  },
  components: {
    MyHeader,
    MyList,
    MyFooter
  },
  mounted(){
    this.$bus.$on('CheckTodo',this.CheckTodo)
    // this.$bus.$on('deleteTodo',this.deleteTodo)
   this.pid = pubsub.subscribe('deleteTodo',this.deleteTodo) // 删除功能改用订阅消息
  },
  beforeDestroy(){
    this.$bus.$off('CheckTodo')
    // this.$bus.$off('deleteTodo')
    pubsub.unsubscribe(this.pid)

  },
  methods:{
    addTodo(todoObj) {
      this.todos.unshift(todoObj)
    },
    CheckTodo(id){
      this.todos.forEach((todo)=>{
        if(todo.id === id) todo.done = !todo.done
      })
    },
    deleteTodo(_, id){
      this.todos = this.todos.filter((todo)=>{
        return todo.id !== id
      })
    },
    checkAllTodo(done){
      this.todos.forEach((todo)=>{
        todo.done = done
      })
    },
    clearAllTodo(){
      this.todos = this.todos.filter((todo)=>{
        return !todo.done
      })
    }
  },
  watch: {
    todos:{
      deep:true,
      handler(value) {
        window.localStorage.setItem('todos',JSON.stringify(value))
      }
    }
  }
}
</script>

<style>
h1 {
  text-align: center;
}
/*base*/
body {
  background: #fff;
}

.btn {
  display: inline-block;
  padding: 4px 12px;
  margin-bottom: 0;
  font-size: 14px;
  line-height: 20px;
  text-align: center;
  vertical-align: middle;
  cursor: pointer;
  box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.2), 0 1px 2px rgba(0, 0, 0, 0.05);
  border-radius: 4px;
}

.btn-danger {
  color: #fff;
  background-color: #da4f49;
  border: 1px solid #bd362f;
}

.btn-danger:hover {
  color: #fff;
  background-color: #bd362f;
}

.btn:focus {
  outline: none;
}

.todo-container {
  width: 600px;
  margin: 0 auto;
}
.todo-container .todo-wrap {
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 5px;
}

</style>

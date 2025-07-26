<template>
  <li>
    <label>
      <input type="checkbox" :checked="todo.done" @change="handleCheck(todo.id)"/>
        <span v-show="!todo.isEdit">{{todo.title}}</span>
        <span v-show="todo.isEdit"><input type="text" :value="todo.title" @blur="handleBlur(todo)"  ref="Inputval"></span>
    </label>
    <button
      class="btn btn-danger"
      @click="handleDelete(todo.id)"
    >删除</button>
    <button
      class="btn btn-edit" 
      @click="handleEdit(todo)"
      v-show="!todo.isEdit"
    >编辑</button>
  </li>
</template>
<script>
import pubsub from 'pubsub-js' // 引入订阅与发布消息库
export default {
  name: 'My-ltem',
  props:['todo'],
  methods:{
    handleCheck(id){
      this.$bus.$emit('CheckTodo',id)
    },
    handleDelete(id){
      if(confirm('你确认要删除吗')){
        //通知App删除todo
        // this.$bus.$emit('deleteTodo',id)
        pubsub.publish('deleteTodo',id) // 删除功能改用发布消息
      }
    },
    handleEdit(todo){
      // todo.isEdit= true
      this.$bus.$emit('EditTodo',todo)
      // nextTick等DOM下一次更新结束后在执行
      this.$nextTick(function(){
        this.$refs.Inputval.focus()
      })
    },
    handleBlur(todo, val=this.$refs.Inputval.value){
      // todo.isEdit = false
      // todo.title = this.$refs.Updateval.value
      this.$bus.$emit('UpdateTodo',todo,val)
    }

  }
}
</script>
<style scoped>
/*item*/
input{
  font-size: 16px;
}
li {
  list-style: none;
  height: 36px;
  line-height: 36px;
  padding: 0 5px;
  border-bottom: 1px solid #ddd;
}

li label {
  float: left;
  cursor: pointer;
}

li label li input {
  vertical-align: middle;
  margin-right: 6px;
  position: relative;
  top: -1px;
}

li button {
  float: right;
  display: none;
  margin-top: 3px;
}

li:before {
  content: initial;
}

li:last-child {
  border-bottom: none;
}
li:hover {
  background-color: #ddd;
}
li:hover button{
  display: block;
}
</style>
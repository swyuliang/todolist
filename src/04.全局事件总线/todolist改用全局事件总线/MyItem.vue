<template>
  <li>
    <label>
      <input type="checkbox" :checked="todo.done" @change="handleCheck(todo.id)"/>
        <span>{{todo.title}}</span>
    </label>
    <button
      class="btn btn-danger"
      @click="handleDelete(todo.id)"
    >删除</button>
  </li>
</template>
<script>
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
        this.$bus.$emit('deleteTodo',id)
      }
    }
  }
}
</script>
<style scoped>
/*item*/
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
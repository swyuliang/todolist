<template>
  <div class="todo-footer" v-show="total">
    <label>
      <input type="checkbox" :checked="isAll" @change="checkAll" ref="done"/>
    </label>
    <span>
      <span>已完成{{doneTotal}}</span> / 全部{{ total }}
    </span>
      <button class="btn btn-danger" @click="clearAll">清除已完成任务</button>
  </div>
</template>
<script>
export default {
  name: 'My-Footer',
  props:['todos','checkAllTodo','clearAllTodo'],
  computed:{
    total(){
      return this.todos.length
    },
    doneTotal(){
      return this.todos.reduce((pre,current)=>{
        return pre + (current.done ? 1 : 0)
      },0)
    },
    isAll(){
      return this.total === this.doneTotal && this.doneTotal >= 0
    }
  },
  methods:{
    checkAll(){
      // this.checkAllTodo(done.target.checked)
      this.checkAllTodo(this.$refs.done.checked)
    },
    clearAll()
    {
      this.clearAllTodo()
    }
  }
}
</script>
<style scoped>
/*footer*/
.todo-footer {
  height: 40px;
  line-height: 40px;
  padding-left: 6px;
  margin-top: 5px;
}

.todo-footer label {
  display: inline-block;
  margin-right: 20px;
  cursor: pointer;
}

.todo-footer label input {
  position: relative;
  top: -1px;
  vertical-align: middle;
  margin-right: 5px;
}

.todo-footer button {
  float: right;
  margin-top: 5px;
}
</style>
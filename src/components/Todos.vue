<template>
  <div>
    <h3 class="text-primary text-center mt-3">Todos Library</h3>
    <div class="container">
      <AddTodo></AddTodo>
      <LimitTodos></LimitTodos>
      <div class="row " >
        <div class="col-md-4 my-3" v-for="todo in todos" :key="todo.id">
          <b-card
            :bg-variant="completeColor(todo)"
            text-variant="black"
            class="text-center"
            @dblclick="changeCardColor(todo)"
          >
            <b-card-text class="d-flex justify-content-between">
              <span>{{ todo.title }}</span>
              <span class="trashIcon" @click="deleteTodo(todo.id)"><b-icon variant="danger" icon="trash-fill"></b-icon></span>
            </b-card-text>
          </b-card>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import LimitTodos from './LimitTodos'
import AddTodo from './AddTodo'
import { mapGetters,mapActions} from "vuex";

export default {
  components: {
    LimitTodos, AddTodo },
  name,
  computed: {
    ...mapGetters(["todos"]),
  },
  methods: {
    changeCardColor(todo) {
      todo.completed = !todo.completed
      this.completeOrNotTodo(todo)
    },
    completeColor(todo) {
      return todo.completed ? 'success-subtle' : 'secondary-subtle'
    },
    ...mapActions(['getTodos','deleteTodo','completeOrNotTodo']),
  },
  mounted() {
    this.getTodos()
  },
};
</script>

<style>
  .trashIcon{
    cursor: pointer;
  }
</style>

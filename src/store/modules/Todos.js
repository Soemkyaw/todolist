import axios from "axios"

export default {
    state: {
        todos: []
    },
    getters: {
        todos(state) {
            return state.todos
        }
    },
    mutations: {
        setTodos(state,todos) {
            state.todos = todos
        },
        pushTodo(state,newTodo) {
            state.todos.unshift(newTodo);
        },
        removeDeleteTodo(state,todoId) {
            state.todos = state.todos.filter((t) => {
                return t.id != todoId
            })
        },
        updateCompleteStatus(state,todo) {
            state.todos.forEach(t => {
                if (t.id === todo.id) {
                    t = todo
                }
            });
        }
    },
    actions: {
        async getTodos({commit}) {
            let response = await axios.get('https://jsonplaceholder.typicode.com/todos')
            let todos = response.data
            commit('setTodos',todos)
        },
        async addTodo({commit},newTodo) {
            let res = await axios.post('https://jsonplaceholder.typicode.com/todos', newTodo)
            newTodo.title = ""
            commit("pushTodo",res.data)
        },
        async deleteTodo(context,todoId) {
            let res = await axios.delete(`https://jsonplaceholder.typicode.com/todos/${todoId}`);
            console.log(res);
            context.commit("removeDeleteTodo",todoId);
        },
        async filterTodos(context,limit) {
            let res = await axios.get(
              `https://jsonplaceholder.typicode.com/todos/?_limit=${limit}`
            );
            context.commit("setTodos",res.data);
        },
        async completeOrNotTodo(context,todo) {
            let res=await axios.put(
              `https://jsonplaceholder.typicode.com/todos/${todo.id}`,todo
            );
            context.commit("updateCompleteStatus",res.data);
        }
    }
}
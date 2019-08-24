import Vue from 'vue'
import Vuex from 'vuex'
import Axios from 'axios';

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    // 属性
    count: 0,
    todos: [
      { id: 1, title: "todo item 1", completed: false },
      { id: 2, title: "todo item 2", completed: false },
      { id: 3, title: "todo item 3", completed: false },

    ]
  },
  getters: {
    count: state => state.count,
    completedTodos: state => state.todos.filter(todo => todo.completed),
    completedTodosCount: (state, getters) => getters.completedTodos.length,
    getTodosById: state => id => state.todos.find(todo => todo.id == id)

    // getCount(state) {
    //   return state.count;
    // }
  },
  mutations: {
    incrementCount: state => state.count++,
    decrementCount: (state, payload) => state.count -= payload.amount,
    setTodos: (state, todos) => state.todos = todos
  },
  actions: {
    incrementCountAsync: ({ commit }) => {

      setTimeout(() => {
        // 解构
        // const object = {
        //   name: "zzw",
        //   age: 22
        // }
        // const { name, age } = object;
        commit("incrementCount")
      }, 2000)
    },
    decrementCountAsync: (context, payload) => {
      setTimeout(() => {
        context/* =this.$store */.commit("decrementCount", payload)
      }, 2000)
    },
    async fetchDataAsync(context) {
      const response = await Axios.get("http://jsonplaceholder.typicode.com/todos");
      // console.log(response);
      context.commit("setTodos", response.data);
    }
  }
})


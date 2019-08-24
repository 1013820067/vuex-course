<template>
  <div id="app">
    <!-- mutatioms -->
    <button @click="decrementCount({amount:2})">-</button>
    <span>{{count}}</span>
    <button @click="incrementCount">+</button>
  </div>
</template>

<script>
import Count from "./components/Count";
import { mapState, mapGetters, mapMutations } from "vuex";
export default {
  name: "app",
  components: { Count },
  computed: mapGetters([
    "count",
    "completedTodos",
    "completedTodosCount",
    "getTodosById"
  ]),
  methods: mapMutations(["incrementCount", "decrementCount"])
  // methods: {
  //   increment() {
  //     // 调用mutations里的incrementCount
  //     this.$store.commit("incrementCount");
  //   },
  //   decrement(n) {
  //     // 调用mutations里的decrementCount
  //     this.$store.commit("decrementCount", n);
  //   }
  // }
};
</script>

<style>
</style>

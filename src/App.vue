<template>
  <div id="app">
    <p>App.vue:{{count}}</p>
    <p>{{completedTodos}}}</p>
  </div>
</template>

<script>
import Count from "./components/Count";
import { mapState } from "vuex";
export default {
  name: "app",
  components: { Count },
  computed: {
    count() {
      return this.$store.getters.getCount;
    }
  }
};
</script>

<style>
</style>

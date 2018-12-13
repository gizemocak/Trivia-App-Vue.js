<template>
  <div id="app">
  <router-view/>
  </div>
</template>

<script>
import Home from './components/Home.vue'
import Questions from './components/Questions'
import Answers from './components/Answers'

export default {
  name: 'app',
  components: {
    Home,
    Questions,
    Answers
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>

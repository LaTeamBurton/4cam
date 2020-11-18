<template>
  <div id="app">
    <HomePage/>
  </div>
</template>

<script>
import HomePage from './views/HomePage.vue'

export default {
  name: 'App',
  components: {
    HomePage
  }
}
</script>

<style>
html {
  background-color: #171717;
  width: 100%;
}
body {
  margin: 0px;
  width: 100%;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>

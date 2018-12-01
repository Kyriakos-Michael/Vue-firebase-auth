<template>
  <div class="container-fluid card shadow-lg bg-white p-5" id="app">
    <img src="./assets/o-b.svg">
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: "app"
};
</script>

<style>
#app {
  font-family: "PT Sans", sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
  border-radius: 10px;
  max-width: 1200px;
}
</style>

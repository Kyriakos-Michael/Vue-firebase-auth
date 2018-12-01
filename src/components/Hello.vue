<template>
  <div>
    <nav-bar></nav-bar>
    <button v-on:click="logout">Logout</button>
  </div>
</template>

<script>
import firebase from "firebase";
import NavBar from "./shared/NavBar";

export default {
  data() {
    return {};
  },
  components: {
    NavBar
  },
  methods: {
    logout: () => {
      firebase
        .auth()
        .signOut()
        .then(() => {
          this.$router.replace("login");
        });
    }
  }
};
</script>

<style scoped>
</style>

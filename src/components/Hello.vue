<template>
  <div class="hello">
    
    <button v-on:click="logout">Logout</button>
  </div>
</template>

<script>
import firebase from "firebase";

export default {
  name: "hello",
  data() {
    return {
   
    };
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

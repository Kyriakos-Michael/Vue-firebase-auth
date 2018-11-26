<template>
  <div class="row">
    <div class="col">
      <img class="img-thumbnail" alt="Responsive image" src="../assets/login.jpg" />
    </div>
    <div class="col">
      <h1>Welcome to o.b</h1>

      <form class="justify-content-center">
        <div class="form-group">
          <label for="exampleInputEmail1">Email address</label>
          <input
            type="email"
            v-model="email"
            class="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            placeholder="Enter email"
          >
          <small
            id="emailHelp"
            class="form-text text-muted"
          >We'll never share your email with anyone else.</small>
        </div>
        <div class="form-group">
          <label for="exampleInputPassword1">Password</label>
          <input
            type="password"
            v-model="password"
            class="form-control"
            id="exampleInputPassword1"
            placeholder="Password"
          >
        </div>

        <button type="submit" class="btn btn-outline-dark" @click="signIn">LOG IN</button>
      </form>
      <p>You don't have an account ? You can
        <router-link to="/sign-up">create one</router-link>
      </p>
    </div>
  </div>
</template>

<script>
import firebase from "firebase";

export default {
  name: "login",
  data() {
    return {
      email: "",
      password: ""
    };
  },
  methods: {
    signIn() {
      firebase
        .auth()
        .signInWithEmailAndPassword(this.email, this.password)
        .then(
          user => {
            this.$router.replace("hello");
          },
          err => {
            alert("Oops. " + err.message);
          }
        );
    }
  }
};
</script>

<style scoped>
</style>
